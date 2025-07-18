import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from "lottie-react";
import { ArrowRight } from 'lucide-react';
import etapa1Animation from '../animations/etapa1.json';
import etapa2Animation from '../animations/etapa2.json';
import etapa3Animation from '../animations/etapa3.json';
import etapa4Animation from '../animations/etapa4.json';

// Componente para o caminho SVG
const RoadmapPath = ({ inView }: { inView: boolean }) => (
  <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
    {/* SVG para Desktop */}
    <svg className="w-full h-full hidden lg:block" preserveAspectRatio="none" viewBox="0 0 800 1400">
      <motion.path
        d="M 400 10 C 600 220, 800 250, 700 350 C 600 450, 0 500, 100 600 C 200 700, 800 750, 700 850 C 600 950, 0 1000, 150 1200 C 300 1500, 500 1200, 400 1300"
        fill="none"
        stroke="url(#gradient-desktop)"
        strokeWidth="2.5"
        strokeDasharray="8 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        style={{ filter: 'url(#glow-desktop)' }}
      />
      <defs>
        <linearGradient id="gradient-desktop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.2" />
          <stop offset="10%" stopColor="#FACC15" stopOpacity="0.9" />
          <stop offset="90%" stopColor="#FACC15" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow-desktop" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
    
    {/* SVG para Mobile - Linha mais simples e vertical */}
    <svg className="w-full h-full lg:hidden" preserveAspectRatio="none" viewBox="0 0 400 1600">
      <motion.path
        d="M 200 50 L 200 1550"
        fill="none"
        stroke="url(#gradient-mobile)"
        strokeWidth="2"
        strokeDasharray="6 3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        style={{ filter: 'url(#glow-mobile)' }}
      />
      <defs>
        <linearGradient id="gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="0.3" />
          <stop offset="20%" stopColor="#FACC15" stopOpacity="0.8" />
          <stop offset="80%" stopColor="#FACC15" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FACC15" stopOpacity="0.3" />
        </linearGradient>
        <filter id="glow-mobile" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
);

const MethodologyShowcase: React.FC = () => {
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

  const steps = [
    {
      animationData: etapa1Animation,
      title: "Análise Profunda",
      description: "Avaliação completa do seu perfil físico, rotina e objetivos. Dados precisos para criar um plano único e eficaz.",
      details: ["Bioimpedância profissional", "Análise de rotina personalizada", "Definição de metas claras"]
    },
    {
      animationData: etapa2Animation,
      title: "Protocolo Personalizado",
      description: "Treinos e nutrição 100% adaptados ao seu biotipo e estilo de vida. Estratégico, eficaz e sustentável.",
      details: ["Treinos sob medida", "Plano nutricional flexível", "Suplementação estratégica"]
    },
    {
      animationData: etapa3Animation,
      title: "Acompanhamento Diário",
      description: "Suporte contínuo da equipe multidisciplinar via WhatsApp. Ajustes em tempo real para garantir sua evolução.",
      details: ["Suporte 24/7", "Ajustes em tempo real", "Motivação constante"]
    },
    {
      animationData: etapa4Animation,
      title: "Evolução Constante",
      description: "Monitoramento de resultados e otimização contínua. Transformações duradouras que se mantêm para sempre.",
      details: ["Métricas precisas", "Ajustes estratégicos", "Resultados sustentáveis"]
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
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-gradient mb-4 sm:mb-6">
              Nossa Metodologia Exclusiva
            </h2>
            <p className="text-lg sm:text-xl text-light-muted max-w-3xl mx-auto px-4">
              Quatro pilares fundamentais que garantem sua transformação de forma científica e sustentável.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="relative py-8 sm:py-12 lg:py-16">
            <RoadmapPath inView={inView} />
            <div className="space-y-12 sm:space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    {/* Conteúdo */}
                    <div className={`px-4 sm:px-6 lg:px-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="mb-4 sm:mb-6">
                        <div className="inline-block text-xs sm:text-sm font-medium text-light bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
                          Etapa {index + 1}
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold text-light mb-3 sm:mb-4">
                        {step.title}
                      </h3>

                      <p className="text-base sm:text-lg text-light-muted mb-4 sm:mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-2 sm:space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm sm:text-base text-light-muted">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className={`flex items-center justify-center px-4 sm:px-6 lg:px-0 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px]">
                        <Lottie
                          animationData={step.animationData}
                          className="w-full h-auto aspect-square"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
};

export default MethodologyShowcase;