import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = [
    {
      name: "Certificate Program in Generative AI Foundation",
      issuer: "upGrad in collaboration with Microsoft",
      date: "August 29, 2025",
      status: "Completed",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "TCS National Qualifier Test (NQT) – Cognitive Skills",
      issuer: "Tata Consultancy Services",
      date: "June 2023",
      status: "Certified",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-heading-1 font-heading mb-4 text-foreground">Education & Certifications</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and professional credentials that power data-driven marketing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -6 }}
          >
            <Card className="p-8 md:p-10 glassmorphism card-interactive h-full relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl -z-10" />
              
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-primary to-accent rounded-xl shadow-elevated shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="h-8 w-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Education
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    Academic Background
                  </Badge>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-background to-secondary/50 border border-border/50">
                  <p className="font-bold text-foreground text-xl mb-2">Bachelor of Technology (B.Tech)</p>
                  <p className="text-primary font-semibold mb-2">Computer Science</p>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    IK Gujral Punjab Technical University, Kapurthala, Punjab
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">2016 – 2020</Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                  Technical education foundation that enables a unique analytical approach to digital marketing challenges.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
          >
            <Card className="p-8 md:p-10 glassmorphism card-interactive h-full relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl -z-10" />
              
              <div className="flex items-start gap-4 mb-6">
                <motion.div 
                  className="p-4 bg-gradient-to-br from-accent to-primary rounded-xl shadow-elevated shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award className="h-8 w-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    Certifications
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    Professional Credentials
                  </Badge>
                </div>
              </div>
              
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    <div className="p-5 rounded-xl bg-gradient-to-br from-background to-secondary/50 border-l-4 border-primary hover:shadow-elevated transition-all">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {cert.name}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {cert.date}
                            </Badge>
                            <Badge variant="secondary" className="text-xs bg-success/10 text-success border-success/20">
                              {cert.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
