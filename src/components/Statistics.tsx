import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Users, Award } from "lucide-react";

const Statistics = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    {
      icon: TrendingUp,
      value: 3,
      suffix: "+",
      label: "Years Experience",
      description: "In digital marketing & social media",
    },
    {
      icon: Target,
      value: 150,
      suffix: "+",
      label: "Campaigns Managed",
      description: "Across Google & Meta platforms",
    },
    {
      icon: Users,
      value: 50,
      suffix: "K+",
      label: "Audience Reached",
      description: "Through paid & organic strategies",
    },
    {
      icon: Award,
      value: 40,
      suffix: "%",
      label: "Avg ROI Increase",
      description: "For client campaigns",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto max-w-6xl relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Impact by Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results that drive business growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index, inView }: { stat: any; index: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const Icon = stat.icon;

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [inView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <Card className="p-6 backdrop-blur-sm bg-card/95 border-border/50 hover:shadow-2xl transition-all duration-300 group text-center h-full">
        <motion.div
          className="inline-flex p-3 bg-gradient-hero rounded-full mb-4"
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>
        <div className="text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {count}
          {stat.suffix}
        </div>
        <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
        <p className="text-sm text-muted-foreground">{stat.description}</p>
      </Card>
    </motion.div>
  );
};

export default Statistics;
