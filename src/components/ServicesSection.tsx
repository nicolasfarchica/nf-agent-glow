import { Code, Palette, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Sitios web modernos y aplicaciones responsive con las últimas tecnologías"
    },
    {
      icon: Palette,
      title: "Diseño UX/UI",
      description: "Interfaces intuitivas centradas en el usuario y experiencias memorables"
    },
    {
      icon: Target,
      title: "Consultoría Digital",
      description: "Estrategias digitales personalizadas para hacer crecer tu negocio"
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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