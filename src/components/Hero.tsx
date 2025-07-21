import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-24"
      ref={ref}
    >
      {/* Blurred Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          alt="Fitness Background"
          className="w-full h-full object-cover blur-xl scale-110"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      {/* Subtle visual elements overlay */}
      <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-5xl mx-auto px-4"
        >
          {/* Headline principal */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-1 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent leading-tight"
          >
            Você é único. Seu plano também precisa ser.
          </motion.h1>
          
          {/* Country Flags */}
          <motion.div variants={itemVariants} className="flex justify-center items-center gap-1 mb-3 md:mb-4 mt-4">
            <img src="/svg/brasil.svg" alt="Brasil" className="w-5 h-4 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/svg/uruguai.svg" alt="Uruguai" className="w-5 h-4 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/svg/chile.svg" alt="Chile" className="w-5 h-4 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/svg/EUA.svg" alt="Estados Unidos" className="w-5 h-4 opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/svg/portugal.svg" alt="Portugal" className="w-5 h-4 opacity-80 hover:opacity-100 transition-opacity" />
          </motion.div>
          
          {/* Subtítulo Desktop */}
          <motion.p 
            variants={itemVariants}
            className="hidden md:block text-lg sm:text-xl md:text-2xl text-light-muted mb-8 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Você não falhou. O que faltava era um método feito para você. Transformar o corpo exige estratégia, ciência e apoio profissional diário. Bem-vindo à ScarFit.
          </motion.p>

          {/* Subtítulo Mobile (Compacto) */}
          <motion.p 
            variants={itemVariants}
            className="md:hidden text-base text-light-muted mb-6 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Você não falhou. O que faltava era um método feito para você. Transformar o corpo exige estratégia, ciência e apoio profissional diário. Bem-vindo à ScarFit.
          </motion.p>
          
          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center mb-8 md:mb-16 px-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 bg-primary text-dark font-bold py-3 px-4 md:py-4 md:px-8 rounded-xl text-sm md:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30 group"
            >
              Comece Sua Transformação Agora!
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="results"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark font-bold py-3 px-4 md:py-4 md:px-8 rounded-xl text-sm md:text-lg transition-all duration-300 group"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5" />
              Inspire-se: Veja Nossas Transformações
            </Link>
          </motion.div>
          
          {/* Indicadores de qualidade */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">1200+</div>
              <div className="text-sm md:text-base text-light-muted">Vidas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">9.492</div>
              <div className="text-sm md:text-base text-light-muted">Peso Eliminado</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm md:text-base text-light-muted">Taxa de Sucesso</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;