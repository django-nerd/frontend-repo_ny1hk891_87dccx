import React from 'react'
import { Star, Sparkles, Cpu } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Particle Accretion',
    desc: 'A shimmering field of pixelated particles orbits the central singularity with smooth motion and depth.'
  },
  {
    icon: Cpu,
    title: 'Optimized Performance',
    desc: 'Built with modern WebGL and React for fluid, responsive interactions across devices.'
  },
  {
    icon: Star,
    title: 'Cosmic Aesthetic',
    desc: 'Dark, futuristic visuals with luminous gradients, subtle glows, and spatial layering.'
  }
]

function Features() {
  return (
    <section id="features" className="relative z-10 w-full bg-black py-20 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-400/20">
              <f.icon className="size-5" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
            <p className="text-sm text-slate-300/80">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
