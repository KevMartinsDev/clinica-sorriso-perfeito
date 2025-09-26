import { useMemo, useEffect } from 'react';
import {
  generateBlogSchema,
  generateWebPageSchema,
  generateSearchResultsSchema,
  generateFAQSchema,
  trackBlogView,
  trackBlogSearch,
  trackBlogFilter
} from '../utils/seoHelpers';

export const useBlogSEO = ({
  posts,
  searchTerm,
  selectedTag,
  pageTitle = "Blog - Dicas de Saúde Bucal e Odontologia | Clínica Sorriso Perfeito",
  pageDescription = "Artigos especializados sobre saúde bucal, tratamentos odontológicos, dicas de higiene e cuidados dentários. Conteúdo atualizado por profissionais experientes.",
  pageUrl = "https://clinica-sorriso-perfeito.com/blog"
}) => {
  
  const blogSchema = useMemo(() => {
    
    const limitedPosts = posts.slice(0, 3);
    return generateBlogSchema(limitedPosts);
  }, [posts]);

  const webPageSchema = useMemo(() =>
    generateWebPageSchema(pageTitle, pageDescription, pageUrl),
    [pageTitle, pageDescription, pageUrl]
  );

  const faqSchema = useMemo(() => generateFAQSchema(), []);

  const searchResultsSchema = useMemo(() => {
    return searchTerm && searchTerm.length > 0
      ? generateSearchResultsSchema(searchTerm, posts.length, posts.slice(0, 3))
      : null;
  }, [searchTerm, posts]);

  
  const trackSearch = (term, resultsCount) => {
    if (term.length > 0) {
      setTimeout(() => trackBlogSearch(term, resultsCount), 100);
    }
  };

  const trackFilter = (filterType, filterValue) => {
    if (filterValue) {
      trackBlogFilter(filterType, filterValue);
    }
  };

  
  useEffect(() => {
    trackBlogView('blog-main', 'Blog Principal');
  }, []);

  
  const metaTags = useMemo(() => ({
    title: pageTitle,
    description: pageDescription,
    canonical: pageUrl,
    robots: "index, follow",
    author: "Clínica Sorriso Perfeito",
    language: "pt-BR",
    "revisit-after": "7 days",
    rating: "general",
    distribution: "global",
    "theme-color": "#2E8B57",
    "msapplication-TileColor": "#2E8B57",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Blog Clínica Sorriso"
  }), [pageTitle, pageDescription, pageUrl]);

  const openGraphTags = useMemo(() => ({
    "og:title": pageTitle,
    "og:description": pageDescription,
    "og:type": "website",
    "og:url": pageUrl,
    "og:site_name": "Clínica Sorriso Perfeito"
  }), [pageTitle, pageDescription, pageUrl]);

  const twitterTags = useMemo(() => ({
    "twitter:card": "summary_large_image",
    "twitter:title": pageTitle,
    "twitter:description": pageDescription
  }), [pageTitle, pageDescription]);

  const breadcrumbSchema = useMemo(() => ({
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
      }
    ]
  }), []);

  return {
    
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
  };
};