import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { blogPosts } from '../../data/blog-posts';
import BlogCard from './BlogCard';
import SearchBar from './SearchBar';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: var(--text-gray);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

const BlogGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ResultsCount = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-gray);
  font-size: 0.875rem;
`;

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-gray);
`;

const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.5;
`;

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const EmptyDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
`;

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchTerm.trim()) {
      return blogPosts;
    }

    const lowercaseSearch = searchTerm.toLowerCase();
    
    return blogPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(lowercaseSearch);
      const excerptMatch = post.excerpt.toLowerCase().includes(lowercaseSearch);
      const contentMatch = post.content.toLowerCase().includes(lowercaseSearch);
      const tagsMatch = post.tags.some(tag => 
        tag.toLowerCase().includes(lowercaseSearch)
      );
      
      return titleMatch || excerptMatch || contentMatch || tagsMatch;
    });
  }, [searchTerm]);

  return (
    <BlogContainer>
      <BlogHeader>
        <Title>Blog Odontológico</Title>
        <Subtitle>
          Informações valiosas sobre saúde bucal, dicas de cuidados e as 
          últimas novidades da odontologia moderna.
        </Subtitle>
      </BlogHeader>

      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar por título, conteúdo ou tags..."
      />

      {searchTerm && (
        <ResultsCount>
          {filteredPosts.length === 0 
            ? 'Nenhum artigo encontrado'
            : `${filteredPosts.length} artigo${filteredPosts.length !== 1 ? 's' : ''} encontrado${filteredPosts.length !== 1 ? 's' : ''}`
          }
          {searchTerm && ` para "${searchTerm}"`}
        </ResultsCount>
      )}

      {filteredPosts.length > 0 ? (
        <BlogGrid
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </BlogGrid>
      ) : (
        <EmptyState
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <EmptyIcon>📝</EmptyIcon>
          <EmptyTitle>
            {searchTerm ? 'Nenhum artigo encontrado' : 'Nenhum artigo disponível'}
          </EmptyTitle>
          <EmptyDescription>
            {searchTerm 
              ? 'Tente buscar com outros termos ou limpe o filtro para ver todos os artigos.'
              : 'Nossos especialistas estão preparando conteúdo incrível para você.'
            }
          </EmptyDescription>
        </EmptyState>
      )}
    </BlogContainer>
  );
};

export default BlogList;