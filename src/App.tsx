import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-white font-gilroy">
      {/* Navigation Demo */}
      <nav className="border-b border-border/20 py-4 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/assets/mwangi_logo.png" alt="Mwangi Logo" className="h-10 md:h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-gray font-medium">
            <li><a href="#home" className="text-white hover:text-primary transition-colors">#home</a></li>
            <li><a href="#works" className="hover:text-primary transition-colors">#works</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors">#experience</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors">#skills</a></li>
            <li><a href="#about-me" className="hover:text-primary transition-colors">#about-me</a></li>
            <li><a href="#contacts" className="hover:text-primary transition-colors">#contacts</a></li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex flex-col gap-1.5 z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`h-0.5 w-6 bg-gray transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <div className={`h-0.5 w-6 bg-gray transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-6 bg-gray transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-x-0 top-[73px] bg-[#282C33] z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'} md:hidden border-b border-border/10 shadow-2xl`}>
        <div className="flex flex-col p-8 section-container">
          <ul className="flex flex-col gap-6 text-2xl font-medium mb-12 text-center">
            <li><a href="#home" onClick={() => setIsMenuOpen(false)} className="text-white hover:text-primary transition-colors block"><span className="text-primary">#</span>home</a></li>
            <li><a href="#works" onClick={() => setIsMenuOpen(false)} className="text-gray hover:text-primary transition-colors block"><span className="text-primary">#</span>works</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-gray hover:text-primary transition-colors block"><span className="text-primary">#</span>experience</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray hover:text-primary transition-colors block"><span className="text-primary">#</span>skills</a></li>
            <li><a href="#about-me" onClick={() => setIsMenuOpen(false)} className="text-gray hover:text-primary transition-colors block"><span className="text-primary">#</span>about-me</a></li>
            <li><a href="#contacts" onClick={() => setIsMenuOpen(false)} className="text-gray hover:text-primary transition-colors block"><span className="text-primary">#</span>contacts</a></li>
          </ul>

          {/* Mobile Socials */}
          <div className="flex justify-center gap-8 pt-8 border-t border-border/10">
            {[
              { id: 'Github', href: 'https://github.com/bmwangi-dev' },
              { id: 'Email', href: 'mailto:wambuimwangibrian@gmail.com' },
              { id: 'Linkedin', href: 'https://www.linkedin.com/in/mwangi-brian-68732527b/' }
            ].map((social) => (
              <a key={social.id} href={social.href} target="_blank" rel="noopener noreferrer">
                <div
                  className="mask-icon h-8 w-8 bg-gray hover:bg-primary transition-colors"
                  style={{
                    maskImage: `url(/assets/${social.id}.svg)`,
                    WebkitMaskImage: `url(/assets/${social.id}.svg)`
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section Demo */}
        <section id="home" className="pt-4 md:pt-8 pb-12">
          <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="pt-4 md:pt-24 order-2 md:order-1 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
                Brian is a <span className="text-primary">Software Engineer</span> and <span className="text-primary">Full-Stack developer</span>
              </h1>
              <p className="text-gray mb-8 md:mb-10 max-w-md mx-auto md:mx-0">
                He crafts responsive websites where technologies meet creativity
              </p>
              <button className="border border-primary text-primary px-4 py-2 hover:bg-primary/10 transition-colors">
                <a href="#contacts">Contact me!</a>
              </button>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="w-full aspect-square md:aspect-[4/5] md:h-[500px] bg-gray/10 border border-border/20 repeating-bg-lines overflow-hidden">
                <img
                  src="/assets/mwangi1.jpg"
                  alt="Brian Mwangi"
                  className="w-full h-full object-cover object-[center_35%] grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Animation Demo Dots/Lines */}
              <div className="absolute -left-4 -bottom-4 grid grid-cols-5 gap-4">
                {[...Array(25)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray/30 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quotes Demo */}
        <section className="pb-20">
          <div className="section-container">
            <div className="max-w-2xl mx-auto border border-border/20 p-8 relative">
              <span className="absolute -top-4 left-4 bg-background px-2 text-4xl text-gray">"</span>
              <p className="text-center text-2.2xl text-white">
                With great power comes great electricity bill
              </p>
              <p className="text-right mt-4 text-gray">- Dr. Who</p>
              <span className="absolute -bottom-8 right-4 bg-background px-2 text-4xl text-gray">"</span>
            </div>
          </div>
        </section>

        {/* Projects Demo */}
        <section id="works">
          <div className="section-container">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-4 flex-1">
                <h2 className="text-3.2xl font-bold flex items-center gap-2 whitespace-nowrap">
                  <span className="text-primary">#</span>projects
                </h2>
                <div className="h-[1px] bg-primary w-2/3 md:w-1/3"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Sigma Africa Accelerate",
                  desc: "Educating the next generation of data analysts in Africa",
                  tech: "Laravel, Typescript, Tailwind CSS",
                  logo: "sigma-logo.png",
                  link: "https://www-sigmaafrica-io-9l8v.vercel.app/"
                },
                {
                  name: "Project Catalyst",
                  desc: "All in one cardano ecosystem (Transaction, Staking, Voting, etc)",
                  tech: "Laravel, Typescript, PostgreSQL, GraphQL",
                  logo: "catalyst_logo.png",
                  link: "https://www.catalystexplorer.com/en/jormungandr/transactions"
                },
                {
                  name: "Lido Impact",
                  desc: "Allowing crypto holders to donate to causes they care about",
                  tech: "Livewire, Mesh JS, Alpine JS, Laravel",
                  logo: "lido_logo.png",
                  link: "https://www.lidonation.com/en/impact"
                }
              ].map((project) => (
                <div key={project.name} className="border border-border/20 bg-surface flex flex-col">
                  <div className="h-48 bg-gray/5 repeating-bg-lines flex items-center justify-center border-b border-border/20 p-8 overflow-hidden">
                    <img
                      src={`/assets/${project.logo}`}
                      alt={project.name}
                      className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110"
                    />
                  </div>
                  <div className="p-2 border-b border-border/20 text-gray text-xs">
                    {project.tech}
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                    <p className="text-gray mb-6 text-sm leading-relaxed">{project.desc}</p>
                    <div className="flex gap-4 mt-auto">
                      <button className="border border-primary text-primary px-4 py-1 text-sm hover:bg-primary/10 transition-colors"><a target="_blank" href={project.link}>Live</a></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-[#282C33]">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-16">
              <h2 className="text-3.2xl font-bold flex items-center gap-2 whitespace-nowrap text-white">
                <span className="text-primary">#</span>experience
              </h2>
              <div className="h-[1px] bg-primary flex-1"></div>
            </div>

            <div className="space-y-12">
              {[
                {
                  role: "Software Developer",
                  company: "Lido Nation Foundation",
                  period: "April 2025 – Present",
                  type: "Operation - Hybrid",
                  tech: ["PHP", "Laravel", "React JS", "PostgreSQL", "Docker", "Git/GitLab"],
                  achievements: [
                    {
                      title: "Catalyst Explorer",
                      desc: "Engineered a transaction confirmation module that allows users to verify blockchain transactions in real-time deeping platform transparency."
                    },
                    {
                      title: "1694.io (Governance Tracker)",
                      desc: "Architected data pipelines to transform unstructured Cardano blockchain data into intuitive dashboards for tracking governance proposals."
                    },
                    {
                      title: "Parameters Explorer",
                      desc: "Developed a comprehensive classification system for Cardano’s network parameters making complex blockchain settings searchable."
                    },
                    {
                      title: "AdaPay for WooCommerce",
                      desc: "Extended the functionality of the AdaPay plugin by integrating KES (Kenya Shillings) as a local currency option."
                    },
                    {
                      title: "Lido Impact (Lead Developer)",
                      desc: "Spearheaded the 'Lido Impact' project, designing a seamless donation workflow for cryptocurrency holders."
                    },
                    {
                      title: "Mentorship & Community",
                      desc: "Served as a mentor at the Blockchain Centre Nairobi, guiding volunteer developers through blockchain architecture."
                    }
                  ]
                },
                {
                  role: "Web Developer",
                  company: "Blockchain Centre Nairobi",
                  period: "Jun 2026 – Sept 2026",
                  type: "Operation - Remote",
                  tech: ["WordPress", "React"],
                  achievements: [
                    {
                      title: "Digital Infrastructure",
                      desc: "Collaborated on the development and maintenance of the official organization website."
                    },
                    {
                      title: "Hybrid Architecture",
                      desc: "Implemented a component-based system merging WordPress with a React-based application layer."
                    }
                  ]
                },
                {
                  role: "Software Developer",
                  company: "Ngong Road Children’s Foundation (NRCF)",
                  period: "Jan 2025 – April 2025",
                  type: "Operation - Full time | On Site",
                  tech: ["PHP", "Laravel", "JavaScript", "WordPress", "Salesforce", "Git/GitHub"],
                  achievements: [
                    {
                      title: "Student Portal Enhancement",
                      desc: "Refactored the Student Portal to resolve critical bugs and implemented a paginated image gallery for student sponsors."
                    },
                    {
                      title: "System Optimization",
                      desc: "Conducted routine performance audits and debugging to ensure 99.9% uptime for the organization’s primary web assets."
                    },
                    {
                      title: "Cross-functional Collaboration",
                      desc: "Partnered with the foundation's mission teams to implement technical solutions that streamlined donor-student communication."
                    }
                  ]
                },
                {
                  role: "Software Developer & CTO",
                  company: "Sigma Africa Accelerate",
                  period: "Sept 2024 – Feb 2025",
                  type: "Operation - Remote",
                  tech: ["Laravel", "React JS", "PostgreSQL", "Vercel", "Git/GitHub"],
                  achievements: [
                    {
                      title: "Tech Innovation",
                      desc: "Leading the tech innovation behind Sigma Africa by bootstrapping and managing the website."
                    },
                    {
                      title: "Strategic Research",
                      desc: "Lead the tech research for Sigma’s improvements and advocate for steps to improve the website."
                    },
                    {
                      title: "Feedback Culture",
                      desc: "Collaborate with team members to come up with the best system for sigma by advocating for an efficient feedback loop."
                    }
                  ]
                }
              ].map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/20 md:left-1/2 md:-ml-[1px]"></div>

                  <div className={`flex flex-col md:flex-row gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className="md:w-1/2 border border-border/20 bg-surface/50 backdrop-blur-sm p-6 relative group hover:border-primary/50 transition-all duration-300">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[35px] top-6 w-3 h-3 bg-primary border-4 border-background rounded-full md:left-auto md:top-8 md:right-[-38px] group-hover:scale-125 transition-transform hidden md:block"></div>
                      {idx % 2 === 0 && <div className="absolute -left-[35px] top-6 w-3 h-3 bg-primary border-4 border-background rounded-full md:right-auto md:left-[-38px] group-hover:scale-125 transition-transform hidden md:block"></div>}

                      <div className="flex flex-col mb-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                          <span className="text-xs text-gray border border-border/10 px-2 py-1">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-1">{exp.company}</p>
                        <p className="text-xs text-gray">{exp.type}</p>
                      </div>

                      {exp.tech && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.tech.map((t, i) => (
                            <span key={i} className="text-[10px] text-gray/80 bg-gray/5 px-1.5 py-0.5 border border-border/10">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="space-y-4">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="relative pl-4">
                            <div className="absolute left-0 top-2 w-1.5 h-[1px] bg-primary"></div>
                            <h4 className="text-sm font-bold text-white/90 mb-1">{ach.title}</h4>
                            <p className="text-xs text-gray leading-relaxed">{ach.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Spacer for timeline */}
                    <div className="md:w-1/2 md:p-6 hidden md:block">
                      <div className={`flex flex-col ${idx % 2 === 0 ? 'items-start' : 'items-end'} justify-center h-full`}>
                        <div className="md:w-2/3 h-px bg-primary/20 relative">
                          <div className={`absolute top-0 ${idx % 2 === 0 ? 'left-0' : 'right-0'} w-2 h-2 -mt-[3px] bg-primary rotate-45`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3.2xl font-bold flex items-center gap-2 whitespace-nowrap">
                <span className="text-primary">#</span>skills
              </h2>
              <div className="h-[1px] bg-primary w-1/4"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Decorative Elements - Richly Styled */}
              <div className="relative w-full md:w-[45%] h-[350px] hidden md:block">
                {/* Top Left Dot Grid */}
                <div className="absolute top-0 left-4 grid grid-cols-5 gap-3">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-gray/20 rounded-full" />
                  ))}
                </div>

                {/* Mid Left Patterns */}
                <div className="absolute top-20 left-32 w-24 h-24 border border-border/10"></div>
                <div className="absolute top-24 left-36 w-24 h-24 border border-primary/20"></div>

                {/* Center Pattern */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-4 gap-4 opacity-40">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)]" />
                  ))}
                </div>

                {/* Bottom Decorative Squares */}
                <div className="absolute bottom-4 left-12 w-16 h-16 border border-border/20 rotate-45"></div>
                <div className="absolute bottom-12 left-0 w-20 h-20 border border-border/10"></div>

                {/* Right Side Assets to bridge the gap */}
                <div className="absolute top-10 right-4 grid grid-cols-2 gap-8 opacity-30">
                  <div className="w-12 h-12 border-t border-l border-primary"></div>
                  <div className="w-12 h-12 border-b border-r border-gray"></div>
                </div>

                <div className="absolute bottom-10 right-0 grid grid-cols-5 gap-3">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray/20 rounded-full" />
                  ))}
                </div>

                {/* Repeating BG Lines accent */}
                <div className="absolute top-1/2 right-10 w-32 h-20 repeating-bg-lines opacity-20 border border-white/5"></div>
              </div>

              {/* Skill Categories */}
              <div className="flex-1 flex flex-wrap gap-4 items-start pt-4 justify-center md:justify-start w-full">
                <div className="border border-border/20 w-full sm:w-48">
                  <div className="p-2 border-b border-border/20 font-bold">Languages</div>
                  <div className="p-2 text-gray flex flex-wrap gap-x-4 gap-y-1">
                    <span>TypeScript</span> <span>PHP</span> <span>Python</span> <span>JavaScript</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="border border-border/20 w-full sm:w-48">
                    <div className="p-2 border-b border-border/20 font-bold">Databases</div>
                    <div className="p-2 text-gray flex flex-wrap gap-x-4 gap-y-1">
                      <span>SQLite</span> <span>PostgreSQL</span> <span>MySQL</span>
                    </div>
                  </div>
                  <div className="border border-border/20 w-full sm:w-48">
                    <div className="p-2 border-b border-border/20 font-bold">Other</div>
                    <div className="p-2 text-gray flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      <span>HTML</span> <span>CSS</span> <span>Tailwind</span> <span>REST</span> <span>FastAPI</span> <span>Vercel</span> <span>Netlify</span> <span>Git</span> <span>Notion</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="border border-border/20 w-full sm:w-48">
                    <div className="p-2 border-b border-border/20 font-bold">Tools</div>
                    <div className="p-2 text-gray flex flex-wrap gap-x-3 gap-y-1 text-sm">
                      <span>VSCode</span> <span>Docker</span> <span>Linux</span> <span>Figma</span> <span>Gitlab & Github</span> <span>CI/CD</span>
                    </div>
                  </div>
                  <div className="border border-border/20 w-full sm:w-48">
                    <div className="p-2 border-b border-border/20 font-bold">Frameworks</div>
                    <div className="p-2 text-gray flex flex-wrap gap-x-3 gap-y-1 text-sm leading-tight">
                      <span>React</span> <span>Livewire</span> <span>Laravel</span> <span>Flask</span> <span>SQLAlchemy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Me Section */}
        <section id="about-me">
          <div className="section-container">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3.2xl font-bold flex items-center gap-2 whitespace-nowrap">
                <span className="text-primary">#</span>about-me
              </h2>
              <div className="h-[1px] bg-primary w-1/3"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left order-2 md:order-1">
                <p className="text-gray mb-4 md:mb-6 font-bold text-lg">Hello, I’m Brian!</p>
                <p className="text-gray mb-6">
                  I’m a passionate and result-driven Software Engineer based in Nairobi, Kenya. With a strong foundation in full-stack development and a certification from Moringa School, I specialize in crafting efficient, scalable solutions that meet modern web standards.
                </p>
                <p className="text-gray mb-10">
                  My experience ranges from leading technical innovations as CTO at Sigma Africa to driving impactful blockchain projects like "Lido Impact" at Lido Nation. I thrive on problem-solving and am committed to continuous learning, always striving to leverage technology to drive impactful solutions.
                </p>
                <div className="flex justify-center md:justify-start">
                  <a href="/assets/MWANGI-BRIAN-CV.pdf" download="MWANGI-BRIAN-CV.pdf">
                    <button className="border border-primary text-primary px-4 py-2 hover:bg-primary/10 transition-colors cursor-pointer">
                      Download CV
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative order-1 md:order-2">
                {/* Decorative Dots */}
                <div className="absolute top-12 left-0 grid grid-cols-5 gap-4 z-10">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray/30 rounded-full" />
                  ))}
                </div>
                <div className="absolute bottom-20 right-0 grid grid-cols-5 gap-4 z-10">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray/30 rounded-full" />
                  ))}
                </div>

                <div className="w-full aspect-square md:aspect-[4/5] md:h-[500px] bg-gray/10 border border-border/20 repeating-bg-lines overflow-hidden">
                  <img
                    src="/assets/mwangi2.jpg"
                    alt="Brian Mwangi"
                    className="w-full h-full object-cover object-[center_6%] grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

              </div>
            </div>
          </div>
        </section >

        {/* Contacts Section */}
        < section id="contacts" className="py-20" >
          <div className="section-container">
            <div className="flex items-center gap-4 mb-12">
              <h2 className="text-3.2xl font-bold flex items-center gap-2 whitespace-nowrap">
                <span className="text-primary">#</span>contacts
              </h2>
              <div className="h-[1px] bg-primary w-1/6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-gray max-w-md">
                  I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:justify-end w-full">
                <div className="border border-border/20 p-4 w-full md:w-auto md:min-w-[250px]">
                  <h3 className="font-bold mb-4 text-center md:text-left">Lets Connect</h3>
                  <div className="flex flex-col gap-2">
                    <div className="text-center md:text-right">
                      <div className="flex justify-center md:justify-end gap-6 pt-2">
                        {[
                          { id: 'Github', href: 'https://github.com/bmwangi-dev' },
                          { id: 'Email', href: 'mailto:wambuimwangibrian@gmail.com' },
                          { id: 'Linkedin', href: 'https://www.linkedin.com/in/mwangi-brian-68732527b/' },
                          { id: 'Discord', href: 'https://discord.com/users/chieby_98595' },
                          { id: 'Twitter', href: 'https://x.com/mwangi_chieby' }
                        ].map((social) => (
                          <a
                            key={social.id}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-80 hover:opacity-100 transition-opacity"
                          >
                            <div
                              className="mask-icon h-8 w-8"
                              style={{
                                maskImage: `url(/assets/${social.id}.svg)`,
                                WebkitMaskImage: `url(/assets/${social.id}.svg)`
                              }}
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
      </main >

      {/* Footer Demo */}
      < footer className="border-t border-border/20 py-12" >
        <div className="section-container flex flex-col items-center">
          <img src="/assets/mwangi_logo.png" alt="Mwangi Logo" className="h-12 md:h-16 w-auto mb-6" />
          <p className="text-gray text-sm">© Copyright 2026. Made by Mwangi</p>
        </div>
      </footer >
    </div >
  )
}

export default App
