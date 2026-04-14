// components/Work.tsx
import ExperienceSidebar from "./ExperienceSidebar";
import { useState } from "react";

const projects = [
    {
        id: 1,
        category: 'Community',
        title: 'Blockchain Centre NBO',
        description: 'Connecting Web3 and Web2 communities in one inclusive space.',
        image: '/assets/blockchaincentre.png',
        link: 'https://www.blockchaincentrenbo.com/'
    },
    {
        id: 2,
        category: 'Community Initiatives',
        title: '2connect Initiative',
        description: 'Connecting individuals with meaningful volunteer opportunities. Build skills. Transform communities.',
        image: '/assets/2connect.png',
        link: 'https://github.com/bmwangi-dev/2connect/'
    },
    {
        id: 3,
        category: 'Blockchain',
        title: 'Catalyst Explorer',
        description: "Driving Cardano's ecosystem growth by linking innovative ideas with funding opportunities.",
        image: '/assets/catalystexplorer.png',
        link: 'https://www.catalystexplorer.com/en'
    },
    {
        id: 4,
        category: 'Governance',
        title: '1694.io',
        description: 'An On-Chain Decentralized Governance.',
        image: '/assets/1694.io.png',
        link: 'https://www.1694.io/en'
    },
    {
        id: 5,
        category: 'Tourism & Travel',
        title: 'Bliss Edge Tours & Safaris',
        description: 'A modern website for a leading tour operator in Kenya, showcasing their unique safari experiences.',
        image: '/assets/blisstours.png',
        link: 'https://bliss-edge-tours-safaris.netlify.app/'
    },
    {
        id: 6,
        category: 'Education',
        title: 'Sigma Africa Accelerate',
        description: 'Driving African data innovation through Education and mentorship.',
        image: '/assets/sigmaafrica.png',
        link: 'https://www-sigmaafrica-io.vercel.app/'
    },
    {
        id: 7,
        category: 'Branding & Identity',
        title: 'Portfolio Websites',
        description: 'Showcasing unique personal brands through tailored portfolio websites.',
        image: '/assets/portfoliowebsite.png',
        link: 'https://mwangi-brian.netlify.app/'
    },
];

const duplicatedProjects = [...projects, ...projects];

const Work: React.FC = () => {

    const [openExperience, setOpenExperience] = useState(false);

    return (
        <section id="work" className="py-16 md:py-32 relative overflow-hidden">
            <div className="max-w-[95%] mx-auto px-6 lg:px-8">

                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
                    <div>
                        <p className="text-primary-orange text-sm tracking-[0.2em] uppercase mb-4">
                            Selected Works
                        </p>

                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
                            It's not Just Talk.
                        </h2>

                        <p className="text-muted text-base md:text-lg mt-2">Here's the proof.</p>
                    </div>

                    <button
                        onClick={() => setOpenExperience(true)}
                        className="mt-6 md:mt-0 border border-primary-orange text-primary-orange px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-primary-orange hover:text-black transition text-sm md:text-base"
                    >
                        Experience Timeline
                    </button>
                </div>

                <div className="carousel-track flex gap-6">

                    {duplicatedProjects.map((project, index) => (
                        <div key={`${project.id}-${index}`} className="flex-none w-[85vw] md:w-[45vw] lg:w-[30vw]">

                            <div className="bento-card bg-surface rounded-2xl md:rounded-3xl overflow-hidden border border-border h-[400px] md:h-[500px] relative group">

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 z-20">

                                    <span className="text-primary-orange text-xs tracking-widest uppercase mb-2 block">
                                        {project.category}
                                    </span>

                                    <h3 className="font-serif text-xl md:text-2xl font-bold mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm border border-primary-orange rounded-full bg-primary-orange text-black transition"
                                    >
                                        View Project
                                    </a>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>
            </div>

            <style>{`
                .carousel-track{
                    width:max-content;
                    animation:scrollLeft 60s linear infinite;
                }

                @keyframes scrollLeft{
                    from{
                        transform:translateX(0);
                    }
                    to{
                        transform:translateX(-50%);
                    }
                }
            `}</style>

            <ExperienceSidebar
                isOpen={openExperience}
                onClose={() => setOpenExperience(false)}
            />
        </section>
    );
};

export default Work;