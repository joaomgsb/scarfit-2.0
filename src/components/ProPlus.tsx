import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import { CheckCircle, MessageSquare, Sparkles, LineChart, Clock, Zap, Heart, CalendarClock, Crown, Star, Shield } from 'lucide-react';

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

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
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
    <section id="pro-plus" className="relative py-20 md:py-24 bg-gradient-to-br from-dark via-dark-lighter to-dark text-white overflow-hidden" ref={ref}>
      {/* Background Effects Premium */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header Premium */}
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
              <Crown className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                Experiência Premium
              </span>
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-primary" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent leading-tight">
              Eleve Sua Transformação
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6 md:mb-8">
              Conheça o Plano PRO+
            </h3>
            
            <p className="text-lg md:text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
              Experiência exclusiva com o mais alto nível de atendimento, personalização e resultados acelerados.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-16 items-stretch">
            
            {/* Left Side - Benefits */}
            <motion.div variants={itemVariants} className="space-y-8 order-2 xl:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl" />
                
                <div className="relative bg-gradient-to-br from-dark-lighter/90 to-dark/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="p-3 bg-gradient-to-br from-primary to-primary-dark rounded-xl shadow-lg">
                      <Shield className="h-6 md:h-8 w-6 md:w-8 text-black" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white">Benefícios Exclusivos</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-primary/10 transition-all duration-300"
                      >
                        <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 flex-shrink-0">
                          <div className="text-primary">
                            {benefit.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="font-bold text-white mb-1 group-hover:text-primary transition-colors text-sm md:text-base">
                            {benefit.title}
                          </h5>
                          <p className="text-xs md:text-sm leading-relaxed pro-plus-description">
                            {benefit.description}
                          </p>
                        </div>
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Ana Fontes */}
            <motion.div variants={itemVariants} className="relative flex flex-col order-1 xl:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-dark-lighter/95 to-dark/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-primary/30 overflow-hidden flex-1 mt-4">
                {/* Floating Elements */}
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute top-6 right-6 w-12 h-12 bg-primary/20 rounded-full blur-xl"
                />
                <motion.div 
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute bottom-6 left-6 w-8 h-8 bg-primary/30 rounded-full blur-lg"
                  style={{ animationDelay: '1s' }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Ana's Image */}
                  <div className="text-center mb-6 md:mb-8">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-2xl blur opacity-75" />
                      <img
                        src="images/ana.png"
                        alt="Ana Fontes - Gerente Executiva PRO+"
                        className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl object-cover mx-auto shadow-2xl border-2 border-primary/40"
                      />
                      <div className="absolute -bottom-3 -right-3 bg-primary text-black py-2 px-3 rounded-lg shadow-lg">
                        <p className="font-bold text-xs md:text-sm">Ana Fontes</p>
                        <p className="text-xs">Gerente Executiva</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                      Sua Garantia de Excelência
                    </h3>
                    
                    <p className="text-sm md:text-base text-light-gray mb-6 md:mb-8 text-center leading-relaxed">
                      Ana garante que cada cliente PRO+ tenha uma experiência exclusiva e resultados excepcionais. 
                      Ela é seu ponto de conexão direta para atendimento prioritário.
                    </p>
                    
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 md:p-6 rounded-2xl border border-primary/20 mb-6 md:mb-8">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold text-sm">Compromisso Premium</span>
                      </div>
                      <p className="text-light-gray text-sm md:text-base italic leading-relaxed">
                        "Meu trabalho é garantir que sua experiência seja impecável. 
                        Do primeiro contato até seus resultados, estarei ao seu lado."
                      </p>
                      <p className="font-semibold text-primary text-sm mt-3">— Ana Fontes</p>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 md:mt-20"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl" />
              
              <div className="relative bg-gradient-to-br from-dark-lighter/90 to-dark/90 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-primary/20 max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-light-gray italic mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                  "Você não está contratando um serviço. Está investindo em uma experiência que transformará 
                  seu corpo e sua relação com saúde para sempre."
                </p>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/30"
                >
                  <Zap className="w-5 h-5 md:w-6 md:h-6" />
                  Iniciar Minha Transformação PRO+
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