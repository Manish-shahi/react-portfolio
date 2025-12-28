import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Palette, Type, Image, Gamepad2, Share2, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: "ColorsCodes",
    description: "A comprehensive color tool platform for designers and developers",
    link: "https://colorscodes.com/",
    icon: Palette,
    featured: true,
    gradient: "from-pink-500 to-orange-400",
  },
  {
    title: "Text2Change",
    description: "Text transformation and manipulation utility tool",
    link: "https://text2change.com/",
    icon: Type,
    featured: true,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "TDYoutube",
    description: "Download YouTube video thumbnails in various resolutions",
    link: "https://thumbnaildownloadyoutube.com/",
    icon: Image,
    featured: true,
    gradient: "from-red-500 to-pink-500",
  },
  {
    title: "3D-Portfolio",
    description: "Interactive 3D portfolio showcasing creative web experiences",
    link: "https://manish-3d-portfolio.vercel.app/",
    icon: Gamepad2,
    featured: true,
    gradient: "from-purple-500 to-indigo-500",
  },
];

const academicProjects = [
  {
    title: "Puzzle Game",
    description: "Final Year Project - Interactive mobile puzzle game with multiple levels and challenges, focusing on user experience and game logic",
    icon: Gamepad2,
  },
  {
    title: "File Sharing App",
    description: "Third Year Project - Mobile app for quick file sharing between users, enabling instant transfers without pendrives",
    icon: Share2,
  },
  {
    title: "Hotel Reservation System",
    description: "Second Year Project - Hotel booking system using HTML, CSS, JavaScript, and PHP",
    icon: Building2,
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const academicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Featured projects animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 80, opacity: 0, rotateY: 15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Academic projects animation
      gsap.fromTo(
        academicRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: academicRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
              style={{ perspective: "1000px" }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <project.icon className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Academic Projects */}
        <div className="mb-12">
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Academic Projects</h3>
        </div>

        <div ref={academicRef} className="grid md:grid-cols-3 gap-6">
          {academicProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <project.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display text-lg font-bold mb-3">{project.title}</h4>
              <p className="text-muted-foreground text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};