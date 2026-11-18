import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { ServiceDetail } from '../data/servicesData';
import { updatePageSeo } from '../utils/seo';

interface ServicePageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onOpenContact: (serviceName?: string) => void;
}

export default function ServicePage({ service, onNavigate, onOpenContact }: ServicePageProps) {
  useEffect(() => {
    const canonicalUrl = `https://so-socialmedia.nl${service.path}`;

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `${canonicalUrl}#service`,
          "name": service.title,
          "serviceType": service.title,
          "description": service.metaDescription,
          "provider": {
            "@type": ["Organization", "ProfessionalService"],
            "name": "SO SOCIAL",
            "url": "https://so-socialmedia.nl"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Nederland"
          },
          "url": canonicalUrl
        }
      ]
    };

    updatePageSeo({
      title: service.seoTitle,
      description: service.metaDescription,
      canonicalUrl,
      jsonLd
    });

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [service]);

  return (
    <article className="min-h-screen bg-[#FAF9F5] pt-24 md:pt-32 pb-20 md:pb-28">
      
      {/* Minimal Back Link */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10 md:mb-14">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-light tracking-[0.18em] uppercase text-black/55 hover:text-[#B19A78] transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          <span>Terug naar home</span>
        </button>
      </div>

      {/* Intro Section — Less is More */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clean Editorial Intro */}
          <div className="lg:col-span-7">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-4">
              DIENST
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08] mb-6">
              {service.title}
            </h1>

            <p className="font-serif italic text-lg sm:text-xl text-[#B19A78] leading-relaxed mb-8">
              {service.heroSubtitle}
            </p>

            <div className="space-y-5 text-sm sm:text-base md:text-lg text-black/70 font-light leading-relaxed max-w-xl">
              <p>{service.leadParagraph}</p>
              <p>{service.secondaryParagraph}</p>
            </div>
          </div>

          {/* Right Column: Clean Editorial Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#E2DFD8] bg-[#EAEAE6]">
              <img
                src={service.image}
                alt={service.imageAlt}
                className="w-full h-full object-cover [transform:translateZ(0)]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Dark Rounded Editorial CTA Card matching reference screenshot */}
      <section className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#24201B] px-8 py-20 sm:px-14 sm:py-28 text-center shadow-2xl">
          {/* Soft warm glow in top-left corner matching reference */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[radial-gradient(circle,rgba(177,154,120,0.22)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[radial-gradient(circle,rgba(177,154,120,0.12)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.35em] uppercase text-[#B19A78] block mb-6">
              WANNEER DURF JIJ DE STAP TE ZETTEN?
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-[54px] font-normal tracking-tight text-[#F5F2EC] leading-[1.15] mb-6">
              Klaar om jouw bedrijf online te{' '}
              <span className="italic text-[#B19A78]">onderscheiden?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F5F2EC]/65 font-light max-w-xl mx-auto leading-relaxed mb-10">
              Of je nu meer zichtbaarheid wilt of je social media op de juiste manier wilt beheren, dit is hét moment om door te pakken.
            </p>

            <button
              onClick={() => onOpenContact(service.title)}
              className="inline-flex items-center justify-center bg-[#F5F2EC] hover:bg-white text-[#1A1A1A] px-10 py-4 rounded-full text-[11px] font-medium tracking-[0.22em] uppercase transition-all duration-300 shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              START PROJECT
            </button>
          </div>
        </div>
      </section>

    </article>
  );
}
