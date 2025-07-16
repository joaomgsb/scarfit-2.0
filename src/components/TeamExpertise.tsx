import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Lottie from 'lottie-react';

// Import Lottie animations
import liderAnimation from '../animations/lider.json';
import nutricaoAnimation from '../animations/nutricao.json';
import businessAnimation from '../animations/business.json';
import weightAnimation from '../animations/weight.json';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  credentials: string;
  description: string;
  animationData: any;
}

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
          <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-dark/50 shadow-lg">
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
          
          {/* Animation */}
          <div className="w-20 h-20 flex-shrink-0">
            <Lottie 
              animationData={member.animationData} 
              className="w-full h-full"
              loop={true}
            />
          </div>
        </div>
        <p className="text-light-muted leading-relaxed flex-grow">
          {member.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

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
      description: "Criador da metodologia ScarFit, com mais de 7 anos transformando vidas através da ciência aplicada.",
      animationData: liderAnimation
    },
    {
      name: "Gabriela Trindade",
      role: "Nutricionista Esportiva",
      image: "images/gabrielasemfundo.png",
      credentials: "CRN 1426",
      description: "Especialista em nutrição estratégica para transformação corporal e performance otimizada.",
      animationData: nutricaoAnimation
    },
    {
      name: "Luiz Camargo",
      role: "Responsável Técnico",
      image: "images/Luiz.jpeg",
      credentials: "CREF 083338-G/SP",
      description: "Mais de 20 anos de experiência garantindo a excelência técnica de todos os protocolos.",
      animationData: businessAnimation
    },
    {
      name: "Daniel França",
      role: "Especialista em Emagrecimento",
      image: "images/daniel.jpeg",
      credentials: "CREF 153464-G/SP",
      description: "Foco em resultados sustentáveis e protocolos altamente individualizados para queima de gordura.",
      animationData: weightAnimation
    }
  ];

  return (
    <section className="section-padding section-transition" ref={ref}>
      <div className="container-custom">
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

          {/* Team grid */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {team.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20"
          >
            <div className="glass-effect rounded-3xl p-8 lg:p-12 text-center">
              <h3 className="text-2xl font-semibold text-light mb-6">
                Nossa Filosofia
              </h3>
              <blockquote className="text-xl text-light-muted italic leading-relaxed max-w-4xl mx-auto">
                "Nessa jornada, o seu objetivo é o único destino que aceito. 
                Aqui, você não conta com sorte, conta comigo e com toda nossa equipe."
              </blockquote>
              <cite className="text-primary font-semibold mt-4 block">
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