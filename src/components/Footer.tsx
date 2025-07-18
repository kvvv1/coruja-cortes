import React from 'react';
import { Scissors, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-royal-blue/30 py-12">
      <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-display text-lg xs:text-xl sm:text-2xl font-bold">
                CORUJA CORTES
              </span>
            </div>
            <p className="text-white/80 text-xs xs:text-sm leading-relaxed">
              Barbearia e Escola de Barbeiros
              <br />
              Sabará e Pompéu - MG
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-display font-bold text-white mb-4">LINKS RÁPIDOS</h3>
            <div className="space-y-2">
              {[
                { label: 'Início', href: '#home' },
                { label: 'Sobre', href: '#about' },
                { label: 'Curso', href: '#course' },
                { label: 'Galeria', href: '#gallery' },
                { label: 'Rifas', href: '#rifa' },
                { label: 'Contato', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-white/70 hover:text-royal-blue transition-colors duration-300 mx-auto"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="font-display font-bold text-white mb-4">CONTATO</h3>
            <div className="space-y-3">
              <button
                onClick={() => window.open('https://wa.me/5531999368220', '_blank')}
                className="flex items-center justify-center md:justify-end space-x-2 text-white/70 hover:text-green-400 transition-colors duration-300 w-full"
              >
                <Phone className="w-4 h-4" />
                <span>(31) 99936-8220</span>
              </button>
              
              <button
                onClick={() => window.open('https://www.instagram.com/coruja.cortes/', '_blank')}
                className="flex items-center justify-center md:justify-end space-x-2 text-white/70 hover:text-royal-blue transition-colors duration-300 w-full"
              >
                <Instagram className="w-4 h-4" />
                <span>@coruja.corte</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 xs:pt-8">
          <div className="text-center">
            <p className="font-display text-lg xs:text-xl md:text-2xl md:text-3xl font-black text-white mb-2">
              SE NÃO CONHECE,
              <span className="text-royal-blue"> JÁ <span className='text-detail-red'>OUVIU FALAR</span>.</span>
            </p>
            <p className="text-white/60 text-xs xs:text-sm">
              © 2025 Coruja Cortes - Todos os direitos reservados
            </p>
            <p className="text-white/40 text-[10px] xs:text-xs mt-2">
              Desenvolvido por <span className="font-bold">CODE<span className="text-royal-blue">X</span>Y</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;