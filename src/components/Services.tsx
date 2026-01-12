import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Code2, Rocket, Wrench, Cloud, CreditCard } from "lucide-react";

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications using Flutter that work seamlessly on both iOS and Android devices.",
    features: ["iOS & Android", "Native Performance", "Beautiful UI"],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "UI/UX Implementation",
    description:
      "Pixel-perfect translation of designs into responsive, animated, and interactive user interfaces.",
    features: ["Figma to Flutter", "Custom Animations", "Responsive Design"],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Backend Integration",
    description:
      "Seamless integration with Firebase, REST APIs, and other backend services for full-stack functionality.",
    features: ["Firebase", "REST APIs", "Real-time Data"],
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Payment Integration",
    description:
      "Secure payment processing with Stripe, Apple Pay, and other payment gateways for your app.",
    features: ["Stripe SDK", "Apple Pay", "SumUp SDK"],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "App Store Deployment",
    description:
      "End-to-end deployment to App Store and Google Play Store with CI/CD pipeline setup.",
    features: ["App Store", "Play Store", "CI/CD"],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, bug fixes, and feature updates to keep your app running smoothly.",
    features: ["Bug Fixes", "Updates", "Optimization"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive mobile development services for startups and businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-3 py-1 rounded-full border border-primary/30 text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
