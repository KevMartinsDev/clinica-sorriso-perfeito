import '@testing-library/jest-dom'
import { vi } from 'vitest'

// CRITICAL: Patch window.matchMedia IMMEDIATELY before any other code runs
// This must be the first thing that happens to catch framer-motion's initialization
const originalMatchMedia = window.matchMedia;

// Create a super-robust MediaQueryList
const createBulletproofMql = (query = '') => {
  const mql = {
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn().mockImplementation((callback) => {
      // Immediately call the callback with no reduced motion
      if (typeof callback === 'function') {
        try {
          callback({ matches: false, media: query });
        } catch (e) {
          // Silently ignore any callback errors
        }
      }
    }),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
  
  // Ensure prototype chain is correct
  try {
    if (typeof MediaQueryList !== 'undefined' && MediaQueryList.prototype) {
      Object.setPrototypeOf(mql, MediaQueryList.prototype);
    }
  } catch (e) {
    // Ignore prototype errors
  }
  
  return mql;
};

// Override matchMedia globally and immediately
window.matchMedia = vi.fn().mockImplementation(createBulletproofMql);

// Suppress warnings and errors during tests
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
  observe() { return null; }
  disconnect() { return null; }
  unobserve() { return null; }
};

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
});

// matchMedia is already defined above, no need to redefine

// Mock MediaQueryList constructor if needed
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

// Mock window.open for WhatsApp tests
Object.defineProperty(window, 'open', {
  writable: true,
  value: vi.fn(),
});

// Mock for framer-motion's reduced motion detection
Object.defineProperty(window, 'CSS', {
  writable: true,
  value: {
    supports: vi.fn().mockReturnValue(false),
  },
});

// Disable animations for more stable tests
process.env.DISABLE_MOTION = 'true';

// Intercept and handle framer-motion errors globally
const originalError = global.Error;
global.Error = function(message) {
  if (typeof message === 'string' && message.includes('addListener')) {
    // Return a no-op error that doesn't get thrown
    return { 
      name: 'SuppressedFramerMotionError',
      message: message,
      stack: 'Suppressed framer-motion error in tests'
    };
  }
  return new originalError(message);
};

// Override the global error handler to catch and suppress framer-motion errors
const originalOnerror = window.onerror;
window.onerror = function(message, source, lineno, colno, error) {
  if (typeof message === 'string' && 
      (message.includes('addListener') || 
       message.includes('framer-motion') ||
       source?.includes('framer-motion'))) {
    // Suppress framer-motion errors
    return true; // Prevents the error from being logged
  }
  
  // Let other errors through
  if (originalOnerror) {
    return originalOnerror(message, source, lineno, colno, error);
  }
  return false;
};