import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, GraduationCap, Star } from "lucide-react";

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timelineEvents = [
    {
      year: "2023 - Present",
      title: "Social Media Manager / Digital Marketing Specialist",
      company: "Vastu Vihar – Technoculture Building Center",
      icon: Briefcase,
      description: "Leading integrated digital marketing strategies across Google Ads, Meta Ads, SEO, and social media platforms",
      achievements: [
        "Optimized PPC campaigns with improved ROI",
        "Implemented end-to-end SEO strategies",
        "Managed multi-platform social media presence",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2021 - 2022",
      title: "Business Development Associate",
      company: "BYJU'S (Think & Learn Pvt. Ltd.)",
      icon: Star,
      description: "Generated and qualified leads through multi-channel outreach and CRM optimization",
      achievements: [
        "Improved lead conversion rates",
        "Optimized lead-generation processes",
        "Enhanced CRM tracking systems",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2021",
      title: "Bachelor of Technology",
      company: "Dr. APJ Abdul Kalam Technical University",
      icon: GraduationCap,
      description: "Electrical Engineering with focus on technology and analytical thinking",
      achievements: [
        "Strong technical foundation",
        "Data-driven problem solving",
        "Bridge between tech and marketing",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Career Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, learning, and measurable impact
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ event, index, inView }: { event: any; index: number; inView: boolean }) => {
  const Icon = event.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className={`relative mb-12 md:mb-16 ${isEven ? "md:pr-1/2" : "md:pl-1/2"}`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className={`flex flex-col ${isEven ? "md:items-end" : "md:items-start"} md:w-1/2 ${isEven ? "md:ml-auto md:pr-12" : "md:mr-auto md:pl-12"}`}>
        {/* Icon - centered on timeline for desktop */}
        <motion.div
          className={`absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 p-4 bg-gradient-to-br ${event.color} rounded-full shadow-lg z-10`}
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="h-6 w-6 text-white" />
        </motion.div>

        {/* Content Card */}
        <motion.div
          className="ml-20 mt-8 md:ml-0 bg-card backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group"
          whileHover={{ y: -4, scale: 1.02 }}
        >
          <div className="text-sm font-semibold text-primary mb-2">{event.year}</div>
          <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 font-medium">{event.company}</p>
          <p className="text-foreground mb-4">{event.description}</p>
          <ul className="space-y-2">
            {event.achievements.map((achievement: string, achIndex: number) => (
              <motion.li
                key={achIndex}
                className="flex items-start gap-2 text-sm text-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: index * 0.2 + achIndex * 0.1 }}
              >
                <span className="text-primary mt-0.5">✓</span>
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Timeline;
