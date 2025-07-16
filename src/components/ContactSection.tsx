import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageSquare, Phone, Mail, MapPin, ArrowRight, Clock } from 'lucide-react';

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

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+55 41 8496-1012",
      description: "Resposta em até 2 horas"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contato@scarfit.com.br",
      description: "Para dúvidas gerais"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      value: "São Paulo, SP",
      description: "Atendimento nacional"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário",
      value: "Seg-Sex: 5h às 22h",
      description: "Sáb: 8h às 20h"
    }
  ];

  return (
    <section id="contact" className="section-padding section-transition" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-gradient mb-6">
              Pronto Para Sua Transformação?
            </h2>
            <p className="text-xl text-light-muted max-w-3xl mx-auto">
              Dê o primeiro passo rumo à sua melhor versão. Nossa equipe está pronta para criar 
              seu plano personalizado e acompanhar cada etapa da sua jornada.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 glass-effect rounded-2xl card-hover">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-dark flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-light mb-1">
                        {info.title}
                      </h3>
                      <div className="text-primary font-medium mb-1">
                        {info.value}
                      </div>
                      <div className="text-light-muted text-sm">
                        {info.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect rounded-3xl p-8 lg:p-12 text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-10 h-10 text-dark" />
                </div>
                
                <h3 className="text-2xl font-semibold text-light mb-4">
                  Consulta Estratégica Gratuita
                </h3>
                
                <p className="text-light-muted mb-8 leading-relaxed">
                  Converse com nossa equipe, entenda como nossa metodologia pode transformar 
                  sua vida e receba orientações personalizadas sem compromisso.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5541984961012?text=Olá! Quero agendar minha consulta estratégica gratuita com a ScarFit."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-lg group"
                  >
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Agendar Consulta Gratuita
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="text-sm text-light-muted">
                    Sem compromisso • Resposta garantida em 2h
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1200+</div>
              <div className="text-light-muted">Clientes Satisfeitos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-light-muted">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-light-muted">Anos de Experiência</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;