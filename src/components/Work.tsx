// components/Work.tsx
import React from "react";

const projects = [
  {
    id: 1,
    category: "Blockchain Infrastructure",
    title: "Catalyst Explorer",
    description:
      "Engineered a transaction confirmation module enabling real-time blockchain verification, deepening platform transparency for Cardano's funding ecosystem.",
    tech: ["Laravel", "React", "PostgreSQL"],
    link: "https://www.catalystexplorer.com/en",
    image: "/assets/catalystexplorer.png",
  },
  {
    id: 2,
    category: "Governance",
    title: "1694.io",
    description:
      "Architected data pipelines to transform unstructured Cardano blockchain data into intuitive dashboards tracking on-chain governance proposals.",
    tech: ["PHP", "Laravel", "PostgreSQL", "React"],
    link: "https://www.1694.io/en",
    image: "/assets/1694.io.png",
  },
  {
    id: 3,
    category: "Community Platform",
    title: "Blockchain Centre NBO",
    description:
      "Built and maintained the digital infrastructure for Nairobi's leading blockchain community hub, implementing a hybrid WordPress + React architecture.",
    tech: ["WordPress", "React"],
    link: "https://www.blockchaincentrenbo.com/",
    image: "/assets/blockchaincentre.png",
  },
  {
    id: 4,
    category: "Social Connection",
    title: "2connect Initiative",
    description:
      "Designed and developed a volunteer-matching platform connecting individuals with community opportunities — skills-first, community-driven.",
    tech: ["React", "TypeScript"],
    link: "https://github.com/bmwangi-dev/2connect/",
    image: "/assets/2connect.png",
  },
  {
    id: 5,
    category: "Tourism & Travel",
    title: "Bliss Edge Tours & Safaris",
    description:
      "Delivered a modern, performant website for a leading Kenyan tour operator — responsive, fast, and conversion-optimised.",
    tech: ["HTML/CSS", "JavaScript"],
    link: "https://bliss-edge-tours-safaris.netlify.app/",
    image: "/assets/blisstours.png",
  },
  {
    id: 6,
    category: "Education & Mentorship",
    title: "Sigma Africa Accelerate",
    description:
      "Served as CTO, bootstrapping the platform from zero — managing architecture, deployment, and technical strategy for an African data innovation accelerator.",
    tech: ["Laravel", "React", "PostgreSQL", "Vercel"],
    link: "https://www-sigmaafrica-io.vercel.app/",
    image: "/assets/sigmaafrica.png",
  },
  {
    id: 7,
    category: "Branding",
    title: "Portfolio Websites",
    description:
      "Designed and developed tailored portfolio sites for professionals, translating personal brands into polished, performant digital identities.",
    tech: ["React", "Vite", "Tailwind"],
    link: "https://mwangi-brian.netlify.app/",
    image: "/assets/portfoliowebsite.png",
  },
];

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-tight">
              Projects I've Shipped
            </h2>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed md:text-right">
            Production systems across blockchain, governance, community, and
            education.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-border">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-primary group flex flex-col"
            >
              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="section-label mb-2">{project.category}</p>
                <h3 className="text-base font-bold text-accent mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-primary-orange transition-colors duration-200 group/link"
                >
                  View Live
                  <svg
                    className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
