export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              AN Digital Studio
            </span>
          </div>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Get a Free Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-950/60 px-3 py-1 border border-blue-800 rounded-full">
          Web Design & Lead Generation for UK Contractors
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-6 mb-6 leading-tight">
          High-Converting Websites Built for <span className="text-blue-400">UK Builders & Trades</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          We help construction companies, renovation specialists, and local builders capture more quotes online with lightning-fast, mobile-first websites.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#demo"
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-blue-500/20"
          >
            View Live Contractor Template
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">⚡ Ultra Fast Load Speed</h3>
          <p className="text-slate-400 text-sm">
            Built with modern Next.js architecture to load instantly on mobile, ensuring potential customers don't leave before asking for a quote.
          </p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">📱 WhatsApp Lead Integration</h3>
          <p className="text-slate-400 text-sm">
            Quote requests route directly to your WhatsApp business account so you can respond to local clients instantly.
          </p>
        </div>
        <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-2">🔨 Project Showcase</h3>
          <p className="text-slate-400 text-sm">
            Dedicated photo galleries designed specifically to display recent builds, extensions, and renovation work cleanly.
          </p>
        </div>
      </section>

      {/* Live Demo Preview Box */}
      <section id="demo" className="max-w-5xl mx-auto px-6 py-16">
        <div className="border border-slate-800 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-slate-500 ml-4 font-mono">
              example-builder-demo.an-digital.app
            </span>
          </div>
          <div className="p-8 text-center bg-gradient-to-b from-slate-900 to-slate-950">
            <h2 className="text-2xl font-bold text-slate-200">Apex Construction & Renovations</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
              Premium Home Extensions, Loft Conversions & Kitchen Refurbishments in Greater London.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded text-xs">5.0 ★ Google Rating</span>
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded text-xs">Fully Insured</span>
              <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded text-xs">Free Estimates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} AN Digital Studio. All rights reserved.
      </footer>
    </div>
  );
}