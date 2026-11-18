import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  Facebook,
  Mail,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Star,
  Check,
  X,
  MessageSquare,
  Calendar,
  Send,
  Inbox,
  Sparkles,
  PhoneCall,
  Camera,
  Layers,
  Globe,
  Award,
  Heart,
  Share2,
  Bookmark,
  Grid,
  TrendingUp,
  HelpCircle,
  Menu,
  Compass,
  CheckCircle2
} from 'lucide-react';

// Import optimized editorial assets
import telefoonHand from './assets/images/telefoon_hand_1784023726772.jpg';
import laptopWerk from './assets/images/laptop_so_social_1790596744641.jpeg';
import portfolioShoulder from './assets/images/portfolio_shoulder_1784023763265.jpg';
import portfolioLaughing from './assets/images/portfolio_laughing_1784023788862-1.jpeg';
import grensulleLogo from './assets/images/grensulle-1.jpg';
import heroWidescreen from './assets/images/hero.jpg';
import lopen from './assets/images/lopen.jpg';
import hairBoutiqueStyle from './assets/images/hair_boutique_style_1784061805051.jpg';
import businessCardSoSocial from './assets/images/business_card_sosocial_1784281836313.jpg';
import laptopSoSocial from './assets/images/laptop_sosocial_1784281847694.jpg';
import heroCalmWorkspace from './assets/images/hero_calm_workspace_1784281822703.jpg';
import schuyrenTech from './assets/images/schuyren_tech_1788530223929.JPG';
import visitZuidLimburg from './assets/images/visit_zuid_limburg_1788530238514.jpg';

// Import SEO and Dedicated Subpages
import { servicesData, generalFaqs } from './data/servicesData';
import ServicePage from './components/ServicePage';
import FeedShowcase from './components/FeedShowcase';
import { updatePageSeo } from './utils/seo';

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  date: string;
}

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedService, setSelectedService] = useState('Social Media Management');
  const [formError, setFormError] = useState('');
  
  // Routing State
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Client-side router navigation
  const navigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Listen to browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update homepage SEO whenever on "/"
  useEffect(() => {
    if (currentPath === '/' || currentPath === '') {
      updatePageSeo({
        title: 'SO SOCIAL | Social Media, Online Marketing & Webdesign',
        description: 'SO SOCIAL helpt bedrijven groeien met professioneel socialmediabeheer, contentcreatie, online advertenties, webdesign en het bouwen van professionele websites.',
        canonicalUrl: 'https://so-socialmedia.nl/',
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "ProfessionalService"],
              "@id": "https://so-socialmedia.nl/#organization",
              "name": "SO SOCIAL",
              "alternateName": [
                "SO SOCIAL Nederland",
                "sosocial",
                "SoSocial",
                "So Social Media"
              ],
              "url": "https://so-socialmedia.nl",
              "logo": "https://so-socialmedia.nl/so_social_logo.svg",
              "email": "so.socialmedia@outlook.com",
              "founder": {
                "@type": "Person",
                "name": "Chinouk Jacobi",
                "jobTitle": "Oprichter & Creatief Directeur"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Vaals & Kerkrade",
                "addressRegion": "Limburg",
                "addressCountry": "NL"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Nederland"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/so.social.media",
                "https://www.facebook.com/sosocialchinouk/"
              ],
              "description": "SO SOCIAL (ook bekend als sosocial of SO SOCIAL Nederland) is een professioneel bureau dat bedrijven helpt met hun complete online aanwezigheid en groei. Gespecialiseerd in socialmediabeheer, socialmediamarketing, contentcreatie, socialmedia-advertenties en maatwerk webdesign."
            },
            {
              "@type": "FAQPage",
              "@id": "https://so-socialmedia.nl/#faq",
              "mainEntity": generalFaqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          ]
        }
      });
    }
  }, [currentPath]);

  // Determine active route
  const isServiceRoute = currentPath.startsWith('/diensten/');
  const currentServiceSlug = isServiceRoute ? currentPath.replace('/diensten/', '').replace(/\/$/, '') : '';
  const activeService = isServiceRoute ? servicesData[currentServiceSlug] : null;

  
  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load inquiries from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('so_social_inquiries');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Handle Form Submit via Web3Forms
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);
    setFormError('');

    const newSubmission: Submission = {
      id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
      name: formName,
      email: formEmail,
      company: formCompany || 'Persoonlijk',
      service: selectedService,
      message: formMessage,
      date: new Date().toLocaleDateString('nl-NL', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "33d9849f-16f7-427e-b0bd-5ff020aaf4f4",
          subject: `Nieuwe aanvraag via de website van SO SOCIAL!`,
          from_name: "SO SOCIAL Website",
          name: formName,
          email: formEmail,
          replyto: formEmail,
          "Bedrijfsnaam / Event": formCompany || 'Persoonlijk',
          "Gewenste Dienst": selectedService,
          message: formMessage || 'Geen bericht achtergelaten'
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Mislukt om formulier te verzenden");
      }

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem('so_social_inquiries', JSON.stringify(updated));

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setIsContactOpen(false);
        // Reset form fields
        setFormName('');
        setFormEmail('');
        setFormCompany('');
        setFormMessage('');
      }, 3500);
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setFormError("Er ging iets mis bij het versturen. Probeer het opnieuw of mail direct naar so.socialmedia@outlook.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete a submission
  const handleDeleteSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('so_social_inquiries', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#EAEAE6] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#EAEAE6] overflow-x-clip">
      
      {/* Dynamic Header / Navigation with Diensten Dropdown */}
      <nav id="main-navigation" className="fixed top-0 left-0 w-full z-40 px-4 sm:px-6 md:px-12 py-4 md:py-6 flex justify-between items-center bg-[#EAEAE6]/95 border-b border-black/5 shadow-xs">
        
        {/* Brand Logo */}
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center group text-left cursor-pointer"
          title="SO SOCIAL - Home"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-[#B19A78]/40 shadow-sm flex-shrink-0 bg-[#B19A78] group-hover:scale-105 transition-transform flex items-center justify-center">
            <img src="/assets/aistudio/download_45d5e3ee.png" alt="SO SOCIAL" className="w-full h-full object-cover translate-y-[8%] scale-[2.2]" />
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-7 lg:gap-10">
          
          {isServiceRoute && (
            <button 
              onClick={() => navigate('/')} 
              className="text-xs font-light tracking-[0.18em] uppercase text-zinc-700 hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
          )}

          {/* Diensten Dropdown Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button 
              onClick={() => {
                if (currentPath !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`inline-flex items-center gap-1.5 text-xs font-light tracking-[0.18em] uppercase hover:text-black transition-colors cursor-pointer ${
                isServiceRoute ? 'text-black border-b border-black pb-0.5' : 'text-zinc-700'
              }`}
            >
              <span>Diensten</span>
              <ChevronDown size={13} strokeWidth={1.5} className={`transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Panel */}
            <AnimatePresence>
              {isServicesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-3 mt-2 z-50"
                >
                  <div className="px-3 py-2 border-b border-zinc-100 mb-1.5">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#B19A78] uppercase">
                      Onze Diensten
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    {Object.values(servicesData).map((svc) => (
                      <button
                        key={svc.slug}
                        onClick={() => navigate(svc.path)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between group transition-colors cursor-pointer ${
                          currentPath === svc.path ? 'bg-zinc-100 text-zinc-950 font-medium' : 'text-zinc-700 hover:bg-zinc-50'
                        }`}
                      >
                        <div>
                          <div className="font-normal group-hover:text-zinc-950">{svc.title}</div>
                          <div className="text-[10px] text-zinc-400 group-hover:text-zinc-500 truncate max-w-[210px]">{svc.subtitle}</div>
                        </div>
                        <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#B19A78]" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Portfolio Anchor Link */}
          <button 
            onClick={() => {
              if (currentPath !== '/') {
                navigate('/');
                setTimeout(() => {
                  document.getElementById('feeds-showcase')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('feeds-showcase')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="text-xs font-light tracking-[0.18em] uppercase text-zinc-700 hover:text-black transition-colors cursor-pointer"
          >
            Portfolio
          </button>

          <button 
            onClick={() => setIsContactOpen(true)}
            className="text-xs font-light tracking-[0.18em] uppercase text-zinc-700 hover:text-black transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsContactOpen(true)}
            className="bg-[#1A1A1A] text-[#EAEAE6] px-3 py-1.5 rounded-full text-[10px] font-light tracking-wider uppercase"
          >
            Contact
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-white/70 border border-black/10 text-zinc-800"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-30 bg-[#EAEAE6] border-b border-black/10 p-6 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="space-y-4">
              {isServiceRoute && (
                <button
                  onClick={() => navigate('/')}
                  className="w-full text-left font-serif text-xl font-normal text-zinc-900 border-b border-black/5 pb-2"
                >
                  Home
                </button>
              )}

              <div>
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#B19A78] uppercase mb-2">
                  Diensten
                </p>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {Object.values(servicesData).map((svc) => (
                    <button
                      key={svc.slug}
                      onClick={() => navigate(svc.path)}
                      className="text-left py-1 text-xs font-light text-zinc-700 hover:text-black flex items-center justify-between"
                    >
                      <span>{svc.title}</span>
                      <ChevronRight size={12} className="text-[#B19A78]" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-black/5 pt-3 space-y-2">
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('feeds-showcase')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full text-left text-sm font-light text-zinc-800 py-1"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full text-left text-sm font-light text-zinc-800 py-1"
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conditionally Render Dedicated Service Subpage or Full Homepage */}
      {isServiceRoute && activeService ? (
        <main className="pt-20">
          <ServicePage
            service={activeService}
            onNavigate={navigate}
            onOpenContact={(srv) => {
              setSelectedService(srv || activeService.title);
              setIsContactOpen(true);
            }}
          />
        </main>
      ) : (
        <main>
          {/* Hero Section - Full screen Background Photo */}
      <header id="hero-section" className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden pt-24 md:pt-28 pb-8">
        {/* Full screen Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src={heroCalmWorkspace} 
            alt="SO SOCIAL - Modern & Minimalist Creative Studio Workspace" 
            referrerPolicy="no-referrer"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover brightness-[0.97] contrast-[0.98]"
          />
          {/* Subtle warm overlay to ensure perfect legibility of dark text without backdrop-blur flicker */}
          <div className="absolute inset-0 bg-[#EAEAE6]/20" />
        </div>

        {/* Content Layered on Top */}
        <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 text-center flex flex-col items-center my-auto py-6">
          {/* Main Display Typography */}
          <div className="mb-3">
            <h1 className="font-serif text-[12vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tight text-[#1A1A1A] leading-[0.9] uppercase drop-shadow-sm">
              SO SOCIAL
            </h1>
          </div>

          {/* Clean Subtitle Below SO SOCIAL (no background box) */}
          <div className="mb-5 md:mb-6">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.28em] sm:tracking-[0.42em] text-[#8F7959] uppercase">
              MARKETING & SOCIAL MEDIA BUREAU
            </span>
          </div>

          <div className="w-16 h-[2px] bg-[#B19A78] rounded-full mb-5 md:mb-6" />

          <div className="mb-6 md:mb-8 max-w-3xl bg-white/85 px-5 py-6 sm:px-8 sm:py-8 rounded-3xl border border-[#B19A78]/30 shadow-sm">
            <div className="mb-3">
              <p className="font-sans text-xs sm:text-sm md:text-base font-bold tracking-[0.12em] text-[#1A1A1A] uppercase leading-relaxed max-w-2xl mx-auto">
                Wij bouwen esthetische feeds, converterende campagnes & krachtige online herkenbaarheid
              </p>
            </div>
            <p className="font-sans text-[11px] sm:text-xs md:text-sm font-light text-[#1A1A1A]/85 mt-3 max-w-xl mx-auto leading-relaxed">
              SO SOCIAL is de ultieme partner voor social media management, online & offline marketing en strategische PR, waarbij we resultaatgerichte campagnes combineren met herkenbare visuele esthetiek.
            </p>
          </div>

          {/* Primary Action Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#services"
              className="inline-flex items-center gap-3 bg-[#B19A78] text-white hover:bg-[#9E8766] px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-102 cursor-pointer"
            >
              Onze Expertise <ArrowRight size={14} />
            </a>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 bg-white/85 hover:bg-white text-[#1A1A1A] border border-[#B19A78]/45 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-sm hover:scale-102 cursor-pointer"
            >
              Samenwerken
            </button>
          </div>
        </div>
      </header>

      {/* General Intro Section */}
      <section id="intro" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 px-6 md:px-12 bg-[#FAF9F5] flex items-center justify-center border-y border-[#E2DFD8]">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-4">
              KLAAR OM JE TE ONDERSCHEIDEN?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-900 mb-8 leading-[1.15]">
              Een krachtig{' '}
              <span className="font-serif italic font-normal text-[#B19A78]">
                online visitekaartje,
              </span>{' '}
              zonder dat je er omkijken naar hebt.
            </h2>
            <div className="space-y-5 text-sm sm:text-base md:text-lg text-black/70 font-light leading-relaxed max-w-3xl mx-auto">
              <p>
                Wij helpen je met het beheer en de marketing van jouw socials, van contentcreatie tot planning en strategie. We nemen het volledige proces uit handen en zorgen ervoor dat jouw socialmediakanalen een krachtig online visitekaartje zijn.
              </p>
              <p>
                Of je nu meer zichtbaarheid wilt voor je bedrijf of simpelweg je social media op de juiste manier wilt beheren, dit is hét moment om door te pakken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Diensten Section */}
      <section id="services" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-36 px-6 md:px-12 bg-white/40">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-3">EXPERTISE</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A]">
                Onze Diensten
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-black/70 font-light leading-relaxed">
              Wij vertalen jouw merkwaarde naar impactvolle online en offline belevingen. Van doeltreffende social media en strategische stadsmarketing tot maatwerk webdesign, development en zorgeloos onderhoud.
            </p>
          </div>

          {/* Services Grid with Custom Interactive Hover Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8">
            
            {/* Service 1: Social Media Management */}
            <div 
              id="service-card-1"
              onClick={() => navigate('/diensten/social-media-management')}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={telefoonHand} 
                  alt="Social Media Management - telefoon in hand" 
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out [transform:translateZ(0)]"
                />
                <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-lg shadow-sm">
                  <PhoneCall size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Social Media Management
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 text-[#B19A78]" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed flex-grow">
                Volledige ontzorging van jouw social media kanalen. Van een doordachte contentstrategie en esthetische grid-planning tot copywriting, publicatie en community engagement.
              </p>
            </div>

            {/* Service 2: Fotografie */}
            <div 
              id="service-card-2"
              onClick={() => navigate('/diensten/fotografie')}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={businessCardSoSocial} 
                  alt="Fotografie - SO SOCIAL" 
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out [transform:translateZ(0)]"
                />
                <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-lg shadow-sm">
                  <Camera size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Fotografie
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 text-[#B19A78]" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed flex-grow">
                Scroll-stoppende beelden die de aandacht direct grijpen. Wij verzorgen professionele merkfotografie, sfeerbeelden, bedrijfs- en productfotografie die perfect aansluiten bij jouw huisstijl.
              </p>
            </div>

            {/* Service 3: Webdesign */}
            <div 
              id="service-card-3"
              onClick={() => navigate('/diensten/webdesign')}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={laptopWerk} 
                  alt="Webdesign - SO SOCIAL" 
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out [transform:translateZ(0)]"
                />
                <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-lg shadow-sm">
                  <Globe size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Webdesign
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 text-[#B19A78]" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed flex-grow">
                Een op maat gemaakte, conversiegerichte website die jouw merkidentiteit ademt. Van doordacht maatwerk webdesign en snelle mobiele ontwikkeling tot betrouwbaar onderhoud en updates.
              </p>
            </div>

            {/* Service 4: Marketing Management */}
            <div 
              id="service-card-4"
              onClick={() => navigate('/diensten/marketing-management')}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={laptopSoSocial} 
                  alt="Marketing Management - SO SOCIAL" 
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out [transform:translateZ(0)]"
                />
                <div className="absolute top-4 left-4 bg-white/95 p-2 rounded-lg shadow-sm">
                  <Layers size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Marketing Management
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 text-[#B19A78]" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed flex-grow">
                Wij zetten jouw onderneming, evenement of regio krachtig op de kaart. Met strategisch marketing management combineren we online campagnes, PR, city marketing en merkpositionering voor blijvende groei.
              </p>
            </div>

          </div>


          {/* Quick CTA banner */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-black/90 hover:scale-102 transition-all shadow-lg cursor-pointer"
            >
              Vraag vrijblijvend intake aan <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* Feeds Showcase Section (EVEN GLUREN - Een paar feeds die we maakten) */}
      <FeedShowcase />


      {/* Portfolio / Selected Work Section */}
      <section id="portfolio" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-36 px-6 md:px-12 bg-[#EAEAE6]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-3">CURATIE</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#1A1A1A]">
                Selected Work
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-black/70 font-light leading-relaxed">
              Een selectie van ons werk waar we strategie, pure esthetiek en doeltreffende PR hebben laten samensmelten.
            </p>
          </div>

          {/* Symmetrical Elegant Portfolio Grid */}
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            
            {/* Project 1: City marketing voor Kerkrade */}
            <div 
              id="portfolio-item-1"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={portfolioShoulder} 
                alt="City Marketing Gemeente Kerkrade" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">CITY MARKETING</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Gemeente Kerkrade</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Strategische city marketing, online & offline activaties en herkenbare campagnes die lokale trots en stedelijke initiatieven opvallend op de kaart zetten.
                </p>
              </div>
            </div>

            {/* Project: Visit Zuid Limburg (City Marketing) */}
            <div 
              id="portfolio-item-visit-zuid-limburg"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={visitZuidLimburg} 
                alt="City Marketing - Visit Zuid Limburg" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">CITY MARKETING & EVENT PR</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Visit Zuid Limburg</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  City marketing en PR voor events zoals de Valkenburgse Bokkenweken. Strategische campagnes en visuele beleving die regionale tradities en bezoekersstromen krachtig versterken.
                </p>
              </div>
            </div>

            {/* Project 2: Social media management voor kapster (Hair Boutique Salon M) */}
            <div 
              id="portfolio-item-2"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={hairBoutiqueStyle} 
                alt="Social Media Management - Hair Boutique Salon M" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Hair Boutique Salon M</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Cureren van een luxueuze, warme Instagram-feed. Door esthetische branding en scroll-stoppende Reels genereren we continu directe boekingen en organisch bereik.
                </p>
              </div>
            </div>

            {/* Project: Schuyren Installatietechniek (Social media management) */}
            <div 
              id="portfolio-item-schuyren"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={schuyrenTech} 
                alt="Social Media Management - Schuyren Installatietechniek" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Schuyren Installatietechniek</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Duurzaam vakmanschap en innovatieve installaties vertaald naar een herkenbare, professionele social mediastrategie.
                </p>
              </div>
            </div>

            {/* Project 3: Social media management voor schilder en tegelwerk */}
            <div 
              id="portfolio-item-3"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={portfolioLaughing} 
                alt="Social Media Management - On Point Schilder & Tegelwerk" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">On Point Schilder & Tegelwerk</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Het transformeren van puur vakmanschap naar een premium online portfolio. We brengen gerealiseerde projecten in beeld om hoogwaardige klanten aan te trekken.
                </p>
              </div>
            </div>

            {/* Project 4: CV de Grensülle Vols */}
            <div 
              id="portfolio-item-4"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={grensulleLogo} 
                alt="CV de Grensülle Vols — Event PR & Poster Design" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">EVENT MARKETING & PR</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">CV de Grensülle Vols</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Ontwerp van opvallende fysieke en digitale posters, flyers en social PR-campagnes die zorgen voor herkenbare en drukbezochte regio-evenementen.
                </p>
              </div>
            </div>

            {/* Project: Grand Café Jules (Social Media Management) */}
            <div 
              id="portfolio-item-jules"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src="/assets/aistudio/WhatsApp_Image_2026-11-18_at_16.29.59_4c8e58d5.jpeg" 
                alt="Social Media Management - Grand Café Jules" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Grand Café Jules</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Sfeervolle fotografie, warme culinaire storytelling en een consistente Instagram-feed die de gastvrijheid en ambiance van Grand Café Jules direct tot leven brengen.
                </p>
              </div>
            </div>

            {/* Project 5: Voetbalvereniging Rood Groen LVC'01 */}
            <div 
              id="portfolio-item-5"
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-zinc-900"
            >
              <img 
                src={heroWidescreen} 
                alt="Rood Groen LVC'01 — Social Media Partner" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA PARTNER</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Rood Groen LVC'01</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Als trotse social media partner verzorgen en versterken we de online aanwezigheid van voetbalvereniging Rood Groen LVC'01 uit Vaals & Lemiers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial / Review Section */}
      <section id="reviews" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-36 px-6 md:px-12 bg-white relative overflow-hidden">

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-3">RECENSIES</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Wat Onze <span className="text-[#B19A78]">Opdrachtgevers</span> Zeggen
            </h2>
            <p className="text-sm text-black/60 font-light leading-relaxed">
              Wij bouwen aan langdurige partnerschappen gebaseerd op visuele perfectie en tastbaar resultaat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Review 1: CV de Grensülle Vols */}
            <div className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-colors duration-300">
              <div>
                <div className="flex justify-end items-center mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#B19A78] text-[#B19A78]" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-6">
                  <p className="font-serif text-base sm:text-lg italic leading-relaxed text-[#1A1A1A]">
                    "Wij als CV de Grensülle zijn zeer tevreden met de ontworpen posters. Mooie in het oog springende PR voor onze evenementen! Veel dank aan So Social voor alle hulp en inzet! Een echte aanrader!"
                  </p>
                </blockquote>
              </div>
              <div className="border-t border-black/5 pt-4 mt-auto">
                <p className="font-bold tracking-[0.15em] text-[11px] text-[#1A1A1A] uppercase">
                  — CV de Grensülle Vols
                </p>
                <p className="text-[10px] text-black/50 tracking-wider mt-0.5">
                  Evenementen PR & Grafisch Ontwerp
                </p>
              </div>
            </div>

            {/* Review 2: On Point Schilder & Tegelwerk */}
            <div className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-colors duration-300">
              <div>
                <div className="flex justify-end items-center mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#B19A78] text-[#B19A78]" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-6">
                  <p className="font-serif text-base sm:text-lg italic leading-relaxed text-[#1A1A1A]">
                    "Sinds we met SO SOCIAL samenwerken is onze online aanwezigheid enorm professioneel geworden. Chinouk heeft onze projecten prachtig in kaart gebracht. Onze Instagram-pagina fungeert nu als een premium digitaal portfolio waarmee we direct de juiste particuliere en zakelijke klanten aantrekken!"
                  </p>
                </blockquote>
              </div>
              <div className="border-t border-black/5 pt-4 mt-auto">
                <p className="font-bold tracking-[0.15em] text-[11px] text-[#1A1A1A] uppercase">
                  — Pim
                </p>
                <p className="text-[10px] text-black/50 tracking-wider mt-0.5">
                  On Point Schilder & Tegelwerk
                </p>
              </div>
            </div>

            {/* Review 3: Hair Boutique Salon M */}
            <div className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-colors duration-300">
              <div>
                <div className="flex justify-end items-center mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#B19A78] text-[#B19A78]" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-6">
                  <p className="font-serif text-base sm:text-lg italic leading-relaxed text-[#1A1A1A]">
                    "Onze social feeds stralen nu exact de luxe en warmte uit die klanten in de salon ervaren. Chinouk vertaalt onze visie perfect naar beeld. De interactie op onze posts is enorm gestegen en we krijgen continu nieuwe boekingen via Instagram!"
                  </p>
                </blockquote>
              </div>
              <div className="border-t border-black/5 pt-4 mt-auto">
                <p className="font-bold tracking-[0.15em] text-[11px] text-[#1A1A1A] uppercase">
                  — Myrthe Starren
                </p>
                <p className="text-[10px] text-black/50 tracking-wider mt-0.5">
                  Hair Boutique Salon M
                </p>
              </div>
            </div>

            {/* Review 4: Centrum Manager Raoul Deckers */}
            <div className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-colors duration-300">
              <div>
                <div className="flex justify-end items-center mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#B19A78] text-[#B19A78]" />
                    ))}
                  </div>
                </div>
                <blockquote className="mb-6">
                  <p className="font-serif text-base sm:text-lg italic leading-relaxed text-[#1A1A1A]">
                    "Als Centrum Manager werk ik nauw samen met Chinouk. Haar strategische blik op marketing en creatieve designs brengen lokale initiatieven en evenementen echt tot leven. Ze schakelt razendsnel, is uiterst betrouwbaar en weet de gemeenschap zowel online als offline te verbinden!"
                  </p>
                </blockquote>
              </div>
              <div className="border-t border-black/5 pt-4 mt-auto">
                <p className="font-bold tracking-[0.15em] text-[11px] text-[#1A1A1A] uppercase">
                  — Raoul Deckers
                </p>
                <p className="text-[10px] text-black/50 tracking-wider mt-0.5">
                  Centrum Manager
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Personal Intro / About Section (Right before Get in Touch) */}
      <section id="about" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 px-6 md:px-12 bg-[#EAEAE6]/40 flex items-center justify-center border-t border-black/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] rounded-t-full overflow-hidden shadow-2xl border border-black/5 bg-[#EAEAE6]">
              <img 
                src={lopen} 
                alt="Chinouk Jacobi - Founder & Creative Director of SO SOCIAL" 
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover [transform:translateZ(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#B19A78] uppercase block mb-3">CREATIEF DIRECTEUR</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-6 leading-tight">
                "Wij vangen de ware essentie van jouw merk in pure digitale esthetiek"
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-black/70 font-light leading-relaxed">
                <p>
                  Mijn naam is <strong>Chinouk Jacobi</strong>, de oprichter van SO SOCIAL. Sinds de oprichting in 2024 geloven we dat social media niet louter functioneel moet zijn; het is de belangrijkste digitale etalage van jouw merk en moet de bezoeker direct betoveren.
                </p>
                <p>
                  Wij ontzorgen commerciële bedrijven, overheden en spraakmakende evenementen volledig. Of het nu gaat om strategische city marketing, het ontwerpen van opvallende posters en PR voor regio-events, of het cureren van een oogstrelende, consistente Instagram-feed voor alle ambitieuze ondernemingen; wij brengen visuele klasse samen met een resultaatgerichte digitale groeistrategie.
                </p>
              </div>

              {/* Founder quote signature */}
              <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-serif text-lg font-semibold italic text-[#1A1A1A]">
                  Chinouk Jacobi
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-black/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0" />
                  <span>Allround Marketing & Communicatie</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

        </main>
      )}

      {/* Interactive Contact Footer */}
      <footer id="contact" className="scroll-mt-20 md:scroll-mt-28 min-h-[70vh] flex flex-col justify-between bg-[#111111] text-[#EAEAE6] px-6 py-12 md:px-12 md:py-20 relative overflow-hidden">

        {/* Top Branding Bar */}
        <div className="flex justify-between items-center border-b border-white/10 pb-8">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-3 font-serif text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-[#B19A78]/40 bg-[#B19A78] flex items-center justify-center">
              <img src="/assets/aistudio/download_45d5e3ee.png" alt="SO SOCIAL" className="w-full h-full object-cover translate-y-[8%] scale-[2.2]" />
            </div>
            SO SOCIAL
          </button>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/so.social.media" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-[#EAEAE6]"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://www.facebook.com/sosocialchinouk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-[#EAEAE6]"
              title="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="mailto:so.socialmedia@outlook.com" 
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:scale-105 transition-all text-[#EAEAE6]"
              title="E-mail ons"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Big Impact Core Content */}
        <div className="my-auto py-16 text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-white/40 uppercase block mb-6">READY TO GROW?</span>
          
          {/* Main big CTA */}
          <h2 
            onClick={() => setIsContactOpen(true)}
            className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight cursor-pointer hover:italic hover:text-[#EAEAE6] transition-all duration-300 select-none uppercase"
          >
            GET IN TOUCH
          </h2>
          
          <p className="max-w-md text-xs sm:text-sm text-white/50 font-light mt-8 leading-relaxed">
            Klik hierboven of stuur ons direct een bericht om vrijblijvend de mogelijkheden te bespreken.
          </p>
        </div>

        {/* Footer Bottom Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-center md:text-left gap-6">
          <div className="text-[10px] sm:text-xs text-white/40 tracking-[0.2em] leading-relaxed uppercase">
            SO SOCIAL MEDIA <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> <span className="text-white/60">SITE GEMAAKT DOOR <button type="button" onClick={() => setIsContactOpen(true)} className="text-white/80 hover:text-white underline underline-offset-4 decoration-white/40 hover:decoration-white transition-colors cursor-pointer font-medium uppercase tracking-[0.2em]">SO SOCIAL</button></span>
          </div>

          <div className="text-[10px] text-white/30 tracking-widest uppercase">
            Gevestigd in Vaals & Kerkrade, Nederland | Actief door heel Nederland
          </div>
        </div>

      </footer>

      {/* Floating Demonstration Inbox Widget */}
      {submissions.length > 0 && (
        <div className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setIsAdminOpen(true)}
            className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-black text-[#EAEAE6] px-4 py-2.5 rounded-full text-xs font-medium tracking-wider shadow-xl border border-white/10 animate-bounce cursor-pointer"
          >
            <Inbox size={14} /> Inbox ({submissions.length})
          </button>
        </div>
      )}

      {/* INTAKE / CONTACT FORM SLIDE-OUT DRAWER */}
      <AnimatePresence>
        {isContactOpen && (
          <div id="inquiry-modal" className="fixed inset-0 z-50 flex justify-end">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Slider Drawer Content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-lg h-full bg-[#EAEAE6] text-[#1A1A1A] shadow-2xl overflow-y-auto px-6 py-8 sm:p-10 flex flex-col justify-between"
            >
              
              {/* Header */}
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase">PROJECT INTAKE</span>
                  <button 
                    onClick={() => setIsContactOpen(false)}
                    className="p-1 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="font-serif text-3xl font-bold tracking-tight mb-2">Laten we samenwerken</h3>
                <p className="text-xs sm:text-sm text-black/60 font-light mb-8">
                  Vul onderstaand formulier in of mail direct naar <a href="mailto:so.socialmedia@outlook.com" className="underline font-normal hover:opacity-80">so.socialmedia@outlook.com</a>
                </p>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-8 text-center border border-black/5 shadow-md my-10"
                  >
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="text-emerald-600" size={32} />
                    </div>
                    <h4 className="font-serif text-xl font-bold mb-2">Bericht ontvangen!</h4>
                    <p className="text-xs text-black/60 font-light">
                      Veel dank voor je aanvraag! We nemen binnen 24 uur contact met je op om een intake in te plannen.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-wider uppercase text-black/60 mb-2">Volledige Naam *</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Naam"
                        className="w-full bg-white/70 border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-wider uppercase text-black/60 mb-2">E-mailadres *</label>
                      <input 
                        type="email" 
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="naam@bedrijf.nl"
                        className="w-full bg-white/70 border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-wider uppercase text-black/60 mb-2">Bedrijfsnaam / Event</label>
                      <input 
                        type="text" 
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Optioneel"
                        className="w-full bg-white/70 border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-wider uppercase text-black/60 mb-3">Gewenste Dienst</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Social Media Management', 'Fotografie', 'Webdesign', 'Marketing Management'].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setSelectedService(srv)}
                            className={`px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide border transition-all cursor-pointer ${
                              selectedService === srv 
                                ? 'bg-[#1A1A1A] text-white border-transparent' 
                                : 'bg-white/50 border-black/10 hover:bg-white/80'
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-bold tracking-wider uppercase text-black/60 mb-2">
                        Vertel ons over je project
                      </label>
                      <textarea 
                        rows={3}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Wat zijn je doelen en wanneer wil je starten?"
                        className="w-full bg-white/70 border border-black/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>

                    {formError && (
                      <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-xs text-red-700">
                        {formError}
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#1A1A1A] hover:bg-black disabled:bg-[#1A1A1A]/45 disabled:cursor-not-allowed text-white py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>Versturen... <span className="inline-block w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                      ) : (
                        <>Aanvraag Versturen <Send size={14} /></>
                      )}
                    </button>

                  </form>
                )}
              </div>

              {/* Back to direct mail options */}
              <div className="mt-8 border-t border-black/10 pt-6 text-center">
                <a 
                  href="mailto:so.socialmedia@outlook.com?subject=Aanvraag via Portfolio Website"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-black/60 hover:text-black transition-colors"
                >
                  <Mail size={14} /> Of stuur een directe mail
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ADMIN INBOX DRAWER (To preview submitted entries) */}
      <AnimatePresence>
        {isAdminOpen && (
          <div id="submissions-panel" className="fixed inset-0 z-50 flex justify-start">
            
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAdminOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Slider Drawer Content */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-lg h-full bg-[#EAEAE6] text-[#1A1A1A] shadow-2xl overflow-y-auto p-6 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase flex items-center gap-2">
                    <Inbox size={14} /> LOCAL INBOX
                  </span>
                  <button 
                    onClick={() => setIsAdminOpen(false)}
                    className="p-1 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </div>

                <h3 className="font-serif text-3xl font-bold tracking-tight mb-2">Aanvragen</h3>
                <p className="text-xs text-black/60 font-light mb-8">
                  Hieronder vind je de projectintakes die lokaal op dit apparaat zijn binnengekomen.
                </p>

                <div className="space-y-4">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="bg-white rounded-xl p-5 border border-black/5 shadow-sm relative">
                      <button 
                        onClick={() => handleDeleteSubmission(sub.id)}
                        className="absolute top-4 right-4 text-black/40 hover:text-red-600 transition-colors cursor-pointer"
                        title="Verwijder aanvraag"
                      >
                        <X size={16} />
                      </button>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-0.5 bg-black/5 rounded text-[10px] font-semibold text-black/70">
                          {sub.service}
                        </span>
                      </div>

                      <h4 className="font-bold text-sm text-black">{sub.name}</h4>
                      <p className="text-xs text-black/50 mb-2">{sub.company} | {sub.email}</p>
                      
                      {sub.message && (
                        <p className="text-xs text-black/80 bg-[#EAEAE6]/30 p-2.5 rounded-lg border border-black/5 font-light">
                          "{sub.message}"
                        </p>
                      )}
                      
                      <div className="text-[9px] text-black/40 mt-3 text-right">
                        {sub.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-6">
                <button 
                  onClick={() => {
                    localStorage.removeItem('so_social_inquiries');
                    setSubmissions([]);
                    setIsAdminOpen(false);
                  }}
                  className="w-full text-center text-xs text-red-600 font-semibold hover:underline"
                >
                  Leeg inbox geschiedenis
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
