// Image assets imported for service pages
import telefoonHand from '../assets/images/telefoon_hand_1784023726772.jpg';
import businessCardSoSocial from '../assets/images/business_card_sosocial_1784281836313.jpg';
import laptopSoSocial from '../assets/images/laptop_sosocial_1784281847694.jpg';
import laptopWerk from '../assets/images/laptop_so_social_1790596744641.jpeg';

export interface ServiceDetail {
  slug: string;
  path: string;
  title: string;
  subtitle: string;
  seoTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  leadParagraph: string;
  secondaryParagraph: string;
  image: string;
  imageAlt: string;
}

export const servicesData: Record<string, ServiceDetail> = {
  'social-media-management': {
    slug: 'social-media-management',
    path: '/diensten/social-media-management',
    title: 'Social Media Management',
    subtitle: 'Volledige ontzorging van jouw socials',
    seoTitle: 'Social Media Management | SO SOCIAL',
    metaDescription: 'Laat jouw social media volledig ontzorgen door SO SOCIAL. Van strategie en esthetische feed-planning tot copywriting en community management.',
    heroSubtitle: 'Een krachtig online visitekaartje, zonder dat je er zelf omkijken naar hebt.',
    leadParagraph: 'Wij nemen het volledige beheer van jouw socialmediakanalen uit handen. Van een doordachte contentstrategie en een esthetische, consistente feed-planning tot pakkende teksten, tijdige publicatie en actieve interactie met jouw volgers.',
    secondaryParagraph: 'Zo blijft jouw onderneming continu zichtbaar met een herkenbare, professionele uitstraling die direct vertrouwen wekt en klanten aantrekt.',
    image: telefoonHand,
    imageAlt: 'Social Media Management door SO SOCIAL'
  },
  'fotografie': {
    slug: 'fotografie',
    path: '/diensten/fotografie',
    title: 'Fotografie',
    subtitle: 'Brand-, sfeer- & bedrijfsfotografie',
    seoTitle: 'Fotografie | Brand- & Bedrijfsfotografie | SO SOCIAL',
    metaDescription: 'Professionele merkfotografie, sfeerbeelden en bedrijfsfotografie door SO SOCIAL. Onderscheidende beelden die perfect aansluiten bij jouw merkidentiteit.',
    heroSubtitle: 'Authentieke, stijlvolle beelden die jouw merk direct herkenbaar maken.',
    leadParagraph: 'Eén sterk beeld zegt meer dan duizend woorden. Wij verzorgen professionele merkfotografie, bedrijfs-, project- en sfeerfotografie die de echte uitstraling en kwaliteit van jouw onderneming vastlegt.',
    secondaryParagraph: 'Alle beelden worden in een consistente stijl nabewerkt, zodat je beschikt over een hoogwaardige beeldbank voor zowel jouw social media als jouw website.',
    image: businessCardSoSocial,
    imageAlt: 'Professionele fotografie door SO SOCIAL'
  },
  'webdesign': {
    slug: 'webdesign',
    path: '/diensten/webdesign',
    title: 'Webdesign',
    subtitle: 'Maatwerk websites & onderhoud',
    seoTitle: 'Webdesign | Professionele Websites op Maat | SO SOCIAL',
    metaDescription: 'Laat een professionele, conversiegerichte website op maat ontwerpen en bouwen door SO SOCIAL. Inclusief mobiele optimalisatie, hosting en onderhoud.',
    heroSubtitle: 'Een op maat gemaakte website die jouw merkidentiteit ademt en klanten overtuigt.',
    leadParagraph: 'Jouw website is het centrale punt van jouw online aanwezigheid. Wij ontwerpen en bouwen moderne, snelle en mobielvriendelijke websites die perfect aansluiten bij jouw huisstijl en doelgroep.',
    secondaryParagraph: 'Van het eerste ontwerp tot lancering, hosting en periodiek onderhoud: wij zorgen ervoor dat jouw website altijd professioneel oogt, veilig blijft en converteert.',
    image: laptopWerk,
    imageAlt: 'Webdesign door SO SOCIAL'
  },
  'marketing-management': {
    slug: 'marketing-management',
    path: '/diensten/marketing-management',
    title: 'Marketing Management',
    subtitle: 'Strategie, campagnes, PR & groei',
    seoTitle: 'Marketing Management | Strategie & Campagnes | SO SOCIAL',
    metaDescription: 'Strategisch marketing management door SO SOCIAL. Online & offline campagnes, PR, city marketing en merkpositionering voor duurzame groei.',
    heroSubtitle: 'Strategische richting en uitvoering om jouw merk blijvend op de kaart te zetten.',
    leadParagraph: 'Met marketing management kijken we verder dan losse posts. We verbinden online zichtbaarheid, gerichte campagnes, PR, city marketing en offline uitingen tot één krachtige, herkenbare lijn.',
    secondaryParagraph: 'Of het nu gaat om een bedrijf, evenement of regionale campagne: wij bewaken de strategie, creativiteit en uitvoering zodat alles klopt.',
    image: laptopSoSocial,
    imageAlt: 'Marketing Management door SO SOCIAL'
  }
};

export const generalFaqs = [
  {
    question: 'Wat doet SO SOCIAL precies?',
    answer: 'SO SOCIAL helpt bedrijven met social media management, fotografie, content creatie en marketing management voor een krachtige online uitstraling.'
  },
  {
    question: 'Waar is SO SOCIAL gevestigd?',
    answer: 'SO SOCIAL is gevestigd in Vaals & Kerkrade en werkt voor opdrachtgevers door heel Nederland.'
  }
];
