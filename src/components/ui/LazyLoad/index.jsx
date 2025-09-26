import { useState, useRef, useEffect } from 'react';

const LazyLoad = ({
  children,
  fallback = null,
  rootMargin = '50px',
  threshold = 0.1,
  ...props
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsIntersecting(true);
          setHasLoaded(true);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin, threshold, hasLoaded]);

  return (
    <div ref={ref} {...props}>
      {hasLoaded ? children : fallback}
    </div>
  );
};

export default LazyLoad;