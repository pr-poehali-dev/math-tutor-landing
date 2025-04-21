import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { title: "Главная", href: "#hero" },
    { title: "Обо мне", href: "#about" },
    { title: "Услуги", href: "#services" },
    { title: "Отзывы", href: "#testimonials" },
    { title: "Контакты", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-tutor flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-tutor-spaceGray">
          МатПрофи
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href}
              className="text-tutor-spaceGray hover:text-black font-medium transition-colors"
            >
              {item.title}
            </a>
          ))}
          <Button className="bg-tutor-spaceGray hover:bg-tutor-spaceGray/90 text-white rounded-full px-6">
            Записаться
          </Button>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                className="py-2 text-tutor-spaceGray hover:text-black font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Button className="bg-tutor-spaceGray hover:bg-tutor-spaceGray/90 text-white rounded-full w-full mt-2">
              Записаться
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;