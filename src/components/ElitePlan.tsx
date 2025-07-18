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
// Emojis dos benefícios
const beneficioEmojis = {
  engenharia: "/images/plano/engenharia.png",
  app: "/images/plano/app.png",
  ajustes: "/images/plano/ajustes.png",
  check: "/images/plano/check.png",
  suporte: "/images/plano/suporte.png",
  balanca: "/images/plano/balanca.png",
  treino: "/images/plano/treino.png",
  plano: "/images/plano/plano.png",
  revisao: "/images/plano/revisao.png"
};

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

  // Variantes para o efeito 3D no hover
  const card3DHover = {
    initial: { rotateX: 0, rotateY: 0, scale: 1 },
    hover: (custom: { x: number, y: number }) => ({
      rotateX: custom.y * 5,
      rotateY: custom.x * 5,
      scale: 1.02,
      transition: { type: 'spring', stiffness: 300, damping: 15 }
    })
  };

  // Variantes para elementos de urgência
  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse' as const
      }
    }
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

  // Nova variante para flutuação mais intensa do card principal
  const premiumFloatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotateZ: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Variante para partículas flutuantes de fundo
  const particleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  // Estados para animações
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Efeito para o contador regressivo
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newTime = { ...prevTime };
        
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              // Reset do contador quando chegar a zero
              newTime.hours = 23;
              newTime.minutes = 59;
              newTime.seconds = 59;
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  const beneficios = [
    {
      emoji: beneficioEmojis.engenharia,
      titulo: "Engenharia de performance com base científica",
      descricao: "Protocolos baseados em estudos científicos para máxima eficiência"
    },
    {
      emoji: beneficioEmojis.app,
      titulo: "App integrado para treinos e alimentação",
      descricao: "Tecnologia de ponta para acompanhar sua evolução em tempo real"
    },
    {
      emoji: beneficioEmojis.ajustes,
      titulo: "Ajustes quinzenais de treino e dieta",
      descricao: "Adaptação constante para resultados acelerados e sustentáveis"
    },
    {
      emoji: beneficioEmojis.check,
      titulo: "Check-ins com métricas reais",
      descricao: "Acompanhamento preciso da sua composição corporal"
    },
    {
      emoji: beneficioEmojis.suporte,
      titulo: "Suporte via WhatsApp (resposta em até 2h)",
      descricao: "Atendimento prioritário quando você mais precisar"
    },
    {
      emoji: beneficioEmojis.balanca,
      titulo: "Balança de bioimpedância enviada para casa",
      descricao: "Tecnologia profissional para monitoramento preciso"
    },
    {
      emoji: beneficioEmojis.treino,
      titulo: "Treino 100% individualizado",
      descricao: "Protocolo único criado especificamente para você"
    },
    {
      emoji: beneficioEmojis.plano,
      titulo: "Plano alimentar sob medida",
      descricao: "Nutrição estratégica adaptada ao seu estilo de vida"
    },
    {
      emoji: beneficioEmojis.revisao,
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
    <section id="elite-plan" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background Premium Effects */}
      <div className="absolute inset-0">
        {/* Gradiente de fundo mais intenso */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark to-primary/10" />
        
        {/* Spotlight effect central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl" />
        
        {/* Partículas flutuantes */}
        <motion.div 
          variants={particleVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
        />
        <motion.div 
          variants={particleVariants}
          animate="animate"
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/8 rounded-full blur-3xl"
          style={{ animationDelay: '2s' }}
        />
        <motion.div 
          variants={particleVariants}
          animate="animate"
          className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/12 rounded-full blur-xl"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Linhas de energia */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
      </div>
      
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto relative z-10"
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
            <motion.div 
              variants={itemVariants} 
              className="mb-8 relative"
            >
              {/* Elemento de urgência - Contador */}
              <motion.div 
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary-dark text-dark text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap z-10 shadow-lg shadow-primary/50 max-w-[90vw] sm:max-w-none overflow-hidden"
              >
                <span className="inline-block">
                  ⚡ ÚLTIMAS VAGAS DISPONÍVEIS
                </span>
              </motion.div>
              
              <motion.div 
                className="relative max-w-md mx-auto"
                variants={premiumFloatingVariants}
                animate="animate"
              >
                {/* Glow effect externo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl scale-110" />
                
                <motion.div 
                  className="relative glass-effect rounded-3xl p-6 md:p-8 border-2 border-primary/40 overflow-hidden shadow-2xl shadow-primary/30"
                  ref={cardRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
                  custom={mousePosition}
                  variants={card3DHover}
                  initial="initial"
                  whileHover="hover"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px)'
                  }}
                >
                {/* Efeito de brilho no hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/40 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 pointer-events-none blur-sm"
                  style={{
                    transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px)`,
                  }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-light-muted line-through text-lg">R$240/mês</span>
                    <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full border border-primary/30">
                      50% OFF
                    </span>
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-6">R$120/mês</div>
                  
                  {/* Contador de tempo restante */}
                  <motion.div 
                    className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-3 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-xs text-light-muted mb-1">Oferta termina em:</div>
                    <div className="flex items-center justify-center gap-1 text-lg font-mono">
                      <motion.span 
                        key={`hours-${timeLeft.hours}`}
                        className="bg-dark border border-primary/30 px-2 py-1 rounded min-w-[32px] text-center text-primary font-bold"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                      >
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </motion.span>:
                      <motion.span 
                        key={`minutes-${timeLeft.minutes}`}
                        className="bg-dark border border-primary/30 px-2 py-1 rounded min-w-[32px] text-center text-primary font-bold"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                      >
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </motion.span>:
                      <motion.span 
                        key={`seconds-${timeLeft.seconds}`}
                        className="bg-dark border border-primary/30 px-2 py-1 rounded min-w-[32px] text-center text-primary font-bold"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                      >
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </motion.span>
                    </div>
                  </motion.div>
                  
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
              </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-stretch">
            
            {/* Right Side - Bioimpedance Scale (Mobile First) */}
            <motion.div variants={itemVariants} className="relative flex flex-col order-1 xl:order-2">
              <div className="relative bg-gradient-to-br from-dark-lighter/95 to-dark/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-primary/40 overflow-hidden flex-1 shadow-2xl shadow-primary/30">
                {/* Glow interno */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 md:px-6 py-2 mb-4 md:mb-6">
                      <Zap className="w-4 md:w-5 h-4 md:h-5 text-primary" />
                      <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
                        Tecnologia Exclusiva
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gradient select-text">
                      Receba a inteligência do seu corpo direto na sua casa
                    </h3>
                  </div>

                  {/* Scale Image with Effects */}
                  <div className="relative mb-6">
                    <motion.div 
                      variants={floatingVariants}
                      animate="animate"
                      className="relative glass-effect rounded-2xl p-6 md:p-8 border border-primary/20 shadow-xl shadow-primary/10"
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
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 md:p-6 border border-primary/20">
                    <h4 className="text-lg md:text-xl font-bold text-center mb-3 md:mb-4 text-light select-text">
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
                          <span className="select-text">{metrica}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Other Plans Section */}
                  <div className="mt-8">
                    <div className="flex flex-col items-center justify-center gap-4 mb-4 text-center">
                      <div className="flex items-center gap-2">
                        <Star className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                        <span className="text-primary font-semibold text-sm md:text-base">OUTROS PLANOS DISPONÍVEIS</span>
                        <Star className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                      </div>
                    </div>
                    
                    <p className="text-light-muted leading-relaxed mb-4 text-sm md:text-base text-center">
                      Temos outros planos que podem se adequar melhor ao seu perfil.
                    </p>
                    
                    <div className="text-center">
                      <a
                        href="https://wa.me/5541984961012?text=Olá! Gostaria de conhecer todos os planos disponíveis da ScarFit. Quero saber qual se adequa melhor ao meu perfil e orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-sm md:text-base inline-flex items-center justify-center w-full md:w-auto"
                      >
                        <MessageSquare className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                        Conhecer Todos os Planos
                        <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Side - Benefits (Mobile Second) */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 xl:order-1">
              <div className="relative">
                <div className="bg-gradient-to-br from-dark-lighter/95 to-dark/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-primary/30 shadow-2xl shadow-primary/20">
                  {/* Glow interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl pointer-events-none" />
                  
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 md:p-3 bg-primary rounded-xl">
                      <Shield className="h-6 md:h-8 w-6 md:w-8 text-dark" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-light select-text">O que está incluído</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {beneficios.map((beneficio, index) => (
                      <motion.div
                        key={index} 
                        variants={itemVariants}
                        className="group relative flex items-start gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer"
                      >
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center relative z-10">
                          <img 
                            src={beneficio.emoji} 
                            alt={beneficio.titulo}
                            className="w-8 h-8"
                          />
                        </div>
                        <div className="flex-1 relative z-10">
                          <h5 className="font-bold text-light mb-1 group-hover:text-primary transition-colors text-sm md:text-base select-text">
                            {beneficio.titulo}
                          </h5>
                          <p className="text-xs md:text-sm text-light-muted leading-relaxed select-text">
                            {beneficio.descricao}
                          </p>
                        </div>
                        <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity relative z-10" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <motion.div variants={itemVariants} className="relative">
                <div className="bg-gradient-to-br from-dark-lighter/95 to-dark/95 backdrop-blur-xl rounded-3xl p-6 md:p-8 border-2 border-primary/30 shadow-2xl shadow-primary/20">
                  {/* Glow interno */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl pointer-events-none" />
                  
                  <h4 className="text-xl md:text-2xl font-bold text-center mb-6 text-light select-text relative z-10">
                    Sua Equipe de Especialistas
                  </h4>
                  
                  <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap relative z-10">
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
                        <h5 className="font-bold text-light text-xs md:text-sm mb-1 select-text">{membro.nome}</h5>
                        <p className="text-light-muted text-xs select-text">{membro.cargo}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA Removed - Moved to Technology Card */}
        </motion.div>
      </div>
    </section>
  );
};

export default ElitePlan;