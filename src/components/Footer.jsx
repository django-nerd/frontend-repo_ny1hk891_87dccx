import React from 'react'

function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black py-12 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Event Horizon • All rights reserved</p>
        <div className="text-xs text-slate-500">
          Built with a cosmic vibe
        </div>
      </div>
    </footer>
  )
}

export default Footer
