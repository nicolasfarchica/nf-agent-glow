import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
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
            ¿Listo para <span className="text-gradient">digitalizar</span> tu negocio?
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Hablemos sobre tu próximo proyecto y llevemos tu visión al siguiente nivel
          </p>
          <Button variant="hero" size="xl" className="hover-scale glow-primary">
            Comenzar Ahora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;