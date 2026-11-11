// Image assets imported for service pages
import telefoonHand from '../assets/images/telefoon_hand_1784023726772.jpg';
import businessCardSoSocial from '../assets/images/business_card_sosocial_1784281836313.jpg';
import laptopSoSocial from '../assets/images/laptop_sosocial_1784281847694.jpg';
import laptopWerk from '../assets/images/laptop_so_social_1790596744641.jpeg';
import heroCalmWorkspace from '../assets/images/hero_calm_workspace_1784281822703.jpg';
import lopen from '../assets/images/lopen.jpg';

export interface ServiceDetail {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  badge: string;
  heroSubtitle: string;
  leadParagraph: string;
  image: string;
  imageAlt: string;
  benefits: {
    title: string;
    description: string;
  }[];
  offerings: {
    title: string;
    description: string;
    highlights: string[];
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    path: string;
    description: string;
  }[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'social-media-beheer': {
    slug: 'social-media-beheer',
    path: '/diensten/social-media-beheer',
    title: 'Socialmediabeheer',
    seoTitle: 'Socialmediabeheer Uitbesteden | Professioneel Beheer | SO SOCIAL',
    metaDescription: 'Laat je socialmediabeheer professioneel verzorgen door SO SOCIAL. Van doordachte contentplanning tot community engagement voor meetbare merkherkenning.',
    h1: 'Socialmediabeheer dat jouw merk laat groeien en opvallen',
    badge: 'Volledige Ontzorging & Strategie',
    heroSubtitle: 'Een consistente, esthetische feed en gerichte interactie die volgers transformeert in loyale klanten.',
    leadParagraph: 'Socialmediabeheer bij SO SOCIAL betekent complete rust voor jouw organisatie. Wij nemen het volledige beheer van jouw Instagram-, Facebook- en TikTok-kanalen uit handen. Van een op maat gemaakte contentkalender en esthetische grid-curatie tot converterende captions, hashtags en actieve interactie met jouw community.',
    image: telefoonHand,
    imageAlt: 'Socialmediabeheer uitbesteden bij SO SOCIAL - Smartphone met esthetische Instagram feed',
    benefits: [
      {
        title: 'Tijdwinst & Volledige Ontzorging',
        description: 'Geen stress meer over wat je vandaag moet posten. Ons team verzorgt het volledige proces van concept tot tijdige publicatie.'
      },
      {
        title: 'Esthetische & Consistente Merkidentiteit',
        description: 'Een uniforme visuele stijl die naadloos aansluit bij jouw huisstijl en direct betrouwbaarheid en autoriteit uitstraalt.'
      },
      {
        title: 'Gerichte Doelgroepbinding',
        description: 'We reageren actief op reacties en berichten, waardoor je een betrokken community opbouwt met oprechte merkambassadeurs.'
      },
      {
        title: 'Strategisch Groeipotentieel',
        description: 'Elke post heeft een helder doel: naamsbekendheid vergroten, websitebezoek stimuleren of concrete leads genereren.'
      }
    ],
    offerings: [
      {
        title: 'Maandelijkse Contentkalender & Grid-Planning',
        description: 'We stellen vooraf een heldere planning op waarin visuele thema’s, productlanceringen en seizoensmomenten perfect zijn afgestemd.',
        highlights: ['Visueel 9-grid overzicht voor Instagram', 'Vaste publicatiemomenten op piektijden', 'Balans tussen inspiratie, expertise en conversie']
      },
      {
        title: 'Copywriting & Hashtag-Strategie',
        description: 'Elke post wordt voorzien van prikkelende teksten in de juiste tone-of-voice die aanzetten tot actie, inclusief actuele niche-hashtags.',
        highlights: ['Merkgerichte tone-of-voice', 'Duidelijke Call-to-Actions (CTA)', 'Relevante, doordachte hashtag- en SEO-zoektermen']
      },
      {
        title: 'Community Management & Engagement',
        description: 'Wij houden de interactie levendig. Directe berichten en reacties worden snel en professioneel beantwoord namens jouw merk.',
        highlights: ['Dagelijkse monitoring van reacties & DM’s', 'Actieve interactie binnen jouw branche', 'Opbouwen van loyale klantrelaties']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Merkintake & Doelgroepanalyse',
        description: 'We verdiepen ons in jouw merkwaarden, tone-of-voice, huidige resultaten en specifieke doelstellingen.'
      },
      {
        step: '02',
        title: 'Strategie & Visueel Moodboard',
        description: 'We formuleren de contentpijlers en ontwerpen de visuele stijlrichting voor een onweerstaanbare feed.'
      },
      {
        step: '03',
        title: 'Creatie, Planning & Afstemming',
        description: 'Elke maand ontvang je een kant-en-klaar voorstel ter goedkeuring voor maximale transparantie.'
      },
      {
        step: '04',
        title: 'Publicatie, Engagement & Evaluatie',
        description: 'Na goedkeuring publiceren we automatisch en sturen we doorlopend bij op basis van data en statistieken.'
      }
    ],
    deliverables: [
      'Volledig beheerde social media kanalen (Instagram, Facebook)',
      'Maandelijkse contentkalender ter goedkeuring',
      'Prikkelende copywriting en doordachte hashtag-sets',
      'Actieve community interactie en monitoring',
      'Periodieke rapportages en data-evaluaties'
    ],
    faqs: [
      {
        question: 'Wat kost het uitbesteden van socialmediabeheer bij SO SOCIAL?',
        answer: 'De investering is afhankelijk van de gewenste frequentie van berichten, het aantal kanalen (zoals Instagram en Facebook) en of er ook contentproductie op locatie bij inbegrepen is. We bieden transparante maandpakketten op maat. Vraag gerust een vrijblijvende offerte aan.'
      },
      {
        question: 'Behoud ik zelf inspraak over wat er geplaatst wordt?',
        answer: 'Absoluut. We werken met een overzichtelijke maandplanning die je altijd vooraf te zien krijgt en goedkeurt voordat er iets online gaat. Jij behoudt altijd de regie.'
      },
      {
        question: 'Voor welke platforms verzorgt SO SOCIAL beheer?',
        answer: 'Onze primaire focus ligt op Instagram en Facebook, waar we sterke esthetische en commerciële resultaten behalen. Afhankelijk van jouw wensen kunnen we dit uitbreiden met TikTok en LinkedIn.'
      },
      {
        question: 'Hoe snel zie ik resultaat van professioneel socialmediabeheer?',
        answer: 'De visuele verbetering en professionele uitstraling zijn direct zichtbaar vanaf de eerste posts. Duurzame groei in volgers en betrokkenheid ontwikkelt zich consistent binnen 2 tot 3 maanden.'
      }
    ],
    relatedServices: [
      {
        title: 'Socialmediamarketing',
        path: '/diensten/social-media-marketing',
        description: 'Strategische campagnes gericht op meetbare groei en merkpositionering.'
      },
      {
        title: 'Contentcreatie',
        path: '/diensten/content-creatie',
        description: 'Professionele fotografie, sfeervideo’s en dynamische Reels.'
      },
      {
        title: 'Socialmedia-advertenties',
        path: '/diensten/social-media-advertenties',
        description: 'Gerichte betaalde Meta campagnes voor direct bereik en conversie.'
      }
    ]
  },

  'social-media-marketing': {
    slug: 'social-media-marketing',
    path: '/diensten/social-media-marketing',
    title: 'Socialmediamarketing',
    seoTitle: 'Socialmediamarketing Bureau Nederland | Strategie & Groei | SO SOCIAL',
    metaDescription: 'Laat je merk groeien met effectieve socialmediamarketing door SO SOCIAL. Data-gedreven campagnes, doordachte merkpositionering en meetbare impact.',
    h1: 'Strategische socialmediamarketing met meetbaar resultaat',
    badge: 'Merkpositionering & Groeistrategie',
    heroSubtitle: 'Verander vluchtige blikken in loyale klanten met een doordachte marketingaanpak die jouw merkwaarde versterkt.',
    leadParagraph: 'Socialmediamarketing gaat verder dan alleen mooie plaatjes delen. Het is het strategische samenspel van merkpositionering, doelgroepsegmentatie en gerichte boodschappen die aanzetten tot actie. SO SOCIAL ontwikkelt resultaatgerichte social strategieën voor ambitieuze bedrijven, retail en regionale evenementen in heel Nederland.',
    image: lopen,
    imageAlt: 'Socialmediamarketing strategie sessie en merkpositionering door SO SOCIAL',
    benefits: [
      {
        title: 'Scherpe Merkpositionering',
        description: 'We definiëren precies wat jouw merk uniek maakt en vertalen dit naar een herkenbare, onderscheidende digitale merktaal.'
      },
      {
        title: 'Groter Organisch & Lokaal Bereik',
        description: 'Door slim in te spelen op actuele platformalgoritmes bereik je exact de juiste doelgroep in jouw regio of landelijk.'
      },
      {
        title: 'Hogere Conversie & Rendement',
        description: 'We sturen op concrete doelen: meer websitebezoekers, offerteaanvragen, reserveringen en loyale merkambassadeurs.'
      },
      {
        title: 'Continu Inzicht & Optimalisatie',
        description: 'Geen aannames, maar heldere statistieken. We monitoren de prestaties en optimaliseren de strategie continu.'
      }
    ],
    offerings: [
      {
        title: 'Strategisch Marketingplan & Contentpijlers',
        description: 'We analyseren de markt, concurrentie en doelgroep om een helder actieplan te smeden met concrete KPI’s.',
        highlights: ['Doelgroep- & concurrentieanalyse', 'Vastleggen van unieke contentpijlers', 'Heldere doelstellingen per kwartaal']
      },
      {
        title: 'Campagnes & Lanceringen',
        description: 'Van een nieuw product tot een grootschalig evenement: wij ontwerpen thematische campagnes die online maximale ophef genereren.',
        highlights: ['Conceptontwikkeling voor productlanceringen', 'Evenementpromotie & stadsbetrokkenheid', 'Actiematige storytelling']
      },
      {
        title: 'Performance & Algoritme Optimalisatie',
        description: 'We analyseren welke video- en postformaten het best presteren en stemmen de formats nauwgezet af op maximale organische tractie.',
        highlights: ['Data-analyse van bereik en interactie', 'A/B-testen van beeld en hooks', 'Maandelijkse strategische bijsturing']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Audit & Analyse',
        description: 'We brengen de huidige prestaties, kansen en knelpunten van jouw social media kanalen scherp in kaart.'
      },
      {
        step: '02',
        title: 'Strategieformulering',
        description: 'We definiëren doelgroepen, kanalen en contentformats die maximaal resoneren met jouw ideale klant.'
      },
      {
        step: '03',
        title: 'Executie & Campagne-uitrol',
        description: 'We rollen de campagnes uit volgens een strak schema met hoogwaardige visuals en converterende copy.'
      },
      {
        step: '04',
        title: 'Meting & Schaalvergroting',
        description: 'We meten de resultaten aan de hand van interactie, bereik en conversies en schalen succesvolle formules op.'
      }
    ],
    deliverables: [
      'Strategisch social media marketingplan',
      'Thematische campagneconcepten en visuals',
      'Geoptimaliseerde hooks, captions en formats',
      'Maandelijkse voortgangsrapportage met inzichten'
    ],
    faqs: [
      {
        question: 'Wat is het verschil tussen socialmediabeheer en socialmediamarketing?',
        answer: 'Socialmediabeheer richt zich op de dagelijkse operationele uitvoering: het plannen, plaatsen en reageren op de kanalen. Socialmediamarketing is het overkoepelende strategische plan: wie willen we bereiken, welke boodschap converteert en hoe bouwen we merkwaarde en omzet op.'
      },
      {
        question: 'Werkt SO SOCIAL ook voor lokale en regionale bedrijven?',
        answer: 'Zeker. We zijn gevestigd in Zuid-Limburg (Vaals & Kerkrade) en werken voor zowel lokale horeca, retail en zorgondernemers als landelijke spelers door heel Nederland.'
      },
      {
        question: 'Kunnen we socialmediamarketing combineren met betaalde advertenties?',
        answer: 'Ja, dat raden we sterk aan. Een sterke organische basis gecombineerd met gerichte Meta advertenties zorgt voor het allerhoogste rendement op jouw marketinginvestering.'
      }
    ],
    relatedServices: [
      {
        title: 'Socialmediabeheer',
        path: '/diensten/social-media-beheer',
        description: 'De dagelijkse zorgeloze uitvoering van al jouw social media kanalen.'
      },
      {
        title: 'Socialmedia-advertenties',
        path: '/diensten/social-media-advertenties',
        description: 'Krachtige betaalde advertentiecampagnes op Instagram en Facebook.'
      },
      {
        title: 'Webdesign',
        path: '/diensten/webdesign',
        description: 'Zorg dat het verkeer vanuit social media landt op een moderne website.'
      }
    ]
  },

  'content-creatie': {
    slug: 'content-creatie',
    path: '/diensten/content-creatie',
    title: 'Contentcreatie',
    seoTitle: 'Contentcreatie Bureau | Fotografie, Reels & Video | SO SOCIAL',
    metaDescription: 'Laat professionele content creëren door SO SOCIAL. Hoogwaardige merkfotografie, scroll-stoppende Reels, TikToks en grafisch ontwerp.',
    h1: 'High-end contentcreatie die direct de aandacht grijpt',
    badge: 'Fotografie, Reels & Grafisch Ontwerp',
    heroSubtitle: 'Scroll-stoppende visuals, cinematografische video’s en verfijnde huisstijluitingen op maat van jouw merk.',
    leadParagraph: 'In een overvolle tijdlijn telt de eerste milliseconde. Met hoogwaardige contentcreatie zorgt SO SOCIAL ervoor dat jouw merk direct opvalt. Wij schieten professionele merkfotografie op locatie, produceren dynamische korte video’s (Reels & TikToks) en ontwerpen grafische uitingen zoals flyers, banners en visitekaartjes die pure klasse uitstralen.',
    image: businessCardSoSocial,
    imageAlt: 'High-end contentcreatie en merkidentiteit door SO SOCIAL - Visitekaartje en brand design',
    benefits: [
      {
        title: 'Professionele Merkuitstraling',
        description: 'Vervang korrelige smartphone-kiekjes door hoogwaardige, professionele editorial beelden die vertrouwen wekken.'
      },
      {
        title: 'Viraal Potentieel met Reels & TikTok',
        description: 'Dynamische short-form video’s afgestemd op trending audio en visuele hooks die het bereik exponentieel vergroten.'
      },
      {
        title: 'Consistente Huisstijl & Drukwerk',
        description: 'Naast digitaal beeld ontwerpen we ook fysieke posters, visitekaartjes, flyers en menukaarten in één uniforme stijl.'
      },
      {
        title: 'Kant-en-klaar Aangeleverd',
        description: 'Alle content wordt in de exacte resoluties en formaten opgeleverd, direct klaar voor publicatie of drukwerk.'
      }
    ],
    offerings: [
      {
        title: 'Reels, TikToks & Short-Form Video',
        description: 'Korte, dynamische video’s die jouw producten, diensten of sfeer tot leven brengen met pakkende audio en doordachte montage.',
        highlights: ['Cinematografische sfeer- en detailbeelden', 'Trendy montagestijl met tekstanimaties', 'Geoptimaliseerd voor het Instagram- en TikTok-algoritme']
      },
      {
        title: 'Professionele Brand- & Productfotografie',
        description: 'High-end fotoshoots op locatie waarin we jouw team, interieur, gerechten of producten vastleggen in natuurlijk licht.',
        highlights: ['Shoots op locatie in heel Nederland', 'Kleurcorrectie en professionele nabewerking', 'Direct inzetbaar voor social media en website']
      },
      {
        title: 'Grafisch Ontwerp & Drukwerk',
        description: 'Van fysieke posters voor evenementen en stadsmarketing tot luxe visitekaartjes, banners en digitale carrousels.',
        highlights: ['Posters en flyers (digitaal & drukwerk)', 'Visitekaartjes en merkdocumenten', 'Opvallende social carrousels en infographics']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Concept & Shotlist',
        description: 'We stellen een gedetailleerde shotlist en visueel moodboard samen zodat elke opname doelgericht is.'
      },
      {
        step: '02',
        title: 'Shoot op Locatie',
        description: 'We komen naar jouw onderneming of gewenste locatie en verzorgen de volledige productie in ontspannen sfeer.'
      },
      {
        step: '03',
        title: 'Professionele Edit & Grading',
        description: 'We selecteren de beste beelden, passen kleurgradatie toe en monteren video’s op het ritme van de muziek.'
      },
      {
        step: '04',
        title: 'Oplevering & Gebruik',
        description: 'Je ontvangt een georganiseerde mediakit die direct inzetbaar is voor jouw website, campagnes en social media.'
      }
    ],
    deliverables: [
      'High-res merkfotografie (nabewerkt en rechtenvrij te gebruiken)',
      'Kant-en-klare Reels & TikTok video’s inclusief trending geluiden',
      'Grafische ontwerpen voor drukwerk en digitale kanalen',
      'Gestructureerde mediabibliotheek voor eigen gebruik'
    ],
    faqs: [
      {
        question: 'Komt SO SOCIAL op locatie fotograferen en filmen?',
        answer: 'Ja, we komen graag naar jouw bedrijf, horecazaak of eventlocatie toe. We zijn gevestigd in Zuid-Limburg en verzorgen fotoshoots en videoproducties door heel Nederland.'
      },
      {
        question: 'Kan ik de foto’s en video’s ook op mijn website gebruiken?',
        answer: 'Zeker. Alle door ons geproduceerde content mag je vrij en onbeperkt gebruiken voor jouw website, advertenties, drukwerk en social media kanalen.'
      },
      {
        question: 'Wat moet ik zelf voorbereiden voor een content shoot?',
        answer: 'Vooraf bespreken we een duidelijke shotlist en planning. Het enige wat je hoeft te doen is de locatie netjes klaarzetten en eventuele medewerkers of producten gereedhouden; wij regelen de regie, camera’s en belichting.'
      }
    ],
    relatedServices: [
      {
        title: 'Socialmediabeheer',
        path: '/diensten/social-media-beheer',
        description: 'Laat ons de geproduceerde content direct strategisch inplannen en beheren.'
      },
      {
        title: 'Socialmedia-advertenties',
        path: '/diensten/social-media-advertenties',
        description: 'Gebruik de beelden als krachtige creatives in betaalde Meta advertenties.'
      },
      {
        title: 'Webdesign',
        path: '/diensten/webdesign',
        description: 'Verwerk jouw nieuwe professionele foto’s in een eigentijdse website.'
      }
    ]
  },

  'social-media-advertenties': {
    slug: 'social-media-advertenties',
    path: '/diensten/social-media-advertenties',
    title: 'Socialmedia-advertenties',
    seoTitle: 'Socialmedia-advertenties Laten Maken | Meta Ads | SO SOCIAL',
    metaDescription: 'Laat rendabele socialmedia-advertenties maken door SO SOCIAL. Doelgerichte Instagram & Facebook Ads voor meer bereik, leads en omzet.',
    h1: 'Socialmedia-advertenties die converteren in concrete omzet',
    badge: 'Meta Ads, Instagram & Facebook Campagnes',
    heroSubtitle: 'Bereik exact jouw ideale klanten met hypergerichte advertenties, opvallende visuals en data-gedreven optimalisatie.',
    leadParagraph: 'Organisch bereik is waardevol, maar met gerichte socialmedia-advertenties (Meta Ads op Instagram en Facebook) zet je de turbo op jouw groei. SO SOCIAL ontwerpt en beheert advertentiecampagnes die niet alleen opvallen door hun visuele esthetiek, maar aantoonbaar rendement opleveren. Van merkbekendheid tot directe offerteaanvragen en verkopen.',
    image: laptopSoSocial,
    imageAlt: 'Socialmedia-advertenties en Meta Ads beheer door SO SOCIAL - Laptop met dashboard',
    benefits: [
      {
        title: 'Hypergerichte Doelgroeptargeting',
        description: 'Bereik mensen op basis van locatie (bijvoorbeeld jouw stad of provincie), interesses, demografie en aankoopgedrag.'
      },
      {
        title: 'Scroll-Stoppende Creatives',
        description: 'Omdat we advertenties combineren met high-end contentcreatie vallen jouw advertenties direct op tussen concurrenten.'
      },
      {
        title: 'Meetbaar Rendement (ROAS & ROI)',
        description: 'Elke geïnvesteerde euro maken we inzichtelijk via transparante rapportages over vertoningen, clicks en conversies.'
      },
      {
        title: 'Doorlopende A/B-Optimalisatie',
        description: 'We testen continu verschillende koppen, beelden en doelgroepen om de kosten per lead zo laag mogelijk te houden.'
      }
    ],
    offerings: [
      {
        title: 'Campagnestrategie & Doelgroepsegmentatie',
        description: 'We bepalen de juiste campagnedoelstellingen (leads, websitebezoek, naamsbekendheid) en richten geavanceerde doelgroepen in.',
        highlights: ['Lokale, regionale of landelijke targeting', 'Retargeting van eerdere websitebezoekers', 'Lookalike doelgroepen op basis van bestaande klanten']
      },
      {
        title: 'Advertentie Creatie (Beeld & Copywriting)',
        description: 'Wij ontwerpen opvallende statische advertenties, carrousels en video ads met overtuigende copy die aanzet tot actie.',
        highlights: ['Aesthetische ontwerpen in lijn met jouw merk', 'Conversiegerichte hooks en koppen', 'Duidelijke en laagdrempelige Call-to-Actions']
      },
      {
        title: 'Campagnebeheer & Dashboarding',
        description: 'We monitoren de advertentie-uitgaven dagelijks, optimaliseren biedstrategieën en sturen budgetten bij naar de best presterende ads.',
        highlights: ['Dagelijkse controle van Meta Ads Manager', 'Budgetbeheersing zonder verrassingen', 'Heldere rapportage in begrijpelijke taal']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Doelen & Budgetbepaling',
        description: 'We bespreken wat je wilt bereiken, wie je doelgroep is en welk advertentiebudget het beste bij jouw doelen past.'
      },
      {
        step: '02',
        title: 'Pixel & Tracking Setup',
        description: 'We controleren of de Meta Pixel en tracking op jouw website correct functioneren voor nauwkeurige conversiemeting.'
      },
      {
        step: '03',
        title: 'Creatie & Campagne Launch',
        description: 'We ontwerpen de creatives, schrijven de teksten en zetten de advertenties live in Meta Ads Manager.'
      },
      {
        step: '04',
        title: 'A/B Testen & Opschalen',
        description: 'We analyseren de data, elimineren minder presterende varianten en schalen de winnende advertenties op.'
      }
    ],
    deliverables: [
      'Volledig ingerichte Meta advertentiecampagnes (Instagram & Facebook)',
      'Professionele advertentie-creatives en copy',
      'Doelgroepsegmentatie en retargeting-inrichting',
      'Maandelijkse rapportage met kosten per lead en conversieresultaten'
    ],
    faqs: [
      {
        question: 'Welk advertentiebudget heb ik minimaal nodig?',
        answer: 'Je kunt al beginnen met een bescheiden budget van bijvoorbeeld € 250 tot € 500 per maand aan advertentiekosten bij Meta. Afhankelijk van jouw doelstellingen en markt adviseren we een passend budget.'
      },
      {
        question: 'Zijn de advertentiekosten inbegrepen in de beheervergoeding?',
        answer: 'Nee, het advertentiebudget betaal je rechtstreeks aan Meta (Facebook/Instagram). Onze vergoeding dekt de strategie, het ontwerpen van de advertenties, het schrijven van de teksten, de technische inrichting en het dagelijkse beheer en optimalisatie.'
      },
      {
        question: 'Wat voor soort advertenties presteren het best?',
        answer: 'Korte video-advertenties (Reels formaat) en authentieke carrousels leveren momenteel de hoogste betrokkenheid en de laagste kosten per klik op. Wij testen altijd verschillende varianten om te zien wat het beste werkt voor jouw doelgroep.'
      }
    ],
    relatedServices: [
      {
        title: 'Socialmediamarketing',
        path: '/diensten/social-media-marketing',
        description: 'Versterk je advertenties met een sterke organische marketingstrategie.'
      },
      {
        title: 'Contentcreatie',
        path: '/diensten/content-creatie',
        description: 'Laat professionele foto’s en video’s schieten voor jouw advertenties.'
      },
      {
        title: 'Website laten maken',
        path: '/diensten/website-laten-maken',
        description: 'Zorg voor een snelle, converterende landingspagina voor je advertentiebezoekers.'
      }
    ]
  },

  'webdesign': {
    slug: 'webdesign',
    path: '/diensten/webdesign',
    title: 'Webdesign',
    seoTitle: 'Webdesign Bureau | Exclusief & Conversiegericht Ontwerp | SO SOCIAL',
    metaDescription: 'Op zoek naar modern webdesign? SO SOCIAL ontwerpt esthetische, mobielvriendelijke en conversiegerichte websites die perfect passen bij jouw merkidentiteit.',
    h1: 'Webdesign dat esthetiek naadloos combineert met conversie',
    badge: 'Maatwerk UI & Merkbeleving',
    heroSubtitle: 'Een eigentijdse, elegante website die jouw merkidentiteit ademt en bezoekers overtuigt vanaf de eerste seconde.',
    leadParagraph: 'Jouw website is het digitale visitekaartje en het fundament van jouw online succes. Met modern webdesign van SO SOCIAL ben je verzekerd van een visueel verbluffend, doordacht en gebruiksvriendelijk ontwerp. Geen standaard templates, maar een uniek digitaal meesterwerk dat jouw merkverhaal vertelt en naadloos aansluit bij jouw social media uitingen.',
    image: laptopWerk,
    imageAlt: 'Professioneel webdesign op maat door SO SOCIAL - Laptop en smartphone mock-up op bank',
    benefits: [
      {
        title: 'Unieke Maatwerk Merkbeleving',
        description: 'Een design op maat dat perfect aansluit bij jouw huisstijl, kleuren en typografie, zodat jouw merk direct herkenbaar is.'
      },
      {
        title: 'Mobile-First & Responsief',
        description: 'Meer dan 75% van jouw bezoekers komt via een smartphone. Ons webdesign functioneert en oogt feilloos op ieder apparaat.'
      },
      {
        title: 'Doordachte Gebruikerservaring (UX)',
        description: 'Heldere navigatiestructuren en intuïtieve lay-outs zorgen ervoor dat bezoekers moeiteloos vinden wat ze zoeken.'
      },
      {
        title: 'Geoptimaliseerd voor Conversie',
        description: 'Strategisch geplaatste contactknoppen en duidelijke formulieren stimuleren bezoekers direct actie te ondernemen.'
      }
    ],
    offerings: [
      {
        title: 'Concept, Wireframes & Stijlontwerp',
        description: 'We vertalen jouw wensen naar overzichtelijke wireframes en een verfijnd visueel ontwerp waarin typografie, witruimte en kleur in balans zijn.',
        highlights: ['Moodboards en esthetische stijlkeuzes', 'Duidelijke visuele hiërarchie', 'Harmonieuze aansluiting op jouw social media presence']
      },
      {
        title: 'Responsief & Mobiel Design',
        description: 'Elk onderdeel van het ontwerp wordt specifiek geoptimaliseerd voor smartphones, tablets, laptops en grote desktopschermen.',
        highlights: ['Touch-vriendelijke navigatie', 'Snelle visuele scansnelheid', 'Verbluffende presentatie op iPhones en Android-toestellen']
      },
      {
        title: 'Conversiegericht Pagina-ontwerp',
        description: 'Van overtuigende dienstenpagina’s tot een laagdrempelig contactformulier: elk detail is ontworpen om van bezoekers klanten te maken.',
        highlights: ['Duidelijke call-to-action plaatsing', 'Heldere dienstenoverzichten', 'Gebruiksvriendelijke formulieren']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Briefing & Wensenanalyse',
        description: 'We bespreken de gewenste uitstraling, functionaliteiten en het doel van jouw nieuwe website.'
      },
      {
        step: '02',
        title: 'Visuele Richting & Moodboard',
        description: 'We leggen de stijl, het kleurenpalet en de typografische hiërarchie vast die jouw merk tot leven brengen.'
      },
      {
        step: '03',
        title: 'Ontwerp van Sleutelpagina’s',
        description: 'We ontwerpen de homepage, dienstenpagina’s en contactomgeving tot in het fijnste detail.'
      },
      {
        step: '04',
        title: 'Feedback & Oplevering',
        description: 'We verwerken jouw feedback tot het ontwerp perfect klopt, waarna het direct kan worden gebouwd.'
      }
    ],
    deliverables: [
      'Volledig maatwerk webdesignconcept',
      'Mobiele en desktopversies van alle pagina’s',
      'Kleur-, typografie- en componentenrichtlijnen',
      'Advies over beeldmateriaal en conversie-optimalisatie'
    ],
    faqs: [
      {
        question: 'Wat is het verschil tussen webdesign en websiteontwikkeling?',
        answer: 'Webdesign betreft het visuele en functionele ontwerp: hoe de website eruitziet, welke kleuren en typografie worden gebruikt en hoe de gebruikerservaring is opgebouwd. Websiteontwikkeling (development) is het daadwerkelijk bouwen en programmeren van die website in schone code.'
      },
      {
        question: 'Kan SO SOCIAL zowel het ontwerp als het bouwen van de website verzorgen?',
        answer: 'Jazeker. Wij bieden het complete traject aan: van het eerste creatieve webdesign tot en met de technische bouw, hosting, lancering en onderhoud.'
      },
      {
        question: 'Sluit het webdesign aan bij mijn bestaande branding?',
        answer: 'Altijd. Mocht je al een logo of huisstijl hebben, dan baseren we het webdesign daar zorgvuldig op. Heb je nog geen complete huisstijl, dan helpen we je graag om die direct mee vorm te geven.'
      }
    ],
    relatedServices: [
      {
        title: 'Website laten maken',
        path: '/diensten/website-laten-maken',
        description: 'Het complete pakket: ontwerp, bouw, teksten en lancering.'
      },
      {
        title: 'Website bouwen',
        path: '/diensten/website-bouwen',
        description: 'Technische ontwikkeling met snelle laadtijden en schone code.'
      },
      {
        title: 'Contentcreatie',
        path: '/diensten/content-creatie',
        description: 'Zorg voor professionele fotografie die jouw webdesign versterkt.'
      }
    ]
  },

  'website-laten-maken': {
    slug: 'website-laten-maken',
    path: '/diensten/website-laten-maken',
    title: 'Website laten maken',
    seoTitle: 'Professionele Website Laten Maken | Compleet Ontzorgd | SO SOCIAL',
    metaDescription: 'Wil je een professionele website laten maken? SO SOCIAL ontwerpt en bouwt complete, snelle en vindbare websites voor ondernemers in Nederland.',
    h1: 'Een professionele website laten maken zonder zorgen',
    badge: 'Van Ontwerp tot Oplevering',
    heroSubtitle: 'Een all-in-one websiteoplossing: uniek design, snelle techniek, SEO-optimalisatie en betrouwbare hosting.',
    leadParagraph: 'Een website laten maken bij SO SOCIAL is een ontspannen en inspirerend traject. Wij ontzorgen je van A tot Z: van het creatieve webdesign en de heldere structuur tot de technische ontwikkeling, SEO-inrichting, mobiele optimalisatie en het instellen van veilige contactformulieren. Zo krijg jij een website die niet alleen prachtig oogt, maar ook direct nieuwe aanvragen genereert.',
    image: heroCalmWorkspace,
    imageAlt: 'Professionele website laten maken bij SO SOCIAL - Creatieve studio werkplek met laptop',
    benefits: [
      {
        title: 'Alles Onder Eén Dak',
        description: 'Design, techniek, teksten, beelden en SEO worden perfect op elkaar afgestemd door één vast en betrokken aanspreekpunt.'
      },
      {
        title: 'Klaar voor Zoekmachines (SEO & AEO)',
        description: 'We leveren jouw website op met een schone technische basis, snelle laadtijden en gestructureerde data voor maximale vindbaarheid.'
      },
      {
        title: '100% Eigendom & Geen Gedoe',
        description: 'Geen verborgen contracten of ondoorzichtige systemen: jouw website is jouw eigendom en eenvoudig uit te breiden.'
      },
      {
        title: 'Betrouwbaar Onderhoud & Beveiliging',
        description: 'We verzorgen optioneel ook het periodieke onderhoud, SSL-beveiligingscertificaten, back-ups en software-updates.'
      }
    ],
    offerings: [
      {
        title: 'Compleet Websitepakket voor Ondernemers',
        description: 'Alles wat je nodig hebt om online professioneel voor de dag te komen: Homepage, Dienstenpagina’s, Over Ons, Portfolio en Contact.',
        highlights: ['Op maat ontworpen pagina’s', 'Integratie van social media feeds en iconen', 'Interactief en veilig contactformulier']
      },
      {
        title: 'Technische SEO & Vindbaarheid Inbegrepen',
        description: 'We richten de website zo in dat Google en moderne AI-zoekmachines jouw bedrijf direct begrijpen en indexeren.',
        highlights: ['Correcte H1-H3 koppenstructuur', 'Unieke meta titles en descriptions per pagina', 'XML sitemap en robots.txt configuratie']
      },
      {
        title: 'Onderhoud, Hosting & Support',
        description: 'Blijf zorgeloos ondernemen terwijl wij achter de schermen zorgen voor supersnelle hosting, back-ups en updates.',
        highlights: ['Snelle Nederlandse cloudhosting', 'SSL-certificaat voor veilige HTTPS-verbinding', 'Snelle support bij vragen of aanpassingen']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Kennismaking & Doelen',
        description: 'We bespreken jouw bedrijf, wie je doelgroep is en welke uitstraling en functies jouw website nodig heeft.'
      },
      {
        step: '02',
        title: 'Maatwerk Design & Structuur',
        description: 'We ontwerpen een stijlvol visueel voorstel dat tot in de puntjes aansluit bij jouw wensen en huisstijl.'
      },
      {
        step: '03',
        title: 'Bouw, Content & SEO Inrichting',
        description: 'We bouwen de website met schone code, vullen de pagina’s met sterke teksten en optimaliseren voor zoekmachines.'
      },
      {
        step: '04',
        title: 'Testen, Livegang & Nazorg',
        description: 'Na een grondige test op alle apparaten zetten we jouw website live en leveren we alles netjes aan je op.'
      }
    ],
    deliverables: [
      'Volledig gebruiksklare, moderne website',
      'Mobielvriendelijk en razendsnel op elk apparaat',
      'Geïntegreerd contact- en offerteformulier',
      'Basis SEO-optimalisatie (metadata, sitemap, structured data)',
      'Veilige hosting en periodiek onderhoud'
    ],
    faqs: [
      {
        question: 'Hoe lang duurt het om een professionele website te laten maken?',
        answer: 'Gemiddeld duurt een compleet websitetraject bij SO SOCIAL tussen de 2 en 4 weken, afhankelijk van het aantal pagina’s en de snelheid van feedback. We houden altijd een strakke planning aan.'
      },
      {
        question: 'Wat kost het laten maken van een website bij SO SOCIAL?',
        answer: 'Omdat iedere website maatwerk is, hangt de prijs af van het aantal pagina’s en specifieke functionaliteiten. We hanteren eerlijke, transparante tarieven zonder verborgen kosten. Neem gerust contact op voor een vrijblijvende prijsopgave.'
      },
      {
        question: 'Kan ik later zelf gemakkelijk wijzigingen doorvoeren?',
        answer: 'Zeker. We kunnen je ondersteunen met periodiek beheer, maar zorgen er ook voor dat eenvoudige aanpassingen snel en flexibel gerealiseerd kunnen worden.'
      },
      {
        question: 'Is de website direct goed vindbaar in Google?',
        answer: 'Ja, we bouwen elke website met de nieuwste technische SEO-eisen: snelle laadtijden, semantische HTML, unieke metatags, canonical tags en gestructureerde JSON-LD data zodat zoekmachines de pagina’s direct kunnen indexeren.'
      }
    ],
    relatedServices: [
      {
        title: 'Webdesign',
        path: '/diensten/webdesign',
        description: 'Lees meer over onze esthetische visuele ontwerpaanpak.'
      },
      {
        title: 'Website bouwen',
        path: '/diensten/website-bouwen',
        description: 'Technische details over onze snelle en schone webdevelopment.'
      },
      {
        title: 'Socialmediabeheer',
        path: '/diensten/social-media-beheer',
        description: 'Koppel jouw nieuwe website direct aan een actieve social media feed.'
      }
    ]
  },

  'website-bouwen': {
    slug: 'website-bouwen',
    path: '/diensten/website-bouwen',
    title: 'Website bouwen',
    seoTitle: 'Website Bouwen | Snelle, Moderne & Schone Code | SO SOCIAL',
    metaDescription: 'Laat een snelle, veilige en maatwerk website bouwen door SO SOCIAL. Schone frontend development, optimale mobiele prestaties en vlekkeloze techniek.',
    h1: 'Moderne websites bouwen met focus op snelheid en stabiliteit',
    badge: 'Maatwerk Development & Snelle Techniek',
    heroSubtitle: 'Robuuste code, razendsnelle laadtijden en een vlekkeloze mobiele werking die zoekmachines en bezoekers waarderen.',
    leadParagraph: 'Een prachtig ontwerp verdient een even sterke technische uitvoering. Bij het bouwen van een website focust SO SOCIAL op moderne, schone code, razendsnelle laadtijden, optimale beveiliging en semantische HTML. Hierdoor scoort jouw website uitstekend in Google Core Web Vitals en presteert hij vlekkeloos op ieder scherm.',
    image: laptopWerk,
    imageAlt: 'Website bouwen met moderne webtechnologie door SO SOCIAL - Laptop met webdevelopment',
    benefits: [
      {
        title: 'Razendsnelle Laadtijden (Core Web Vitals)',
        description: 'Snelle pagina’s verhogen de conversie en worden door Google beloond met hogere zoekposities.'
      },
      {
        title: 'Semantische & Schone Code',
        description: 'Geen overbodige ballast of trage plug-ins, maar strakke moderne webtechnologie die betrouwbaar blijft werken.'
      },
      {
        title: 'Geavanceerde Beveiliging & SSL',
        description: 'We bouwen met de modernste veiligheidsstandaarden zodat bezoekers- en klantgegevens altijd beschermd zijn.'
      },
      {
        title: 'Schaalbaar & Toekomstbestendig',
        description: 'Groei je onderneming door? De technische structuur is flexibel opgezet om eenvoudig nieuwe pagina’s en functies toe te voegen.'
      }
    ],
    offerings: [
      {
        title: 'Frontend Development op Maat',
        description: 'We programmeren het goedgekeurde ontwerp met vloeiende animaties, snelle interacties en perfecte weergave op elk scherm.',
        highlights: ['Moderne React & Tailwind technologie', 'Vloeiende micro-interacties en transities', 'Volledige cross-browser compatibiliteit']
      },
      {
        title: 'Integratie van Formulieren & Tools',
        description: 'We koppelen veilige intake- en contactformulieren die aanvragen direct in jouw mailbox afleveren en lokaal archiveren.',
        highlights: ['Geautomatiseerde e-mailnotificaties', 'Spambeveiliging zonder vervelende captchas', 'Lokaal back-up systeem voor aanvragen']
      },
      {
        title: 'Technische Optimalisatie & Hosting',
        description: 'We configureren domeinen, DNS-instellingen, caching, beeldcompressie en veilige HTTPS-verbindingen.',
        highlights: ['Geautomatiseerde beeldoptimalisatie in moderne formaten', 'Actieve caching voor topsnelheid', 'Complete setup van DNS en domeinkoppeling']
      }
    ],
    process: [
      {
        step: '01',
        title: 'Architectuur & Technische Setup',
        description: 'We bepalen de componentstructuur, URL-architectuur en de optimale technische stack.'
      },
      {
        step: '02',
        title: 'Code Development',
        description: 'We bouwen alle pagina’s en interactieve componenten met oog voor detail en semantische standaarden.'
      },
      {
        step: '03',
        title: 'Testing & Prestatie-audit',
        description: 'We testen de website grondig op snelheid, mobiele responsiviteit, formulieren en browser-compatibiliteit.'
      },
      {
        step: '04',
        title: 'Deploy & Monitoring',
        description: 'We lanceren de website op een betrouwbaar servernetwerk en activeren continue uptime-monitoring.'
      }
    ],
    deliverables: [
      'Volledig geprogrammeerde en geteste website',
      'Schone broncode conform moderne webstandaarden',
      'Actief SSL-certificaat en veilige hostingconfiguratie',
      'Geoptimaliseerde laadsnelheid en Google PageSpeed score'
    ],
    faqs: [
      {
        question: 'Waarom is een snelle laadtijd zo belangrijk bij het bouwen van een website?',
        answer: 'Meer dan 50% van de mobiele bezoekers verlaat een website als deze langer dan 3 seconden nodig heeft om te laden. Bovendien is laadsnelheid een officiële rankingfactor voor Google. Wij bouwen daarom altijd met focus op maximale snelheid.'
      },
      {
        question: 'Bouwen jullie ook websites voor bestaande ontwerpen?',
        answer: 'Jazeker. Als je al een kant-en-klaar ontwerp of huisstijl hebt, kunnen wij die nauwkeurig en pixel-perfect voor je ontwikkelen in schone code.'
      },
      {
        question: 'Bieden jullie ook onderhoud en updates aan na de bouw?',
        answer: 'Ja, we bieden doorlopend onderhoud aan. Hierbij monitoren we de werking, voeren we software-updates uit en maken we periodieke back-ups zodat jouw website altijd veilig en online blijft.'
      }
    ],
    relatedServices: [
      {
        title: 'Webdesign',
        path: '/diensten/webdesign',
        description: 'Bekijk onze visuele ontwerpmogelijkheden.'
      },
      {
        title: 'Website laten maken',
        path: '/diensten/website-laten-maken',
        description: 'Laat het complete proces van idee tot livegang ontzorgen.'
      },
      {
        title: 'Socialmedia-advertenties',
        path: '/diensten/social-media-advertenties',
        description: 'Stuur direct kwalitatief verkeer naar jouw nieuw gebouwde website.'
      }
    ]
  }
};

// General FAQ for the Homepage (crucial for GEO & AEO: AI engines like ChatGPT, Google AI Overviews, Bing Copilot)
export const generalFaqs = [
  {
    question: 'Wat is SO SOCIAL en wat doet het bureau?',
    answer: 'SO SOCIAL is een toonaangevend digitaal marketing- en creatief bureau in Nederland, opgericht door Chinouk Jacobi. Het bureau helpt bedrijven met hun complete online aanwezigheid en groei door middel van socialmediabeheer, socialmediamarketing, professionele contentcreatie (fotografie, video & Reels), gerichte socialmedia-advertenties en maatwerk webdesign & websiteontwikkeling.'
  },
  {
    question: 'Welke diensten levert SO SOCIAL precies?',
    answer: 'De kernactiviteiten van SO SOCIAL bestaan uit 9 gespecialiseerde disciplines: 1) Socialmediabeheer, 2) Socialmediamarketing, 3) Contentcreatie, 4) Socialmedia-advertenties (Meta Ads), 5) Instagram- en Facebookbeheer, 6) Online marketing, 7) Webdesign, 8) Websiteontwikkeling, en 9) Professionele websites laten ontwerpen en bouwen.'
  },
  {
    question: 'In welke regio’s is SO SOCIAL actief?',
    answer: 'SO SOCIAL is gevestigd in Zuid-Limburg (Vaals en Kerkrade) en werkt met veel trots voor bedrijven, overheden en evenementen in heel Nederland. Dankzij efficiënte digitale communicatie en flexibele fotoshoots op locatie kunnen we opdrachtgevers door het hele land bedienen.'
  },
  {
    question: 'Voor wie zijn de diensten van SO SOCIAL geschikt?',
    answer: 'SO SOCIAL werkt voor ambitieuze MKB-bedrijven, retailondernemers, horecazaken, dienstverleners, zorginstellingen, culturele organisaties en overheidsinstanties die hun merk professioneel op de kaart willen zetten met consistente klasse en meetbare resultaten.'
  },
  {
    question: 'Wat is de werkwijze van SO SOCIAL bij een nieuw project?',
    answer: 'We starten altijd met een vrijblijvende intake waarin we jouw doelen, doelgroep en stijlvoorkeuren bespreken. Vervolgens presenteren we een helder strategisch voorstel. Na akkoord gaan we aan de slag met de creatie of het beheer, waarbij we altijd transparant communiceren en werken met duidelijke evaluaties.'
  },
  {
    question: 'Hoe kan ik contact opnemen of een offerte aanvragen?',
    answer: 'Je kunt direct een vrijblijvende aanvraag indienen via de \'Start Project\' of \'Contact\' knoppen op de website https://so-socialmedia.nl, of rechtstreeks e-mailen naar so.socialmedia@outlook.com. Binnen 24 uur ontvang je een persoonlijke reactie.'
  }
];
