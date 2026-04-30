// components/Community.tsx
import React from "react";

const communityPhotos = [
  { src: "/assets/mentorships.webp", alt: "Mentorship sessions" },
  { src: "/assets/communitymeetups.webp", alt: "Tech meetups" },
  { src: "/assets/presentations.webp", alt: "Idea presentations" },
  { src: "/assets/graduation.webp", alt: "Graduation success stories" },
  { src: "/assets/learning.webp", alt: "Learning together" },
  { src: "/assets/outdoor.webp", alt: "Outdoor team building" },
];

const highlights = [
  "Mentor at Blockchain Centre Nairobi — guiding junior developers through blockchain architecture and professional practice",
  "Lead Developer & CTO at Sigma Africa Accelerate — directly mentored and managed junior developers on a live production stack",
  "Combined mentorship footprint of 10+ developers across both roles, spanning code review, architecture decisions, and career guidance",
  "Organised and facilitated workshops on React, Laravel, and web3 fundamentals",
];

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 lg:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — editorial content */}
          <div>
            <p className="section-label mb-3">Community & Mentorship</p>
            <h2 className="text-3xl md:text-4xl font-bold text-accent tracking-tight mb-6">
              Building More Than
              <br />
              Just Software
            </h2>

            <div className="space-y-4 text-muted text-base leading-relaxed mb-10">
              <p>
                I operate with the conviction that strong engineering
                communities produce better engineers — and better products.
                That's why a significant part of my practice involves working
                with junior developers, not just alongside them.
              </p>
              <p>
                Through the{" "}
                <span className="text-accent font-medium">
                  Blockchain Centre Nairobi
                </span>
                , I have mentored volunteer developers on architecture patterns,
                code quality, and real-world problem-solving — the kind of
                knowledge that only comes from shipping production systems.
              </p>
            </div>

            {/* Highlights */}
            <p className="section-label mb-5">What This Looks Like</p>
            <ul className="space-y-4">
              {highlights.map((h, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary-orange text-xs mt-1 flex-shrink-0">
                    →
                  </span>
                  <span className="text-sm text-muted leading-relaxed">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — photo grid */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {communityPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden rounded-lg border border-border"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted mt-4">
              Workshops · Tech meetups · Mentorship sessions · Outdoor team
              building
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
