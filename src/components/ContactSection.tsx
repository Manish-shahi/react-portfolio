import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import manishPhoto from "@/assets/manish.jpeg";

gsap.registerPlugin(ScrollTrigger);

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "manish.shahi880@gmail.com",
    href: "mailto:manish.shahi880@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9862569584",
    href: "tel:+9779862569584",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Manish-shahi",
    href: "https://github.com/Manish-shahi",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "manishshahinepal",
    href: "https://linkedin.com/in/manishshahinepal",
  },
];

export const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        linksRef.current?.children || [],
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
          Get in Touch
        </span>
        <h2
          ref={titleRef}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-8"
        >
          Let's Work
          <span className="text-gradient"> Together</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="mb-12 flex justify-center">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary/20 dark:ring-primary/30 shadow-xl dark:shadow-primary/20">
              <img 
                src={manishPhoto} 
                alt="Manish Shahi" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/20 pointer-events-none" />
          </div>
        </div>

        <div ref={linksRef} className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card rounded-2xl p-6 flex items-center gap-4 group hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">{link.label}</p>
                <p className="font-medium text-foreground truncate">{link.value}</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
