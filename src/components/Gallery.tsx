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
      image: '/corte4.png',
      label: 'PLATINADO MASCULINO',
      style: 'Corte masculino platinado, com acabamento degradê e estilo marcante.'
    },
    {
      image: '/corte5.png', 
      label: 'DESIGN AUTORAL',
      style: 'Corte com design exclusivo, mostrando técnica e personalidade.'
    },
    {
      image: '/corte6.png',
      label: 'PLATINADO INFANTIL',
      style: 'Corte platinado para crianças, estilo ousado e moderno.'
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
      image: '/corte11.jpeg',
      label: 'DESENHO ARTÍSTICO',
      style: 'Corte com desenho freestyle, cheio de personalidade.'
    },
    {
      image: '/corte12.jpeg',
      label: 'CORTE COLORIDO COM FREESTYLE',
      style: ' '
    },
    {
      image: '/corte13.jpeg',
      label: 'PLATINADO CURTO',
      style: 'Platinado curto daquele naipe, moderno e prático.'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cuts.map((cut, index) => (
            <div 
              key={cut.label}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-transparent to-black cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={cut.image}
                  alt={`Corte ${cut.label}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-royal-blue" />
                    <Star className="w-4 h-4 text-royal-blue" />
                    <Star className="w-4 h-4 text-royal-blue" />
                    <Star className="w-4 h-4 text-royal-blue" />
                    <Star className="w-4 h-4 text-royal-blue" />
                  </div>
                  <h3 className="font-display text-xl font-black text-white mb-1">
                    {cut.label}
                  </h3>
                  <p className="text-silver text-sm">
                    {cut.style}
                  </p>
                </div>
              </div>

              {/* Metallic border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-silver/50 rounded-xl transition-all duration-300"></div>
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