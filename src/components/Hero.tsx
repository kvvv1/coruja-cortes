import React from 'react';
import { Scissors, BookOpen, ArrowRight, Gift, Shirt } from 'lucide-react';

const Hero = () => {
  const handleCTAClick = (type: string) => {
    if (type === 'cut') {
      window.open('https://wa.me/5531999368220?text=Quero agendar um corte no Coruja Cortes!', '_blank');
    } else if (type === 'course') {
      const element = document.querySelector('#course');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'rifa') {
      const element = document.querySelector('#rifa');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-cover bg-no-repeat bg-center md:bg-[position:right]"
      style={{ backgroundImage: "url('/herosection1.png')" }}
    >
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[90vh] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Texto à esquerda */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left pt-16 pb-8 sm:pt-24 sm:pb-16">
          <div className="max-w-2xl w-full">
            <div className="mb-8 animate-slide-up">
              <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 break-words max-w-full">
                DO CORTE
                <br />
                <span className="text-royal-blue">AO <span className='text-detail-red'>CORRE</span>.</span>
              </h1>
              <h2 className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-silver mb-6 break-words max-w-full">
                AQUI VOCÊ SAI NA RÉGUA
                <br />
                <span className="text-white">OU EMPREENDENDO.</span>
              </h2>
              {/* NOVO TEXTO DE DESTAQUE */}
              <div className="mt-8">
                <h3 className="font-display text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-royal-blue drop-shadow mb-2 uppercase tracking-tight break-words max-w-full">
                  TÁ ESPERANDO O QUÊ?
                </h3>
                <p className="font-sans text-base xs:text-lg md:text-xl text-white/90 font-medium">
                  Aqui tem corte, curso e corre pra quem quer.
                </p>
              </div>
            </div>
            <div className="mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <p className="text-white/90 text-base xs:text-lg md:text-xl max-w-3xl leading-relaxed">
                Seja pra fazer um corte de qualidade ou 
                aprender a <strong className="text-silver">ganhar dinheiro com a máquina na mão</strong>,
                o Coruja Cortes é o ponto certo.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center w-full animate-slide-up sm:flex-row sm:justify-start sm:gap-5 md:gap-6 lg:gap-8 mb-8 px-1 xs:px-2" style={{animationDelay: '0.6s'}}>
              <button
                onClick={() => handleCTAClick('cut')}
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 xs:py-3 px-3 xs:px-6 rounded-lg text-sm xs:text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[160px] xs:min-w-[210px]"
              >
                <Scissors className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>CORTAR CABELO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => handleCTAClick('course')}
                className="group bg-white hover:bg-gray-100 text-blue-600 hover:text-blue-700 font-bold py-2 xs:py-3 px-3 xs:px-6 rounded-lg text-sm xs:text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 w-full sm:w-auto min-w-[160px] xs:min-w-[210px]"
              >
                <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>FAZER CURSO</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => handleCTAClick('rifa')}
                className="group bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 xs:py-3 px-3 xs:px-6 rounded-lg text-sm xs:text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[160px] xs:min-w-[210px]"
              >
                <Gift className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>RIFA DO CORUJA</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => window.open('https://wa.me/5531999368220?text=Quero%20comprar%20roupas%20do%20Coruja!', '_blank')}
                className="group bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-2 xs:py-3 px-3 xs:px-6 rounded-lg text-sm xs:text-base md:text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 w-full sm:w-auto min-w-[160px] xs:min-w-[210px]"
              >
                <Shirt className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>COMPRAR ROUPAS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* Mascote removido, pois agora está no fundo */}
      </div>
      {/* Gradiente de transição para a próxima seção removido */}
    </section>
  );
};

export default Hero;