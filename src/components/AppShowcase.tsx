import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AppShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-20 bg-dark overflow-hidden">
      <div className="container-custom px-0 md:px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
              A ScarFit no Seu Bolso
            </h2>
            <p className="text-lg md:text-xl text-light-muted leading-relaxed mb-6">
              Sua transformação na palma da mão. Acompanhe sua evolução, receba treinos personalizados e tenha acesso a todo o conteúdo exclusivo diretamente do seu smartphone.
              Transforme seu corpo com a tecnologia a seu favor.
            </p>
          </div>
          
          <div className="w-full max-w-3xl mx-auto">
            <img 
              src="/images/efeitos/celular.png" 
              alt="Aplicativo ScarFit" 
              className="w-full h-auto block mx-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppShowcase;
