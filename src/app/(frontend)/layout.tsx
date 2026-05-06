import React from 'react'
import './styles.css'

export const metadata = {
  title: 'Ayana Antony | Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030812]/80 backdrop-blur-md border-b border-[#FFD700]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-[#FFD700] font-bold text-xl tracking-widest uppercase">Ayana</span>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-widest text-gray-300 hover:text-[#FFD700] transition-colors duration-300 uppercase"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="border-t border-[#FFD700]/20 py-6 text-center text-gray-500 text-sm tracking-widest">
        © 2025 Ayana Antony. All rights reserved.
      </footer>
    </>
  )
}
