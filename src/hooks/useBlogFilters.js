import { useState, useMemo, useCallback } from 'react';

export const useBlogFilters = (posts, initialPostsPerPage = 6) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(initialPostsPerPage);

  const allTags = useMemo(() => {
    const tags = posts.flatMap(post => post.tags || []);
    return [...new Set(tags)].sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    if (searchTerm && searchTerm.length > 0) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(post => {
        return (
          post.title?.toLowerCase().includes(searchLower) ||
          post.excerpt?.toLowerCase().includes(searchLower) ||
          post.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
          post.author?.toLowerCase().includes(searchLower)
        );
      });
    }

    if (selectedTag) {
      filtered = filtered.filter(post => post.tags?.includes(selectedTag));
    }

    return filtered.sort((a, b) => {
      const dateA = new Date(a.publishDate);
      const dateB = new Date(b.publishDate);
      return dateB - dateA;
    });
  }, [posts, searchTerm, selectedTag]);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  const handleSearch = useCallback((term) => {
    setSearchTerm(term);
    setVisiblePosts(initialPostsPerPage);
  }, [initialPostsPerPage]);

  const handleTagFilter = useCallback((tag) => {
    const newTag = tag === selectedTag ? '' : tag;
    setSelectedTag(newTag);
    setVisiblePosts(initialPostsPerPage);
    return newTag;
  }, [selectedTag, initialPostsPerPage]);

  const handleLoadMore = useCallback(() => {
    setVisiblePosts(prev => prev + initialPostsPerPage);
  }, [initialPostsPerPage]);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setSelectedTag('');
    setVisiblePosts(initialPostsPerPage);
  }, [initialPostsPerPage]);

  const resetVisiblePosts = useCallback(() => {
    setVisiblePosts(initialPostsPerPage);
  }, [initialPostsPerPage]);

  return {
    searchTerm,
    selectedTag,
    visiblePosts,
    allTags,
    filteredPosts,
    displayedPosts,
    hasMorePosts,

    handleSearch,
    handleTagFilter,
    handleLoadMore,
    clearFilters,
    resetVisiblePosts,

    setSearchTerm,
    setSelectedTag,
    setVisiblePosts
  };
};