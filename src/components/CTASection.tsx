import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-glow/5 to-primary/10"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 64 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-primary/20 animate-pulse-glow"
                style={{ animationDelay: `${Math.random() * 4}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            {t('cta.title')} <span className="text-gradient">{t('cta.title.highlight')}</span> {t('cta.title.end')}
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <Button variant="hero" size="xl" className="hover-scale glow-primary">
            {t('cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;