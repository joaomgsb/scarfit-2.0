import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection: React.FC = () => {
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

  return (
    <section id="contact" className="section-padding section-transition" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="mb-6">
              <h2 className="text-gradient mb-4">
                Pronto Para Sua Transformação?
              </h2>
              <p className="text-xl text-light-muted max-w-3xl mx-auto">
                Dê o primeiro passo rumo à sua melhor versão. Nossa equipe está pronta para criar 
                seu plano personalizado e acompanhar cada etapa da sua jornada.
              </p>
            </div>
            
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="/images/efeitos/notebook.png" 
                alt="Notebook mostrando depoimento de transformação"
                className="w-full h-auto block mx-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;