// components/Gallery.tsx
import React from 'react';

const galleryItems = [
    {
        id: 1,
        title: 'Mentoships',
        subtitle: 'Mentorship Program',
        image: '/assets/mentorships.jpg',
    },
    {
        id: 2,
        title: 'Tech meetups',
        subtitle: 'Community Events',
        image: '/assets/communitymeetups.jpg',
    },
    {
        id: 3,
        title: 'Idea Presentations',
        subtitle: 'Team Meetings',
        image: '/assets/presentations.jpg',
    },
    {
        id: 4,
        title: 'Graduation',
        subtitle: 'Success Stories',
        image: '/assets/graduation.jpg',
    },
    {
        id: 5,
        title: 'Outdoor Adventures',
        subtitle: 'Team Building',
        image: '/assets/outdoor.jpg',
    },
    {
        id: 6,
        title: 'When We Meet',
        subtitle: 'Game Nights & Socials',
        image: '/assets/gamenights.jpeg',
    },
    {
        id: 7,
        title: 'Learning Together',
        subtitle: 'Workshops & Talks',
        image: '/assets/learning.jpg',
    },
];

const duplicatedGalleryItems = [...galleryItems, ...galleryItems];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-16 md:py-32 overflow-hidden">

            <div className="max-w-[95%] mx-auto px-6 lg:px-8">

                <div className="text-center mb-10 md:mb-16">
                    <p className="text-primary-orange text-sm tracking-[0.2em] uppercase mb-4">
                        Gallery
                    </p>

                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Building Together
                    </h2>

                    <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
                        Snapshots of workshops, talks, and moments shared with the creative community.
                    </p>
                </div>

                <div className="carousel-track flex gap-6">

                    {duplicatedGalleryItems.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="flex-none w-[70vw] md:w-[35vw] lg:w-[25vw]">

                            <div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 flex items-center justify-center">

                                    <div className="text-center p-4">
                                        <p className="font-serif text-lg md:text-xl font-bold">
                                            {item.title}
                                        </p>

                                        <p className="text-xs md:text-sm text-white mt-1">
                                            {item.subtitle}
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

            <style>{`
                .carousel-track{
                    width:max-content;
                    animation:scrollLeft 80s linear infinite;
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

        </section>
    );
};

export default Gallery;