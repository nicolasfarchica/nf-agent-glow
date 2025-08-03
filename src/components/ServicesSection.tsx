import { Bot, Zap, Users, BarChart3, MessageSquare, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.desc')
    },
    {
      icon: Users,
      title: t('services.crm.title'),
      description: t('services.crm.desc')
    },
    {
      icon: MessageSquare,
      title: t('services.social.title'),
      description: t('services.social.desc')
    },
    {
      icon: BarChart3,
      title: t('services.analytics.title'),
      description: t('services.analytics.desc')
    },
    {
      icon: Zap,
      title: t('services.email.title'),
      description: t('services.email.desc')
    },
    {
      icon: Settings,
      title: t('services.integration.title'),
      description: t('services.integration.desc')
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('services.title')} <span className="text-gradient">{t('services.title.highlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-scale group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-smooth" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;