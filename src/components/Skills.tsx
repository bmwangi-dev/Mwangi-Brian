// components/Skills.tsx
import React from "react";

const skillDomains = [
  {
    domain: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Redis",
      "GraphQL",
    ],
  },
  {
    domain: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    domain: "Infrastructure",
    skills: [
      "Docker",
      "Git / GitHub / GitLab",
      "Vercel",
      "Linux",
      "CI/CD Pipelines",
      "WordPress",
    ],
  },
  {
    domain: "Blockchain",
    skills: [
      "Cardano Ecosystem",
      "Blockchain Data Pipelines",
      "WooCommerce (AdaPay)",
      "Governance Tooling",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="section-label mb-3">Technical Expertise</p>
            <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-tight">
              The Stack I Work With
            </h2>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed md:text-right">
            Accumulated across production systems, open-source contributions,
            and client engagements.
          </p>
        </div>

        {/* Domain grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {skillDomains.map((domain) => (
            <div
              key={domain.domain}
              className="border-r border-b border-border p-8 hover:bg-surface transition-colors duration-200"
            >
              <p className="text-xs font-semibold text-primary-orange uppercase tracking-widest mb-6">
                {domain.domain}
              </p>
              <ul className="space-y-3">
                {domain.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-border flex-shrink-0"></span>
                    <span className="text-sm text-muted">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Also familiar with */}
        <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center gap-3">
          <span className="text-xs text-muted font-medium uppercase tracking-wider mr-2">
            Also familiar with:
          </span>
          {[
            "Salesforce",
            "Figma",
            "Agile / Scrum",
            "Code Review",
            "Technical Writing",
            "System Design",
          ].map((item) => (
            <span key={item} className="tech-tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
