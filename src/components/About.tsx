import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Passionate developer crafting mobile experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Building the Future, One App at a Time
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a highly skilled Flutter Developer with strong expertise in Dart
              programming and the Flutter framework. I'm adept at translating UI/UX
              designs into clean and efficient code, ensuring seamless user experiences.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Proficient in integrating APIs, handling data persistence, and implementing
              complex features. I'm a collaborative team player with excellent
              communication skills and a passion for coding that drives me to continuously
              learn and improve.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm">officialmubashirhayyat@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span>+92 319 8400943</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <span>ADCS, Sindh University</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card rounded-2xl p-8"
          >
            <h4 className="font-display text-lg font-semibold mb-6">
              Why Work With Me?
            </h4>
            <div className="space-y-6">
              {[
                {
                  title: "Clean Architecture",
                  description:
                    "I apply Clean Architecture principles for maintainable, testable codebases.",
                },
                {
                  title: "End-to-End Development",
                  description:
                    "From UI implementation to App Store deployment, I handle the complete lifecycle.",
                },
                {
                  title: "Startup Mindset",
                  description:
                    "I understand the fast-paced nature of startups and deliver quickly without compromising quality.",
                },
                {
                  title: "Excellent Communication",
                  description:
                    "Clear, consistent updates throughout the project lifecycle.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div>
                    <h5 className="font-medium mb-1">{item.title}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
