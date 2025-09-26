import { useEffect, startTransition, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../../components/layout/Layout';
import SearchBar from '../../components/features/blog/SearchBar';
import BlogCard from '../../components/features/blog/BlogCard';
import LazyLoadWrapper from '../../components/ui/LazyLoadWrapper';
import ErrorBoundary from '../../components/ui/ErrorBoundary';
import SuspenseWrapper from '../../components/ui/SuspenseWrapper';
import { blogPosts } from '../../data/blog-posts';
import { useBlogPerformance } from '../../hooks/useBlogPerformance';
import { useBlogFilters } from '../../hooks/useBlogFilters';
import { useBlogSEO } from '../../hooks/useBlogSEO';
import {
  BlogContainer,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  ContentSection,
  BlogGrid,
  FilterContainer,
  FilterButton,
  NoResults,
  LoadMoreButton,
  TagsContainer,
  TagButton,
  StatsContainer,
  StatItem
} from './Blog.styles';

const POSTS_PER_PAGE = 3;

const Blog = () => {
  
  const limitedBlogPosts = useMemo(() => blogPosts.slice(0, 12), []); 

  const {
    searchTerm,
    selectedTag,
    allTags,
    filteredPosts,
    displayedPosts,
    hasMorePosts,
    handleSearch: baseHandleSearch,
    handleTagFilter: baseHandleTagFilter,
    handleLoadMore,
    clearFilters
  } = useBlogFilters(limitedBlogPosts, POSTS_PER_PAGE);

  
  const {
    measureSearchStart,
    measureSearchEnd,
    preloadImages,
    monitorMemory
  } = useBlogPerformance(limitedBlogPosts.length, searchTerm, selectedTag);

  
  const {
    blogSchema,
    webPageSchema,
    faqSchema,
    searchResultsSchema,
    breadcrumbSchema,
    metaTags,
    openGraphTags,
    twitterTags,
    trackSearch,
    trackFilter
  } = useBlogSEO({
    posts: filteredPosts,
    searchTerm,
    selectedTag
  });

  
  const handleSearch = (term) => {
    measureSearchStart();
    startTransition(() => {
      baseHandleSearch(term);
      trackSearch(term, filteredPosts.length);
    });
    setTimeout(() => measureSearchEnd(), 0);
  };

  
  const handleTagFilter = (tag) => {
    startTransition(() => {
      const newTag = baseHandleTagFilter(tag);
      trackFilter('tag', newTag);
    });
  };

  
  useEffect(() => {
    preloadImages(displayedPosts);
  }, [displayedPosts, preloadImages]);

  useEffect(() => {
    const interval = setInterval(monitorMemory, 30000);
    return () => clearInterval(interval);
  }, [monitorMemory]);

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta
          name="keywords"
          content="blog odontologia, saúde bucal, dicas dentárias, tratamentos dentários, cuidados bucais, artigos odontologia"
        />
        {Object.entries(metaTags).map(([key, value]) => (
          key !== 'title' && key !== 'description' && (
            <meta key={key} name={key} content={value} />
          )
        ))}
        <link rel="canonical" href={metaTags.canonical} />

        {/* Open Graph */}
        {Object.entries(openGraphTags).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}

        {/* Twitter Card */}
        {Object.entries(twitterTags).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}

        {/* Schema markup */}
        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        {searchResultsSchema && (
          <script type="application/ld+json">
            {JSON.stringify(searchResultsSchema)}
          </script>
        )}

        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* JSON-LD for breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Layout>
        <BlogContainer role="main">
          {/* Skip navigation link */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:text-white focus:p-2 focus:rounded"
            style={{
              position: 'absolute',
              left: '-9999px',
              width: '1px',
              height: '1px',
              overflow: 'hidden'
            }}
            onFocus={(e) => {
              e.target.style.position = 'fixed';
              e.target.style.top = '1rem';
              e.target.style.left = '1rem';
              e.target.style.width = 'auto';
              e.target.style.height = 'auto';
              e.target.style.overflow = 'visible';
              e.target.style.zIndex = '1000';
              e.target.style.background = '#2E8B57';
              e.target.style.color = 'white';
              e.target.style.padding = '0.5rem 1rem';
              e.target.style.borderRadius = '0.25rem';
              e.target.style.textDecoration = 'none';
            }}
            onBlur={(e) => {
              e.target.style.position = 'absolute';
              e.target.style.left = '-9999px';
              e.target.style.width = '1px';
              e.target.style.height = '1px';
              e.target.style.overflow = 'hidden';
            }}
          >
            Pular para o conteúdo principal
          </a>
          <HeroSection>
            <HeroContent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <HeroTitle>
                Blog Odontológico
              </HeroTitle>
              <HeroSubtitle>
                Dicas, informações e novidades sobre saúde bucal por nossos especialistas
              </HeroSubtitle>

              <StatsContainer>
                <StatItem>
                  <strong>{limitedBlogPosts.length}</strong>
                  <span>Artigos</span>
                </StatItem>
                <StatItem>
                  <strong>{allTags.length}</strong>
                  <span>Categorias</span>
                </StatItem>
                <StatItem>
                  <strong>100%</strong>
                  <span>Gratuito</span>
                </StatItem>
              </StatsContainer>
            </HeroContent>
          </HeroSection>

          <ContentSection id="main-content" aria-label="Conteúdo principal do blog">
            <ErrorBoundary>
              <SuspenseWrapper type="search">
                <SearchBar
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Pesquisar artigos, autores ou temas..."
                  resultsCount={filteredPosts.length}
                  showResults={true}
                />
              </SuspenseWrapper>
            </ErrorBoundary>

            {allTags.length > 0 && (
              <TagsContainer>
                <FilterButton
                  $active={!selectedTag}
                  onClick={clearFilters}
                  aria-label="Mostrar todos os artigos"
                >
                  Todos
                </FilterButton>
                {allTags.map(tag => (
                  <TagButton
                    key={tag}
                    $active={selectedTag === tag}
                    onClick={() => handleTagFilter(tag)}
                    aria-label={`Filtrar por ${tag}`}
                  >
                    {tag}
                  </TagButton>
                ))}
              </TagsContainer>
            )}

            <ErrorBoundary>
              <SuspenseWrapper type="blog">
                <AnimatePresence mode="wait">
                  {filteredPosts.length > 0 ? (
                    <motion.div
                      key="blog-grid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BlogGrid role="main" aria-label="Lista de artigos do blog">
                        {displayedPosts.map((post, index) => (
                          <ErrorBoundary key={post.id}>
                            <LazyLoadWrapper
                              height="400px"
                              threshold={index < 6 ? 0.1 : 0.05}
                              rootMargin={index < 6 ? "100px" : "200px"}
                            >
                              <SuspenseWrapper type="card">
                                <BlogCard
                                  post={post}
                                  index={index}
                                  priority={index < 3}
                                />
                              </SuspenseWrapper>
                            </LazyLoadWrapper>
                          </ErrorBoundary>
                        ))}
                      </BlogGrid>

                      {hasMorePosts && (
                        <LoadMoreButton
                          onClick={handleLoadMore}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`Carregar mais ${POSTS_PER_PAGE} artigos`}
                        >
                          Carregar mais artigos
                        </LoadMoreButton>
                      )}
                    </motion.div>
                  ) : (
                    <NoResults
                      key="no-results"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3>Nenhum artigo encontrado</h3>
                      <p>
                        {searchTerm || selectedTag
                          ? `Não encontramos artigos para "${searchTerm || selectedTag}".`
                          : 'Não há artigos disponíveis no momento.'
                        }
                      </p>
                      {(searchTerm || selectedTag) && (
                        <FilterButton onClick={clearFilters}>
                          Limpar filtros
                        </FilterButton>
                      )}
                    </NoResults>
                  )}
                </AnimatePresence>
              </SuspenseWrapper>
            </ErrorBoundary>
          </ContentSection>
        </BlogContainer>
      </Layout>
    </>
  );
};

export default Blog;