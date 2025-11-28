import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const experiences = [
    {
      title: "Social Media Manager / Digital Marketing Specialist",
      company: "Vastu Vihar – Technoculture Building Center Pvt. Ltd.",
      location: "Patna, Bihar",
      period: "October 2023 – Present",
      achievements: [
        "Planned and executed integrated digital marketing strategies across organic and paid channels, increasing overall campaign effectiveness",
        "Managed and optimized Google Ads campaigns (Search, Display, Video, Remarketing) resulting in improved conversions and maximized ROI",
        "Handled PPC campaigns with continuous optimization and A/B testing to enhance performance metrics",
        "Implemented end-to-end SEO strategies that significantly improved organic rankings and traffic growth",
        "Successfully ran social media marketing campaigns on LinkedIn, Facebook, Instagram, and Twitter, ensuring strong brand presence and engagement",
        "Executed Meta (Facebook/Instagram) and Google Ads campaigns with creatives aligned to campaign goals",
        "Monitored daily performance and reported on key metrics: CPC, CTR, CPA, ROAS, conversions, and audience insights",
        "Performed comprehensive keyword research, audience segmentation, and competitor analysis to improve targeting and messaging",
        "Collaborated closely with creative/content teams to align visuals and copy with conversion goals",
        "Managed ad budgets strategically and reduced wasted ad spend by focusing on high-performing segments",
      ],
    },
    {
      title: "Business Development Associate",
      company: "BYJU'S (Think & Learn Pvt. Ltd.)",
      location: "Bengaluru, Karnataka",
      period: "December 2021 – August 2022",
      achievements: [
        "Generated and qualified leads through cold calling, email outreach, social media, and networking initiatives",
        "Utilized CRM tools and online platforms to identify new client segments and business opportunities",
        "Coordinated with sales and marketing teams to align lead quality and conversion targets",
        "Optimized lead-generation efforts resulting in improved response and conversion rates",
        "Documented and tracked all lead interactions and progress in CRM systems for data-driven decision making",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering measurable results in digital marketing
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 border-border/50 backdrop-blur-sm group animate-fade-up hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <Badge
                  variant="secondary"
                  className="flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 group-hover:scale-105 transition-transform"
                >
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </Badge>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
