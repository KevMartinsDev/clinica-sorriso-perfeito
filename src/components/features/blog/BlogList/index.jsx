import { useState, useMemo, useCallback, memo } from 'react';
import { blogPosts } from '../../../../data/blog-posts';
import BlogCard from '../BlogCard';
import SearchBar from '../SearchBar';
import {
  BlogContainer,
  BlogHeader,
  Title,
  Subtitle,
  BlogGrid,
  ResultsCount,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription
} from './BlogList.styles';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  }, []);

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
        onChange={handleSearchChange}
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

export default memo(BlogList);