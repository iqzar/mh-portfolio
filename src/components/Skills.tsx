import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Flutter", level: 95, category: "Framework" },
  { name: "Dart", level: 95, category: "Language" },
  { name: "Firebase", level: 90, category: "Backend" },
  { name: "GetX", level: 90, category: "State Management" },
  { name: "Provider", level: 85, category: "State Management" },
  { name: "Bloc", level: 80, category: "State Management" },
  { name: "Stripe SDK", level: 85, category: "Payments" },
  { name: "Google Maps", level: 85, category: "Integration" },
  { name: "REST APIs", level: 90, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "SQFLite", level: 80, category: "Database" },
  { name: "Apple Pay", level: 75, category: "Payments" },
  { name: "Google Pay", level: 75, category: "Payments" },
  { name: "n8n", level: 85, category: "Automation" },
];

const categories = ["All", "Framework", "Language", "State Management", "Backend", "Payments", "Integration", "Tools", "Database", "Automation"];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsla(280,70%,60%,0.05)_0%,_transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {skill.category}
                  </span>
                </div>
                <span className="text-lg font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                  className="h-full rounded-full"
                  style={{ background: "var(--gradient-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-6">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["HTML", "CSS", "JavaScript", "Clean Architecture", "UI/UX Implementation", "App Store Deployment", "CI/CD", "Agile Development", "AI Automation Workflow"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-border bg-secondary/30 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
