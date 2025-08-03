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
    <section className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-scale"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary text-sm">
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