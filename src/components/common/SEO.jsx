import { Helmet } from 'react-helmet-async';
import { memo } from 'react';

const SEO = memo(({
  title = 'Clínica Sorriso Perfeito',
  description = 'Clínica odontológica especializada em tratamentos dentários modernos e eficazes. Agende sua consulta e tenha o sorriso perfeito que você sempre sonhou.',
  keywords = 'dentista, odontologia, clínica odontológica, tratamento dentário, implante, ortodontia, clareamento',
  image = '/images/og-image.jpg',
  url = 'https://clinica-sorriso-perfeito.com.br',
  type = 'website',
  author = 'Clínica Sorriso Perfeito',
  canonical,
  noindex = false,
  structuredData
}) => {
  const siteTitle = 'Clínica Sorriso Perfeito';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const fullUrl = `${url}${canonical || ''}`;

  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'Clínica Sorriso Perfeito',
    description: description,
    url: url,
    telephone: '+55 (11) 99999-9999',
    email: 'contato@sorrisoperfeito.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua das Flores, 123',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01234-567',
      addressCountry: 'BR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5505',
      longitude: '-46.6333'
    },
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 08:00-12:00'
    ],
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Insurance',
    currenciesAccepted: 'BRL',
    areaServed: 'São Paulo, SP, Brazil',
    serviceType: 'Dental Care',
    medicalSpecialty: 'Dentistry'
  };

  return (
    <Helmet>
      {/* Título da página */}
      <title>{fullTitle}</title>
      
      {/* Meta tags básicas */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={fullUrl} />}
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@sorrisoperfeito" />
      <meta name="twitter:creator" content="@sorrisoperfeito" />
      
      {/* Favicons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#2E8B57" />
      
      {/* Preconnect para fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data (Schema.org) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Alternativas de idioma (se aplicável) */}
      <link rel="alternate" hrefLang="pt-BR" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* DNS Prefetch para recursos externos */}
      <link rel="dns-prefetch" href="//api.whatsapp.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      
      {/* Meta tags específicas para mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
    </Helmet>
  );
});

export default SEO;