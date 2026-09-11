import React, { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  jsonLd?: Record<string, any>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '/',
  jsonLd,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OG Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanCanonical = `https://recruitment-bangladesh.com${canonicalPath === '/' ? '' : canonicalPath}`;
    canonical.setAttribute('href', cleanCanonical);

    // Inject dynamic JSON-LD if provided
    let dynamicJsonLd = document.getElementById('dynamic-jsonld');
    if (jsonLd) {
      if (!dynamicJsonLd) {
        dynamicJsonLd = document.createElement('script');
        dynamicJsonLd.id = 'dynamic-jsonld';
        dynamicJsonLd.setAttribute('type', 'application/ld+json');
        document.head.appendChild(dynamicJsonLd);
      }
      dynamicJsonLd.textContent = JSON.stringify(jsonLd);
    } else if (dynamicJsonLd) {
      dynamicJsonLd.remove();
    }
  }, [title, description, canonicalPath, jsonLd]);

  return null;
};
