import { useLanguage } from "@/contexts/LanguageContext";

const ProcessSection = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t('process.step1.title'),
      description: t('process.step1.desc')
    },
    {
      number: "02", 
      title: t('process.step2.title'),
      description: t('process.step2.desc')
    },
    {
      number: "03",
      title: t('process.step3.title'),
      description: t('process.step3.desc')
    },
    {
      number: "04",
      title: t('process.step4.title'),
      description: t('process.step4.desc')
    }
  ];

  return (
    <section id="nosotros" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            {t('process.title')} <span className="text-gradient">{t('process.title.highlight')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 transform translate-x-4"></div>
              )}
              
              <div className="glass-card p-6 text-center hover-scale">
                <div className="text-4xl font-bold text-gradient mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;