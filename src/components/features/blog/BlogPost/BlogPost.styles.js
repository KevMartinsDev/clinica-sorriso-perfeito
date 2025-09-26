import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const PostContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  position: relative;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0.75rem;
    gap: 1rem;
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: #2E8B57;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 25px;
  background: rgba(46, 139, 87, 0.05);
  border: 1px solid rgba(46, 139, 87, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: fit-content;
  font-size: 0.9rem;

  &:hover {
    background: rgba(46, 139, 87, 0.1);
    transform: translateX(-4px);
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.15);
  }

  &:focus {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  span {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: translateX(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.85rem;
    gap: 0.5rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      transform: none;
    }

    &:hover span {
      transform: none;
    }
  }
`;

export const PostHeader = styled(motion.header)`
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const PostImage = styled.img.withConfig({
  shouldForwardProp: (prop) => !['fetchpriority'].includes(prop)
})`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: opacity 0.4s ease;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 1024px) {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 300px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    height: 250px;
    border-radius: 12px;
  }
`;

export const PostTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #1a202c;
  line-height: 1.1;
  margin: 0;
  font-family: 'Inter', 'Roboto', sans-serif;
  text-align: center;
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    text-align: left;
    line-height: 1.2;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  font-size: 0.9rem;
  color: #4a5568;

  @media (max-width: 768px) {
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1.25rem 1.5rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1.25rem;
  }
`;

export const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;

  span:first-child {
    font-size: 1rem;
  }

  time, span:not(:first-child) {
    color: #2E8B57;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const PostContent = styled(motion.div)`
  line-height: 1.75;
  font-size: clamp(1rem, 2.5vw, 1.125rem);
  color: #2d3748;
  font-family: 'Inter', 'Roboto', sans-serif;
  max-width: none;

  p {
    margin-bottom: 1.75rem;
    text-align: left;
    color: #4a5568;
    font-weight: 400;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    font-weight: 700;
    margin: 3rem 0 1.5rem;
    color: #1a202c;
    position: relative;
    padding-left: 1.5rem;
    font-family: 'Inter', 'Roboto', sans-serif;
    scroll-margin-top: 2rem;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 5px;
      background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
      border-radius: 3px;
      box-shadow: 0 2px 8px rgba(46, 139, 87, 0.3);
    }
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    margin: 2.5rem 0 1.25rem;
    color: #2d3748;
    font-family: 'Inter', 'Roboto', sans-serif;
    scroll-margin-top: 2rem;
  }

  ul, ol {
    margin-bottom: 2rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.75rem;
    line-height: 1.7;
    color: #4a5568;
  }

  strong {
    font-weight: 700;
    color: #2E8B57;
  }

  em {
    font-style: italic;
    color: #2d3748;
  }

  blockquote {
    background: linear-gradient(135deg, rgba(46, 139, 87, 0.05) 0%, rgba(240, 248, 240, 0.8) 100%);
    border-left: 5px solid #2E8B57;
    padding: 2rem 2.5rem;
    margin: 3rem 0;
    border-radius: 0 16px 16px 0;
    font-style: italic;
    font-size: 1.1rem;
    box-shadow: 0 8px 32px rgba(46, 139, 87, 0.1);
    position: relative;
    backdrop-filter: blur(10px);

    &::before {
      content: '"';
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 3rem;
      color: #2E8B57;
      opacity: 0.3;
      font-family: serif;
    }
  }

  code {
    background: #f7fafc;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9em;
    color: #2E8B57;
    border: 1px solid #e2e8f0;
  }

  pre {
    background: #1a202c;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 12px;
    overflow-x: auto;
    margin: 2rem 0;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

    code {
      background: none;
      padding: 0;
      border: none;
      color: inherit;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    margin: 2rem auto;
    display: block;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }

  a {
    color: #2E8B57;
    text-decoration: none;
    font-weight: 500;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;

    &:hover {
      border-bottom-color: #2E8B57;
    }
  }

  @media (max-width: 768px) {
    h2 {
      margin: 2.5rem 0 1.25rem;
      padding-left: 1.25rem;

      &::before {
        width: 4px;
      }
    }

    h3 {
      margin: 2rem 0 1rem;
    }

    blockquote {
      padding: 1.5rem 2rem;
      margin: 2rem 0;
      font-size: 1.05rem;

      &::before {
        font-size: 2.5rem;
        top: 0.75rem;
        left: 0.75rem;
      }
    }

    pre {
      padding: 1rem;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    blockquote {
      padding: 1.25rem 1.5rem;
      border-radius: 0 12px 12px 0;
    }
  }
`;

export const PostFooter = styled.div`
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 2px solid #e2e8f0;
  display: grid;
  gap: 3rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding-top: 2rem;
    gap: 2rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const Tag = styled.span`
  background: linear-gradient(135deg, rgba(46, 139, 87, 0.1) 0%, rgba(240, 248, 240, 0.8) 100%);
  color: #2E8B57;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid rgba(46, 139, 87, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);
  }

  &:focus {
    outline: 2px solid #2E8B57;
    outline-offset: 2px;
  }

  @media (max-width: 480px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      transform: none;
    }
  }
`;

export const CallToAction = styled.div`
  background: linear-gradient(135deg, rgba(46, 139, 87, 0.05) 0%, rgba(240, 248, 240, 0.8) 100%);
  border: 2px solid #2E8B57;
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  margin: 3rem 0;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(46, 139, 87, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232E8B57' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
    margin: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
    border-radius: 16px;
  }
`;

export const CTATitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
  color: #2E8B57;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

export const CTADescription = styled.p`
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
  }
`;

export const RelatedPosts = styled.div`
  margin-top: 3rem;
`;

export const RelatedTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`;

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

export const RelatedPost = styled(Link)`
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

export const RelatedPostTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

export const RelatedPostMeta = styled.div`
  font-size: 0.75rem;
  color: var(--text-gray);
`;