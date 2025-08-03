import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const articles = [
    {
      title: "El Futuro del Marketing Digital con Inteligencia Artificial",
      excerpt: "Descubre cómo la IA está revolucionando las estrategias de marketing y las nuevas oportunidades que ofrece para conectar con tu audiencia.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "Inteligencia Artificial",
      readTime: "5 min",
      author: "NF Agent",
      date: "15 Dic 2024"
    },
    {
      title: "Automatización de Procesos: La Clave del Éxito Empresarial",
      excerpt: "Aprende cómo implementar automatizaciones inteligentes que optimicen tus procesos y aumenten la productividad de tu equipo.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      category: "Automatización",
      readTime: "7 min",
      author: "NF Agent",
      date: "12 Dic 2024"
    },
    {
      title: "Tendencias en Redes Sociales para 2025",
      excerpt: "Las últimas tendencias y estrategias que dominarán las redes sociales el próximo año y cómo aprovecharlas para tu negocio.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Redes Sociales",
      readTime: "6 min",
      author: "NF Agent",
      date: "10 Dic 2024"
    },
    {
      title: "CRM Inteligente: Personalización a Escala",
      excerpt: "Cómo los sistemas CRM potenciados con IA pueden transformar la relación con tus clientes y aumentar las conversiones.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      category: "CRM y Ventas",
      readTime: "8 min",
      author: "NF Agent",
      date: "8 Dic 2024"
    }
  ];

  return (
    <section id="blog" className="py-20 px-6 bg-muted/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Blog de <span className="text-gradient">Tendencias e IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias en inteligencia artificial y marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <article 
              key={index}
              className="group glass-card overflow-hidden hover-scale cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:text-primary-glow transition-smooth">
                  <span className="mr-2">Leer más</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline-glow" size="lg" className="hover-scale">
            Ver todos los artículos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;