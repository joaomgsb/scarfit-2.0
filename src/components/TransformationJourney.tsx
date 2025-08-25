import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="section-padding section-transition relative overflow-hidden" ref={ref}>
      {/* Background com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 via-dark to-neutral-800/30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              95% dos profissionais prescrevem o mesmo plano para corpos diferentes.
            </h2>
            <p className="text-lg md:text-xl text-light-muted max-w-3xl mx-auto leading-relaxed">
              A escolha é sua: continuar com métodos genéricos ou experimentar a metodologia ScarX.
            </p>
          </motion.div>

          {/* Seção dos dois caminhos */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
            {/* CAMINHO A - Métodos tradicionais */}
            <motion.div 
              variants={cardVariants}
              className="relative group h-full"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-neutral-700 bg-gradient-to-br from-neutral-800/80 to-neutral-900/90 backdrop-blur-sm transition-all duration-500 group-hover:border-neutral-600 group-hover:shadow-2xl group-hover:shadow-neutral-900/50 h-full flex flex-col">
                {/* Imagem triste */}
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/triste.png" 
                    alt="Profissional insatisfeito com métodos tradicionais"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
                </div>
                
                {/* Conteúdo do caminho A */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-300 mb-3">
                        MÉTODOS TRADICIONAIS:
                      </h3>
                      <div className="w-16 h-1 bg-neutral-600 mx-auto rounded-full" />
                    </div>
                    
                    <div className="space-y-3 text-center">
                      <p className="text-base md:text-lg text-neutral-400 font-medium">
                        Protocolos genéricos que não consideram sua individualidade
                      </p>
                      <p className="text-base md:text-lg text-neutral-400 font-medium">
                        Falta de acompanhamento personalizado e suporte contínuo
                      </p>
                      <p className="text-base md:text-lg text-neutral-400 font-medium">
                        Resultados temporários que não se sustentam no longo prazo
                      </p>
                    </div>
                  </div>
                  
                  {/* Ícones representativos */}
                  <div className="flex justify-center items-center gap-4 mt-6">
                    <div className="p-2 rounded-full bg-neutral-700 text-neutral-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div className="p-2 rounded-full bg-neutral-700 text-neutral-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </div>
                    <div className="p-2 rounded-full bg-neutral-700 text-neutral-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CAMINHO B - Metodologia ScarX */}
            <motion.div 
              variants={cardVariants}
              className="relative group h-full"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-dark/90 backdrop-blur-sm transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 h-full flex flex-col">
                {/* Efeito de brilho sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Imagem feliz */}
                <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/feliz.jpg" 
                    alt="Profissional satisfeito com metodologia ScarX"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                
                {/* Conteúdo do caminho B */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-center mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                        METODOLOGIA SCARX:
                      </h3>
                      <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
                    </div>
                    
                    <div className="space-y-3 text-center">
                      <p className="text-base md:text-lg text-light font-medium">
                        Protocolos 100% personalizados para seu biotipo e rotina
                      </p>
                      <p className="text-base md:text-lg text-light font-medium">
                        Acompanhamento diário com equipe multidisciplinar especializada
                      </p>
                      <p className="text-base md:text-lg text-light font-medium">
                        Transformações duradouras que se mantêm para toda a vida
                      </p>
                    </div>
                  </div>
                  
                  {/* Ícones representativos */}
                  <div className="flex justify-center items-center gap-4 mt-6">
                    <div className="p-2 rounded-full bg-primary text-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="p-2 rounded-full bg-primary text-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="p-2 rounded-full bg-primary text-dark">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA de transição */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-4 glass-effect rounded-2xl px-6 py-4 border border-primary/20 bg-primary/5">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-light font-medium text-base">
                Pronto para experimentar a diferença da metodologia ScarX?
              </span>
            </div>
            <p className="text-light-muted mt-3 text-base">
              Descubra como nossa abordagem personalizada pode transformar sua vida.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationJourney;