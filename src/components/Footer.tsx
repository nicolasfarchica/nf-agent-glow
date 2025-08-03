import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-muted/20 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="text-2xl font-bold text-gradient mb-4">
              NF Agent
            </div>
            <p className="text-muted-foreground mb-6">
              Construimos experiencias digitales del futuro con tecnología de vanguardia 
              y diseño innovador.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-smooth" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-muted-foreground hover:text-primary transition-smooth">Inicio</a></li>
              <li><a href="#servicios" className="text-muted-foreground hover:text-primary transition-smooth">Servicios</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-smooth">Portfolio</a></li>
              <li><a href="#nosotros" className="text-muted-foreground hover:text-primary transition-smooth">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground">Automatización con IA</span></li>
              <li><span className="text-muted-foreground">Gestión CRM Inteligente</span></li>
              <li><span className="text-muted-foreground">Marketing en Redes Sociales</span></li>
              <li><span className="text-muted-foreground">Analítica Predictiva</span></li>
              <li><span className="text-muted-foreground">Email Marketing Automatizado</span></li>
              <li><span className="text-muted-foreground">Integración de Sistemas</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contac@nfagent.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+4552801394</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Hoffmeyersvej , 2000 Frederiksberg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 NF Agent. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Política de Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-smooth">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;