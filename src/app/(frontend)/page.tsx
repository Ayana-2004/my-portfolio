import ProjectModal from '@/components/ProjectModal'
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs: skills } = await payload.find({ collection: 'skills' })
  const { docs: projects } = await payload.find({ collection: 'projects' })
  const { docs: educations } = await payload.find({ collection: 'education' })

  return (
    <div className="min-h-screen bg-[#030812] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-[#030812]/80 backdrop-blur-md z-50 border-b border-[#FFD700]/10">
        <div className="max-w-6xl mx-auto flex items-center justify-start gap-12 px-6 py-5">
          <img
            src="https://res.cloudinary.com/dkkf4schl/image/upload/q_auto/f_auto/v1777962337/potfolio_logo_final_rfph9p.png"
            className="h-20 md:h-24 w-auto object-contain brightness-110 contrast-110 drop-shadow-[0_0_18px_rgba(255,215,0,0.9)]"
          />

          <ul className="hidden md:flex gap-6 text-sm tracking-widest uppercase ml-auto">
            <li>
              <a href="#about" className="hover:text-[#FFD700]">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#FFD700]">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#FFD700]">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-[#FFD700]">
                Education
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#FFD700]">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* HERO */}
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-36 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[120px] pointer-events-none" />

        <p className="text-[#FFD700] tracking-[6px] uppercase text-sm mb-4">
          Welcome to my portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
          Ayana <span className="text-[#FFD700]">Antony</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 tracking-widest uppercase mb-8">
          Full Stack Developer
        </p>

        <p className="text-gray-400 max-w-xl mb-10 leading-relaxed">
          B.Tech ECE Graduate · Building modern web experiences with React, Next.js and Node.js
        </p>

        <div className="flex flex-col items-center gap-4 mt-4">
          {/* Top Row */}
          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#FFD700] text-[#030812] font-bold rounded-full tracking-widest uppercase text-sm hover:bg-[#FFC200] transition-all duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-[#FFD700] text-[#FFD700] font-bold rounded-full tracking-widest uppercase text-sm hover:bg-[#FFD700]/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Resume Button (Second Row) */}
          <a
            href="https://drive.google.com/file/d/13ITW3OJ0hZjVDnJ2x8vu7tc8zgPT8i2-/view?usp=sharing"
            target="_blank"
            className="px-8 py-3 border border-[#FFD700] text-[#FFD700] font-bold rounded-full tracking-widest uppercase text-sm hover:bg-[#FFD700]/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-[#FFD700]/40" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 tracking-widest uppercase">
          About <span className="text-[#FFD700]">Me</span>
        </h2>
        <div className="w-16 h-px bg-[#FFD700] mx-auto mb-16" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am currently working as a{' '}
              <span className="text-[#FFD700]">Full Stack (MERN) Trainee</span> at{' '}
              <span className="text-[#FFD700]">Faircode Infotech</span>, gaining real-world
              experience building full-stack web applications.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I am a <span className="text-[#FFD700]">B.Tech ECE graduate</span> from Mangalam
              College of Engineering, Kerala (2021-2025), currently learning Full Stack Development.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              I love building modern, responsive web applications and have hands-on experience with
              the <span className="text-[#FFD700]">MERN stack</span>, Next.js, and various
              deployment platforms.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Ayana-2004"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#FFD700]/50 text-[#FFD700] rounded-full text-sm tracking-widest hover:bg-[#FFD700]/10 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayana-antony-a32365310"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-[#FFD700]/50 text-[#FFD700] rounded-full text-sm tracking-widest hover:bg-[#FFD700]/10 transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            <div className="w-56 h-56 rounded-full border-2 border-[#FFD700]/50 overflow-hidden">
              <img
                src="https://res.cloudinary.com/dkkf4schl/image/upload/my_pic_btznqa.jpg"
                alt="Ayana Antony"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { label: 'Projects', value: '6+' },
                { label: 'Skills', value: '16+' },
                { label: 'Graduate', value: '2025' },
                { label: 'Location', value: 'Kerala' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#FFD700]/20 rounded-xl p-4 text-center bg-[#0a1628]/50 hover:border-[#FFD700]/50 transition-all"
                >
                  <p className="text-2xl font-bold text-[#FFD700]">{stat.value}</p>
                  <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 bg-[#0a1628]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 tracking-widest uppercase">
            My <span className="text-[#FFD700]">Skills</span>
          </h2>
          <div className="w-16 h-px bg-[#FFD700] mx-auto mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill: any) => (
              <div
                key={skill.id}
                className="border border-[#FFD700]/20 rounded-xl p-4 text-center bg-[#030812]/50 hover:border-[#FFD700]/60 hover:bg-[#0a1628]/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <p className="text-white font-semibold group-hover:text-[#FFD700] transition-colors">
                  {skill.name}
                </p>
                {skill.category && (
                  <p className="text-gray-500 text-xs tracking-widest uppercase mt-1">
                    {skill.category}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 tracking-widest uppercase">
          My <span className="text-[#FFD700]">Projects</span>
        </h2>
        <div className="w-16 h-px bg-[#FFD700] mx-auto mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project: any) => (
            <div
              key={project.id}
              className="border border-[#FFD700]/20 rounded-xl p-6 bg-[#0a1628]/30 hover:border-[#FFD700]/60 transition-all duration-300 group flex flex-col items-center text-center"
            >
              {/* IMAGE */}
              <div className="w-full h-40 rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center">
                <img
                  src={
                    project.title.toLowerCase().includes('portfolio')
                      ? 'https://res.cloudinary.com/dkkf4schl/image/upload/v1777972587/potfolio_tthmwf.png'
                      : project.title.includes('Prestige')
                        ? 'https://res.cloudinary.com/dkkf4schl/image/upload/prestige_motors_t5xeow.jpg'
                        : project.title.includes('Todo')
                          ? 'https://res.cloudinary.com/dkkf4schl/image/upload/todo_raza7u.jpg'
                          : project.title.includes('Restaurant')
                            ? 'https://res.cloudinary.com/dkkf4schl/image/upload/restruent_management_icf1rj.jpg'
                            : project.title.includes('Finance') || project.title.includes('Expense')
                              ? 'https://res.cloudinary.com/dkkf4schl/image/upload/Expence_tracker_tghb2y.jpg'
                              : project.title.includes('Third')
                                ? 'https://res.cloudinary.com/dkkf4schl/image/upload/third_eye_grcziv.jpg'
                                : 'https://res.cloudinary.com/dkkf4schl/image/upload/soldiers_health_tracking_ooyutr.jpg'
                  }
                  alt={project.title}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#FFD700] transition-colors mb-4">
                {project.title}
              </h3>

              {/* VIEW DETAILS BUTTON */}
              <a
                href={`/project/${project.id}`}
                className="text-xs px-6 py-2 border border-[#FFD700]/40 text-[#FFD700] rounded-full hover:bg-[#FFD700]/10 transition-all"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-24 px-6 bg-[#0a1628]/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2 tracking-widest uppercase">
            My <span className="text-[#FFD700]">Education</span>
          </h2>
          <div className="w-16 h-px bg-[#FFD700] mx-auto mb-16" />
          <div className="flex flex-col gap-6">
            {educations.map((edu: any) => (
              <div
                key={edu.id}
                className="border border-[#FFD700]/20 rounded-xl p-8 bg-[#030812]/50 hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col md:flex-row md:items-center gap-6"
              >
                <div className="w-20 h-20 rounded-xl border border-[#FFD700]/20 overflow-hidden flex-shrink-0 bg-white/10 flex items-center justify-center">
                  <img
                    src={
                      edu.institution.includes('Mangalam')
                        ? 'https://res.cloudinary.com/dkkf4schl/image/upload/mangalam_rhxwez.jpg'
                        : edu.institution.includes('Jayasree')
                          ? 'https://res.cloudinary.com/dkkf4schl/image/upload/jayasree_zbvyup.jpg'
                          : 'https://res.cloudinary.com/dkkf4schl/image/upload/kuppadi_fhr7oa.jpg'
                    }
                    alt={edu.institution}
                    className="object-contain w-full h-full p-2"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-[#FFD700]">{edu.degree}</h3>
                  <p className="text-white mt-1">{edu.institution}</p>
                  <p className="text-gray-400 text-sm mt-1">{edu.duration}</p>
                  {edu.description && (
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">{edu.description}</p>
                  )}
                </div>
                {edu.grade && (
                  <div className="border border-[#FFD700]/30 rounded-xl px-6 py-4 text-center min-w-[100px] flex-shrink-0">
                    <p className="text-2xl font-bold text-[#FFD700]">{edu.grade}</p>
                    <p className="text-gray-500 text-xs tracking-widest uppercase">Grade</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-center mb-2 tracking-widest uppercase">
          Get In <span className="text-[#FFD700]">Touch</span>
        </h2>
        <div className="w-16 h-px bg-[#FFD700] mx-auto mb-16" />
        <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
          I am currently open to new opportunities. Whether you have a question or just want to say
          hi, feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ayana2004antony@gmail.com"
            className="px-8 py-3 bg-[#FFD700] text-[#030812] font-bold rounded-full tracking-widest uppercase text-sm hover:bg-[#FFC200] transition-all duration-300"
          >
            Send Email
          </a>
          <a
            href="https://github.com/Ayana-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#FFD700] text-[#FFD700] font-bold rounded-full tracking-widest uppercase text-sm hover:bg-[#FFD700]/10 transition-all duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ayana-antony-a32365310"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-[#FFD700] text-[#FFD700] font-bold rounded-full tracking-widest uppercase text-sm hover:bg-[#FFD700]/10 transition-all duration-300"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
