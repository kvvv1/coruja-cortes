import React from 'react';
import { Scissors, BookOpen, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleCTAClick = (type: string) => {
    if (type === 'cut') {
      window.open('https://wa.me/5531999999999?text=Quero agendar um corte na Coruja Cortes!', '_blank');
    } else if (type === 'course') {
      const element = document.querySelector('#course');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-graphite to-royal-blue/30"></div>
      <div className="absolute inset-0 bg-brick-texture opacity-10"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Barbeiro profissional"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Logo with animation */}
            {/* Removido conforme solicitado */}

            {/* Main Headline */}
            <div className="mb-8 animate-slide-up">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4">
                DO CORTE
                <br />
                <span className="text-royal-blue">AO CORRE.</span>
              </h1>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-silver mb-6">
                AQUI VOCÊ SAI NA RÉGUA
                <br />
                <span className="text-white">OU EMPREENDENDO.</span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
                Seja pra fazer o <strong className="text-royal-blue">um corte de qualidade</strong> ou 
                aprender a <strong className="text-silver">ganhar dinheiro com a máquina na mão</strong>,
                a Coruja Cortes é o ponto certo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
              <button
                onClick={() => handleCTAClick('cut')}
                className="group bg-royal-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl"
              >
                <Scissors className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>QUERO DEIXAR NA RÉGUA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => handleCTAClick('course')}
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>QUERO FAZER O CURSO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;