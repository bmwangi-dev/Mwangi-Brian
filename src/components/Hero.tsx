// components/Hero.tsx
import React from "react";

const stats = [
  { value: "4+", label: "Years Building" },
  { value: "10+", label: "Projects Shipped" },
  { value: "12+", label: "Developers Mentored" },
];

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text content */}
          <div>
            {/* Status badge */}
            <div
              className="flex items-center gap-2 mb-10 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.05s", animationFillMode: "forwards" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary-orange inline-block"></span>
              <span className="section-label">
                Available for new opportunities
              </span>
            </div>

            {/* Headline */}
            <div
              className="mb-8 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-accent">
                Software
                <br />
                <span className="text-primary-orange">Engineer.</span>
              </h1>
            </div>

            {/* Subline */}
            <div
              className="mb-14 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            >
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-lg">
                I build scalable backend systems, data-driven platforms, and
                blockchain infrastructure, and I bring other developers along
                for the journey
              </p>
            </div>

            {/* Stats row */}
            <div
              className="flex flex-wrap gap-10 md:gap-14 mb-14 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-bold text-accent tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted mt-1.5 tracking-wider uppercase font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 opacity-0 animate-slide-up"
              style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
            >
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-base font-semibold text-accent hover:text-primary-orange transition-colors duration-200 group"
              >
                View My Work
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
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
              <a
                href="/assets/MWANGI-BRIAN-CV.pdf"
                download="MWANGI-BRIAN-CV.pdf"
                className="inline-flex items-center gap-2 text-base font-medium border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 px-6 py-3 rounded-lg"
              >
                Download CV
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right — headshot */}
          <div
            className="hidden lg:flex justify-end items-center opacity-0 animate-slide-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            <div className="relative">
              {/* Orange accent line */}
              <div className="absolute -left-4 top-8 bottom-8 w-0.5 bg-primary-orange"></div>

              <div className="w-[400px] xl:w-[460px] aspect-[4/5] overflow-hidden rounded-lg border border-border">
                <img
                  src="/assets/mwangi1.webp"
                  alt="Mwangi Brian — Software Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Name badge */}
              <div className="absolute -bottom-5 left-0 right-0 mx-auto w-fit bg-primary border border-border px-5 py-3 rounded-lg">
                <p className="text-sm font-semibold text-accent">
                  Mwangi Brian
                </p>
                <p className="text-xs text-muted mt-0.5">
                  Software Engineer · Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="section-divider" />
    </section>
  );
};

export default Hero;
