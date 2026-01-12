import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Smartphone, CreditCard, MessageSquare, MapPin, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiApple, SiGoogleplay } from "react-icons/si";

interface StoreLink {
  type: "playStore" | "appStore";
  url: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: React.ReactNode;
  color: string;
  storeLinks?: StoreLink[];
}

const projects: Project[] = [
  {
    title: "Emerald Beauty User App",
    description:
      "Flutter-based User app for a beauty services platform with Stripe and Apple Pay integration for secure payments.",
    tags: ["Flutter", "Stripe", "Apple Pay", "API Integration"],
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-emerald-500/20 to-teal-500/20",
    storeLinks: [
      { type: "playStore", url: "https://play.google.com/store/apps/details?id=com.emeraldbeauty.user&pcampaignid=web_share" },
      { type: "appStore", url: "https://apps.apple.com/us/app/emerald-beauty-user-app/id6743151446" },
    ],
  },
  {
    title: "Emerald Beauty Employee App",
    description:
      "Flutter-based Employee app for beauty service providers with scheduling, bookings management, and secure payments.",
    tags: ["Flutter", "Stripe", "Apple Pay", "API Integration"],
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-teal-500/20 to-emerald-500/20",
    storeLinks: [
      { type: "playStore", url: "https://play.google.com/store/apps/details?id=com.emeraldbeauty.employeefreelancer&pcampaignid=web_share" },
      { type: "appStore", url: "https://apps.apple.com/us/app/emerald-beauty-employee-app/id6743151533" },
    ],
  },
  {
    title: "HelpDesk Helper",
    description:
      "Helper app for service providers with real-time calling using Daily.co SDK and ticket workflow management.",
    tags: ["Flutter", "Daily.co SDK", "Real-time Calling"],
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-blue-500/20 to-cyan-500/20",
    storeLinks: [
      { type: "playStore", url: "https://play.google.com/store/apps/details?id=com.helpdesk.helper&pcampaignid=web_share" },
      { type: "appStore", url: "https://apps.apple.com/us/app/helpdesk-helper/id6683304947" },
    ],
  },
  {
    title: "HelpDesk Instant Help",
    description:
      "User app for customer support with real-time calling using Daily.co SDK and seamless ticket management.",
    tags: ["Flutter", "Daily.co SDK", "Real-time Calling"],
    icon: <MessageSquare className="w-6 h-6" />,
    color: "from-indigo-500/20 to-blue-500/20",
    storeLinks: [
      { type: "playStore", url: "https://play.google.com/store/apps/details?id=com.helpdesk.user&pcampaignid=web_share" },
      { type: "appStore", url: "https://apps.apple.com/us/app/helpdesk-instant-help/id6660715086" },
    ],
  },
  {
    title: "Time Management",
    description:
      "Productivity app with task prioritization, deadline reminders, and progress tracking for better time allocation.",
    tags: ["Flutter", "SQLite", "Notifications", "UI/UX"],
    icon: <Clock className="w-6 h-6" />,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "QraftConnect",
    description:
      "B2B solution for construction companies with authentication, real-time Firebase chat, multi-language support, and advanced filtering.",
    tags: ["Flutter", "Firebase", "GetX", "Multi-language"],
    icon: <MapPin className="w-6 h-6" />,
    color: "from-violet-500/20 to-purple-500/20",
    storeLinks: [
      { type: "appStore", url: "https://apps.apple.com/us/app/qraftconnect/id6503102588" },
    ],
  },
  {
    title: "Caretaker App",
    description:
      "Caregiver application with real-time location tracking, emergency call functionality, and Firebase push notifications for elderly care.",
    tags: ["Flutter", "Location Tracking", "Firebase", "Push Notifications"],
    icon: <Heart className="w-6 h-6" />,
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Tabarru Charity App",
    description:
      "Donation app for mosques using SumUp and Stripe SDKs with a user-friendly interface for secure contributions.",
    tags: ["Flutter", "SumUp SDK", "Stripe", "Payments"],
    icon: <CreditCard className="w-6 h-6" />,
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsla(168,84%,45%,0.05)_0%,_transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A selection of apps I've built for clients and companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_hsla(220,20%,4%,0.8)_100%)]" />
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-background/80 backdrop-blur flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.storeLinks && project.storeLinks.length > 0 && (
                  <div className="flex gap-3 pt-2 border-t border-border">
                    {project.storeLinks.map((link) => (
                      <a
                        key={link.type}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.type === "playStore" ? (
                          <>
                            <SiGoogleplay className="w-4 h-4" />
                            <span>Play Store</span>
                          </>
                        ) : (
                          <>
                            <SiApple className="w-4 h-4" />
                            <span>App Store</span>
                          </>
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              Discuss Your Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
