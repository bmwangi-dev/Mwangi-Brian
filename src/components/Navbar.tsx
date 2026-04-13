// components/Navbar.tsx
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                ? 'bg-primary/95 shadow-lg'
                : 'bg-primary/80'
                } backdrop-blur-md border-b border-white/5`}
            id="navbar"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <img
                            src="/assets/mwangi_logo.png"
                            alt="Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="nav-link text-sm font-medium text-muted hover:text-accent transition-colors">Home</a>
                        <a href="#about" className="nav-link text-sm font-medium text-muted hover:text-accent transition-colors">About</a>
                        <a href="#work" className="nav-link text-sm font-medium text-muted hover:text-accent transition-colors">Work</a>
                        <a href="#gallery" className="nav-link text-sm font-medium text-muted hover:text-accent transition-colors">Gallery</a>
                        <a href="#contact" className="px-5 py-2.5 text-sm font-medium bg-accent text-primary rounded-full hover:bg-white transition-colors duration-300">
                            Let's Talk
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobileMenu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-secondary border-t border-border`}>
                <div className="px-6 py-4 space-y-3">
                    <a href="#home" className="block text-sm font-medium text-muted hover:text-accent py-2">Home</a>
                    <a href="#about" className="block text-sm font-medium text-muted hover:text-accent py-2">About</a>
                    <a href="#work" className="block text-sm font-medium text-muted hover:text-accent py-2">Work</a>
                    <a href="#gallery" className="block text-sm font-medium text-muted hover:text-accent py-2">Gallery</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;