import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.services': 'Servicios', 
    'nav.about': 'Sobre Nosotros',
    'nav.blog': 'Blog',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.register': 'Registrarte',
    
    // Hero Section
    'hero.title': 'Transformamos Ideas en',
    'hero.title.highlight': 'Experiencias Digitales',
    'hero.subtitle': 'Creamos soluciones digitales innovadoras que impulsan el crecimiento de tu negocio con tecnología de vanguardia y diseño excepcional.',
    'hero.cta': 'Comenzar Proyecto',
    'hero.learn': 'Conocer Más',
    
    // Services
    'services.title': 'Nuestros',
    'services.title.highlight': 'Servicios',
    'services.subtitle': 'Ofrecemos soluciones completas de inteligencia artificial y automatización para transformar tu negocio',
    'services.ai.title': 'Automatización con IA',
    'services.ai.desc': 'Optimiza tus procesos con inteligencia artificial avanzada',
    'services.crm.title': 'Gestión CRM Inteligente',
    'services.crm.desc': 'Centraliza y automatiza la gestión de tus clientes',
    'services.social.title': 'Marketing en Redes Sociales',
    'services.social.desc': 'Estrategias personalizadas para cada plataforma',
    'services.analytics.title': 'Analítica Predictiva',
    'services.analytics.desc': 'Toma decisiones basadas en datos e insights',
    'services.email.title': 'Email Marketing Automatizado',
    'services.email.desc': 'Campañas inteligentes que convierten',
    'services.integration.title': 'Integración de Sistemas',
    'services.integration.desc': 'Conecta todas tus herramientas de trabajo',
    
    // Process
    'process.title': 'Nuestro',
    'process.title.highlight': 'Proceso',
    'process.step1.title': 'Análisis y Planificación',
    'process.step1.desc': 'Entendemos tus necesidades y definimos la estrategia',
    'process.step2.title': 'Diseño y Prototipado',
    'process.step2.desc': 'Creamos wireframes y diseños centrados en el usuario',
    'process.step3.title': 'Desarrollo y Testing',
    'process.step3.desc': 'Construimos con tecnologías de vanguardia',
    'process.step4.title': 'Lanzamiento y Soporte',
    'process.step4.desc': 'Desplegamos y brindamos soporte continuo',
    
    // Blog
    'blog.title': 'Blog de',
    'blog.title.highlight': 'Tendencias e IA',
    'blog.subtitle': 'Mantente al día con las últimas tendencias en inteligencia artificial y marketing digital',
    'blog.readMore': 'Leer más',
    'blog.viewAll': 'Ver todos los artículos',
    
    // Testimonials
    'testimonials.title': 'Lo que dicen nuestros',
    'testimonials.title.highlight': 'clientes',
    
    // CTA
    'cta.title': '¿Listo para',
    'cta.title.highlight': 'digitalizar',
    'cta.title.end': 'tu negocio?',
    'cta.subtitle': 'Hablemos sobre tu próximo proyecto y llevemos tu visión al siguiente nivel',
    'cta.button': 'Comenzar Ahora',
    
    // Footer
    'footer.description': 'Construimos experiencias digitales del futuro con tecnología de vanguardia y diseño innovador.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.copyright': '© 2024 NF Agent. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.blog': 'Blog',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.register': 'Sign Up',
    
    // Hero Section
    'hero.title': 'We Transform Ideas into',
    'hero.title.highlight': 'Digital Experiences',
    'hero.subtitle': 'We create innovative digital solutions that drive your business growth with cutting-edge technology and exceptional design.',
    'hero.cta': 'Start Project',
    'hero.learn': 'Learn More',
    
    // Services
    'services.title': 'Our',
    'services.title.highlight': 'Services',
    'services.subtitle': 'We offer complete artificial intelligence and automation solutions to transform your business',
    'services.ai.title': 'AI Automation',
    'services.ai.desc': 'Optimize your processes with advanced artificial intelligence',
    'services.crm.title': 'Smart CRM Management',
    'services.crm.desc': 'Centralize and automate your customer management',
    'services.social.title': 'Social Media Marketing',
    'services.social.desc': 'Personalized strategies for each platform',
    'services.analytics.title': 'Predictive Analytics',
    'services.analytics.desc': 'Make data-driven decisions and insights',
    'services.email.title': 'Automated Email Marketing',
    'services.email.desc': 'Smart campaigns that convert',
    'services.integration.title': 'System Integration',
    'services.integration.desc': 'Connect all your work tools',
    
    // Process
    'process.title': 'Our',
    'process.title.highlight': 'Process',
    'process.step1.title': 'Analysis & Planning',
    'process.step1.desc': 'We understand your needs and define the strategy',
    'process.step2.title': 'Design & Prototyping',
    'process.step2.desc': 'We create wireframes and user-centered designs',
    'process.step3.title': 'Development & Testing',
    'process.step3.desc': 'We build with cutting-edge technologies',
    'process.step4.title': 'Launch & Support',
    'process.step4.desc': 'We deploy and provide continuous support',
    
    // Blog
    'blog.title': 'Blog of',
    'blog.title.highlight': 'Trends & AI',
    'blog.subtitle': 'Stay up to date with the latest trends in artificial intelligence and digital marketing',
    'blog.readMore': 'Read more',
    'blog.viewAll': 'View all articles',
    
    // Testimonials
    'testimonials.title': 'What our',
    'testimonials.title.highlight': 'clients',
    'testimonials.title.end': 'say',
    
    // CTA
    'cta.title': 'Ready to',
    'cta.title.highlight': 'digitize',
    'cta.title.end': 'your business?',
    'cta.subtitle': 'Let\'s talk about your next project and take your vision to the next level',
    'cta.button': 'Start Now',
    
    // Footer
    'footer.description': 'We build digital experiences of the future with cutting-edge technology and innovative design.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 NF Agent. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};