import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { analytics } from '../analytics';

const mockGtag = vi.fn();

beforeEach(() => {
  global.window = { gtag: mockGtag };
  mockGtag.mockClear();
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Analytics', () => {
  describe('trackEvent', () => {
    it('calls gtag with correct parameters', () => {
      analytics.trackEvent('click', 'button', 'header-cta', 1);

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'button',
        event_label: 'header-cta',
        value: 1
      });
    });

    it('handles missing gtag gracefully', () => {
      global.window = {};

      expect(() => {
        analytics.trackEvent('click', 'button', 'test');
      }).not.toThrow();
    });
  });

  describe('trackPageView', () => {
    it('calls gtag with correct parameters', () => {
      analytics.trackPageView('/test-page', 'Test Page');

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA_MEASUREMENT_ID', {
        page_path: '/test-page',
        page_title: 'Test Page'
      });
    });
  });

  describe('trackGoalConversion', () => {
    it('calls gtag with correct parameters', () => {
      analytics.trackGoalConversion('signup', 1);

      expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/goal_completion',
        event_category: 'goal',
        event_label: 'signup',
        value: 1
      });
    });
  });

  describe('trackAppointmentBooking', () => {
    it('calls trackGoalConversion with correct parameters', () => {
      const spy = vi.spyOn(analytics, 'trackGoalConversion');
      analytics.trackAppointmentBooking();

      expect(spy).toHaveBeenCalledWith('appointment_booking', 1);
      spy.mockRestore();
    });

    it('calls gtag through trackGoalConversion', () => {
      analytics.trackAppointmentBooking();

      expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/goal_completion',
        event_category: 'goal',
        event_label: 'appointment_booking',
        value: 1
      });
    });
  });

  describe('Error handling', () => {
    it('handles gtag errors gracefully', () => {
      mockGtag.mockImplementation(() => {
        throw new Error('GA Error');
      });

      expect(() => {
        analytics.trackEvent('test', 'test', 'test');
      }).not.toThrow();
    });

    it('works without gtag being defined', () => {
      delete global.window.gtag;

      expect(() => {
        analytics.trackEvent('test', 'test', 'test');
        analytics.trackPageView('/test', 'Test');
        analytics.trackGoalConversion('test', 1);
      }).not.toThrow();
    });
  });
});