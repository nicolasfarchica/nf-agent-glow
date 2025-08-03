const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "NF Agent transformó completamente nuestra presencia digital. Su enfoque innovador y atención al detalle superaron nuestras expectativas.",
      name: "María González",
      company: "Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b734?w=80&h=80&fit=crop&crop=face"
    },
    {
      text: "El equipo de NF Agent entendió perfectamente nuestra visión y la llevó al siguiente nivel. Profesionales excepcionales.",
      name: "Carlos Mendoza",
      company: "Digital Solutions",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      text: "Increíble trabajo en diseño y desarrollo. La calidad del código y la experiencia de usuario son sobresalientes.",
      name: "Ana Rodríguez",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonios" className="py-20 px-6 bg-muted/10 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-glow rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-accent rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 hover:text-gradient transition-smooth cursor-default">
            Lo que dicen nuestros <span className="text-gradient animate-pulse-glow">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-scale hover-glow group transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="mb-6 transform group-hover:translate-y-[-2px] transition-smooth">
                <p className="text-muted-foreground leading-relaxed italic group-hover:text-foreground transition-smooth">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 animate-float border-2 border-transparent group-hover:border-primary transition-smooth"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                </div>
                <div className="transform group-hover:translate-x-1 transition-smooth">
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary text-sm group-hover:text-primary-glow transition-smooth">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;