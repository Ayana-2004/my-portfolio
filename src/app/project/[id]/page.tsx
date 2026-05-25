import { getPayload } from 'payload'
import config from '@/payload.config'
import '@/app/(frontend)/styles.css'

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const project: any = await payload.findByID({
    collection: 'projects',
    id: id,
  })

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030812] text-white">
        Project not found
      </div>
    )
  }

  const getImage = (title: string) => {
    if (title.includes('Blog') || title.includes('BlogSphere'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/q_auto/f_auto/v1779683314/blogsphere_woctqb.png'
    if (title.includes('Prestige'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/prestige_motors_t5xeow.jpg'
    if (title.includes('Todo'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/todo_raza7u.jpg'
    if (title.includes('Restaurant'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/restruent_management_icf1rj.jpg'
    if (title.includes('Finance') || title.includes('Expense'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/Expence_tracker_tghb2y.jpg'
    if (title.includes('Third'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/third_eye_grcziv.jpg'
    if (title.includes('Portfolio'))
      return 'https://res.cloudinary.com/dkkf4schl/image/upload/potfolio_tthmwf.png'
    return 'https://res.cloudinary.com/dkkf4schl/image/upload/soldiers_health_tracking_ooyutr.jpg'
  }

  return (
    <div className="min-h-screen bg-[#030812] text-white pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <a
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-all text-sm tracking-widest uppercase mb-10 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to
          Projects
        </a>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-[#FFD700] mb-8 leading-tight">
          {project.title}
        </h1>

        {/* Image */}
        <div className="w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden border border-[#FFD700]/20 mb-10 bg-black">
          <img
            src={getImage(project.title)}
            alt={project.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Description */}
        <div className="border border-[#FFD700]/20 rounded-2xl p-8 bg-[#0a1628]/50 mb-6">
          <h2 className="text-lg font-bold text-[#FFD700] tracking-widest uppercase mb-4">
            Description
          </h2>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="border border-[#FFD700]/20 rounded-2xl p-8 bg-[#0a1628]/50 mb-6">
            <h2 className="text-lg font-bold text-[#FFD700] tracking-widest uppercase mb-4">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {(Array.isArray(project.techStack)
                ? project.techStack.map((t: any) => t.tech ?? t)
                : project.techStack.split(',')
              ).map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] rounded-full text-sm"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4 flex-wrap mt-8">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-[#FFD700] text-[#FFD700] rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#FFD700]/10 transition-all"
            >
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#FFD700] text-[#030812] rounded-full font-bold tracking-widest uppercase text-sm hover:bg-[#FFC200] transition-all"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
