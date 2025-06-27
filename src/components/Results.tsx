import React from 'react';
import { Award, TrendingUp, Users, Quote } from 'lucide-react';

const Results = () => {
  const testimonials = [
    {
      name: 'LUCAS SILVA',
      role: 'Aluno formado - 2023',
      content: 'Saí do zero e hoje tô faturando R$4.500 por mês só com corte. A Coruja me ensinou não só a técnica, mas o corre todo.',
      rating: 5
    },
    {
      name: 'RAFAEL SANTOS',
      role: 'Cliente há 2 anos',
      content: 'Melhor corte da região, sem dúvida. Sempre saio satisfeito e recebo elogios. Vale cada centavo.',
      rating: 5
    },
    {
      name: 'DIEGO MARTINS',
      role: 'Aluno formado - 2022',
      content: 'Hoje tenho minha própria barbearia e dois funcionários. Tudo começou com o curso da Coruja.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-graphite to-black relative">
      <div className="absolute inset-0 bg-brick-texture opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            GALERIA DE FORMANDOS
          </h2>
          <p className="text-xl text-silver font-bold">
            Quem faz o curso, conquista o certificado e entra pro time!
          </p>
        </div>

        {/* Galeria dos alunos formados */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[1,2,3,4,5,6,7,8,9].map((num) => (
            <div key={num} className="overflow-hidden rounded-xl bg-gradient-to-b from-royal-blue/10 to-black shadow-lg">
              <img 
                src={`/curso${num}.png`}
                alt={`Aluno formado ${num}`}
                className="w-full h-96 object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="text-center mb-16 bg-gradient-to-r from-green-500/20 via-royal-blue/20 to-green-500/20 p-8 rounded-2xl border border-green-500/30">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <span className="font-display text-3xl md:text-5xl font-black text-white">
              R$150/DIA
            </span>
            <TrendingUp className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-4">
            5 CORTES POR DIA POR 30 REAIS = R$150/DIA, AGORA MULTIPLICA:
          </h3>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nossos alunos saem ganhando entre <strong className="text-green-400">R$3.000 e R$8.000</strong> por mês. 
            Alguns abrem o próprio negócio em 6 meses.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-gradient-to-b from-royal-blue/20 to-transparent p-6 rounded-xl border border-royal-blue/30 hover:border-royal-blue hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-royal-blue mr-2" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-royal-blue rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <p className="text-white/90 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-display font-bold text-white">
                  {testimonial.name}
                </h4>
                <p className="text-silver text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, number: '30+', label: 'ALUNOS FORMADOS' },
            { icon: Award, number: '90%', label: 'TAXA DE SUCESSO (de 40 alunos formados)' },
            { icon: TrendingUp, number: 'R$4.5K', label: 'MÉDIA MENSAL' },
            { icon: Users, number: '500+', label: 'CLIENTES ATIVOS' },
          ].map((stat) => (
            <div key={stat.label} className="group">
              <div className="bg-royal-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-royal-blue transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-royal-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
              <div className="text-white/70 font-bold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;