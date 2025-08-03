import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "E-commerce Futurista",
      description: "Plataforma de comercio electrónico con IA integrada",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Desarrollo Web"
    },
    {
      title: "App de Gestión Digital",
      description: "Dashboard administrativo con análisis en tiempo real",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      category: "UX/UI Design"
    },
    {
      title: "Portal Corporativo",
      description: "Sitio web empresarial con CMS personalizado",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      category: "Desarrollo Web"
    },
    {
      title: "Plataforma SaaS",
      description: "Software como servicio con arquitectura escalable",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop",
      category: "Consultoría"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Proyectos <span className="text-gradient">Destacados</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl hover-scale cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-primary text-sm font-medium">{project.category}</span>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-glow" size="lg" className="hover-scale">
            Ver más proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;