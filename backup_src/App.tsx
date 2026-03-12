import Hero from './components/Hero';
import RegionalImpact from './components/RegionalImpact';
import Technology from './components/Technology';
import Financials from './components/Financials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-slate-100 font-sans selection:bg-primary-500/30">

      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-dark-900/60 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-emerald-300">
                TerfayaGreen
              </span>
            </div>

            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <a href="#impact" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Impact & Vision</a>
                <a href="#technology" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Technologie</a>
                <a href="#finance" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Espace Investisseur</a>
                <a href="#contact" className="px-5 py-2 bg-primary-600 text-white rounded-full text-sm font-bold hover:bg-primary-500 transition-all shadow-lg shadow-primary-500/20 ml-4">Participer</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <RegionalImpact />
        <Technology />
        <Financials />
        <CTA />
      </main>

      <footer className="bg-dark-950 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} TerfayaGreen Cement Project. Stratégie Industrielle & Développement Durable.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
