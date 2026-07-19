// components/About.tsx
import React from "react";

const values = [
  {
    label: "Systems Thinking",
    desc: "I reason about architecture before touching code.",
  },
  {
    label: "Clean Code",
    desc: "Readable, testable, maintainable — by default.",
  },
  {
    label: "Community First",
    desc: "Great engineers lift the people around them.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left col — headshot + quick facts */}
          <div>
            <div className="flex items-start gap-5 mb-10">
              <img
                src="/assets/mwangi1.webp"
                alt="Mwangi Brian"
                className="w-20 h-20 rounded-lg object-cover object-top flex-shrink-0 border border-border"
              />
              <div>
                <h2 className="text-xl font-bold text-accent">Mwangi Brian</h2>
                <p className="text-sm text-muted mt-0.5">
                  Software Engineer · Nairobi, Kenya
                </p>
                <p className="text-sm text-primary-orange mt-1 font-medium">
                  Lido Nation Foundation
                </p>
              </div>
            </div>

            {/* Values */}
            <p className="section-label mb-6">Principles</p>
            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-0.5 w-1 h-1 rounded-full bg-primary-orange flex-shrink-0 mt-2"></span>
                  <div>
                    <p className="text-sm font-semibold text-accent">
                      {v.label}
                    </p>
                    <p className="text-sm text-muted mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right col — editorial bio */}
          <div>
            <p className="section-label mb-8">About</p>
            <div className="space-y-5 text-muted text-base leading-relaxed">
              <p>
                I am a software engineer with over four and half years of
                experience building production systems across blockchain
                infrastructure, nonprofit platforms, and data-driven web
                applications. My work spans the full backend stack — from schema
                design and API architecture to deployment pipelines and
                performance auditing.
              </p>
              <p>
                Currently at{" "}
                <span className="text-accent font-medium">
                  Lido Nation Foundation
                </span>
                , I engineer data pipelines and explorer tools that make
                Cardano's governance and funding ecosystem accessible to
                thousands of users. I've shipped features across Catalyst
                Explorer, 1694.io, and the Parameters Explorer — translating raw
                blockchain data into decision-ready interfaces.
              </p>
              <p>
                Beyond product work, I operate as a technical entity of my own —
                contributing to open source, mentoring junior developers through
                the Blockchain Centre Nairobi, and building community
                infrastructure that outlasts any single project. I believe the
                best engineers don't just ship code; they make the teams and
                ecosystems around them stronger.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border">
              {[
                { n: "10+", l: "Projects Shipped" },
                { n: "25+", l: "Years of Practice" },
                { n: "12+", l: "Developers Mentored" },
              ].map((m) => (
                <div key={m.l}>
                  <p className="text-2xl font-bold text-accent">{m.n}</p>
                  <p className="text-xs text-muted mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
