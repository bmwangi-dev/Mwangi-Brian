// components/Experience.tsx
import React, { useState } from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "Lido Nation Foundation",
    period: "April 2025 – March 2026",
    type: "Hybrid · Nairobi",
    tech: ["PHP", "Laravel", "React", "PostgreSQL", "Docker", "GitLab"],
    current: true,
    achievements: [
      {
        title: "Catalyst Explorer",
        desc: "Engineered a transaction confirmation module enabling real-time blockchain verification, deepening platform transparency for the Cardano funding ecosystem.",
      },
      {
        title: "1694.io — Governance Tracker",
        desc: "Architected data pipelines to transform unstructured Cardano blockchain data into dashboards for tracking on-chain governance proposals.",
      },
      {
        title: "Parameters Explorer",
        desc: "Developed a classification and search system for Cardano's network parameters, making complex protocol settings accessible to non-technical users.",
      },
      {
        title: "AdaPay for WooCommerce",
        desc: "Extended the AdaPay payment plugin by integrating KES (Kenyan Shilling) as a supported local currency option.",
      },
      {
        title: "Lido Impact — Lead Developer",
        desc: "Spearheaded the Lido Impact donation platform, designing a seamless workflow for cryptocurrency holders to donate to charitable causes.",
      },
      {
        title: "Mentorship & Community",
        desc: "Mentored volunteer developers at the Blockchain Centre Nairobi on blockchain architecture, code review practices, and professional development.",
      },
    ],
  },
  {
    role: "Web Developer",
    company: "Blockchain Centre Nairobi",
    period: "June 2025 – September 2025",
    type: "Remote",
    tech: ["WordPress", "React", "JavaScript"],
    current: false,
    achievements: [
      {
        title: "Digital Infrastructure",
        desc: "Collaborated on the development and maintenance of the official Blockchain Centre Nairobi website.",
      },
      {
        title: "Hybrid Architecture",
        desc: "Implemented a component-based system merging WordPress CMS with a React-based application layer for improved developer experience.",
      },
    ],
  },
  {
    role: "Software Developer",
    company: "Ngong Road Children's Foundation",
    period: "January 2025 – April 2025",
    type: "Full-time · On-site · Nairobi",
    tech: ["PHP", "Laravel", "JavaScript", "WordPress", "Salesforce", "GitHub"],
    current: false,
    achievements: [
      {
        title: "Student Portal Enhancement",
        desc: "Refactored the Student Portal to resolve critical bugs and implemented a paginated image gallery for student sponsors.",
      },
      {
        title: "System Optimisation",
        desc: "Conducted performance audits and debugging to ensure 99.9% uptime for the foundation's primary web assets.",
      },
      {
        title: "Cross-functional Collaboration",
        desc: "Partnered with mission teams to implement technical solutions that streamlined donor-student communication workflows.",
      },
    ],
  },
  {
    role: "Software Developer & CTO",
    company: "Sigma Africa Accelerate",
    period: "September 2024 – March 2025",
    type: "Remote",
    tech: ["Laravel", "React", "PostgreSQL", "Vercel", "GitHub"],
    current: false,
    achievements: [
      {
        title: "Tech Lead & CTO",
        desc: "Bootstrapped and managed the full technical stack for Sigma Africa — an African data innovation accelerator.",
      },
      {
        title: "Strategic Research",
        desc: "Led technical research and roadmapping, advocating for measurable improvements in platform performance and developer experience.",
      },
      {
        title: "Feedback Culture",
        desc: "Established a structured feedback loop across engineering and product teams to accelerate iteration cycles.",
      },
    ],
  },
];

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="section-label mb-3">Professional History</p>
            <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-tight">
              Experience
            </h2>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed md:text-right">
            Four roles across blockchain infrastructure, nonprofits, community
            platforms, and education.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`timeline-entry pb-10 ${exp.current ? "active-entry" : ""}`}
            >
              <div
                className={
                  exp.current ? "timeline-dot" : "timeline-dot-inactive"
                }
              ></div>

              {/* Role header — always visible */}
              <button
                className="w-full text-left"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-bold text-accent">
                      {exp.role}
                    </h3>
                    <p
                      className={`text-sm font-medium mt-0.5 ${exp.current ? "text-primary-orange" : "text-muted"}`}
                    >
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <span className="text-xs text-muted font-medium">
                      {exp.period}
                    </span>
                    <span className="text-xs text-muted">{exp.type}</span>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {exp.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expand toggle */}
                <div className="flex items-center gap-1.5 text-xs text-muted hover:text-primary-orange transition-colors">
                  <span>
                    {expanded === idx ? "Hide details" : "Show achievements"}
                  </span>
                  <svg
                    className={`w-3 h-3 transform transition-transform duration-200 ${expanded === idx ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Achievements — expandable */}
              {expanded === idx && (
                <div className="mt-5 space-y-4 border-t border-border pt-5">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="text-primary-orange text-xs mt-0.5 flex-shrink-0">
                        →
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-accent">
                          {ach.title}
                        </p>
                        <p className="text-sm text-muted mt-0.5 leading-relaxed">
                          {ach.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
