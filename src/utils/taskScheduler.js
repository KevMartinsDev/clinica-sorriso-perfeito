
export const breakLongTask = async (task, data, timeSlice = 5) => {
    const results = [];
    let index = 0;

    while (index < data.length) {
      const startTime = performance.now();

      while (index < data.length && (performance.now() - startTime) < timeSlice) {
        results.push(task(data[index], index));
        index++;
      }

      if (index < data.length) {
        await yieldToMain();
      }
    }

    return results;
  };


  export const yieldToMain = () => {
    return new Promise(resolve => {
      if (typeof scheduler !== 'undefined' && scheduler.postTask) {
        scheduler.postTask(resolve, { priority: 'user-blocking' });
      }
      else if (typeof MessageChannel !== 'undefined') {
        const channel = new MessageChannel();
        channel.port2.onmessage = () => resolve();
        channel.port1.postMessage(null);
      }
      else {
        setTimeout(resolve, 0);
      }
    });
  };

export const timeSlice = async (callback, timeSlice = 5) => {
    const startTime = performance.now();

    const result = callback();

    const elapsedTime = performance.now() - startTime;

    if (elapsedTime > timeSlice) {
      await yieldToMain();
    }

    return result;
  };

export const executeConcurrent = async (tasks, concurrency = 3, timeSlice = 5) => {
    const results = [];
    const executing = [];

    for (const task of tasks) {
      const promise = timeSlice(task, timeSlice).then(result => {
        executing.splice(executing.indexOf(promise), 1);
        return result;
      });

      results.push(promise);
      executing.push(promise);

      if (executing.length >= concurrency) {
        await Promise.race(executing);
      }
    }

    return Promise.all(results);
  };


  export class TaskScheduler {
    constructor() {
      this.highPriorityQueue = [];
      this.normalPriorityQueue = [];
      this.lowPriorityQueue = [];
      this.isRunning = false;
      this.timeSlice = 5;
    }

    schedule(task, priority = 'normal') {
      const wrappedTask = {
        fn: task,
        priority,
        id: Date.now() + Math.random()
      };

      switch (priority) {
        case 'high':
          this.highPriorityQueue.push(wrappedTask);
          break;
        case 'low':
          this.lowPriorityQueue.push(wrappedTask);
          break;
        default:
          this.normalPriorityQueue.push(wrappedTask);
      }

      if (!this.isRunning) {
        this.run();
      }

      return wrappedTask.id;
    }

    async run() {
      if (this.isRunning) return;
      this.isRunning = true;

      while (this.hasWork()) {
        const task = this.getNextTask();
        if (!task) break;

        try {
          await timeSlice(task.fn, this.timeSlice);
        } catch (error) {
          console.error('Task execution error:', error);
        }

        await yieldToMain();
      }

      this.isRunning = false;
    }

    hasWork() {
      return this.highPriorityQueue.length > 0 ||
            this.normalPriorityQueue.length > 0 ||
            this.lowPriorityQueue.length > 0;
    }

    getNextTask() {
      if (this.highPriorityQueue.length > 0) {
        return this.highPriorityQueue.shift();
      }
      if (this.normalPriorityQueue.length > 0) {
        return this.normalPriorityQueue.shift();
      }
      if (this.lowPriorityQueue.length > 0) {
        return this.lowPriorityQueue.shift();
      }
      return null;
    }

    cancel(taskId) {
      const removeFromQueue = (queue) => {
        const index = queue.findIndex(task => task.id === taskId);
        if (index !== -1) {
          queue.splice(index, 1);
          return true;
        }
        return false;
      };

      return removeFromQueue(this.highPriorityQueue) ||
            removeFromQueue(this.normalPriorityQueue) ||
            removeFromQueue(this.lowPriorityQueue);
    }
  }


  export const globalScheduler = new TaskScheduler();

export const useScheduledTask = (React) => (task, deps = [], priority = 'normal') => {
    React.useEffect(() => {
      if (task) {
        const taskId = globalScheduler.schedule(task, priority);
        return () => globalScheduler.cancel(taskId);
      }
    }, deps);
  };

export const scheduleDebounced = (() => {
    const timeouts = new Map();

    return (task, delay = 300, priority = 'normal') => {
      const key = task.toString();

      if (timeouts.has(key)) {
        clearTimeout(timeouts.get(key));
      }

      const timeoutId = setTimeout(() => {
        globalScheduler.schedule(task, priority);
        timeouts.delete(key);
      }, delay);

      timeouts.set(key, timeoutId);
    };
  })();

export const preventLongTask = (originalFunction, maxExecutionTime = 50) => {
    return async (...args) => {
      const startTime = performance.now();

      if (originalFunction.length > 100 || args.some(arg => Array.isArray(arg) && arg.length > 50)) {
        return new Promise(resolve => {
          globalScheduler.schedule(() => {
            resolve(originalFunction(...args));
          }, 'low');
        });
      }

      const result = originalFunction(...args);
      const executionTime = performance.now() - startTime;

      if (executionTime > maxExecutionTime) {
        console.warn(`Long task prevented: ${originalFunction.name || 'anonymous'} took ${executionTime.toFixed(2)}ms`);
        await yieldToMain();
      }

      return result;
    };
  };

  export default {
    breakLongTask,
    yieldToMain,
    timeSlice,
    executeConcurrent,
    TaskScheduler,
    globalScheduler,
    useScheduledTask,
    scheduleDebounced,
    preventLongTask
  };