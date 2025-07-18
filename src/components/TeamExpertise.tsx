import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { useRef, useEffect, useState } from 'react';

// Import da nova animação da equipe
import teamAnimation from '../animations/arrastar/team.json';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  credentials: string;
  description: string;
}

// Interactive Lottie component with drag functionality
const InteractiveLottie = ({ animationData, className = "" }: { animationData: object, className?: string }) => {
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0);
  const dragStartX = useRef(0);
  const baseDragProgress = useRef(0);

  /* espera a animação carregar e garante frame 0 */
  useEffect(() => {
    const anim = lottieRef.current;
    if (!anim) return;

    // Aguarda um pequeno delay para garantir que a animação carregou
    const timer = setTimeout(() => {
      anim.pause();
      anim.goToAndStop(0, true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    dragStartX.current = e.clientX;
    baseDragProgress.current = dragProgress;
    setIsDragging(true);
    containerRef.current.style.cursor = 'grabbing';
    containerRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current || !lottieRef.current) return;

    const dx = e.clientX - dragStartX.current;
    const containerWidth = containerRef.current.offsetWidth;
    
    // Ajustar a sensibilidade para um meio termo
    const isMobile = window.innerWidth <= 768;
    const multiplier = isMobile ? 0.3 : 2; // Meio termo para mobile
    const maxDragDistance = containerWidth * multiplier;

    const delta = dx / maxDragDistance;
    const newProgress = Math.max(0, Math.min(1, baseDragProgress.current + delta));
    
    // Só atualizar se houver mudança significativa
    if (Math.abs(newProgress - dragProgress) > 0.01) {
      setDragProgress(newProgress);

      const totalFrames = lottieRef.current.getDuration(true);
      if (totalFrames && totalFrames > 0) {
        const targetFrame = Math.floor(newProgress * (totalFrames - 1));
        lottieRef.current.goToAndStop(targetFrame, true);
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    setIsDragging(false);
    baseDragProgress.current = dragProgress;
    containerRef.current.style.cursor = 'grab';
    containerRef.current.releasePointerCapture(e.pointerId);
  };

  // Touch events para mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    dragStartX.current = e.touches[0].clientX;
    baseDragProgress.current = dragProgress;
    setIsDragging(true);
    containerRef.current.style.cursor = 'grabbing';
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current || !lottieRef.current) return;

    const dx = e.touches[0].clientX - dragStartX.current;
    const containerWidth = containerRef.current.offsetWidth;
    
    // Mesma sensibilidade dos pointer events para consistência
    const maxDragDistance = containerWidth * 0.3;
    const delta = dx / maxDragDistance;
    const newProgress = Math.max(0, Math.min(1, baseDragProgress.current + delta));
    
    // Só atualizar se houver mudança significativa
    if (Math.abs(newProgress - dragProgress) > 0.01) {
      setDragProgress(newProgress);

      const totalFrames = lottieRef.current.getDuration(true);
      if (totalFrames && totalFrames > 0) {
        const targetFrame = Math.floor(newProgress * (totalFrames - 1));
        lottieRef.current.goToAndStop(targetFrame, true);
      }
    }
  };

  const handleTouchEnd = () => {
    if (!containerRef.current) return;
    setIsDragging(false);
    baseDragProgress.current = dragProgress;
    containerRef.current.style.cursor = 'grab';
  };

  return (
    <div 
      ref={containerRef}
      className={`${className} select-none`}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Lottie 
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className="w-full h-full pointer-events-none"
      />
    </div>
  );
};

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative"
      initial={false}
    >
      <motion.div 
        className="glass-effect rounded-3xl p-8 h-full flex flex-col"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="flex items-start gap-6 mb-4">
          {/* Photo */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-dark/50 shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-light mb-1">
              {member.name}
            </h3>
            <div className="text-primary font-medium mb-2">
              {member.role}
            </div>
            <div className="text-sm text-light-muted font-mono">
              {member.credentials}
            </div>
          </div>
        </div>
        <p className="text-light-muted text-sm sm:text-base leading-relaxed flex-grow">
          {member.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

// Main component for the team section
const TeamExpertise: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const team: TeamMember[] = [
    {
      name: "João Scar",
      role: "Fundador & Metodologista",
      image: "images/joao.jpeg",
      credentials: "Certificado Enade Uruguay",
      description: "Criador da metodologia ScarFit, com mais de 7 anos transformando vidas através da ciência aplicada."
    },
    {
      name: "Gabriela Trindade",
      role: "Nutricionista Esportiva",
      image: "images/gabrielasemfundo.png",
      credentials: "CRN 1426",
      description: "Especialista em nutrição estratégica para transformação corporal e performance otimizada."
    },
    {
      name: "Luiz Camargo",
      role: "Responsável Técnico",
      image: "images/Luiz.jpeg",
      credentials: "CREF 083338-G/SP",
      description: "Mais de 20 anos de experiência garantindo a excelência técnica de todos os protocolos."
    },
    {
      name: "Daniel França",
      role: "Especialista em Emagrecimento",
      image: "images/daniel.jpeg",
      credentials: "CREF 153464-G/SP",
      description: "Foco em resultados sustentáveis e protocolos altamente individualizados para queima de gordura."
    }
  ];

  return (
    <section className="section-padding section-transition" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-gradient mb-6">
              Equipe de Especialistas
            </h2>
            <p className="text-xl text-light-muted max-w-3xl mx-auto">
              Profissionais certificados e experientes trabalhando em conjunto para sua transformação completa.
            </p>
          </motion.div>

          {/* Team grid com animação central */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {team.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>

          {/* Animação central da equipe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-16"
          >
            <div className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <InteractiveLottie 
                animationData={teamAnimation}
                className="w-full h-auto aspect-square"
              />
              <div className="text-center mt-6">
                <p className="text-light-muted italic text-sm sm:text-base">
                  Arraste para conhecer nossa equipe
                </p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <div className="glass-effect rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
              <h3 className="text-xl sm:text-2xl font-semibold text-light mb-4 sm:mb-6">
                Nossa Filosofia
              </h3>
              <blockquote className="text-base sm:text-lg lg:text-xl text-light-muted italic leading-relaxed max-w-4xl mx-auto">
                "Nessa jornada, o seu objetivo é o único destino que aceito. 
                Aqui, você não conta com sorte, conta comigo e com toda nossa equipe."
              </blockquote>
              <cite className="text-primary font-semibold mt-3 sm:mt-4 block text-sm sm:text-base">
                — João Scar, Fundador
              </cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamExpertise;