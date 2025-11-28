import { Card } from "@/components/ui/card";
import { Share2, BarChart3, FileText, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Digital Marketing & Social Media",
      icon: Share2,
      description: "Building brand presence and engagement across multiple platforms",
      skills: [
        "Facebook, Instagram, LinkedIn, Twitter/X management",
        "Campaign planning & content calendars",
        "Audience engagement & community building",
        "Brand consistency & storytelling"
      ]
    },
    {
      title: "Performance Marketing & Analytics",
      icon: BarChart3,
      description: "Data-driven campaigns optimized for maximum ROI",
      skills: [
        "Google Ads (Search, Display, Video, Remarketing)",
        "Meta Ads Manager (Facebook & Instagram)",
        "PPC optimization & performance metrics (CPC, CTR, CPA, ROAS)",
        "Keyword research & audience segmentation",
        "Google Analytics & Search Console",
        "Budget management & conversion tracking",
        "Competitor analysis & A/B testing"
      ]
    },
    {
      title: "SEO & Content",
      icon: FileText,
      description: "Strategic content that ranks and converts",
      skills: [
        "On-page, off-page & technical SEO",
        "Website & content audits",
        "Content strategy for engagement & search visibility",
        "Collaboration with writers & designers"
      ]
    },
    {
      title: "Tech & Tools",
      icon: Wrench,
      description: "Technical skills that enhance marketing capabilities",
      skills: [
        "HTML & CSS (basic front-end web skills)",
        "Canva for design & social creatives",
        "ChatGPT & AI content tools",
        "Google Workspace & Microsoft 365",
        "CRM & automation tools"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing capabilities with technical proficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card
                  className="p-8 backdrop-blur-sm bg-card/95 border-border/50 hover:shadow-2xl transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="p-3 bg-gradient-hero rounded-lg shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li 
                        key={skillIndex} 
                        className="flex items-start gap-2 text-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <span className="text-primary mt-1.5 font-bold">•</span>
                        <span className="leading-relaxed">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
