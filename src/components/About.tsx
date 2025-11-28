import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp, Award, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: Target,
      title: "ROI-Focused Strategy",
      description: "Data-driven campaigns optimized for maximum business impact and measurable returns",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Tech-Savvy Marketer",
      description: "Bridging marketing and technology with AI tools, analytics, and front-end skills",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: TrendingUp,
      title: "Continuous Optimization",
      description: "A/B testing and performance analysis to constantly improve campaign results",
      color: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { icon: Award, value: "3+", label: "Years Experience" },
    { icon: Users, value: "50K+", label: "Audience Reached" },
    { icon: Zap, value: "150+", label: "Campaigns Managed" },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      
      <div className="section-container relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-heading-1 font-heading mb-4 text-foreground">About Me</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            A data-driven marketing professional bridging digital strategy with technology
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {/* Main bio card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 md:p-12 glassmorphism card-interactive group">
              <div className="space-y-6">
                <p className="text-body-large leading-relaxed text-foreground">
                  I'm a <span className="font-bold text-primary">Social Media Manager and Digital Marketing Specialist</span> with over 3 years of experience running ROI-focused campaigns that improve visibility, drive conversions, and build lasting brand presence.
                </p>
                
                <p className="text-body leading-relaxed text-foreground">
                  I specialize in <span className="font-semibold text-accent">Google Ads</span> (Search, Display, Video, Remarketing), <span className="font-semibold text-accent">Meta Ads</span>, <span className="font-semibold text-accent">SEO</span> (on-page, off-page, technical), and <span className="font-semibold text-accent">PPC optimization</span>, consistently delivering measurable results across multiple platforms.
                </p>
                
                <p className="text-body leading-relaxed text-foreground">
                  What sets me apart is my <span className="font-semibold gradient-text">tech-forward mindset</span>—I bring an analytical, IT-style approach to marketing. I'm comfortable using <span className="font-semibold">AI tools</span>, <span className="font-semibold">Google Analytics</span>, and have foundational skills in <span className="font-semibold">HTML/CSS</span>, which allows me to work seamlessly with developers and strategically optimize digital assets end-to-end.
                </p>
                
                <p className="text-body leading-relaxed text-foreground">
                  My goal is to join a <span className="font-semibold">forward-thinking team</span>—whether that's a tech startup, IT company, or marketing agency—where I can leverage data, creativity, and technology to drive impactful, sustainable growth.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 text-center glassmorphism hover:shadow-elevated transition-all">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 glassmorphism card-interactive h-full">
                    <motion.div 
                      className={`inline-flex p-3 bg-gradient-to-br ${highlight.color} rounded-xl mb-4 shadow-elevated`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
