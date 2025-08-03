import { Bot, Zap, Users, BarChart3, MessageSquare, Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Automatización con IA",
      description: "Implementamos chatbots inteligentes y automatizaciones que optimizan tus procesos de marketing y ventas 24/7"
    },
    {
      icon: Users,
      title: "Gestión CRM Inteligente",
      description: "Sistemas CRM potenciados con IA para gestionar leads, automatizar seguimientos y aumentar conversiones"
    },
    {
      icon: MessageSquare,
      title: "Marketing en Redes Sociales",
      description: "Estrategias de contenido automatizadas, programación inteligente y análisis de engagement con IA"
    },
    {
      icon: BarChart3,
      title: "Analítica Predictiva",
      description: "Análisis avanzado de datos con machine learning para predecir tendencias y optimizar campañas"
    },
    {
      icon: Zap,
      title: "Email Marketing Automatizado",
      description: "Campañas de email personalizadas con IA que se adaptan al comportamiento de cada usuario"
    },
    {
      icon: Settings,
      title: "Integración de Sistemas",
      description: "Conectamos todas tus herramientas de marketing con automatizaciones inteligentes y APIs"
    }
  ];

  return (
    <section id="servicios" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Servicios de <span className="text-gradient">IA y Marketing Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Potenciamos tu negocio con inteligencia artificial aplicada al marketing digital
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