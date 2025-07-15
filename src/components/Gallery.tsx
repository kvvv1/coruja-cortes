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
    }
  ];

  const graduates = [
    {
      image: '/curso2.png',
      label: 'FORMADO 2',
      style: 'Aluno formado com domínio completo.'
    },
    {
      image: '/curso3.png',
      label: 'FORMADO 3',
      style: 'Aluno formado com excelência.'
    },
    {
      image: '/curso4.png',
      label: 'FORMADO 4',
      style: 'Aluno formado com qualidade superior.'
    },
    {
      image: '/curso8.png',
      label: 'FORMADO 8',
      style: 'Aluno formado com profissionalismo.'
    },
    {
      image: '/curso10.jpeg',
      label: 'FORMADO 10',
      style: 'Aluno formado com destaque.'
    },
    {
      image: '/curso12.jpeg',
      label: 'FORMADO 12',
      style: 'Aluno formado com sucesso.'
    },
    {
      image: '/curso14.jpeg',
      label: 'FORMADO 14',
      style: 'Aluno formado com maestria.'
    },
    {
      image: '/curso9.png',
      label: 'FORMADO 9',
      style: 'Aluno formado com técnica avançada.'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-graphite relative">
      <div className="absolute inset-0 bg-concrete opacity-5"></div>
      
      <div className="relative z-10">
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

        {/* Gallery Grid - 2x4 Layout */}
        <div className="grid grid-cols-2 gap-4 mb-16">
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
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                  </div>
                  <h3 className="font-display text-lg font-black text-white mb-1">
                    {cut.label}
                  </h3>
                  <p className="text-silver text-xs">
                    {cut.style}
                  </p>
                </div>
              </div>

              {/* Metallic border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-silver/50 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Galeria de Formados Section */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            GALERIA DE
            <br />
            <span className="text-royal-blue">FORMADOS</span>
          </h2>
          <p className="text-xl text-silver font-bold mb-8">
            NOSSOS ALUNOS QUE CONQUISTARAM O SUCESSO
          </p>
        </div>

        {/* Formados Grid - 2x4 Layout */}
        <div className="grid grid-cols-2 gap-4 mb-16">
          {graduates.map((graduate, index) => (
            <div 
              key={graduate.label}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-transparent to-black cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={graduate.image}
                  alt={`Formado ${graduate.label}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                    <Star className="w-3 h-3 text-royal-blue" />
                  </div>
                  <h3 className="font-display text-lg font-black text-white mb-1">
                    {graduate.label}
                  </h3>
                  <p className="text-silver text-xs">
                    {graduate.style}
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