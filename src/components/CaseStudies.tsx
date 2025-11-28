import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Mail, Target, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CaseStudies = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const caseStudies = [
    {
      title: "Boosting Engagement with Integrated Campaigns",
      metric: "20%",
      metricLabel: "Increase in Online Engagement",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      tags: ["Multi-Platform", "Brand Awareness", "Engagement"],
      description:
        "Coordinated digital campaigns across multiple platforms including Google Ads, Meta Ads, and organic social media. By aligning messaging, optimizing targeting, and maintaining consistent brand presence, we achieved a 20% uplift in overall online engagement metrics.",
    },
    {
      title: "Content Strategy Driving Traffic Growth",
      metric: "25%",
      metricLabel: "Increase in Blog Traffic",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      tags: ["SEO", "Content Marketing", "Organic Growth"],
      description:
        "Implemented comprehensive content strategies and SEO-friendly planning that improved blog traffic by 25%. This involved keyword research, content audits, on-page optimization, and collaboration with writers to create high-value, search-optimized content.",
    },
    {
      title: "Email Marketing Subscriber Expansion",
      metric: "40%",
      metricLabel: "Growth in Email Subscribers",
      icon: Mail,
      color: "from-green-500 to-emerald-500",
      tags: ["Email Marketing", "Lead Generation", "Conversion"],
      description:
        "Supported email marketing initiatives through targeted campaigns, lead magnets, and optimized landing pages. These efforts expanded the subscriber list by 40% over two years while maintaining high engagement and low unsubscribe rates.",
    },
    {
      title: "Budget Optimization Through Data Analytics",
      metric: "Improved",
      metricLabel: "Resource Allocation Efficiency",
      icon: Target,
      color: "from-amber-500 to-orange-500",
      tags: ["PPC", "Data Analytics", "ROI Optimization"],
      description:
        "Leveraged Google Ads analytics and platform dashboards to identify high-performing segments and eliminate wasted ad spend. Strategic budget reallocation based on performance data improved overall campaign efficiency and maximized ROI.",
    },
  ];

  return (
    <section id="case-studies" className="py-24 px-4 bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-heading-1 font-heading mb-4 text-foreground">Case Studies & Results</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Real campaigns. Real metrics. Real business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-8 glassmorphism card-interactive h-full group relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${study.color} opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Icon badge */}
                  <motion.div 
                    className={`inline-flex p-3 bg-gradient-to-br ${study.color} rounded-xl mb-6 shadow-elevated`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="secondary" 
                        className="text-xs font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metric highlight */}
                  <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-background to-secondary/50 border border-border/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-4xl font-bold gradient-text mb-1">
                          {study.metric}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          {study.metricLabel}
                        </div>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowUpRight className="h-8 w-8 text-primary" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground leading-relaxed">
                    {study.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
