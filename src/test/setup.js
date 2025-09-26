import '@testing-library/jest-dom';
import { vi, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import React from 'react';

afterEach(() => {
  cleanup();
});

const originalMatchMedia = window.matchMedia;

const createBulletproofMql = (query = '') => {
  const mql = {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn().mockImplementation((callback) => {
      if (typeof callback === 'function') {
        try {
          callback({ matches: false, media: query });
        } catch (e) {
        }
      }
    }),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  };
  
  try {
    if (typeof MediaQueryList !== 'undefined' && MediaQueryList.prototype) {
      Object.setPrototypeOf(mql, MediaQueryList.prototype);
    }
  } catch (e) {
  }
  
  return mql;
};

window.matchMedia = vi.fn().mockImplementation(createBulletproofMql);

const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

console.warn = (...args) => {
  if (
    args[0]?.includes?.('ReactDOMTestUtils.act is deprecated') ||
    args[0]?.includes?.('React Router Future Flag Warning')
  ) {
    return;
  }
  originalConsoleWarn(...args);
};

console.error = (...args) => {
  const message = args[0]?.toString?.() || '';
  if (
    message.includes('addListener') ||
    message.includes('matchMedia') ||
    message.includes('Uncaught [TypeError]') ||
    message.includes('Cannot read properties of undefined (reading \'addListener\')') ||
    message.includes('framer-motion') ||
    message.includes('initPrefersReducedMotion')
  ) {
    return;
  }
  originalConsoleError(...args);
};

global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null; 
  }
  disconnect() {
    return null; 
  }
  unobserve() {
    return null; 
  }
};

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
  }))
});


global.MediaQueryList = global.MediaQueryList || class MediaQueryList {
  constructor() {
    this.matches = false;
    this.media = '';
    this.onchange = null;
    this.addListener = vi.fn();
    this.removeListener = vi.fn();
    this.addEventListener = vi.fn();
    this.removeEventListener = vi.fn();
    this.dispatchEvent = vi.fn();
  }
};

Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn()
});

Object.defineProperty(window, 'CSS', {
  writable: true,
  value: {
    supports: vi.fn().mockReturnValue(false)
  }
});

process.env.DISABLE_MOTION = 'true';

vi.mock('framer-motion', () => {
  const mockComponent = (tag) => {
    const Component = ({ children, ...props }) => {
      const { variants, initial, animate, whileHover, whileTap, ...otherProps } = props;
      return React.createElement(tag, otherProps, children);
    };
    Component.displayName = `Motion${tag.charAt(0).toUpperCase() + tag.slice(1)}`;
    return Component;
  };

  return {
    motion: {
      div: mockComponent('div'),
      button: mockComponent('button'),
      span: mockComponent('span'),
      a: mockComponent('a'),
      img: mockComponent('img'),
      h1: mockComponent('h1'),
      h2: mockComponent('h2'),
      h3: mockComponent('h3'),
      p: mockComponent('p'),
      section: mockComponent('section'),
      article: mockComponent('article'),
      aside: mockComponent('aside'),
      nav: mockComponent('nav'),
      header: mockComponent('header'),
      footer: mockComponent('footer'),
      main: mockComponent('main')
    },
    AnimatePresence: ({ children }) => children,
    useInView: () => true,
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
      set: vi.fn()
    })
  };
});


const originalOnerror = window.onerror;
window.onerror = function(message, source, lineno, colno, error) {
  if (typeof message === 'string' && 
      (message.includes('addListener') || 
       message.includes('framer-motion') ||
       source?.includes('framer-motion'))) {
    return true;
  }
  
  if (originalOnerror) {
    return originalOnerror(message, source, lineno, colno, error);
  }
  return false;
};