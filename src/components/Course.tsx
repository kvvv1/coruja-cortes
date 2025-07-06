import React, { useState } from 'react';
import { Scissors, User, DollarSign, TrendingUp, Star, ArrowRight, Phone } from 'lucide-react';

const Course = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });

  const highlights = [
    {
      icon: Scissors,
      title: 'CORTE, FADE, PIGMENTAÇÃO',
      desc: 'Técnicas avançadas de corte masculino, degradê perfeito e pigmentação profissional'
    },
    {
      icon: User,
      title: 'BARBA, VISAGISMO E ESTILO',
      desc: 'Design de barba, análise facial e consultoria de estilo personalizada'
    },
    {
      icon: DollarSign,
      title: 'POSTURA, ATENDIMENTO E VENDAS',
      desc: 'Como se posicionar, fidelizar clientes e maximizar seus ganhos'
    },
    {
      icon: TrendingUp,
      title: 'MARKETING E FIDELIZAÇÃO',
      desc: 'Estratégias digitais, redes sociais e construção de marca pessoal'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Quero saber mais sobre o curso de barbeiro.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nCidade: ${formData.city}`;
    window.open(`https://wa.me/5531999368220?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="course" className="py-20 bg-gradient-to-b from-graphite to-black relative">
      <div className="absolute inset-0 bg-brick-texture opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-6">
            CURSO DE BARBEIRO
            <br />
            <span className="text-royal-blue">PROFISSIONAL</span>
          </h2>
          <p className="text-xl md:text-2xl text-silver font-bold max-w-4xl mx-auto">
            DO INICIANTE AO BARBEIRO PROFISSIONAL — NA PRÁTICA, NO CORRE.
          </p>
        </div>

        {/* Course Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight) => (
            <div 
              key={highlight.title}
              className="bg-gradient-to-b from-royal-blue/20 to-transparent p-6 rounded-xl border border-royal-blue/30 hover:border-royal-blue hover:scale-105 transition-all duration-300 group"
            >
              <div className="bg-royal-blue w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-bold text-white mb-3 text-lg">{highlight.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{highlight.desc}</p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="text-center mb-16 bg-gradient-to-r from-royal-blue/20 via-silver/10 to-royal-blue/20 p-8 rounded-2xl border border-royal-blue/30">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Star className="w-8 h-8 text-royal-blue" />
            <span className="font-display text-3xl md:text-4xl font-black text-white">
              90%
            </span>
            <Star className="w-8 h-8 text-royal-blue" />
          </div>
          <p className="text-xl md:text-2xl font-bold text-silver mb-2">
            DE 40 ALUNOS FORMADOS.
          </p>
          <p className="text-lg text-white/90">
            Alguns estão no estilo. <strong className="text-royal-blue">Outros já estão no jogo.</strong>
          </p>
        </div>

        {/* Galeria de Fotos do Curso */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['/curso10.jpeg','/curso11.jpeg','/curso12.jpeg','/curso13.jpeg','/curso14.jpeg'].map((src, idx) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-lg bg-black">
                <img
                  src={src}
                  alt={`Foto do curso ${idx+10}`}
                  className="w-full h-40 md:h-44 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-b from-black to-graphite p-8 rounded-2xl border-2 border-royal-blue/50">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-4">
                QUERO ENTRAR PRA
                <span className="text-royal-blue"> TROPA</span>
              </h3>
              <p className="text-white/80">
                Preencha os dados e receba todas as informações sobre o curso
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="SEU NOME COMPLETO"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-royal-blue focus:bg-white/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="SEU WHATSAPP"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-royal-blue focus:bg-white/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="SUA CIDADE"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-royal-blue focus:bg-white/20 transition-all duration-300"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-royal-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-xl group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>QUERO SABER MAIS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-white/60 text-sm">
                Resposta garantida em até 30 minutos
              </p>
            </div>
          </div>
        </div>

        {/* Money Impact */}
        <div className="mt-16 text-center bg-gradient-to-r from-green-500/20 to-royal-blue/20 p-8 rounded-2xl border border-green-500/30">
          <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-4">
            5 CORTES POR DIA POR 30 REAIS = R$150/DIA, AGORA MULTIPLICA:
          </h3>
          <p className="text-lg text-white/80">
            R$150 x 25 dias = <strong className="text-green-400">R$3.750/mês</strong> só com cortes básicos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Course;