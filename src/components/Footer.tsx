import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return <footer className="bg-muted/20 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              NF Agent
            </div>
            <p className="text-muted-foreground mb-6">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-smooth">{t('nav.home')}</a></li>
              <li><a href="#servicios" className="text-muted-foreground hover:text-primary transition-smooth">{t('nav.services')}</a></li>
              <li><a href="#blog" className="text-muted-foreground hover:text-primary transition-smooth">{t('nav.blog')}</a></li>
              <li><a href="#nosotros" className="text-muted-foreground hover:text-primary transition-smooth">{t('nav.about')}</a></li>
              <li><a href="#testimonios" className="text-muted-foreground hover:text-primary transition-smooth">{t('nav.testimonials')}</a></li>
              <li><a href="#contacto" className="text-muted-foreground hover:text-primary transition-smooth">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">{t('services.ai.title')}</span></li>
              <li><span className="text-muted-foreground">{t('services.crm.title')}</span></li>
              <li><span className="text-muted-foreground">{t('services.social.title')}</span></li>
              <li><span className="text-muted-foreground">{t('services.analytics.title')}</span></li>
              <li><span className="text-muted-foreground">{t('services.email.title')}</span></li>
              <li><span className="text-muted-foreground">{t('services.integration.title')}</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hola@nfagent.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Hoffmeyersvej , 2000 Frederiksberg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;