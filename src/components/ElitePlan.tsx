import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MessageSquare, 
  Zap, 
  ArrowRight,
  CreditCard,
  Smartphone as PhoneIcon,
  Shield,
  Star,
  Crown,
  CheckCircle
} from 'lucide-react';
import Lottie from 'lottie-react';

// Import Lottie animations
import brainAnimation from '../animations/beneficios/Brain.json';
import appAnimation from '../animations/beneficios/App.json';
import ajustesAnimation from '../animations/beneficios/ajustes.json';
import healthAnimation from '../animations/beneficios/Health.json';
import checkAnimation from '../animations/beneficios/Check.json';
import suporteAnimation from '../animations/beneficios/suporte.json';
import targetAnimation from '../animations/beneficios/treino.json';
import foodAnimation from '../animations/beneficios/plano.json';
import awardAnimation from '../animations/beneficios/revisao.json';

const ElitePlan: React.FC = () => {
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
        staggerChildren: 0.1,
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

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const beneficios = [
    {
      animation: brainAnimation,
      titulo: "Engenharia de performance com base científica",
      descricao: "Protocolos baseados em estudos científicos para máxima eficiência"
    },
    {
      animation: appAnimation,
      titulo: "App integrado para treinos e alimentação",
      descricao: "Tecnologia de ponta para acompanhar sua evolução em tempo real"
    },
    {
      animation: ajustesAnimation,
      titulo: "Ajustes quinzenais de treino e dieta",
      descricao: "Adaptação constante para resultados acelerados e sustentáveis"
    },
    {
      animation: checkAnimation,
      titulo: "Check-ins com métricas reais",
      descricao: "Acompanhamento preciso da sua composição corporal"
    },
    {
      animation: suporteAnimation,
      titulo: "Suporte via WhatsApp (resposta em até 2h)",
      descricao: "Atendimento prioritário quando você mais precisar"
    },
    {
      animation: healthAnimation,
      titulo: "Balança de bioimpedância enviada para casa",
      descricao: "Tecnologia profissional para monitoramento preciso"
    },
    {
      animation: targetAnimation,
      titulo: "Treino 100% individualizado",
      descricao: "Protocolo único criado especificamente para você"
    },
    {
      animation: foodAnimation,
      titulo: "Plano alimentar sob medida",
      descricao: "Nutrição estratégica adaptada ao seu estilo de vida"
    },
    {
      animation: awardAnimation,
      titulo: "Revisão estratégica com João Scar",
      descricao: "Mentoria direta com o fundador da metodologia"
    }
  ];

  const equipe = [
    { nome: "João Scar", foto: "images/joao.jpeg", cargo: "Fundador" },
    { nome: "Personal Trainer", foto: "images/daniel.jpeg", cargo: "Especialista" },
    { nome: "Nutricionista", foto: "images/gabrielasemfundo.png", cargo: "Especialista" },
    { nome: "Fisioterapeuta", foto: "images/Luiz.jpeg", cargo: "Especialista" }
  ];

  return (
    <section id="elite-plan" className="section-padding section-transition" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Header Premium */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="relative inline-block mb-6 w-full">
              <div className="mx-auto mb-4 bg-primary text-dark px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm shadow-lg w-max">
                <div className="flex items-center gap-2 justify-center">
                  <Crown className="w-3 md:w-4 h-3 md:h-4" />
                  MAIS VENDIDO
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient leading-tight">
                ELITE
              </h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mt-2">
                TRANSFORMAÇÃO 360º
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-light-muted max-w-4xl mx-auto leading-relaxed mb-6">
              12 meses de suporte científico com ajustes quinzenais e balança de bioimpedância profissional entregue em casa
            </p>

            {/* Pricing Section */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="glass-effect rounded-3xl p-6 md:p-8 border border-neutral-800 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-6">R$120/mês</div>
                  
                  {/* Payment Methods */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-light-muted text-sm">
                      <CreditCard className="w-4 h-4" />
                      <span>Cartão</span>
                    </div>
                    <div className="w-1 h-1 bg-light-muted rounded-full"></div>
                    <div className="flex items-center gap-2 text-light-muted text-sm">
                      <PhoneIcon className="w-4 h-4" />
                      <span>Pix</span>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/5541984961012?text=Olá! Quero contratar o Plano ELITE - Transformação 360º da ScarFit. Estou interessado na experiência completa de 12 meses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-lg group"
                  >
                    <MessageSquare className="w-5 md:w-6 h-5 md:h-6 mr-3" />
                    QUERO O PLANO ELITE
                    <ArrowRight className="w-5 md:w-6 h-5 md:h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
            
            {/* Right Side - Bioimpedance Scale (Mobile First) */}
            <motion.div variants={itemVariants} className="relative flex flex-col order-1 xl:order-2">
              <div className="glass-effect rounded-3xl p-6 md:p-8 border border-neutral-800 overflow-hidden flex-1">
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                      <Zap className="w-4 md:w-5 h-4 md:h-5 text-primary" />
                      <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                        Tecnologia Exclusiva
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gradient">
                      Receba a inteligência do seu corpo direto na sua casa
                    </h3>
                  </div>

                  {/* Scale Image with Effects */}
                  <div className="relative mb-6">
                    <motion.div 
                      variants={floatingVariants}
                      animate="animate"
                      className="relative glass-effect rounded-2xl p-6 md:p-8 border border-neutral-800"
                    >
                      <img
                        src="/images/balanca.png"
                        alt="Balança de Bioimpedância ScarFit"
                        className="w-full max-w-xs md:max-w-sm mx-auto drop-shadow-2xl"
                      />
                      
                      {/* Floating Data Points */}
                      <motion.div 
                        className="absolute top-2 md:top-4 left-2 md:left-4 bg-primary text-dark px-2 md:px-3 py-1 rounded-full text-xs font-bold"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        Gordura: 12.5%
                      </motion.div>
                      
                      <motion.div 
                        className="absolute top-1/2 right-2 md:right-4 bg-primary text-dark px-2 md:px-3 py-1 rounded-full text-xs font-bold"
                        animate={{ y: [5, -5, 5] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      >
                        Massa Magra: 65kg
                      </motion.div>
                      
                      <motion.div 
                        className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 bg-primary text-dark px-2 md:px-3 py-1 rounded-full text-xs font-bold"
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                      >
                        TMB: 1850 kcal
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Metrics List */}
                  <div className="glass-effect rounded-2xl p-4 md:p-6 border border-neutral-800">
                    <h4 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-light">
                      Obtenha leitura avançada de +17 métricas:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
                      {[
                        "Gordura corporal", "Massa magra", "Água corporal", "Metabolismo basal",
                        "Massa óssea", "Gordura visceral", "Idade metabólica", "Proteína corporal",
                        "Músculo esquelético", "Taxa metabólica", "Impedância", "Peso corporal",
                        "IMC automático", "Gordura subcutânea", "Massa livre de gordura", "Densidade óssea",
                        "Análise segmentar"
                      ].map((metrica, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="flex items-center gap-2 text-light-muted"
                        >
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full" />
                          <span>{metrica}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Side - Benefits (Mobile Second) */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 xl:order-1">
              <div className="relative">
                <div className="glass-effect rounded-3xl p-6 md:p-8 border border-neutral-800">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 md:p-3 bg-primary rounded-xl">
                      <Shield className="h-6 md:h-8 w-6 md:w-8 text-dark" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-light">O que está incluído</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {beneficios.map((beneficio, index) => (
                      <motion.div
                        key={index} 
                        variants={itemVariants}
                        className="group flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-800/30 transition-all duration-300"
                      >
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                          <Lottie 
                            animationData={beneficio.animation} 
                            loop={true}
                            style={{ width: 40, height: 40 }}
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-bold text-light mb-1 group-hover:text-primary transition-colors text-sm md:text-base">
                            {beneficio.titulo}
                          </h5>
                          <p className="text-xs md:text-sm text-light-muted leading-relaxed">
                            {beneficio.descricao}
                          </p>
                        </div>
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <motion.div variants={itemVariants} className="relative">
                <div className="glass-effect rounded-3xl p-6 md:p-8 border border-neutral-800">
                  <h4 className="text-xl md:text-2xl font-bold text-center mb-6 text-light">
                    Sua Equipe de Especialistas
                  </h4>
                  
                  <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
                    {equipe.map((membro, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="text-center group"
                      >
                        <div className="relative mb-3">
                          <img
                            src={membro.foto}
                            alt={membro.nome}
                            className="relative w-16 h-16 rounded-full object-cover mx-auto border-2 border-neutral-700 group-hover:border-primary transition-colors"
                          />
                        </div>
                        <h5 className="font-bold text-light text-xs md:text-sm mb-1">{membro.nome}</h5>
                        <p className="text-light-muted text-xs">{membro.cargo}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-neutral-800 max-w-4xl mx-auto">
              <div className="flex flex-col items-center justify-center gap-4 mb-4 text-center">
                <div className="flex items-center gap-2">
                  <Star className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                  <span className="text-primary font-semibold text-sm md:text-base">OUTROS PLANOS DISPONÍVEIS</span>
                  <Star className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                </div>
              </div>
              
              <p className="text-light-muted leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                O Plano Elite é nossa opção principal, mas temos outros planos personalizados 
                que podem se adequar melhor ao seu perfil e orçamento.
              </p>
              
              <div className="text-center">
                <a
                  href="https://wa.me/5541984961012?text=Olá! Gostaria de conhecer todos os planos disponíveis da ScarFit. Quero saber qual se adequa melhor ao meu perfil e orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm md:text-base"
                >
                  <MessageSquare className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                  Conhecer Todos os Planos
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElitePlan;