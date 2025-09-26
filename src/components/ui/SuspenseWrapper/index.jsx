import { Suspense } from 'react';
import {
  LoadingContainer,
  Spinner,
  LoadingText,
  LoadingDots,
  SkeletonCard,
  SkeletonLine,
  SkeletonImage
} from './SuspenseWrapper.styles';





const DefaultFallback = ({ message = "Carregando conteúdo" }) => (
  <LoadingContainer
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    <Spinner />
    <LoadingText>
      {message}
      <LoadingDots />
    </LoadingText>
  </LoadingContainer>
);




const BlogCardSkeleton = () => (
  <SkeletonCard>
    <SkeletonImage />
    <SkeletonLine height="1.5rem" marginBottom="1rem" />
    <SkeletonLine height="1rem" marginBottom="0.5rem" />
    <SkeletonLine height="1rem" marginBottom="0.5rem" />
    <SkeletonLine height="0.75rem" marginBottom="1.5rem" />
    <SkeletonLine height="0.875rem" />
  </SkeletonCard>
);

const SearchBarSkeleton = () => (
  <div style={{ marginBottom: '2rem' }}>
    <SkeletonLine height="3rem" marginBottom="1rem" />
  </div>
);

const HeroSkeleton = () => (
  <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
    <SkeletonLine height="3rem" marginBottom="1.5rem" />
    <SkeletonLine height="1.5rem" marginBottom="2rem" />
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
      <SkeletonLine height="4rem" marginBottom="0" />
      <SkeletonLine height="4rem" marginBottom="0" />
      <SkeletonLine height="4rem" marginBottom="0" />
    </div>
  </div>
);

const BlogPageSkeleton = () => (
  <div>
    <HeroSkeleton />
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <SearchBarSkeleton />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  </div>
);

const SuspenseWrapper = ({
  children,
  fallback,
  type = 'default',
  message = "Carregando conteúdo"
}) => {
  let fallbackComponent = fallback;

  if (!fallbackComponent) {
    switch (type) {
      case 'blog':
        fallbackComponent = <BlogPageSkeleton />;
        break;
      case 'card':
        fallbackComponent = <BlogCardSkeleton />;
        break;
      case 'search':
        fallbackComponent = <SearchBarSkeleton />;
        break;
      case 'hero':
        fallbackComponent = <HeroSkeleton />;
        break;
      default:
        fallbackComponent = <DefaultFallback message={message} />;
    }
  }

  return (
    <Suspense fallback={fallbackComponent}>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;
export { BlogCardSkeleton, SearchBarSkeleton, HeroSkeleton, BlogPageSkeleton };