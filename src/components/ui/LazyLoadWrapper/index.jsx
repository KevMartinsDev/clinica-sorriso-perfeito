import { useState, useRef, useEffect, memo } from 'react';
import { Wrapper, PlaceholderContent } from './LazyLoadWrapper.styles';

const LazyLoadWrapper = ({ children, height, threshold = 0.1, rootMargin = '50px' }) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    const currentWrapper = wrapperRef.current;
    if (!currentWrapper) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentWrapper);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  useEffect(() => {
    if (isInView) {
  
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <Wrapper ref={wrapperRef}>
      {isInView && isLoaded ? (
        children
      ) : (
        <PlaceholderContent $show={true} height={height}>
          Carregando conteúdo...
        </PlaceholderContent>
      )}
    </Wrapper>
  );
};

export default memo(LazyLoadWrapper);