import { Link } from 'react-router-dom';
import { Zap, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black">
                <Zap className="h-6 w-6 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white uppercase">Remote<br/>Hirring</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Connecting businesses with highly skilled remote professionals worldwide through a fast, reliable, and premium hiring process.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><Link to="/jobs" className="text-sm hover:text-yellow-400 transition-colors">Browse Jobs</Link></li>
                <li><Link to="/services" className="text-sm hover:text-yellow-400 transition-colors">Our Services</Link></li>
                <li><Link to="/process" className="text-sm hover:text-yellow-400 transition-colors">How It Works</Link></li>
                <li><Link to="/pricing" className="text-sm hover:text-yellow-400 transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm hover:text-yellow-400 transition-colors">About Us</Link></li>
                <li><Link to="/team" className="text-sm hover:text-yellow-400 transition-colors">Our Team</Link></li>
                <li><Link to="/contact" className="text-sm hover:text-yellow-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-sm hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="/" className="text-sm hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Remote Hirring. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm">
            <span>Made for global teams.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
