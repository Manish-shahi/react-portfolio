import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Bitbucket",
  "Selenium",
  "Robot Framework",
  "REST APIs",
  "Tailwind CSS",
  "Agile/Scrum",
];

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        skillsRef.current?.children || [],
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: {
            each: 0.05,
            from: "random",
          },
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Technologies
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
        </div>

        <div ref={skillsRef} className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};