export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export function updatePageSeo({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://so-socialmedia.nl/so_social_logo.svg',
  jsonLd
}: SeoConfig) {
  // Update document title
  document.title = title;

  // Helper to set or create meta tag
  const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Standard SEO Meta
  setMetaTag('name', 'description', description);

  // Canonical tag
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // Open Graph
  setMetaTag('property', 'og:title', title);
  setMetaTag('property', 'og:description', description);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:type', ogType);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:site_name', 'SO SOCIAL');
  setMetaTag('property', 'og:locale', 'nl_NL');

  // Twitter Cards
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', title);
  setMetaTag('name', 'twitter:description', description);
  setMetaTag('name', 'twitter:image', ogImage);

  // Dynamic JSON-LD script tag for page-specific structured data
  const existingDynamicLd = document.getElementById('dynamic-page-jsonld');
  if (existingDynamicLd) {
    existingDynamicLd.remove();
  }

  if (jsonLd) {
    const script = document.createElement('script');
    script.id = 'dynamic-page-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }
}
