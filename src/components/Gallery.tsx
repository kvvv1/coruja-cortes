import React from 'react';
import { Star, Instagram } from 'lucide-react';

const Gallery = () => {
  const cuts = [
    {
      image: '/corte1.png',
      label: 'MOICANO COLORIDO',
      style: 'Moicano moderno com coloração vermelha vibrante e acabamento na régua.'
    },
    {
      image: '/corte2.png',
      label: 'FAVELINHA',
      style: 'Desenho artístico de casas na nuca, representando a quebrada.'
    },
    {
      image: '/corte7.jpeg',
      label: 'MOICANO PIGMENTADO VERMELHO COM FREESTYLE',
      style: 'Moicano pigmentado vermelho, com desenhos freestyle na lateral.'
    },
    {
      image: '/corte3.png',
      label: 'CORTE MOICANO DEGRADÊ MODERNO',
      style: 'Corte moicano degradê moderno, com freestyle na lateral'
    },
    {
      image: '/corte8.jpeg',
      label: 'CORTE SOCIAL INFANTIL',
      style: 'Cortes infantis totalmente na tesoura.'
    },
    {
      image: '/corte9.jpeg',
      label: 'DEGRADÊ CLÁSSICO COLORIDO',
      style: 'Corte degradê colorido.'
    },
    {
      image: '/corte10.jpeg',
      label: 'DEGRADÊ CLÁSSICO CURTO',
      style: 'Degradê clássico com risquinho na lateral.'
    },
    {
      image: '/corte15.jpeg',
      label: 'PLATINADO DE CRIA ESPETADO',
      style: 'Platinado espetado com muito estilo, corte de cria.'
    },
    {
      image: '/corte16.jpeg',
      label: 'PLATINADO DA MELHOR FORMA',
      style: 'Platinado com acabamento de alto padrão, visual marcante.'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-graphite relative">
      <div className="absolute inset-0 bg-concrete opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            GALERIA DE
            <br />
            <span className="text-royal-blue">CORTES</span>
          </h2>
          <p className="text-xl text-silver font-bold mb-8">
            CADA CORTE UMA HISTÓRIA, CADA CLIENTE UMA VITÓRIA
          </p>
          
          <div className="flex items-center justify-center space-x-2 text-white/80">
                            <Instagram className="w-5 h-5" />
                <span>@coruja.corte - Siga para ver mais</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 grid-rows-4 gap-4 mb-16 max-w-2xl mx-auto">
          {cuts.slice(0, 8).map((cut, idx) => (
            <div key={cut.image} className="relative overflow-hidden rounded-xl group shadow-lg w-full">
              <img 
                src={cut.image}
                alt={cut.label}
                className="w-full aspect-square object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                <h3 className="font-display text-xl font-bold text-white mb-2 text-center">{cut.label}</h3>
                <p className="text-white/80 text-sm text-center">{cut.style}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-royal-blue/20 to-silver/20 p-6 rounded-2xl border border-royal-blue/30">
            <Instagram className="w-8 h-8 text-royal-blue" />
            <div className="text-left">
              <h3 className="font-display font-bold text-white text-lg">
                VER MAIS NO INSTAGRAM
              </h3>
              <p className="text-white/70 text-sm">
                Acompanhe nosso trabalho diário
              </p>
            </div>
            <button 
              onClick={() => window.open('https://www.instagram.com/coruja.cortes/', '_blank')}
              className="bg-royal-blue hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:scale-105"
            >
              SEGUIR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;