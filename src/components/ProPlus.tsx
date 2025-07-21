import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { CheckCircle, MessageSquare, Sparkles, LineChart, Clock, Zap, Heart, CalendarClock, Crown, Star, Shield, ArrowRight } from 'lucide-react';

const ProPlus: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const benefits = [
    {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      title: "Suporte WhatsApp 24/7",
      description: "Acesso direto à equipe sempre que precisar"
    },
    {
      icon: <Sparkles className="h-5 w-5 text-primary" />,
      title: "Gestão Personalizada",
      description: "Adaptação contínua aos seus objetivos"
    },
    {
      icon: <LineChart className="h-5 w-5 text-primary" />,
      title: "Ajustes Imediatos",
      description: "Modificações rápidas no protocolo"
    },
    {
      icon: <Heart className="h-5 w-5 text-primary" />,
      title: "Plano Alimentar PRO+",
      description: "Renovação quinzenal estratégica"
    },
    {
      icon: <CalendarClock className="h-5 w-5 text-primary" />,
      title: "Check-ins Semanais",
      description: "Acompanhamento constante da evolução"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Alinhamento Estratégico",
      description: "Estratégias exclusivas para seu biotipo"
    },
    {
      icon: <Zap className="h-5 w-5 text-primary" />,
      title: "Experiência Elevada",
      description: "Tratamento VIP em todos os aspectos"
    },
  ];

  return (
    <section id="pro-plus" className="section-padding section-transition" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
              <Crown className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                EXPERIÊNCIA PREMIUM
              </span>
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent leading-tight">
              Eleve Sua Transformação
            </h2>
            
            <p className="text-lg md:text-xl text-light-muted max-w-3xl mx-auto leading-relaxed">
              Experiência exclusiva com o mais alto nível de atendimento, personalização e resultados acelerados.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content - Timeline Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Ana Spotlight */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  {/* Ana's Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-2xl blur-lg opacity-50" />
                      <img
                        src="images/ana.png"
                        alt="Ana Fontes - Gerente Executiva PRO+"
                        className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-2xl border-2 border-primary/40"
                      />
                                             <div className="absolute -bottom-3 -right-3 bg-primary py-2 px-3 rounded-lg shadow-lg">
                         <p className="font-bold text-xs md:text-sm !text-black">Ana Fontes</p>
                         <p className="text-xs !text-black">Gerente Executiva</p>
                       </div>
                    </div>
                  </div>
                  
                  {/* Ana's Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                      Sua Garantia de Excelência
                    </h3>
                    
                    <p className="text-light-muted mb-6 leading-relaxed">
                      Ana garante que cada cliente PRO+ tenha uma experiência exclusiva e resultados excepcionais. 
                      Ela é seu ponto de conexão direta para atendimento prioritário.
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full px-4 py-2">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-primary font-semibold text-sm">Compromisso Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Timeline */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              
              <div className="space-y-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-dark shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300" />
                    
                                         <div className="ml-0 md:ml-16">
                       <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-accent/50 to-dark-accent/30 border border-primary/20 hover:border-primary/40 transition-all duration-300 group-hover:scale-105">
                         <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                         <div className="relative p-6 md:p-8">
                           <div className="flex items-start gap-6">
                             <div className="relative flex-shrink-0">
                               <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                               <div className="relative p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl border border-primary/30 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                                 <div className="text-primary">
                                   {benefit.icon}
                                 </div>
                               </div>
                             </div>
                             
                             <div className="flex-1">
                               <div className="flex items-center justify-between mb-3">
                                 <h4 className="font-bold text-white group-hover:text-primary transition-colors text-lg md:text-xl">
                                   {benefit.title}
                                 </h4>
                                 <div className="flex items-center gap-2">
                                   <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                   <CheckCircle className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                 </div>
                               </div>
                               <p className="text-light-muted leading-relaxed text-sm md:text-base">
                                 {benefit.description}
                               </p>
                               <div className="mt-4 pt-4 border-t border-primary/10">
                                 <div className="flex items-center gap-2 text-primary/60 text-xs">
                                   <div className="w-1 h-1 bg-primary/60 rounded-full" />
                                   <span>Incluído no PRO+</span>
                                 </div>
                               </div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-primary font-semibold text-lg">Transformação Garantida</span>
                </div>
                
                <p className="text-xl md:text-2xl text-light-muted italic mb-8 leading-relaxed max-w-3xl mx-auto">
                  "Você não está contratando um serviço. Está investindo em uma experiência que transformará 
                  seu corpo e sua relação com saúde para sempre."
                </p>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="btn-primary inline-flex items-center gap-2 md:gap-3 text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6" />
                  Iniciar Minha Transformação PRO+
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProPlus;