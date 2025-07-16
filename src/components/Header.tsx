import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'INÍCIO', href: '#home' },
    { label: 'SOBRE', href: '#about' },
    { label: 'CURSO', href: '#course' },
    { label: 'GALERIA', href: '#gallery' },
    { label: 'RIFAS', href: '#rifa' },
    { label: 'CONTATO', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${isScrolled ? 'py-1' : 'py-4'}`}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              <img src="/logo-coruja.png" alt="Logo Coruja Cortes" className="w-20 h-20 md:w-28 md:h-28 object-contain" />
            </div>
            <span className="text-white font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black tracking-wider" style={{fontFamily: 'Impact, Arial Black, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
              CORUJA CORTES
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-white font-bold hover:text-royal-blue transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-detail-red transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isScrolled && (
          <div className="md:hidden bg-black/98 backdrop-blur-md absolute top-full left-0 w-full py-4 border-t border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 text-white font-bold hover:text-royal-blue hover:bg-white/10 transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;