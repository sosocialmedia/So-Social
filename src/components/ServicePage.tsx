import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Check, 
  ArrowRight, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  TrendingUp, 
  Home
} from 'lucide-react';
import { ServiceDetail } from '../data/servicesData';
import { updatePageSeo } from '../utils/seo';

interface ServicePageProps {
  service: ServiceDetail;
  onNavigate: (path: string) => void;
  onOpenContact: (serviceName?: string) => void;
}

export default function ServicePage({ service, onNavigate, onOpenContact }: ServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Update SEO, OpenGraph and JSON-LD when viewing this service
  useEffect(() => {
    const canonicalUrl = `https://so-socialmedia.nl${service.path}`;

    // Schema.org Graph for this specific service
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://so-socialmedia.nl/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Diensten",
              "item": "https://so-socialmedia.nl/#services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": canonicalUrl
            }
          ]
        },
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
        },
        {
          "@type": "FAQPage",
          "@id": `${canonicalUrl}#faq`,
          "mainEntity": service.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
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
    <article className="min-h-screen pt-28 md:pt-36 pb-20">
      
      {/* Breadcrumb Navigation (Essential for SEO, Accessibility & UX) */}
      <nav aria-label="Kruimelpad" className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <ol className="flex items-center flex-wrap gap-2 text-xs text-black/60 font-medium">
          <li>
            <button 
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer"
            >
              <Home size={13} className="text-black/50" />
              <span>Home</span>
            </button>
          </li>
          <li className="text-black/30">
            <ChevronRight size={13} />
          </li>
          <li>
            <button 
              onClick={() => onNavigate('/#services')}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Diensten
            </button>
          </li>
          <li className="text-black/30">
            <ChevronRight size={13} />
          </li>
          <li className="text-black font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
            {service.title}
          </li>
        </ol>
      </nav>

      {/* Hero Header Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Title & Narrative */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-black/10 text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#1A1A1A] uppercase shadow-xs mb-6">
                <Sparkles size={13} className="text-[#B88746]" />
                {service.badge}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08] mb-6">
                {service.h1}
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-black/80 font-normal leading-relaxed mb-6">
                {service.heroSubtitle}
              </p>

              <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-black/5 mb-8">
                <p className="text-sm md:text-base text-black/70 font-light leading-relaxed">
                  {service.leadParagraph}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onOpenContact(service.title)}
                  className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] text-[#EAEAE6] hover:bg-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-102 cursor-pointer"
                >
                  Start Project met SO SOCIAL <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('werkwijze');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#1A1A1A] border border-black/10 px-7 py-4 rounded-full text-xs font-semibold tracking-widest uppercase transition-all shadow-xs cursor-pointer"
                >
                  Bekijk Werkwijze
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Feature Image */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 bg-[#E6E4DD]"
            >
              <img 
                src={service.image} 
                alt={service.imageAlt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="text-[10px] font-bold tracking-[0.25em] text-white/75 uppercase block mb-1">
                  SO SOCIAL EXPERTISE
                </span>
                <p className="font-serif text-lg font-semibold">
                  {service.title} voor toonaangevende merken
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Section: Client Benefits (Voordelen voor jouw bedrijf) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">
              WAAROM SO SOCIAL
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-4">
              De voordelen van onze aanpak
            </h2>
            <p className="text-sm md:text-base text-black/65 font-light leading-relaxed">
              Wij combineren visuele esthetiek met meetbare commerciële strategie, zodat jouw investering direct merkwaarde en resultaat oplevert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-[#F7F6F2] rounded-2xl p-6 lg:p-7 border border-black/5 hover:border-black/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1A1A1A] mb-5 shadow-xs border border-black/5">
                    <ShieldCheck size={20} className="text-[#1A1A1A]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: In-depth Service Offerings (Wat we voor je doen) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#EAEAE6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">
                DIENSTVERLENING IN DETAIL
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A]">
                Wat we voor jouw merk doen
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-black/70 font-light leading-relaxed">
              Transparante en professionele invulling van {service.title.toLowerCase()}, afgestemd op jouw unieke doelen en doelgroep.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {service.offerings.map((offering, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 lg:p-8 border border-black/5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#B88746] tracking-widest uppercase block mb-2">
                    Module 0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-4">
                    {offering.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed mb-6">
                    {offering.description}
                  </p>

                  <div className="border-t border-black/5 pt-5 space-y-2.5">
                    {offering.highlights.map((hl, hlIdx) => (
                      <div key={hlIdx} className="flex items-start gap-2.5 text-xs text-black/80 font-medium">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deliverables checklist box */}
          <div className="mt-12 bg-[#1A1A1A] text-[#EAEAE6] rounded-3xl p-8 lg:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <span className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase block mb-2">
                  CONCREET RESULTAAT
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                  Wat je concreet van ons ontvangt
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                  Geen vage beloftes, maar heldere deliverables die direct zichtbaar en inzetbaar zijn voor jouw onderneming.
                </p>
              </div>
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} />
                    </div>
                    <span className="text-xs text-white/90 font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: 4-Step Process (Onze werkwijze) */}
      <section id="werkwijze" className="py-20 md:py-28 px-6 md:px-12 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">
              STAP VOOR STAP
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-4">
              Onze bewezen werkwijze
            </h2>
            <p className="text-sm md:text-base text-black/65 font-light leading-relaxed">
              Van de eerste kennismaking tot de definitieve uitvoering: we houden de communicatielijnen kort en transparant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, sIdx) => (
              <div 
                key={sIdx}
                className="relative bg-[#FBFBFA] rounded-2xl p-6 lg:p-7 border border-black/5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-black/20 block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-black/65 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Frequently Asked Questions (FAQ) for GEO / AEO & FAQPage schema */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#EAEAE6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">
              DUIDELIJKHEID & ANTWOORDEN
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1A1A1A] mb-4">
              Veelgestelde vragen over {service.title.toLowerCase()}
            </h2>
            <p className="text-xs sm:text-sm text-black/70 font-light leading-relaxed">
              Heb je een andere vraag over onze dienstverlening? Neem gerust contact op voor persoonlijk advies.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div 
                  key={fIdx}
                  className="bg-white rounded-2xl border border-black/5 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-black/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1A1A1A]">
                      {faq.question}
                    </span>
                    <span className={`p-1.5 rounded-full bg-black/5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown size={16} className="text-black/70" />
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-black/70 font-light leading-relaxed border-t border-black/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section: High-converting Call to Action Banner */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#111111] text-[#EAEAE6]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase block mb-4">
            KLAAR VOOR DE VOLGENDE STAP?
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
            Laat {service.title} professioneel verzorgen
          </h2>
          <p className="max-w-xl text-xs sm:text-sm md:text-base text-white/60 font-light leading-relaxed mb-8">
            Versterk jouw merkherkenning, online zichtbaarheid en commerciële resultaten met het creatieve team van SO SOCIAL.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenContact(service.title)}
              className="inline-flex items-center gap-3 bg-white text-[#111111] hover:bg-[#EAEAE6] px-9 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-xl hover:scale-102 cursor-pointer"
            >
              Vraag Vrijblijvende Intake Aan <ArrowRight size={15} />
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white px-6 py-4 text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer"
            >
              Terug naar Overzicht
            </button>
          </div>
        </div>
      </section>

      {/* Section: Related Services & Internal Linking (Key SEO requirement) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-2">
                COMPLETE ONTZORGING
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#1A1A1A]">
                Andere diensten van SO SOCIAL
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/#services')}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-black hover:text-black/60 transition-colors cursor-pointer"
            >
              Bekijk Alle Diensten <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.relatedServices.map((rel, rIdx) => (
              <div
                key={rIdx}
                onClick={() => onNavigate(rel.path)}
                className="group bg-[#F7F6F2] hover:bg-white rounded-2xl p-6 border border-black/5 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-black flex items-center justify-between mb-3">
                    {rel.title}
                    <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-xs text-black/65 font-light leading-relaxed">
                    {rel.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-black/5 text-[10px] font-bold tracking-wider uppercase text-black/50 group-hover:text-black transition-colors">
                  Lees meer over deze dienst →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </article>
  );
}
