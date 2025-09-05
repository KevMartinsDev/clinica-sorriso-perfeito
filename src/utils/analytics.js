export const analytics = {
  trackEvent: (action, category, label, value) => {
    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', action, {
          event_category: category,
          event_label: label,
          value: value
        });
      }
    } catch (error) {
      console.warn('Analytics tracking error:', error);
    }
  },

  trackPageView: (pagePath, pageTitle) => {
    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_path: pagePath,
          page_title: pageTitle
        });
      }
    } catch (error) {
      console.warn('Page view tracking error:', error);
    }
  },

  trackGoalConversion: (goalName, goalValue = 1) => {
    try {
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: 'GA_MEASUREMENT_ID/goal_completion',
          event_category: 'goal',
          event_label: goalName,
          value: goalValue
        });
      }
    } catch (error) {
      console.warn('Goal conversion tracking error:', error);
    }
  },

  trackWhatsAppClick: (source) => {
    analytics.trackEvent('click', 'whatsapp', source);
  },

  trackFormSubmission: (formName, success = true) => {
    analytics.trackEvent(
      success ? 'form_submit_success' : 'form_submit_error',
      'form',
      formName
    );
  },

  trackAppointmentBooking: () => {
    analytics.trackGoalConversion('appointment_booking', 1);
  },

  trackUserEngagement: (action, element, duration = null) => {
    analytics.trackEvent(action, 'engagement', element, duration);
  },

  trackDownload: (fileName, source) => {
    analytics.trackEvent('download', 'file', `${fileName}_${source}`);
  },

  trackExternalLink: (url, linkText) => {
    analytics.trackEvent('click', 'external_link', `${linkText}_${url}`);
  },

  trackScroll: (percentage) => {
    if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
      analytics.trackEvent('scroll', 'page', `${percentage}%`);
    }
  },

  trackSearch: (searchTerm, resultCount = null) => {
    analytics.trackEvent('search', 'site_search', searchTerm, resultCount);
  },

  trackVideoInteraction: (action, videoTitle, currentTime = null) => {
    analytics.trackEvent(action, 'video', videoTitle, currentTime);
  }
};

export const initializeAnalytics = (measurementId) => {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  } catch (error) {
    console.warn('Analytics initialization error:', error);
  }
};

export const setUserProperties = (userId, properties = {}) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: properties
      });
    }
  } catch (error) {
    console.warn('User properties error:', error);
  }
};

export default analytics;