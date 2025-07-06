import React from 'react';
import { Phone, MapPin, Clock, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  const handleWhatsApp = (type: string) => {
    const messages = {
      cut: 'Olá! Quero agendar um horário para cortar no Coruja Cortes!',
      course: 'Olá! Quero tirar dúvidas sobre o curso de barbeiro do Coruja Cortes!'
    };
    
    const message = messages[type as keyof typeof messages];
    window.open(`https://wa.me/5531999368220?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-graphite relative">
      <div className="absolute inset-0 bg-concrete opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            AGENDAMENTO E
            <br />
            <span className="text-royal-blue">CONTATO</span>
          </h2>
          <p className="text-xl text-silver font-bold">
            TÁ ESPERANDO O QUÊ? AQUI TEM CORTE, CURSO E CORRE PRA QUEM QUER.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => handleWhatsApp('cut')}
                className="w-full group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-between hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>AGENDAR CORTE</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => handleWhatsApp('course')}
                className="w-full group bg-gradient-to-r from-royal-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-between hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>TIRAR DÚVIDAS DO CURSO</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <MapPin className="w-6 h-6 text-royal-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">LOCALIZAÇÃO</h3>
                  <div className="text-white/80 space-y-2">
                    <div>
                      <p className="font-semibold text-royal-blue">Unidade 1</p>
                      <p>Praça Antônio de Albuquerque, 58</p>
                      <p>Centro de Sabará - MG</p>
                    </div>
                    <div>
                      <p className="font-semibold text-royal-blue">Unidade 2</p>
                      <p>Rua José Vaz Pedrosa, 111</p>
                      <p>Pompéu - MG</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <Clock className="w-6 h-6 text-royal-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">FUNCIONAMENTO</h3>
                  <div className="text-white/80 space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 16h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                <Instagram className="w-6 h-6 text-royal-blue flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white mb-2">REDES SOCIAIS</h3>
                  <button 
                    onClick={() => window.open('https://instagram.com/coruja.corte', '_blank')}
                    className="text-royal-blue hover:text-blue-400 transition-colors duration-300"
                  >
                    @coruja.corte
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-royal-blue/20 to-silver/20 rounded-2xl border-2 border-royal-blue/30 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-graphite to-black flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-royal-blue mx-auto mb-4" />
                  <h3 className="font-display font-bold text-white text-xl mb-2">
                    CORUJA CORTES
                  </h3>
                  <p className="text-white/80 mb-4">
                    Sabará e Pompéu - MG
                  </p>
                  <div className="space-y-2">
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=Praça+Antônio+de+Albuquerque+58+Sabará+MG', '_blank')}
                      className="bg-royal-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-sm"
                    >
                      UNIDADE 1 - SABARÁ
                    </button>
                    <button 
                      onClick={() => window.open('https://maps.google.com/?q=Rua+José+Vaz+Pedrosa+111+Pompéu+MG', '_blank')}
                      className="bg-royal-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold transition-all duration-300 hover:scale-105 text-sm"
                    >
                      UNIDADE 2 - POMPÉU
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-royal-blue/20 via-silver/10 to-royal-blue/20 p-8 rounded-2xl border border-royal-blue/30">
          <h3 className="font-display text-2xl md:text-4xl font-black text-white mb-4">
            "TÁ ESPERANDO O QUÊ?"
          </h3>
          <p className="text-lg text-white/80 mb-6">
            Aqui tem corte, curso e corre pra quem quer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <button
              onClick={() => handleWhatsApp('cut')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              QUERO CORTAR
            </button>
            <button
              onClick={() => handleWhatsApp('course')}
              className="bg-royal-blue hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
            >
              QUERO APRENDER
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;