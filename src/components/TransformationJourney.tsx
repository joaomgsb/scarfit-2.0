import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Zap, Shield, TrendingUp, Heart } from 'lucide-react';

const TransformationJourney: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const challenges = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Protocolos Genéricos",
      description: "Métodos que não consideram sua individualidade"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Falta de Acompanhamento",
      description: "Você fica sozinho após receber o plano"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Resultados Temporários",
      description: "Transformações que não se sustentam"
    }
  ];

  const solutions = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Personalizado",
      description: "Protocolos únicos para seu biotipo e rotina"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Suporte Contínuo",
      description: "Equipe multidisciplinar disponível diariamente"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Transformação Duradoura",
      description: "Mudanças que se mantêm para toda a vida"
    }
  ];

  return (
    <section className="section-padding section-transition" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            {/* Título Desktop */}
            <h2 className="hidden md:block text-gradient mb-6">
              Por Que Outros Métodos Falham
            </h2>
            
            {/* Título Mobile (Compacto) */}
            <h2 className="md:hidden text-gradient mb-6">
              Por Que Outros Falham
            </h2>
            
            {/* Descrição Desktop */}
            <p className="hidden md:block text-xl text-light-muted max-w-3xl mx-auto">
              Você já tentou de tudo e não viu resultados? Nós entendemos. Diferente dos métodos tradicionais que te deixam na mão, a ScarFit foi criada para preencher as lacunas e entregar a transformação que você realmente busca.
            </p>
            
            {/* Descrição Mobile (Compacta) */}
            <p className="md:hidden text-base text-light-muted max-w-xl mx-auto">
              Você já tentou de tudo e não viu resultados? Diferente dos métodos tradicionais, a ScarFit foi criada para entregar a transformação que você realmente busca.
            </p>
          </motion.div>

          {/* Comparação visual */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Problemas comuns */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-neutral-400 mb-4">Métodos Tradicionais</h3>
                <div className="w-16 h-1 bg-neutral-600 mx-auto rounded-full" />
              </div>
              
              <div className="space-y-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30">
                    <div className="p-3 rounded-xl bg-neutral-800 text-neutral-400">
                      {challenge.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-300 mb-2">{challenge.title}</h4>
                      <p className="text-neutral-500">{challenge.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Soluções ScarFit */}
            <motion.div variants={itemVariants}>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-primary mb-4">Metodologia ScarFit</h3>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
              </div>
              
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 rounded-2xl border border-primary/20 bg-primary/5 card-hover">
                    <div className="p-3 rounded-xl bg-primary text-dark">
                      {solution.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-light mb-2">{solution.title}</h4>
                      <p className="text-light-muted">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA de transição */}
          <motion.div variants={itemVariants} className="text-center mt-20">
            <div className="inline-flex items-center gap-4 glass-effect rounded-2xl px-8 py-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-light font-medium">
                Descubra como nossa metodologia funciona na prática
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationJourney;