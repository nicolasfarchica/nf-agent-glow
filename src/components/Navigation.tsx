import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${isScrolled ? 'glass-nav' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">
            NF Agent
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-smooth">Inicio</a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-smooth">Servicios</a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">Portfolio</a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-smooth">Sobre Nosotros</a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-smooth">Contacto</a>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="lg" className="hidden md:flex">
            Comenzar Proyecto
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;