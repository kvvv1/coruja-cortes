import React from 'react';
import { Target, Users, Trophy, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#2A2A2A] relative">
      {/* Transição suave do topo */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#2A2A2A] via-[#2A2A2A]/80 to-transparent"></div>
      
      <div className="absolute inset-0 bg-concrete opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-6" style={{letterSpacing: '0.03em'}}>
                SOBRE O
                <br />
                <span className="text-royal-blue">CORUJA CORTES</span>
              </h2>
              
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p className="text-2xl font-bold text-silver">
                  "BARBEARIA É ATITUDE.
                  <br />
                  FORMAÇÃO É FUTURO."
                </p>
                
                <p>
                  Aqui a gente <strong className="text-royal-blue">vive do corte</strong>, 
                  ensina de verdade e transforma <strong className="text-silver">visão em ação</strong>.
                </p>
                
                <p>
                  No Coruja Cortes, cada cliente sai com mais que um corte - sai com 
                  <strong className="text-royal-blue"> atitude</strong>. E cada aluno formado 
                  leva mais que técnica - leva o <strong className="text-silver">corre na veia</strong>.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-black text-royal-blue mb-2">8+</div>
                <div className="text-white/80 font-bold">ANOS DE EXPERIÊNCIA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-royal-blue mb-2">30+</div>
                <div className="text-white/80 font-bold">ALUNOS FORMADOS</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="/corte16.jpeg"
                alt="Corte de cabelo profissional Coruja Cortes"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/50 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-royal-blue p-4 rounded-full animate-pulse">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-silver p-4 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}>
              <Trophy className="w-8 h-8 text-black" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: Target, title: 'PRECISÃO', desc: 'Cada corte é uma obra de arte' },
            { icon: Users, title: 'COMUNIDADE', desc: 'Mais que clientes, uma família' },
            { icon: Trophy, title: 'EXCELÊNCIA', desc: 'Padrão de qualidade único' },
            { icon: TrendingUp, title: 'CRESCIMENTO', desc: 'Formamos empreendedores' },
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center group hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-royal-blue/10 to-transparent p-6 rounded-xl border border-royal-blue/20 hover:border-royal-blue/40"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-royal-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-blue group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-royal-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display font-black text-white mb-4 text-xl" style={{fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.05em'}}>{feature.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed font-medium">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Transição suave da parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#2A2A2A] via-[#2A2A2A]/80 to-transparent"></div>
    </section>
  );
};

export default About;