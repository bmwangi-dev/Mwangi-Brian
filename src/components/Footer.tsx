// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">

                <a href="#home" className="hover:opacity-70 transition-opacity duration-200">
                    <img
                        src="/assets/mwangi_logo.png"
                        alt="Mwangi Brian"
                        className="h-7 w-auto object-contain"
                    />
                </a>

                <p className="text-xs text-muted">© 2026 Mwangi Brian. All rights reserved.</p>

                <div className="flex items-center gap-5">
                    <a href="https://github.com/bmwangi-dev" target="_blank" rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors duration-200 text-xs font-medium">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mwangi-brian-68732527b/" target="_blank" rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors duration-200 text-xs font-medium">
                        LinkedIn
                    </a>
                    <a href="https://x.com/mwangi_chieby" target="_blank" rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors duration-200 text-xs font-medium">
                        X
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;