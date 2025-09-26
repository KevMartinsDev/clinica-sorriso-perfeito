import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blogPosts } from '../../../../data/blog-posts';
import Button from '../../../ui/Button';
import ErrorBoundary from '../../../ui/ErrorBoundary';
import SuspenseWrapper from '../../../ui/SuspenseWrapper';
import LazyLoadWrapper from '../../../ui/LazyLoadWrapper';
import { useWhatsApp } from '../../../../hooks/useWhatsApp';
import { useBlogPerformance } from '../../../../hooks/useBlogPerformance';
import { debounce, throttle, runWhenIdle, processInBatches } from '../../../../utils/performanceOptimizer';
import { globalScheduler, preventLongTask, breakLongTask } from '../../../../utils/taskScheduler';
import {
  generateMetaTags,
  trackBlogView,
  generateBlogSchema
} from '../../../../utils/seoHelpers';
import {
  PostContainer,
  BackLink,
  PostHeader,
  PostImage,
  PostTitle,
  PostMeta,
  MetaItem,
  PostContent,
  PostFooter,
  Tags,
  Tag,
  CallToAction,
  CTATitle,
  CTADescription,
  RelatedPosts,
  RelatedTitle,
  RelatedGrid,
  RelatedPost,
  RelatedPostTitle,
  RelatedPostMeta
} from './BlogPost.styles';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

const formatReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min de leitura`;
};

const BlogPost = () => {
  const { slug } = useParams();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [focusedElement, setFocusedElement] = useState(null);
  const [readingTime, setReadingTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formattedContent, setFormattedContent] = useState('');
  const { sendGeneralInquiry } = useWhatsApp();

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const post = useMemo(() => {
    if (!slug || !blogPosts || !Array.isArray(blogPosts)) {
      return null;
    }
    return blogPosts.find(p => p && p.slug === slug);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = useMemo(() => {
    if (!post || !post.id || !post.tags || !Array.isArray(post.tags) || !blogPosts) {
      return [];
    }

    try {
      const filterFunction = preventLongTask((posts) =>
        posts.filter(p => p && p.id !== post.id && p.tags && p.tags.some && p.tags.some(tag => post.tags.includes(tag)))
             .slice(0, 3)
      );

      return filterFunction(blogPosts) || [];
    } catch (error) {
      console.warn('Error filtering related posts:', error);
      return [];
    }
  }, [post?.id, post?.tags]);

  const { preloadImages, monitorMemory, trackReadingTime } = useBlogPerformance(1, '', '');

  const preloadNextImages = useCallback(async () => {
    if (relatedPosts.length > 0) {
      runWhenIdle(async () => {
        await processInBatches(
          (post) => {
            const img = new Image();
            img.src = post.image;
            return img.decode().catch(() => {});
          },
          relatedPosts.slice(0, 3),
          1
        );
      });
    }
  }, [relatedPosts]);

  const metaTags = useMemo(() => {
    try {
      const generateMetaTagsOptimized = preventLongTask(generateMetaTags);
      return generateMetaTagsOptimized(post) || {
        title: post.title,
        description: post.excerpt || '',
        canonical: '',
        openGraph: {},
        twitter: {}
      };
    } catch (error) {
      console.warn('Error generating meta tags:', error);
      return {
        title: post.title,
        description: post.excerpt || '',
        canonical: '',
        openGraph: {},
        twitter: {}
      };
    }
  }, [post]);

  const blogSchema = useMemo(() => {
    try {
      const generateSchemaOptimized = preventLongTask(generateBlogSchema);
      return generateSchemaOptimized([post]) || {};
    } catch (error) {
      console.warn('Error generating blog schema:', error);
      return {};
    }
  }, [post]);

  useEffect(() => {
    trackBlogView(post.id, post.title);
    preloadImages([post]);
    monitorMemory();
    preloadNextImages();

    const startTime = Date.now();

    return () => {
      const timeSpent = Date.now() - startTime;
      setReadingTime(timeSpent);
      trackReadingTime(post.id, timeSpent);
    };
  }, [post.id, post.title, preloadImages, monitorMemory, preloadNextImages, trackReadingTime]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      runWhenIdle(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      });
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const formatContent = useCallback(async (content) => {
    const paragraphs = content.split('\n\n');

    const formatParagraph = (paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        const text = paragraph.replace('## ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `<h2 id="${id}" tabindex="-1">${text}</h2>`;
      }
      if (paragraph.startsWith('### ')) {
        const text = paragraph.replace('### ', '');
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return `<h3 id="${id}" tabindex="-1">${text}</h3>`;
      }
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return `<blockquote role="note">${paragraph.replace(/\*\*/g, '')}</blockquote>`;
      }
      return `<p>${paragraph}</p>`;
    };

    if (paragraphs.length > 10) {
      const formattedParagraphs = await breakLongTask(formatParagraph, paragraphs, 3);
      return formattedParagraphs.join('');
    }

    return paragraphs.map(formatParagraph).join('');
  }, []);

  useEffect(() => {
    const processContent = async () => {
      const formatted = await formatContent(post.content);
      setFormattedContent(formatted);
    };

    globalScheduler.schedule(processContent, 'normal');
  }, [post.content, formatContent]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Tab') {
      setFocusedElement(event.target);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Helmet>
        <title>{metaTags?.title || post.title}</title>
        <meta name="description" content={metaTags?.description || post.excerpt || ''} />
        <meta name="keywords" content={post.seo?.keywords || post.tags?.join(', ') || ''} />
        {metaTags?.canonical && <link rel="canonical" href={metaTags.canonical} />}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="dns-prefetch" href="https://api.whatsapp.com" />

        {metaTags?.openGraph && Object.entries(metaTags.openGraph).map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}

        {metaTags?.twitter && Object.entries(metaTags.twitter).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}

        <meta name="theme-color" content="#2E8B57" />
        <meta name="color-scheme" content="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <meta name="author" content={post.author} />
        <meta name="robots" content="index, follow" />
        <meta name="article:published_time" content={post.publishDate} />
        <meta name="article:modified_time" content={post.modifiedDate || post.publishDate} />
        <meta name="article:author" content={post.author} />
        <meta name="article:section" content="Odontologia" />
        {post.tags.map((tag, index) => (
          <meta key={index} name="article:tag" content={tag} />
        ))}

        <script type="application/ld+json">
          {JSON.stringify(blogSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://clinica-sorriso-perfeito.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://clinica-sorriso-perfeito.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://clinica-sorriso-perfeito.com/blog/${post.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2E8B57, #228B22)',
          transformOrigin: '0%',
          zIndex: 1000
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <a
        href="#main-content"
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

      <PostContainer
        role="main"
        id="main-content"
        ref={inViewRef}
        onKeyDown={handleKeyDown}
        aria-live="polite"
      >
        <BackLink
          to="/blog"
          aria-label="Voltar para a lista de artigos do blog"
        >
          <span aria-hidden="true">←</span>
          Voltar para o blog
        </BackLink>

        <SuspenseWrapper type="hero">
          <PostHeader
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LazyLoadWrapper height="400px">
              <PostImage
                src={post.image}
                alt={`Imagem principal do artigo: ${post.title}`}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                style={{
                  opacity: imageLoaded ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(1.05)',
                  transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                decoding="async"
                fetchpriority="high"
              />
            </LazyLoadWrapper>

            <PostTitle
              itemProp="headline"
              role="heading"
              aria-level="1"
            >
              {post.title}
            </PostTitle>

            <PostMeta role="group" aria-label="Informações do artigo">
              <MetaItem>
                <time
                  dateTime={post.publishDate}
                  itemProp="datePublished"
                  aria-label={`Publicado em ${formatDate(post.publishDate)}`}
                >
                  {formatDate(post.publishDate)}
                </time>
              </MetaItem>
              <MetaItem>
                <span
                  itemProp="author"
                  aria-label={`Autor: ${post.author}`}
                >
                  {post.author}
                </span>
              </MetaItem>
              <MetaItem>
                <span aria-label={`Tempo estimado de leitura: ${formatReadTime(post.content)}`}>
                  {formatReadTime(post.content)}
                </span>
              </MetaItem>
            </PostMeta>
          </PostHeader>
        </SuspenseWrapper>

        <SuspenseWrapper>
          <PostContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: formattedContent }}
            role="article"
            aria-label="Conteúdo principal do artigo"
            itemProp="articleBody"
            tabIndex="-1"
          />
        </SuspenseWrapper>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CallToAction role="complementary" aria-label="Chamada para ação">
            <CTATitle>Precisa de cuidados odontológicos?</CTATitle>
            <CTADescription>
              Nossa equipe de especialistas está pronta para cuidar do seu sorriso.
              Agende uma consulta e receba o melhor atendimento.
            </CTADescription>
            <Button
              variant="whatsapp"
              size="large"
              onClick={() => {
                sendGeneralInquiry(`Olá! Li o artigo sobre "${post.title}" e gostaria de agendar uma consulta.`);
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'conversion', {
                    event_category: 'blog_cta',
                    event_label: post.slug,
                    value: 1
                  });
                }
              }}
              aria-label="Agendar consulta via WhatsApp após ler o artigo"
              aria-describedby="cta-description"
            >
              Agendar Consulta
            </Button>
          </CallToAction>
        </motion.div>

        <PostFooter role="contentinfo">
          <Tags role="group" aria-label="Tags relacionadas ao artigo">
            {post.tags.map((tag, index) => (
              <Tag
                key={index}
                role="button"
                tabIndex="0"
                aria-label={`Tag: ${tag}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                  }
                }}
              >
                {tag}
              </Tag>
            ))}
          </Tags>

          {relatedPosts.length > 0 && (
            <RelatedPosts role="complementary" aria-label="Artigos relacionados">
              <RelatedTitle>Artigos relacionados</RelatedTitle>
              <RelatedGrid>
                <AnimatePresence>
                  {relatedPosts.map((relatedPost, index) => (
                    <motion.div
                      key={relatedPost.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <RelatedPost
                        to={`/blog/${relatedPost.slug}`}
                        aria-label={`Ler artigo relacionado: ${relatedPost.title}`}
                        onFocus={() => setFocusedElement('related-post')}
                        rel="prefetch"
                      >
                        <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                        <RelatedPostMeta>
                          <time
                            dateTime={relatedPost.publishDate}
                            aria-label={`Publicado em ${formatDate(relatedPost.publishDate)}`}
                          >
                            {formatDate(relatedPost.publishDate)}
                          </time>
                        </RelatedPostMeta>
                      </RelatedPost>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </RelatedGrid>
            </RelatedPosts>
          )}
        </PostFooter>
      </PostContainer>
    </ErrorBoundary>
  );
};

export default memo(BlogPost);