import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    type: "work",
    title: "Freelance Full-Stack Software Engineer",
    company: "Self-Employed / Freelancing",
    period: "09/2025 – Present",
    description: [
      "Delivered end-to-end full-stack web applications for clients on a contract and project basis",
      "Built responsive and scalable frontend interfaces using React.js and Next.js",
      "Developed backend APIs and business logic using Node.js, integrating SQL databases",
    ],
  },
  {
    type: "work",
    title: "Automation Engineer",
    company: "ComplianceQuest Nepal Pvt. Ltd.",
    period: "01/2025 – 07/2025",
    description: [
      "Automated Salesforce tests using Robot Framework and Selenium",
      "Developed advanced XPath expressions and comprehensive test suites",
      "Collaborated using Bitbucket and Jira across multiple product modules",
    ],
  },
  {
    type: "work",
    title: "Full Stack Trainee",
    company: "Rank One Pro Pvt. Ltd.",
    period: "10/2024 – 12/2024",
    description: [
      "Developed web applications using Next.js, React.js, and Node.js in an agile environment",
      "Contributed to building an eCommerce website: frontend components, API integration, and testing",
    ],
  },
  {
    type: "work",
    title: "Software Engineering Intern",
    company: "Leapfrog Technology Inc.",
    period: "05/2024 – 08/2024",
    description: [
      "Built responsive web pages using HTML, CSS, JavaScript, and SASS",
      'Developed multiple JavaScript projects including a 2D game "Chronicle Adventure"',
    ],
  },
  {
    type: "education",
    title: "Bachelor of Engineering in Information Technology",
    company: "Cosmos College of Management and Technology",
    period: "2018 – 2023",
    description: [],
  },
  {
    type: "training",
    title: "MERN Stack Training",
    company: "Deerwalk Training Center",
    period: "10/2023 – 01/2024",
    description: [],
  },
];

export const ExperienceTimeline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1,
          },
        }
      );

      // Animate each timeline item
      const items = timelineRef.current?.querySelectorAll(".timeline-item");
      items?.forEach((item, index) => {
        const direction = index % 2 === 0 ? -60 : 60;

        gsap.fromTo(
          item,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate the dot
        const dot = item.querySelector(".timeline-dot");
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Experience & Education
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div
            ref={lineRef}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--primary) / 0) 0%, hsl(var(--primary)) 10%, hsl(var(--primary)) 90%, hsl(var(--primary) / 0) 100%)",
            }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div
                  className="timeline-dot absolute left-8 md:left-1/2 w-5 h-5 -translate-x-1/2 rounded-full bg-primary z-10"
                  style={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
                >
                  <div className="absolute inset-1 rounded-full bg-background" />
                </div>

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                  }`}
                >
                  <div className="glass-card rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {exp.type === "education" || exp.type === "training" ? (
                          <GraduationCap className="w-5 h-5 text-primary" />
                        ) : (
                          <Briefcase className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <span className="text-sm text-primary font-medium">{exp.period}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground mb-4">{exp.company}</p>
                    {exp.description.length > 0 && (
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};