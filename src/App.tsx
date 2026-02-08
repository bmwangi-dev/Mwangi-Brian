function App() {
  return (
    <div className="min-h-screen bg-background text-white font-gilroy">
      {/* Navigation Demo */}
      <nav className="border-b border-border/20 py-4">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/assets/mwangi_logo.png" alt="Mwangi Logo" className="h-12 md:h-16 w-auto" />
          </div>
          <ul className="flex gap-8 text-gray font-medium">
            <li><a href="#home" className="text-white hover:text-primary transition-colors">#home</a></li>
            <li><a href="#works" className="hover:text-primary transition-colors">#works</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors">#skills</a></li>
            <li><a href="#about-me" className="hover:text-primary transition-colors">#about-me</a></li>
            <li><a href="#contacts" className="hover:text-primary transition-colors">#contacts</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section Demo */}
        <section id="home" className="pt-8 pb-12">
          <div className="section-container grid md:grid-cols-2 gap-12">
            <div className="pt-12 md:pt-24">
              <h1 className="text-3.2xl md:text-5xl font-bold leading-tight mb-8">
                Brian is a <span className="text-primary">Software Engineer</span> and <span className="text-primary">Full-Stack developer</span>
              </h1>
              <p className="text-gray mb-10 max-w-md">
                He crafts responsive websites where technologies meet creativity
              </p>
              <button className="border border-primary text-primary px-4 py-2 hover:bg-primary/10 transition-colors">
                <a href="#contacts">Contact me!</a>
              </button>
            </div>
            <div className="relative">
              <div className="w-full aspect-[4/5] md:h-[500px] bg-gray/10 border border-border/20 repeating-bg-lines overflow-hidden">
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

            <div className="grid md:grid-cols-3 gap-6">
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
              <div className="flex-1 flex flex-wrap gap-4 items-start pt-4">
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

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray mb-6 font-bold text-lg">Hello, I’m Brian!</p>
                <p className="text-gray mb-6">
                  I’m a passionate and result-driven Software Engineer based in Nairobi, Kenya. With a strong foundation in full-stack development and a certification from Moringa School, I specialize in crafting efficient, scalable solutions that meet modern web standards.
                </p>
                <p className="text-gray mb-10">
                  My experience ranges from leading technical innovations as CTO at Sigma Africa to driving impactful blockchain projects like "Lido Impact" at Lido Nation. I thrive on problem-solving and am committed to continuous learning, always striving to leverage technology to drive impactful solutions.
                </p>
                <a href="/assets/MwangiBrianCV.pdf" download="Brian_Mwangi_CV.pdf">
                  <button className="border border-primary text-primary px-4 py-2 hover:bg-primary/10 transition-colors cursor-pointer">
                    Download CV
                  </button>
                </a>
              </div>
              <div className="relative">
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

                <div className="w-full aspect-[4/5] md:h-[500px] bg-gray/10 border border-border/20 repeating-bg-lines overflow-hidden">
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
              <div className="flex md:justify-end">
                <div className="border border-border/20 p-4 min-w-[250px]">
                  <h3 className="font-bold mb-4">Lets Connect</h3>
                  <div className="flex flex-col gap-2">
                    <div className="md:text-right">
                      <div className="flex md:justify-end gap-6 pt-2">
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
