import { useState, useEffect, useCallback } from 'react';

const useInfiniteScroll = (items, itemsPerPage = 6) => {
  const [displayedItems, setDisplayedItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Reset when items change (filter change)
  useEffect(() => {
    setDisplayedItems(items.slice(0, itemsPerPage));
    setPage(1);
    setHasMore(items.length > itemsPerPage);
    setLoading(false);
  }, [items, itemsPerPage]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    
    // Simulate loading delay for better UX
    setTimeout(() => {
      const startIndex = page * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newItems = items.slice(startIndex, endIndex);
      
      if (newItems.length > 0) {
        setDisplayedItems(prev => [...prev, ...newItems]);
        setPage(prev => prev + 1);
        setHasMore(endIndex < items.length);
      } else {
        setHasMore(false);
      }
      
      setLoading(false);
    }, 300);
  }, [items, page, itemsPerPage, loading, hasMore]);

  return {
    displayedItems,
    hasMore,
    loading,
    loadMore
  };
};

export default useInfiniteScroll;