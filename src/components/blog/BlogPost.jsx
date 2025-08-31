import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaArrowLeft, FaWhatsapp } from 'react-icons/fa';
import { blogPosts } from '../../data/blog-posts';
import Button from '../common/Button';

const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-color-dark);
  }

  svg {
    font-size: 0.875rem;
  }
`;

const PostHeader = styled(motion.header)`
  margin-bottom: 2rem;
`;

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.2;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: var(--text-gray);
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;

  svg {
    font-size: 0.75rem;
    color: var(--primary-color);
  }
`;

const PostContent = styled(motion.div)`
  line-height: 1.8;
  font-size: 1.125rem;
  color: var(--text-dark);

  p {
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin: 2.5rem 0 1rem;
    color: var(--text-dark);
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 1.375rem;
    font-weight: 600;
    margin: 2rem 0 1rem;
    color: var(--text-dark);
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    font-weight: 600;
    color: var(--primary-color);
  }

  blockquote {
    background: var(--primary-color-light);
    border-left: 4px solid var(--primary-color);
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 0 8px 8px 0;
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
    }
  }
`;

const PostFooter = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const Tag = styled.span`
  background: var(--primary-color-light);
  color: var(--primary-color);
  padding: 0.375rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const CallToAction = styled.div`
  background: linear-gradient(135deg, var(--primary-color-light), #f8f9fa);
  border: 2px solid var(--primary-color);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
`;

const CTATitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  color: var(--text-gray);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const RelatedPosts = styled.div`
  margin-top: 3rem;
`;

const RelatedTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const RelatedPost = styled(Link)`
  display: block;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(46, 139, 87, 0.1);
  }
`;

const RelatedPostTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const RelatedPostMeta = styled.div`
  font-size: 0.75rem;
  color: var(--text-gray);
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);

  const formatContent = (content) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return `<h2>${paragraph.replace('## ', '')}</h2>`;
        }
        if (paragraph.startsWith('### ')) {
          return `<h3>${paragraph.replace('### ', '')}</h3>`;
        }
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return `<blockquote>${paragraph.replace(/\*\*/g, '')}</blockquote>`;
        }
        return `<p>${paragraph}</p>`;
      })
      .join('');
  };

  return (
    <>
      <Helmet>
        <title>{post.seo.title}</title>
        <meta name="description" content={post.seo.description} />
        <meta name="keywords" content={post.seo.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="article:published_time" content={post.publishDate} />
        <meta name="article:author" content={post.author} />
        <meta name="article:tag" content={post.tags.join(', ')} />
      </Helmet>

      <PostContainer>
        <BackLink to="/blog">
          <FaArrowLeft />
          Voltar para o blog
        </BackLink>

        <PostHeader
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <PostImage src={post.image} alt={post.title} />
          <PostTitle>{post.title}</PostTitle>
          <PostMeta>
            <MetaItem>
              <FaCalendarAlt />
              <span>{formatDate(post.publishDate)}</span>
            </MetaItem>
            <MetaItem>
              <FaClock />
              <span>{post.readTime}</span>
            </MetaItem>
            <MetaItem>
              <FaUser />
              <span>{post.author}</span>
            </MetaItem>
          </PostMeta>
        </PostHeader>

        <PostContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        <CallToAction>
          <CTATitle>Precisa de cuidados odontológicos?</CTATitle>
          <CTADescription>
            Nossa equipe de especialistas está pronta para cuidar do seu sorriso. 
            Agende uma consulta e receba o melhor atendimento.
          </CTADescription>
          <Button variant="primary" size="large" icon={FaWhatsapp}>
            Agendar Consulta
          </Button>
        </CallToAction>

        <PostFooter>
          <Tags>
            {post.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>

          {relatedPosts.length > 0 && (
            <RelatedPosts>
              <RelatedTitle>Artigos relacionados</RelatedTitle>
              <RelatedGrid>
                {relatedPosts.map(relatedPost => (
                  <RelatedPost key={relatedPost.id} to={`/blog/${relatedPost.slug}`}>
                    <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                    <RelatedPostMeta>
                      {formatDate(relatedPost.publishDate)} • {relatedPost.readTime}
                    </RelatedPostMeta>
                  </RelatedPost>
                ))}
              </RelatedGrid>
            </RelatedPosts>
          )}
        </PostFooter>
      </PostContainer>
    </>
  );
};

export default BlogPost;