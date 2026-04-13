// components/ExperienceSidebar.tsx
import React, { useEffect, useState } from 'react';

interface ExperienceSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const ExperienceSidebar: React.FC<ExperienceSidebarProps> = ({ isOpen, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const experiences = [
        {
            role: "Software Developer",
            company: "Lido Nation Foundation",
            period: "April 2025 – March 2026",
            type: "Operation - Hybrid",
            tech: ["PHP", "Laravel", "React JS", "PostgreSQL", "Docker", "Git/GitLab"],
            achievements: [
                {
                    title: "Catalyst Explorer",
                    desc: "Engineered a transaction confirmation module that allows users to verify blockchain transactions in real-time deeping platform transparency."
                },
                {
                    title: "1694.io (Governance Tracker)",
                    desc: "Architected data pipelines to transform unstructured Cardano blockchain data into intuitive dashboards for tracking governance proposals."
                },
                {
                    title: "Parameters Explorer",
                    desc: "Developed a comprehensive classification system for Cardano's network parameters making complex blockchain settings searchable."
                },
                {
                    title: "AdaPay for WooCommerce",
                    desc: "Extended the functionality of the AdaPay plugin by integrating KES (Kenya Shillings) as a local currency option."
                },
                {
                    title: "Lido Impact (Lead Developer)",
                    desc: "Spearheaded the 'Lido Impact' project, designing a seamless donation workflow for cryptocurrency holders."
                },
                {
                    title: "Mentorship & Community",
                    desc: "Served as a mentor at the Blockchain Centre Nairobi, guiding volunteer developers through blockchain architecture."
                }
            ]
        },
        {
            role: "Web Developer",
            company: "Blockchain Centre Nairobi",
            period: "Jun 2025 – Sept 2025",
            type: "Operation - Remote",
            tech: ["WordPress", "React"],
            achievements: [
                {
                    title: "Digital Infrastructure",
                    desc: "Collaborated on the development and maintenance of the official organization website."
                },
                {
                    title: "Hybrid Architecture",
                    desc: "Implemented a component-based system merging WordPress with a React-based application layer."
                }
            ]
        },
        {
            role: "Software Developer",
            company: "Ngong Road Children's Foundation (NRCF)",
            period: "Jan 2025 – April 2025",
            type: "Operation - Full time | On Site",
            tech: ["PHP", "Laravel", "JavaScript", "WordPress", "Salesforce", "Git/GitHub"],
            achievements: [
                {
                    title: "Student Portal Enhancement",
                    desc: "Refactored the Student Portal to resolve critical bugs and implemented a paginated image gallery for student sponsors."
                },
                {
                    title: "System Optimization",
                    desc: "Conducted routine performance audits and debugging to ensure 99.9% uptime for the organization's primary web assets."
                },
                {
                    title: "Cross-functional Collaboration",
                    desc: "Partnered with the foundation's mission teams to implement technical solutions that streamlined donor-student communication."
                }
            ]
        },
        {
            role: "Software Developer & CTO",
            company: "Sigma Africa Accelerate",
            period: "Sept 2024 – March 2025",
            type: "Operation - Remote",
            tech: ["Laravel", "React JS", "PostgreSQL", "Vercel", "Git/GitHub"],
            achievements: [
                {
                    title: "Tech Innovation",
                    desc: "Leading the tech innovation behind Sigma Africa by bootstrapping and managing the website."
                },
                {
                    title: "Strategic Research",
                    desc: "Lead the tech research for Sigma's improvements and advocate for steps to improve the website."
                },
                {
                    title: "Feedback Culture",
                    desc: "Collaborate with team members to come up with the best system for sigma by advocating for an efficient feedback loop."
                }
            ]
        }
    ];

    useEffect(() => {
        if (isOpen) {
            setIsAnimating(true);
            document.body.style.overflow = 'hidden';
        } else {
            setTimeout(() => setIsAnimating(false), 500);
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[90%] md:w-[55%] lg:w-[45%] bg-secondary z-[999] shadow-2xl transform transition-transform duration-500 ease-out overflow-y-auto
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header with gradient border */}
                <div className="sticky top-0 z-10 bg-secondary/95 backdrop-blur-md border-b border-border">
                    <div className="flex justify-between items-center p-6 lg:p-8">
                        <div>
                            <h2 className="font-serif text-2xl lg:text-3xl font-bold text-accent">
                                Experience<span className="text-primary-orange">.</span>
                            </h2>
                            <p className="text-muted text-sm mt-1">My professional journey through the years</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full border border-border hover:border-primary-orange hover:bg-surface transition-all duration-300 flex items-center justify-center group"
                        >
                            <svg className="w-5 h-5 text-muted group-hover:text-primary-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Timeline Navigation */}
                <div className="px-6 lg:px-8 pt-6">
                    <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
                        {experiences.map((exp, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 whitespace-nowrap
                                    ${activeIndex === idx
                                        ? 'bg-primary-orange text-primary shadow-lg'
                                        : 'bg-surface border border-border text-muted hover:text-accent hover:border-primary-orange/50'
                                    }`}
                            >
                                {exp.company.split(' ').slice(0, 2).join(' ')}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className={`transition-all duration-500 transform
                                    ${activeIndex === idx
                                        ? 'block animate-fade-in'
                                        : 'hidden'
                                    }`}
                            >
                                {/* Timeline Card */}
                                <div className="relative">
                                    {/* Timeline line */}
                                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary-orange/20 ml-5"></div>

                                    {/* Experience Card */}
                                    <div className="relative pl-12">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-1 w-3 h-3 bg-primary-orange rounded-full border-2 border-secondary"></div>

                                        <div className="bg-surface/30 backdrop-blur-sm rounded-2xl border border-border p-6 hover:border-primary-orange/30 transition-all duration-300">
                                            {/* Header */}
                                            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-accent">{exp.role}</h3>
                                                    <p className="text-primary-orange font-medium mt-1">{exp.company}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="inline-block text-xs text-primary-orange bg-primary-orange/10 px-3 py-1 rounded-full">
                                                        {exp.period}
                                                    </span>
                                                    <p className="text-xs text-muted mt-2">{exp.type}</p>
                                                </div>
                                            </div>

                                            {/* Tech Stack */}
                                            {exp.tech && (
                                                <div className="mb-5">
                                                    <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {exp.tech.map((t, i) => (
                                                            <span
                                                                key={i}
                                                                className="text-xs text-primary-orange bg-primary-orange/5 border border-primary-orange/20 px-2.5 py-1 rounded-md"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Key Achievements</h4>
                                                <div className="space-y-4">
                                                    {exp.achievements.map((ach, i) => (
                                                        <div key={i} className="relative pl-4 group">
                                                            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 bg-primary-orange rounded-full group-hover:scale-125 transition-transform"></div>
                                                            <h5 className="text-sm font-semibold text-accent/90 mb-1">{ach.title}</h5>
                                                            <p className="text-xs text-muted leading-relaxed">{ach.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer with progress indicator */}
                <div className="sticky bottom-0 bg-secondary/95 backdrop-blur-md border-t border-border px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                            {experiences.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`h-1 rounded-full transition-all duration-300 ${activeIndex === idx
                                        ? 'w-6 bg-primary-orange'
                                        : 'w-2 bg-border hover:bg-muted'
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="text-xs text-muted">
                            <span className="text-primary-orange">{activeIndex + 1}</span> / {experiences.length} positions
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExperienceSidebar;