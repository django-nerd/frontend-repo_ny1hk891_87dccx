import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Black Hole Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ns1MlpZQDFS29uiL/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Glow and gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wider text-slate-200/80 backdrop-blur">
          <span className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(96,165,250,0.8)]" />
          Cosmic Experience
        </span>
        <h1 className="bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-5xl font-extrabold leading-tight text-transparent drop-shadow-sm md:text-6xl">
          Into the Event Horizon
        </h1>
        <p className="mt-5 max-w-2xl text-base text-slate-200/80 md:text-lg">
          Drift through a living black hole—an interactive, cosmic microsite with a futuristic, digital vibe.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="group rounded-full bg-blue-500/90 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition hover:bg-blue-500"
          >
            Explore Features
          </a>
          <a
            href="#about"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
