import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Instagram,
  Facebook,
  Mail,
  ArrowRight,
  ChevronRight,
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
  TrendingUp
} from 'lucide-react';

// Import high-resolution generated editorial assets
import img3610_3 from './assets/images/chinouk1.jpg';
import chinoukLaptop from './assets/images/chinouk1.jpg';
import telefoonHand from './assets/images/telefoon_hand_1784023726772.jpg';
import bahoizerLook from './assets/images/bahoizerlook.jpg';
import laptopWerk from './assets/images/laptop_so_social_1790596744641.jpeg';
import portfolioShoulder from './assets/images/portfolio_shoulder_1784023763265.jpg';
import portfolioCrouching from './assets/images/portfolio_crouching_1784023774880.jpg';
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
import soSocialLogo from './assets/images/so_social_logo.svg';

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
  const [selectedService, setSelectedService] = useState('Social Management');
  
  // Interactive Growth Planner State
  const [plannerGoal, setPlannerGoal] = useState('Esthetische Instagram Feed');
  
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

  // Handle Form Submit
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    setIsSubmitting(true);

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
      const response = await fetch("https://formsubmit.co/ajax/so.socialmedia@outlook.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `Nieuwe aanvraag via de website van SO SOCIAL!`,
          "Naam": formName,
          "E-mailadres": formEmail,
          "Bedrijfsnaam / Event": formCompany || 'Persoonlijk',
          "Gewenste Dienst": selectedService,
          "Vertel ons over je project": formMessage || 'Geen bericht achtergelaten',
          _replyto: formEmail,
          _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Mislukt om formulier te verzenden via FormSubmit");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
    } finally {
      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem('so_social_inquiries', JSON.stringify(updated));

      setIsSubmitting(false);
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
    }
  };

  // Delete a submission
  const handleDeleteSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('so_social_inquiries', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#EAEAE6] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#EAEAE6] overflow-x-hidden">
      
      {/* Dynamic Header / Navigation */}
      <nav id="main-navigation" className="fixed top-0 left-0 w-full z-40 px-4 sm:px-6 md:px-12 py-4 md:py-8 flex justify-between items-center transition-all duration-300 bg-[#EAEAE6]/80 backdrop-blur-md border-b border-black/5">
        <a href="#" className="flex items-center group hover:opacity-85 transition-opacity" title="SO SOCIAL">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-black/10 shadow-sm flex-shrink-0 bg-[#E6E4DD]">
            <img src={soSocialLogo} alt="SO SOCIAL" className="w-full h-full object-contain" />
          </div>
        </a>
        <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
          <a href="#services" className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:text-black/60 transition-colors whitespace-nowrap">
            Diensten
          </a>
          <a href="#portfolio" className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:text-black/60 transition-colors whitespace-nowrap">
            Portfolio
          </a>
          <button 
            onClick={() => setIsContactOpen(true)}
            className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase hover:text-black/60 transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>
          
          {/* Subtle CTA button for Desktop */}
          <button
            onClick={() => setIsContactOpen(true)}
            className="hidden md:inline-flex items-center gap-2 bg-[#1A1A1A] text-[#EAEAE6] px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase hover:bg-black/85 transition-colors cursor-pointer"
          >
            Start Project <ChevronRight size={14} />
          </button>
        </div>
      </nav>

      {/* Hero Section - Full screen Background Photo */}
      <header id="hero-section" className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden pt-24 md:pt-28 pb-8">
        {/* Full screen Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src={heroCalmWorkspace} 
            alt="SO SOCIAL - Modern & Minimalist Creative Studio Workspace" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.97] contrast-[0.98]"
          />
          {/* Subtle warm, luxury gradient overlay to ensure perfect legibility of dark text */}
          <div className="absolute inset-0 bg-[#EAEAE6]/15 backdrop-blur-[1px]" />
        </div>

        {/* Content Layered on Top */}
        <div className="relative z-10 max-w-6xl w-full px-6 md:px-12 text-center flex flex-col items-center my-auto py-6">
          {/* Elegant top badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 md:mb-6 px-4 w-full flex justify-center"
          >
            <span className="text-[8px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.4em] text-[#1A1A1A] uppercase bg-white/85 backdrop-blur-md px-3 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/40 shadow-sm whitespace-nowrap">
              MARKETING & SOCIAL MEDIA BUREAU
            </span>
          </motion.div>

          {/* Main Display Typography */}
          <div className="overflow-hidden mb-3 md:mb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[12vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] font-bold tracking-tight text-[#1A1A1A] leading-[0.9] uppercase drop-shadow-sm"
            >
              SO SOCIAL
            </motion.h1>
          </div>

          <div className="mb-6 md:mb-8 max-w-3xl bg-white/75 backdrop-blur-md px-5 py-6 sm:px-8 sm:py-8 rounded-3xl border border-white/50 shadow-sm">
            <div className="overflow-hidden mb-3">
              <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-xs sm:text-sm md:text-base font-bold tracking-[0.12em] text-[#1A1A1A] uppercase leading-relaxed max-w-2xl mx-auto"
              >
                Wij bouwen esthetische feeds, converterende campagnes & krachtige online herkenbaarheid
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="font-sans text-[11px] sm:text-xs md:text-sm font-light text-[#1A1A1A] mt-3 max-w-xl mx-auto leading-relaxed"
            >
              SO SOCIAL is de ultieme partner voor social media management, online & offline marketing en strategische PR, waarbij we resultaatgerichte campagnes combineren met herkenbare visuele esthetiek.
            </motion.p>
          </div>

          {/* Primary Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a 
              href="#services"
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-[#EAEAE6] hover:bg-black px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-lg hover:scale-102 cursor-pointer"
            >
              Onze Expertise <ArrowRight size={14} />
            </a>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-[#1A1A1A] border border-black/5 px-8 py-3.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all shadow-sm hover:scale-102 cursor-pointer"
            >
              Samenwerken
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
          className="relative z-10 flex flex-col items-center gap-1.5 text-[9px] tracking-[0.3em] uppercase opacity-60 mt-4"
        >
          <span className="font-semibold text-black">Scroll om te ontdekken</span>
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-3.5 rounded-full bg-black"
          />
        </motion.div>
      </header>

      {/* Intro / About Section */}
      <section id="about" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 px-6 md:px-12 bg-white flex items-center justify-center border-b border-black/5">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Portrait */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[280px] h-[370px] sm:w-[320px] sm:h-[420px] rounded-t-full overflow-hidden shadow-2xl border border-black/5 bg-[#EAEAE6]"
            >
              <img 
                src={lopen} 
                alt="Chinouk Jacobi - Founder & Creative Director of SO SOCIAL" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Column: Narrative */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            >
              <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">CREATIEF DIRECTEUR</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-6 leading-tight">
                "Wij vangen de ware essentie van jouw merk in pure digitale esthetiek"
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-black/70 font-light leading-relaxed">
                <p>
                  Mijn naam is <strong>Chinouk Jacobi</strong>, de oprichter van SO SOCIAL (ook wel bekend als So Social Media). Sinds de oprichting in 2024 geloven we dat social media niet louter functioneel moet zijn; het is de belangrijkste digitale etalage van jouw merk en moet de bezoeker direct betoveren.
                </p>
                <p>
                  Wij ontzorgen commerciële bedrijven, overheden en spraakmakende evenementen volledig. Of het nu gaat om strategische city marketing (waarbij we lokale trots, stedelijke initiatieven en campagnes online en offline vormgeven), het ontwerpen van opvallende posters en PR voor regio-events, of het cureren van een oogstrelende, consistente Instagram-feed voor alle ambitieuze ondernemingen; wij brengen visuele klasse samen met een resultaatgerichte digitale groeistrategie.
                </p>
              </div>

              {/* Founder quote signature */}
              <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-serif text-lg font-semibold italic text-[#1A1A1A]">
                  Chinouk Jacobi
                </div>
                <div className="text-[10px] font-bold tracking-widest uppercase text-black/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse shrink-0" />
                  <span>Allround Marketing & Communicatie</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services / Diensten Section */}
      <section id="services" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-36 px-6 md:px-12 bg-white/40">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">EXPERTISE</span>
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
            
            {/* Service 1 */}
            <motion.div 
              id="service-card-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={telefoonHand} 
                  alt="Social Media Management - telefoon in hand" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <PhoneCall size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Social Media Management
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed mb-6 flex-grow">
                Volledige ontzorging van jouw social media kanalen. Van een doordachte contentstrategie en esthetische grid-planning tot copywriting, publicatie en community engagement. Wij zorgen voor een feed die klopt bij jouw merkidentiteit en loyale klanten aantrekt.
              </p>
              
              {/* Premium list items */}
              <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-medium tracking-wide text-black/60">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Strategie & Visuele Grid-Planning
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Copywriting & Hashtag Strategie
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Community Management & Interactie
                </div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              id="service-card-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={businessCardSoSocial} 
                  alt="High-End Content Creatie - SO SOCIAL Visitekaartje" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <Camera size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Content Creatie
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed mb-6 flex-grow">
                Scroll-stoppende visuals die de aandacht direct grijpen. Wij produceren professionele merkfotografie, esthetische sfeervideo's en dynamische short-form video's (Reels & TikToks) die perfect passen bij jouw merkbeleving en viraal potentieel benutten.
              </p>
              
              {/* Premium list items */}
              <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-medium tracking-wide text-black/60">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Reels & TikTok Videoproductie
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Professionele Brandfotografie
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Visitekaartjes, Posters & Huisstijl
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Trendbewuste Visual Storytelling
                </div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              id="service-card-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={laptopSoSocial} 
                  alt="PR & Event Branding - SO SOCIAL Laptop" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <Layers size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                PR & City Marketing
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed mb-6 flex-grow">
                Wij zetten jouw evenement, onderneming of regio op de kaart. Met strategische city marketing bouwen we aan stadsbetrokkenheid en online herkenbaarheid. Van opvallende fysieke en digitale posters tot complete regiocampagnes en commerciële PR.
              </p>
              
              {/* Premium list items */}
              <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-medium tracking-wide text-black/60">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> City- & Regiomarketing
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Poster & Flyer Designs (Fysiek & Digitaal)
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Commerciële B2B & Retail PR Campagnes
                </div>
              </div>
            </motion.div>

            {/* Service 4: Webdesign, Development & Onderhoud */}
            <motion.div 
              id="service-card-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              className="group flex flex-col h-full bg-white/80 rounded-2xl p-6 xl:p-8 border border-black/5 hover:shadow-xl hover:bg-white transition-all duration-500"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#EAEAE6]">
                <img 
                  src={laptopWerk} 
                  alt="Webdesign & Development - SO SOCIAL" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm">
                  <Globe size={18} className="text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl lg:text-xl xl:text-2xl mb-4 text-[#1A1A1A] group-hover:text-black flex items-center justify-between">
                Webdesign & Development
                <ArrowRight size={20} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
              </h3>
              <p className="text-sm md:text-base text-black/70 font-light leading-relaxed mb-6 flex-grow">
                Een op maat gemaakte, conversiegerichte website die jouw merkidentiteit ademt. Van doordacht maatwerk webdesign en snelle mobiele webdevelopment tot betrouwbaar periodiek onderhoud, hosting, veiligheidsback-ups en software-updates.
              </p>
              
              {/* Premium list items */}
              <div className="border-t border-black/10 pt-4 space-y-2 text-xs font-medium tracking-wide text-black/60">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Maatwerk Webdesign & Ontwerp
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Snelle, Mobielvriendelijke Development
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Periodiek Onderhoud & Software-updates
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-600 flex-shrink-0" /> Hosting, SSL-beveiliging & Back-ups
                </div>
              </div>
            </motion.div>

          </div>

          {/* Quick CTA banner */}
          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-black/90 hover:scale-102 transition-all shadow-lg cursor-pointer"
            >
              Vraag vrijblijvend intake aan <Sparkles size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* NEW: Interactive Strategy & Campaign Planner Section */}
      <section id="planner" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 px-6 md:px-12 bg-white border-t border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">SOCIAL PLANNING TOOL</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Ontwerp Jouw Social Plan
            </h2>
            <p className="text-sm text-black/60 font-light leading-relaxed">
              Gebruik onze interactieve planner om de ideale strategie en kanaalverdeling te berekenen op basis van jouw specifieke marketingdoelen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Box: Controls */}
            <div className="lg:col-span-6 bg-[#EAEAE6]/50 rounded-3xl p-6 sm:p-8 border border-black/5 flex flex-col justify-between">
              <div>
                {/* Select Goal */}
                <div className="mb-4">
                  <label className="block text-xs font-bold tracking-wider uppercase text-black/70 mb-4">
                    Wat is jouw belangrijkste doel?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Esthetische Instagram Feed',
                      'Commerciële Leads & Groei',
                      'City Marketing & PR',
                      'Merkbekendheid & Bereik'
                    ].map((g) => (
                      <button
                        key={g}
                        onClick={() => setPlannerGoal(g)}
                        className={`text-left p-4 rounded-xl border text-xs font-medium tracking-wide transition-all cursor-pointer ${
                          plannerGoal === g
                            ? 'bg-[#1A1A1A] text-white border-transparent shadow-md'
                            : 'bg-white border-black/5 hover:bg-white/80'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 text-xs text-black/50 font-light">
                * Onze tarieven worden altijd volledig afgestemd op jouw specifieke wensen en de omvang van jouw onderneming.
              </div>
            </div>

            {/* Right Box: Dynamic Results */}
            <div className="lg:col-span-6 bg-[#111111] text-[#EAEAE6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/2 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase block mb-2">ANALYSE & ADVIES</span>
                <h3 className="font-serif text-2xl font-bold mb-6 text-[#EAEAE6] flex items-center gap-2">
                  Gepersonaliseerde Aanpak <Sparkles size={18} />
                </h3>

                {/* Strategy Text */}
                <div className="mb-6">
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                    {plannerGoal === 'Esthetische Instagram Feed' && 'De focus ligt op het transformeren van jouw Instagram-feed tot een hoogwaardig digitaal magazine. We ontwerpen een herkenbaar kleurenpalet en een consistent grid-ontwerp om direct vertrouwen en autoriteit te wekken.'}
                    {plannerGoal === 'Commerciële Leads & Groei' && 'Voor commerciële bedrijven zetten we in op prestatiegerichte funnels, esthetische B2B/Retail advertenties en actieve community building om volgers om te zetten in loyale, betalende klanten.'}
                    {plannerGoal === 'City Marketing & PR' && 'Strategische regiomarketing en event buzz. We combineren de herkenbare offline and online uitingen van stadsmarketing met opvallende fysieke en digitale posters.'}
                    {plannerGoal === 'Merkbekendheid & Bereik' && 'Haal het maximale uit short-form video. Wij bedenken scroll-stoppende video-concepten, schrijven de scripts, en bewerken de beelden professioneel om viraal bereik en maximale online herkenbaarheid te realiseren.'}
                  </p>
                </div>

                {/* Key specs */}
                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider mb-1">Aanbevolen Frequentie</span>
                    <span className="text-xs sm:text-sm font-semibold block text-white">
                      {plannerGoal === 'Esthetische Instagram Feed' && '1-3 posts p/w + wekelijkse grid curatie & planning'}
                      {plannerGoal === 'Commerciële Leads & Groei' && '1-3 posts p/w + dagelijkse high-converting Stories & lead funnels'}
                      {plannerGoal === 'City Marketing & PR' && '1-3 posts p/w + fysieke & digitale postercampagne & PR'}
                      {plannerGoal === 'Merkbekendheid & Bereik' && '1-3 posts p/w + professionele high-end video-editing'}
                    </span>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider mb-1">Verwacht Effect</span>
                    <span className="text-xs sm:text-sm font-semibold block text-[#EAEAE6] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      {plannerGoal === 'Esthetische Instagram Feed' && 'Consistente, premium uitstraling, stijging in merkkrediet'}
                      {plannerGoal === 'Commerciële Leads & Groei' && 'Meetbare toename in leads, hogere website conversie & actieve merkfans'}
                      {plannerGoal === 'City Marketing & PR' && 'Grootschalige lokale & regionale buzz, maximale stadsbetrokkenheid & drukbezochte locaties'}
                      {plannerGoal === 'Merkbekendheid & Bereik' && '75.000+ organische weergaven per maand & viraal potentieel'}
                    </span>
                  </div>
                </div>

                {/* Bar breakdown */}
                <div className="space-y-3 mb-8">
                  <span className="text-[9px] text-white/40 block uppercase tracking-wider">Strategische Kanaalverdeling</span>
                  
                  {/* Instagram */}
                  <div>
                    <div className="flex justify-between text-[10px] text-white/70 mb-1">
                      <span>Instagram & Feed Aesthetic</span>
                      <span>{plannerGoal === 'Esthetische Instagram Feed' ? '95%' : plannerGoal === 'Commerciële Leads & Groei' ? '80%' : plannerGoal === 'City Marketing & PR' ? '55%' : '70%'}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#EAEAE6] rounded-full transition-all duration-500" 
                        style={{ width: plannerGoal === 'Esthetische Instagram Feed' ? '95%' : plannerGoal === 'Commerciële Leads & Groei' ? '80%' : plannerGoal === 'City Marketing & PR' ? '55%' : '70%' }}
                      />
                    </div>
                  </div>

                  {/* Short-Form Video */}
                  <div>
                    <div className="flex justify-between text-[10px] text-white/70 mb-1">
                      <span>Reels & TikTok (Short-Form)</span>
                      <span>{plannerGoal === 'Esthetische Instagram Feed' ? '25%' : plannerGoal === 'Commerciële Leads & Groei' ? '75%' : plannerGoal === 'City Marketing & PR' ? '45%' : '90%'}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#EAEAE6] rounded-full transition-all duration-500" 
                        style={{ width: plannerGoal === 'Esthetische Instagram Feed' ? '25%' : plannerGoal === 'Commerciële Leads & Groei' ? '75%' : plannerGoal === 'City Marketing & PR' ? '45%' : '90%' }}
                      />
                    </div>
                  </div>

                  {/* PR / Posters */}
                  <div>
                    <div className="flex justify-between text-[10px] text-white/70 mb-1">
                      <span>Fysieke & Digitale PR / Poster Campagnes</span>
                      <span>{plannerGoal === 'Esthetische Instagram Feed' ? '10%' : plannerGoal === 'Commerciële Leads & Groei' ? '20%' : plannerGoal === 'City Marketing & PR' ? '95%' : '10%'}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#EAEAE6] rounded-full transition-all duration-500" 
                        style={{ width: plannerGoal === 'Esthetische Instagram Feed' ? '10%' : plannerGoal === 'Commerciële Leads & Groei' ? '20%' : plannerGoal === 'City Marketing & PR' ? '95%' : '10%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => {
                  setSelectedService(plannerGoal);
                  setIsContactOpen(true);
                }}
                className="w-full bg-[#EAEAE6] hover:bg-[#F5F5F2] text-black py-4 rounded-xl text-xs font-bold tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                Dit Plan Vrijblijvend Bespreken <Send size={14} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio / Selected Work Section */}
      <section id="portfolio" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-36 px-6 md:px-12 bg-[#EAEAE6]">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">CURATIE</span>
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
            <motion.div 
              id="portfolio-item-1"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-white"
            >
              <img 
                src={portfolioShoulder} 
                alt="City Marketing Gemeente Kerkrade" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">CITY MARKETING</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Gemeente Kerkrade</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Strategische city marketing, online & offline activaties en herkenbare campagnes die lokale trots en stedelijke initiatieven opvallend op de kaart zetten.
                </p>
              </div>
            </motion.div>

            {/* Project: Visit Zuid Limburg (City Marketing) */}
            <motion.div 
              id="portfolio-item-visit-zuid-limburg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-white"
            >
              <img 
                src={visitZuidLimburg} 
                alt="City Marketing - Visit Zuid Limburg" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">CITY MARKETING & EVENT PR</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Visit Zuid Limburg</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  City marketing en PR voor events zoals de Valkenburgse Bokkenweken. Strategische campagnes en visuele beleving die regionale tradities en bezoekersstromen krachtig versterken.
                </p>
              </div>
            </motion.div>

            {/* Project 2: Social media management voor kapster (Hair Boutique Salon M) */}
            <motion.div 
              id="portfolio-item-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-white"
            >
              <img 
                src={hairBoutiqueStyle} 
                alt="Social Media Management - Hair Boutique Salon M" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Hair Boutique Salon M</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Cureren van een luxueuze, warme Instagram-feed. Door esthetische branding en scroll-stoppende Reels genereren we continu directe boekingen en organisch bereik.
                </p>
              </div>
            </motion.div>

            {/* Project: Schuyren Installatietechniek (Social media management) */}
            <motion.div 
              id="portfolio-item-schuyren"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-white"
            >
              <img 
                src={schuyrenTech} 
                alt="Social Media Management - Schuyren Installatietechniek" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">Schuyren Installatietechniek</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Duurzaam vakmanschap en innovatieve installaties vertaald naar een herkenbare, professionele social mediastrategie.
                </p>
              </div>
            </motion.div>

            {/* Project 3: Social media management voor schilder en tegelwerk */}
            <motion.div 
              id="portfolio-item-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-white"
            >
              <img 
                src={portfolioLaughing} 
                alt="Social Media Management - On Point Schilder & Tegelwerk" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">SOCIAL MEDIA MANAGEMENT</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">On Point Schilder & Tegelwerk</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Het transformeren van puur vakmanschap naar een premium online portfolio. We brengen gerealiseerde projecten in beeld om hoogwaardige klanten aan te trekken.
                </p>
              </div>
            </motion.div>

            {/* Project 4: CV de Grensülle Vols */}
            <motion.div 
              id="portfolio-item-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 group relative overflow-hidden rounded-2xl h-[400px] md:h-[500px] shadow-lg bg-white"
            >
              <img 
                src={grensulleLogo} 
                alt="CV de Grensülle Vols — Event PR & Poster Design" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90" />
              
              {/* Overlay details */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white flex flex-col gap-2">
                <span className="text-[9px] md:text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">EVENT MARKETING & PR</span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">CV de Grensülle Vols</h3>
                <p className="text-xs md:text-sm text-white/80 font-light max-w-md hidden sm:block">
                  Ontwerp van opvallende fysieke en digitale posters, flyers en social PR-campagnes die zorgen voor herkenbare en drukbezochte regio-evenementen.
                </p>
              </div>
            </motion.div>

            {/* Project 5: Voetbalvereniging Rood Groen LVC'01 */}
            <motion.div 
              id="portfolio-item-5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 group relative overflow-hidden rounded-2xl min-h-[400px] md:h-[500px] shadow-lg bg-white grid grid-cols-1 md:grid-cols-12"
            >
              {/* Left Column: Image */}
              <div className="md:col-span-5 h-[250px] md:h-full relative overflow-hidden bg-[#EAEAE6]">
                <img 
                  src={heroWidescreen} 
                  alt="Rood Groen LVC'01 — Social Media Partner" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.92] transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105"
                />
              </div>

              {/* Right Column: Text Content */}
              <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-[#1A1A1A] text-white">
                <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#4ade80] uppercase mb-3 block">SOCIAL MEDIA PARTNER</span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">Rood Groen LVC'01</h3>
                <p className="text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed max-w-xl">
                  Als trotse social media partner verzorgen en versterken we de online aanwezigheid van voetbalvereniging Rood Groen LVC'01 uit Vaals & Lemiers. Van dynamische wedstrijdverslagen tot sprankelende community-updates die de clubgeest digitaal vertalen.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonial / Review Section */}
      <section id="reviews" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-36 px-6 md:px-12 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#EAEAE6]/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#EAEAE6]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">RECENSIES</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Wat Onze Klanten Zeggen
            </h2>
            <p className="text-sm text-black/60 font-light leading-relaxed">
              Wij bouwen aan langdurige partnerschappen gebaseerd op visuele perfectie en tastbaar resultaat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Review 1: CV de Grensülle Vols */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-black/10 bg-white p-1 flex items-center justify-center shadow-sm">
                    <img 
                      src={grensulleLogo} 
                      alt="CV de Grensülle Vols logo" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#8E8E8A] text-[#8E8E8A]" />
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
            </motion.div>

            {/* Review 2: On Point Schilder & Tegelwerk */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-full border border-black/10 flex items-center justify-center shadow-sm w-12 h-12">
                    <Award size={20} className="text-[#1A1A1A]" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#8E8E8A] text-[#8E8E8A]" />
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
            </motion.div>

            {/* Review 3: Hair Boutique Salon M */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-full border border-black/10 flex items-center justify-center shadow-sm w-12 h-12">
                    <MessageSquare size={20} className="text-[#1A1A1A]" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#8E8E8A] text-[#8E8E8A]" />
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
            </motion.div>

            {/* Review 4: Centrum Manager Raoul Deckers */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#EAEAE6]/20 rounded-3xl p-8 border border-black/5 flex flex-col justify-between hover:bg-[#EAEAE6]/35 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white rounded-full border border-black/10 flex items-center justify-center shadow-sm w-12 h-12">
                    <Sparkles size={20} className="text-[#1A1A1A]" />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#8E8E8A] text-[#8E8E8A]" />
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
            </motion.div>

          </div>

        </div>
      </section>

      {/* Team & Open Sollicitatie Section */}
      <section id="team" className="scroll-mt-20 md:scroll-mt-28 py-24 md:py-32 px-6 md:px-12 bg-[#EAEAE6] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.3em] text-black/50 uppercase block mb-3">ONTMOET ONS</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Het Team Achter SO SOCIAL
            </h2>
            <p className="text-sm text-black/60 font-light leading-relaxed">
              Wij combineren creatieve bezieling, strakke planning en strategische scherpte om jouw merk online en offline te laten domineren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Team Member 1: Chinouk */}
            <motion.div 
              id="team-chinouk"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-6 border border-black/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[4/5] rounded-2xl mb-6 border border-black/10 overflow-hidden bg-[#EAEAE6]">
                  <img 
                    src={lopen} 
                    alt="Chinouk Jacobi - Allround Marketing & Communicatie" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">Chinouk Jacobi</h3>
                <span className="text-[10px] font-bold tracking-widest text-[#8E8E8A] uppercase block mb-3">Allround Marketing & Communicatie</span>
                <p className="text-xs text-black/60 font-light leading-relaxed">
                  De drijvende kracht achter de visuele koers en groeistrategieën. Gespecialiseerd in high-end brand identity, social grid curatie en city marketing.
                </p>
              </div>
              <div className="border-t border-black/5 mt-6 pt-4 flex gap-3">
                <span className="text-[10px] font-semibold text-black/40">✨ Oprichter & Creatief Directeur</span>
              </div>
            </motion.div>

            {/* Team Member 2: John */}
            <motion.div 
              id="team-john"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 border border-black/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[4/5] rounded-2xl mb-6 bg-[#111111] border border-black/10 flex flex-col items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
                  <div className="relative flex flex-col items-center justify-center p-8 text-center">
                    <span className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-[#EAEAE6] mb-3 select-none">
                      SO.
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#EAEAE6]/50 uppercase select-none">
                      SO SOCIAL
                    </span>
                  </div>
                  {/* Decorative luxury corners */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-[#EAEAE6]/20" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-[#EAEAE6]/20" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-[#EAEAE6]/20" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-[#EAEAE6]/20" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">John Jacobi</h3>
                <span className="text-[10px] font-bold tracking-widest text-[#8E8E8A] uppercase block mb-3">Administratie & Boekhouding</span>
                <p className="text-xs text-black/60 font-light leading-relaxed">
                  Zorgt achter de schermen voor de strakke organisatie, facturatie en vlekkeloze administratieve afhandeling van al onze projecten.
                </p>
              </div>
              <div className="border-t border-black/5 mt-6 pt-4 flex gap-3">
                <span className="text-[10px] font-semibold text-black/40">💼 Finance & Structuur</span>
              </div>
            </motion.div>

            {/* Team Member 3: Open Sollicitatie / Kennismaken */}
            <motion.div 
              id="team-chayenne"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 border border-black/5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="relative aspect-[4/5] rounded-2xl mb-6 bg-[#EAEAE6] border border-black/10 flex flex-col items-center justify-center overflow-hidden transition-colors group-hover:bg-[#E2E0D8]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0%,transparent_100%)] pointer-events-none" />
                  <div className="relative flex flex-col items-center justify-center p-8 text-center">
                    <span className="font-serif text-5xl md:text-6xl font-bold tracking-tighter text-[#111111] mb-3 select-none">
                      SO.
                    </span>
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#111111]/50 uppercase select-none">
                      SO SOCIAL
                    </span>
                  </div>
                  {/* Decorative luxury corners */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black/20" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-black/20" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-black/20" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black/20" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-1">Open Sollicitatie</h3>
                <span className="text-[10px] font-bold tracking-widest text-[#8E8E8A] uppercase block mb-3">Stages & Creatief Talent</span>
                <p className="text-xs text-black/60 font-light leading-relaxed mb-4">
                  Ben jij een creatief talent in content creatie, social media management, fotografie of development en wil je meebouwen aan toonaangevende merken? We maken graag tijd voor een goede kop koffie!
                </p>
              </div>
              <div className="border-t border-black/5 mt-6 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsContactOpen(true)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#1A1A1A] group-hover:text-black py-1 cursor-pointer"
                >
                  <span className="underline underline-offset-4 decoration-black/20 hover:decoration-black">Stuur een open sollicitatie</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Interactive Contact Footer */}
      <footer id="contact" className="scroll-mt-20 md:scroll-mt-28 min-h-[70vh] flex flex-col justify-between bg-[#111111] text-[#EAEAE6] px-6 py-12 md:px-12 md:py-20 relative overflow-hidden">
        
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-3xl pointer-events-none" />

        {/* Top Branding Bar */}
        <div className="flex justify-between items-center border-b border-white/10 pb-8">
          <div className="flex items-center gap-3 font-serif text-xl font-bold tracking-tight">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/20 bg-[#E6E4DD]">
              <img src={soSocialLogo} alt="SO SOCIAL" className="w-full h-full object-contain" />
            </div>
            SO SOCIAL
          </div>
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
                        {['Social Management', 'Content Creatie', 'PR & City Marketing', 'Webdesign & Development', 'Website Onderhoud'].map((srv) => (
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
