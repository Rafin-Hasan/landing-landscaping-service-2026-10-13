export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Greenridge Landscaping</span>
        <a href="#cta" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
          Get a Quote
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-teal-600 font-semibold mb-4">Landscaping & Design</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">A yard your neighbors will notice</h1>
        <p className="text-lg text-slate-600 mb-10">Design, installation, and maintenance for lawns and gardens that thrive year-round.</p>
        <a href="#cta" className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition">
          Request a Free Estimate
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Custom Design</h3>
          <p className="text-slate-600">A landscape plan built around how you use your yard.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Seasonal Maintenance</h3>
          <p className="text-slate-600">Ongoing care so it stays looking its best.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Licensed & Insured</h3>
          <p className="text-slate-600">Experienced crews you can trust on your property.</p>
        </div>
      </section>

      <section id="cta" className="bg-teal-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to transform your yard?</h2>
        <p className="mb-8 text-teal-100">Free on-site consultation, no obligation.</p>
        <a href="#" className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Request a Free Estimate
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Greenridge Landscaping. All rights reserved.
      </footer>
    </div>
  )
}
