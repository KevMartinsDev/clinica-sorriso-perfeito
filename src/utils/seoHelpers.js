export const generateBlogSchema = (posts, currentPage = 'blog') => {
  const baseUrl = 'https://clinica-sorriso-perfeito.com';

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog - Clínica Sorriso Perfeito",
    "description": "Artigos especializados sobre saúde bucal, tratamentos odontológicos e cuidados dentários por profissionais experientes.",
    "url": `${baseUrl}/blog`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Clínica Sorriso Perfeito",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 200,
        "height": 60
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rua das Flores, 123",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "postalCode": "01234-567",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+55-11-9999-9999",
        "contactType": "customer service"
      }
    },
    "blogPost": posts.slice(0, 5).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `${baseUrl}/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.modifiedDate || post.publishDate,
      "author": {
        "@type": "Person",
        "name": post.author,
        "jobTitle": "Cirurgião-Dentista"
      },
      "image": {
        "@type": "ImageObject",
        "url": post.image,
        "width": 800,
        "height": 600
      },
      "keywords": post.tags.join(', '),
      "wordCount": post.wordCount || 500,
      "timeRequired": post.readTime || "5 min",
      "inLanguage": "pt-BR",
      "isAccessibleForFree": true
    }))
  };

  return blogSchema;
};

export const generateWebPageSchema = (title, description, url) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url,
  "inLanguage": "pt-BR",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://clinica-sorriso-perfeito.com"
  },
  "about": {
    "@type": "Thing",
    "name": "Odontologia e Saúde Bucal"
  },
  "breadcrumb": {
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
  }
});

export const generateSearchResultsSchema = (searchTerm, resultsCount, posts) => ({
  "@context": "https://schema.org",
  "@type": "SearchResultsPage",
  "url": `https://clinica-sorriso-perfeito.com/blog?search=${encodeURIComponent(searchTerm)}`,
  "name": `Resultados para "${searchTerm}" - Blog Clínica Sorriso Perfeito`,
  "description": `${resultsCount} artigos encontrados para "${searchTerm}"`,
  "mainEntity": {
    "@type": "ItemList",
    "numberOfItems": resultsCount,
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "name": post.title,
        "url": `https://clinica-sorriso-perfeito.com/blog/${post.slug}`
      }
    }))
  }
});

export const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Com que frequência devemos ir ao dentista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomenda-se visitas ao dentista a cada 6 meses para prevenção e acompanhamento da saúde bucal."
      }
    },
    {
      "@type": "Question",
      "name": "Qual a importância da limpeza dental profissional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A limpeza profissional remove tártaro e placa bacteriana que não conseguimos eliminar com a escovação caseira, prevenindo doenças gengivais e cáries."
      }
    },
    {
      "@type": "Question",
      "name": "Quando devo procurar um ortodontista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É recomendado procurar um ortodontista quando há problemas de alinhamento dos dentes, mordida cruzada, ou questões estéticas que afetam a autoestima."
      }
    }
  ]
});

export const generateMetaTags = (post) => {
  const baseUrl = 'https://clinica-sorriso-perfeito.com';
  const description = post.excerpt || post.content.substring(0, 155) + '...';

  return {
    title: `${post.title} | Clínica Sorriso Perfeito - Blog Odontológico`,
    description: description,
    canonical: `${baseUrl}/blog/${post.slug}`,
    keywords: post.seo?.keywords || post.tags.join(', '),
    openGraph: {
      'og:title': post.title,
      'og:description': description,
      'og:image': post.image,
      'og:image:alt': `Imagem do artigo: ${post.title}`,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:url': `${baseUrl}/blog/${post.slug}`,
      'og:type': 'article',
      'og:site_name': 'Clínica Sorriso Perfeito',
      'og:locale': 'pt_BR',
      'article:author': post.author,
      'article:published_time': post.publishDate,
      'article:modified_time': post.modifiedDate || post.publishDate,
      'article:section': 'Odontologia',
      'article:tag': post.tags.join(',')
    },
    twitter: {
      'twitter:card': 'summary_large_image',
      'twitter:site': '@clinicasorrisoperfeito',
      'twitter:creator': '@clinicasorrisoperfeito',
      'twitter:title': post.title,
      'twitter:description': description,
      'twitter:image': post.image,
      'twitter:image:alt': `Imagem do artigo: ${post.title}`
    }
  };
};

export const generateSiteNavigationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  "name": "Blog",
  "url": "https://clinica-sorriso-perfeito.com/blog",
  "description": "Artigos sobre saúde bucal e odontologia"
});


export const trackBlogView = (postId, postTitle) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: postTitle,
      page_location: window.location.href,
      content_group1: 'Blog',
      custom_parameter_1: postId
    });
  }
};

export const trackBlogSearch = (searchTerm, resultsCount) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      custom_parameter_1: resultsCount,
      content_group1: 'Blog'
    });
  }
};

export const trackBlogFilter = (filterType, filterValue) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_filter', {
      custom_parameter_1: filterType,
      custom_parameter_2: filterValue,
      content_group1: 'Blog'
    });
  }
};