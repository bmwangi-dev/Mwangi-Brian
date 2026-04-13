// components/About.tsx
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-32 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                            <img
                                src="/assets/mwangi2.jpg"
                                alt="Your Portrait"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-highlight/10 rounded-3xl -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 border border-highlight/30 rounded-3xl -z-10"></div>
                    </div>

                    <div>
                        <p className="text-primary-orange text-sm tracking-[0.2em] uppercase mb-4">About Me</p>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Design-Driven<br />Developer</h2>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>
                                With over 2 years of experience in digital product design and development,
                                I bridge the gap between aesthetics and functionality. My approach combines
                                strategic thinking with meticulous attention to detail.
                            </p>
                            <p>
                                I believe that great design is invisible, it just works. Whether I'm crafting
                                a brand identity or building a complex web application, my goal remains the
                                same: creating meaningful experiences that resonate with users.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-8 mt-10 pt-10 border-t border-border">
                            <div>
                                <p className="font-serif text-3xl font-bold text-accent">10+</p>
                                <p className="text-sm text-muted mt-1">Projects Completed</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-bold text-accent">7+</p>
                                <p className="text-sm text-muted mt-1">Happy Clients</p>
                            </div>
                            <div>
                                <p className="font-serif text-3xl font-bold text-accent">2+</p>
                                <p className="text-sm text-muted mt-1">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;