// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-6 md:py-8 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                <a href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <img
                        src="/assets/mwangi_logo.png"
                        alt="Logo"
                        className="h-8 md:h-10 w-auto object-contain"
                    />
                </a>
                <p className="text-muted text-xs md:text-sm">© 2026 All rights reserved.</p>
                <p className="text-muted text-xs md:text-sm">Designed & Built by Mwangi</p>
            </div>
        </footer>
    );
};

export default Footer;