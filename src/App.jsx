import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Starfield background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1500px_800px_at_50%_10%,rgba(37,99,235,0.15),transparent_60%)]" />

      {/* Navbar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3">
          <div className="size-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
          <span className="text-sm font-semibold tracking-wider text-slate-200">Event Horizon</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          <a href="#features" className="transition hover:text-white">Features</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="/test" className="transition hover:text-white">Status</a>
        </nav>
      </header>

      {/* Sections */}
      <Hero />
      <Features />

      {/* About section */}
      <section id="about" className="relative z-10 bg-black py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-4 text-center text-2xl font-bold tracking-tight text-white">About This Experience</h2>
          <p className="text-center text-slate-300/80">
            Inspired by cosmic phenomena, this microsite blends interactive 3D with a dark, futuristic design. 
            The centerpiece is a circular singularity surrounded by glowing, pixelated particles, evoking a digital cosmos.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
