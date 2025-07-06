import React from 'react';
import { Gift, AlertTriangle, ArrowRight, Link2 } from 'lucide-react';

const Rifa = () => {
  return (
    <section id="rifa" className="py-16 px-2 bg-gradient-to-b from-black to-graphite relative">
      <div className="absolute inset-0 bg-concrete opacity-5 pointer-events-none"></div>
      <div className="max-w-2xl md:max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Logo e título */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo-coruja.png" alt="Logo Coruja" className="w-24 h-24 md:w-32 md:h-32 mb-2" />
          <h2 className="font-display text-4xl md:text-6xl font-black text-royal-blue mb-2 text-center">RIFA</h2>
          <div className="bg-royal-blue text-white font-bold text-lg md:text-2xl px-6 py-2 rounded-xl mb-2 shadow-lg">CG FAN START 2024</div>
          <div className="flex items-center gap-2 text-white text-base md:text-lg font-bold mb-2">
            <span className="whitespace-nowrap">→ OU 10MIL NO PIX ←</span>
          </div>
        </div>

        {/* Alerta e preço */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full mb-4">
          <div className="bg-royal-blue/90 rounded-xl px-6 py-4 flex flex-col items-center shadow-lg w-full max-w-xs">
            <span className="text-white text-sm font-semibold mb-1">Bilhete por apenas</span>
            <span className="text-3xl md:text-4xl font-black text-white drop-shadow">R$0,29</span>
          </div>
          <div className="flex flex-col items-center bg-black/70 rounded-xl px-4 py-3 shadow-lg max-w-xs">
            <AlertTriangle className="text-red-500 w-7 h-7 mb-1 animate-bounce" />
            <span className="text-white font-bold text-base">Alerta!</span>
            <span className="text-red-500 font-black text-lg">50% já vendido</span>
          </div>
        </div>

        {/* Imagem da moto */}
        <div className="w-full flex justify-center mb-6">
          <img src="/rifa.jpg" alt="Rifa Moto CG FAN START 2024" className="w-full max-w-md rounded-2xl shadow-2xl object-contain bg-black" style={{background:'#111'}} />
        </div>

        {/* Promoção de bilhetes */}
        <div className="w-full flex flex-col items-center mb-6">
          <div className="bg-royal-blue/90 rounded-2xl p-4 w-full max-w-md flex flex-col gap-2 shadow-lg">
            <span className="text-white font-bold text-center text-lg mb-2">PROMOÇÃO DE BILHETES!</span>
            <div className="flex flex-col gap-2 md:flex-row md:justify-center">
              <div className="bg-white/10 rounded-lg px-4 py-2 flex-1 text-center text-white font-bold">100 BILHETES POR R$20,00</div>
              <div className="bg-white/10 rounded-lg px-4 py-2 flex-1 text-center text-white font-bold">1000 BILHETES POR R$100,00</div>
            </div>
          </div>
        </div>

        {/* Botão de participação */}
        <a
          href="https://wa.me/5531999368220?text=Quero%20participar%20da%20rifa%20da%20moto%20CG%20FAN%20START%202024!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md"
        >
          <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-royal-blue to-green-500 hover:from-green-600 hover:to-royal-blue text-white font-black text-lg md:text-xl py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 mb-4">
            <Gift className="w-6 h-6" />
            PARTICIPE AGORA
            <ArrowRight className="w-5 h-5" />
          </button>
        </a>

        {/* Link para o site ou regulamento */}
        <a
          href="#"
          className="flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-royal-blue font-bold text-base md:text-lg py-3 px-6 rounded-xl shadow transition-all duration-300 hover:scale-105 mb-2"
          style={{textDecoration: 'none'}}
        >
          <Link2 className="w-5 h-5" />
          LINK PARA O SITE
        </a>
      </div>
    </section>
  );
};

export default Rifa; 