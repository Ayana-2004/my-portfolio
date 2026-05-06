'use client'
import { useState } from 'react'

export default function ProjectModal({ project }: any) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-xs px-4 py-2 border border-[#FFD700]/40 text-[#FFD700] rounded-full hover:bg-[#FFD700]/10 transition-all"
      >
        View Details
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-[#030812] border border-[#FFD700]/30 rounded-xl p-6 max-w-lg w-full relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-[#FFD700] mb-4">{project.title}</h2>

            <p className="text-gray-300 mb-4">{project.description}</p>

            {project.techstack && (
              <p className="text-sm text-gray-400 mb-4">
                <span className="text-[#FFD700]">Tech Stack:</span> {project.techstack}
              </p>
            )}

            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="px-4 py-2 border border-[#FFD700]/40 text-[#FFD700] rounded-full"
                >
                  GitHub
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="px-4 py-2 bg-[#FFD700] text-[#030812] rounded-full font-bold"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
