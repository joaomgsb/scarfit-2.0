import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Sparkles, Crown } from 'lucide-react';

interface Client {
  name: string;
  description: string;
  image: string;
  feedback: string;
  instagram?: string;
  twitter?: string;
}

const OurClients: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients: Client[] = [
    {
      name: "Daniel Scott",
      description: "Consultor, Palestrante, Conselheiro",
      image: "/images/clientes/scot.png",
      feedback: "Transformação incrível! O Peter me ajudou a alcançar o shape dos meus sonhos de forma sustentável e eficiente.",
      instagram: "@odanielscott"
    },
    {
      name: "Felippe Hermes",
      description: "Co-founder Blocktrendsbr",
      image: "/images/clientes/felippe.png",
      feedback: "Método revolucionário! Consegui resultados que nunca imaginei possível com a orientação do Peter.",
      instagram: "@Felippe_Hermes"
    },
    {
      name: "Avelino Morganti",
      description: "Empresário e youtuber",
      image: "/images/clientes/avelino.png",
      feedback: "Excelente profissional! A abordagem científica do Peter fez toda a diferença na minha transformação.",
      twitter: "@avelinomorganti"
    },
    {
      name: "Peter Jordan",
      description: "Youtuber e empresário",
      image: "/images/peter.png",
      feedback: "Parceria incrível! A metodologia do Peter é única e os resultados falam por si só.",
      instagram: "@petjordan"
    }
  ];

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

  return (
    <section id="clients" className="section-padding" ref={ref}>
      <div className="container-custom">
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
                NOSSOS CLIENTES
              </span>
              <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent leading-tight">
              Quem são nossos clientes?
            </h2>
            
            <p className="text-light-muted text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Empresários, influenciadores e pessoas de sucesso que confiaram em nossa metodologia
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card card-hover text-center p-6 md:p-8 group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Profile image */}
              <div className="relative mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 relative">
                  <img 
                    src={client.image} 
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {client.name}
                </h3>
                
                <p className="text-primary text-sm md:text-base font-medium mb-3">
                  {client.description}
                </p>
                
                {client.instagram && (
                  <p className="text-light-muted text-xs md:text-sm mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {client.instagram}
                  </p>
                )}
                {client.twitter && (
                  <p className="text-light-muted text-xs md:text-sm mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {client.twitter}
                  </p>
                )}
                
                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-primary fill-current opacity-80 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
                
                {/* Testimonial */}
                <blockquote className="text-light-muted text-sm md:text-base italic leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  "{client.feedback}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients; 