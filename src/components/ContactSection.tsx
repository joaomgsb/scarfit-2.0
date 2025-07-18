import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, ArrowRight, Sparkles, Crown, CheckCircle } from 'lucide-react';

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
            
            <div className="relative max-w-4xl mx-auto mb-12">
              {/* Imagem para Desktop */}
              <img 
                src="/images/efeitos/notebook.png" 
                alt="Notebook mostrando depoimento de transformação"
                className="w-full h-auto block mx-auto hidden md:block"
              />
              
              {/* Imagem para Mobile */}
              <img 
                src="/images/efeitos/celularmockup.png" 
                alt="Celular mostrando depoimento de transformação"
                className="w-full h-auto block mx-auto md:hidden"
              />
            </div>

            {/* Card de Conversão Simples */}
            <motion.div 
              variants={itemVariants} 
              className="max-w-2xl mx-auto"
            >
              <div className="glass-effect rounded-2xl p-6 md:p-8 border border-primary/30 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-light mb-4">
                  Comece Sua Transformação Hoje
                </h3>
                
                <p className="text-light-muted mb-6">
                  Junte-se a mais de 1200 pessoas que já transformaram suas vidas
                </p>

                <a
                  href="https://wa.me/5541984961012?text=Olá! Quero começar minha transformação com a ScarFit. Gostaria de conhecer os planos disponíveis."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-dark font-bold py-4 px-6 rounded-xl text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  <MessageSquare className="w-5 h-5" />
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;