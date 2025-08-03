import { Button } from "@/components/ui/button";
import GeometricVisual from "./GeometricVisual";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-3 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Construimos{" "}
              <span className="text-gradient">Experiencias Digitales</span>{" "}
              del Futuro
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Desarrollamos soluciones tecnológicas innovadoras que transforman tu negocio 
              con diseño de vanguardia y tecnología de última generación
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="hover-scale">
                Ver Portfolio
              </Button>
              <Button variant="outline-glow" size="xl" className="hover-scale">
                Contactar
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:col-span-2 animate-slide-in-right">
            <GeometricVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;