// App.tsx
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Experience from './components/Experience';
import Community from './components/Community';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a[href^="#"]');
            if (anchor) {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (href && href !== '#') {
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        const mobileMenu = document.getElementById('mobileMenu');
                        if (mobileMenu) mobileMenu.classList.add('hidden');
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="antialiased selection:bg-primary-orange selection:text-primary">
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Experience />
            <Skills />
            <Community />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;