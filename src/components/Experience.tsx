import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Flutter Developer",
    company: "TeamX Pakistan",
    period: "June 2025 – Present",
    description:
      "Leading cross-platform mobile app development with focus on UI/UX, state management with GetX/Provider, Firebase integration, and payment gateway implementation using Stripe and SumUp SDKs.",
    highlights: [
      "Implemented Clean Architecture for maintainable codebases",
      "Integrated Google Maps with location tracking and geolocation",
      "Contributed to CI/CD deployment pipeline for App Store and Play Store",
      "Conducted code reviews maintaining high quality standards",
    ],
  },
  {
    title: "Flutter Developer",
    company: "Code Augment",
    period: "January 2023 - May 2025",
    description:
      "Played a pivotal role in developing and enhancing cross-platform mobile applications, collaborating with multidisciplinary teams throughout the development lifecycle.",
    highlights: [
      "Built multiple production-ready mobile applications",
      "Optimized API performance and data handling",
      "Implemented complex features and third-party integrations",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "Graph ink Studio",
    period: "August 2022 - December 2022",
    description:
      "Gained valuable experience in mobile application development, learning industry best practices and collaborative development processes.",
    highlights: [
      "Learned Flutter and Dart fundamentals",
      "Contributed to real-world projects",
      "Developed understanding of agile workflows",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 mt-2" />

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className={`glass-card rounded-2xl p-6 hover:border-primary/30 transition-all ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
