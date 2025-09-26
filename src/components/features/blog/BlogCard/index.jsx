import { Link } from 'react-router-dom';
import { useState, useCallback, memo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.article)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(46, 139, 87, 0.15);
    border-color: rgba(46, 139, 87, 0.2);
  }

  &:focus-within {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: box-shadow 0.3s ease;

    &:hover {
      transform: none;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
  opacity: ${props => props.$loaded ? 1 : 0};

  ${Card}:hover & {
    transform: scale(1.08);
    filter: brightness(1.1) saturate(1.1);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: opacity 0.3s ease;

    ${Card}:hover & {
      transform: none;
    }
  }
`;

const ImagePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  color: #64748b;
  font-size: 0.875rem;
  opacity: ${props => props.$show ? 1 : 0};
  transition: opacity 0.3s ease;

  &::before {
    content: '📄';
    font-size: 2rem;
    margin-bottom: 0.5rem;
    display: block;
  }
`;

const Content = styled.div`
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(46, 139, 87, 0.2);

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`;

const Title = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a202c;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;

  ${Card}:hover & {
    color: #2E8B57;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const Excerpt = styled.p`
  color: #4a5568;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.95rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    -webkit-line-clamp: 2;
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
  margin-top: auto;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    padding-top: 0.75rem;
  }
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #2E8B57;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const DateAndTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #64748b;

  @media (max-width: 480px) {
    align-items: flex-start;
    font-size: 0.75rem;
  }
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

const BlogCard = ({ post, index, priority = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
    setImageLoaded(false);
  }, []);

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }, []);

  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
    >
      <StyledLink
        to={`/blog/${post.slug}`}
        aria-label={`Ler artigo: ${post.title}`}
      >
        <ImageContainer>
          {!imageError && (
            <Image
              src={post.image}
              alt={post.title}
              $loaded={imageLoaded}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
            />
          )}
          <ImagePlaceholder $show={!imageLoaded || imageError}>
            {imageError ? 'Imagem indisponível' : 'Carregando...'}
          </ImagePlaceholder>
        </ImageContainer>

        <Content>
          {post.tags && post.tags.length > 0 && (
            <TagsContainer>
              {post.tags.slice(0, 2).map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </TagsContainer>
          )}

          <Title>{post.title}</Title>
          <Excerpt>{post.excerpt}</Excerpt>

          <Meta>
            <Author>{post.author}</Author>
            <DateAndTime>
              <span>{formatDate(post.publishDate)}</span>
            </DateAndTime>
          </Meta>
        </Content>
      </StyledLink>
    </Card>
  );
};

export default memo(BlogCard);