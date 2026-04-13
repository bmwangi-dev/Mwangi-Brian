// components/Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-highlight/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <p className="text-muted text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    Creative Developer & Designer
                </p>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    Crafting Digital<br />
                    <span className="italic text-primary-orange">Experiences</span>
                </h1>
                <p className="max-w-2xl mx-auto text-base md:text-lg text-muted leading-relaxed mb-12 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    I build immersive digital products that blend aesthetics with functionality.
                    Specializing in interactive web experiences and brand identity.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <a href="#work" className="px-8 py-4 bg-accent text-primary font-medium rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105">
                        View My Work
                    </a>
                    <a href="#contact" className="px-8 py-4 border border-border text-accent font-medium rounded-full hover:bg-surface transition-all duration-300">
                        Get in Touch
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;