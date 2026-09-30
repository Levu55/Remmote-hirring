import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, Building2, Globe2, Briefcase, Zap, Shield, Star, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import heroIllustration from '../assets/images/hero_illustration_1786725654319.jpg';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-left"
            >
              <div className="inline-flex items-center rounded-full border border-yellow-200 bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-800 mb-8 uppercase tracking-wider italic">
                <span className="flex h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                The premier network for global talent
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-950 mb-8 leading-[1.1]">
                Hire Exceptional <br className="hidden md:block"/>
                <span className="text-yellow-500 underline decoration-slate-200 underline-offset-8">Remote Talent</span> Worldwide
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                We connect forward-thinking businesses with highly skilled professionals across the globe. Fast, reliable, and premium hiring without the overhead.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto group">
                    Hire Talent
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/jobs">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white border border-slate-200">
                    Browse Jobs
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100 shadow-xl relative">
                <img 
                  src={heroIllustration} 
                  alt="Global Remote Hiring Illustration" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to static public path if needed
                    e.currentTarget.src = '/hero_illustration_1786725654319.jpg';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
            {/* Placeholders for logos */}
            <div className="text-2xl font-bold font-serif">Acme Corp</div>
            <div className="text-2xl font-bold tracking-tighter">GlobalTech</div>
            <div className="text-2xl font-black italic">Nexus</div>
            <div className="text-2xl font-medium tracking-widest">AURA</div>
            <div className="text-2xl font-bold">Zenith</div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { label: 'Global Placements', value: '5,000+' },
              { label: 'Time to Hire', value: '14 Days' },
              { label: 'Client Retention', value: '98%' },
              { label: 'Countries Reached', value: '120+' }
            ].map((stat, i) => (
              <div key={i} className="text-center pt-8 md:pt-0">
                <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">End-to-End Hiring Solutions</h2>
            <p className="text-lg text-slate-600">We handle the heavy lifting so you can focus on building great products.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: 'Global Sourcing', desc: 'Access an elite pool of pre-vetted candidates from over 120 countries.' },
              { icon: Shield, title: 'Expert Screening', desc: 'Rigorous technical and behavioral screening by industry experts.' },
              { icon: Zap, title: 'Fast Execution', desc: 'From requirement gathering to first interview in less than 72 hours.' }
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-xl bg-yellow-500/10 flex items-center justify-center mb-6 text-yellow-600">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-yellow-600 font-medium inline-flex items-center hover:text-yellow-700 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Preview */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trending Opportunities</h2>
              <p className="text-lg text-slate-600">Discover the latest high-impact roles from our top partners actively hiring right now.</p>
            </div>
            <Link to="/jobs" className="mt-6 md:mt-0">
              <Button variant="outline" className="group">
                View all jobs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: 'Senior Frontend Engineer', company: 'GlobalTech', salary: '$120k - $150k', type: 'Full-time' },
              { role: 'Product Manager', company: 'Nexus', salary: '$130k - $160k', type: 'Full-time' },
              { role: 'Lead UI/UX Designer', company: 'AURA', salary: '$110k - $140k', type: 'Contract' },
              { role: 'Backend Developer (Node.js)', company: 'CloudSync', salary: '$125k - $145k', type: 'Full-time' },
              { role: 'DevOps Engineer', company: 'ScaleApp', salary: '$140k - $170k', type: 'Full-time' },
              { role: 'Data Scientist', company: 'DataFlow', salary: '$135k - $165k', type: 'Contract' }
            ].map((job, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow group">
                <div className="flex justify-between items-start mb-4">
                  <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-xl font-bold text-slate-400">
                    {job.company[0]}
                  </div>
                  <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-800">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{job.role}</h3>
                <p className="text-slate-500 mb-4">{job.company}</p>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-semibold text-slate-900">{job.salary}</span>
                  <Link to="/jobs" className="text-yellow-600 hover:text-yellow-700 text-sm font-semibold transition-colors flex items-center gap-1 cursor-pointer">
                    Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Timeline Preview */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Seamless process, exceptional results.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our refined methodology ensures you only meet candidates who perfectly align with your technical requirements and company culture.
              </p>
              
              <div className="space-y-8">
                {[
                  { step: '01', title: 'Submit Requirements', desc: 'Tell us exactly what you need in your next hire.' },
                  { step: '02', title: 'We Source & Screen', desc: 'Our team taps into global networks and conducts rigorous vetting.' },
                  { step: '03', title: 'You Interview & Hire', desc: 'Meet only the top 1% of candidates and make your offer.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-8 w-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <Link to="/process">
                  <Button variant="outline">View Detailed Process</Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Success Rate</p>
                    <p className="text-2xl font-bold text-slate-900">98.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-lg text-slate-700 italic mb-8">"Remote Hirring completely transformed our engineering team. We hired 4 senior engineers in under a month, and the quality was exceptional. The fact that we only pay upon success made it a no-brainer."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=64&h=64&q=80" alt="Sarah J" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">David T.</h4>
                  <p className="text-sm text-slate-500">CTO at GlobalTech</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-lg text-slate-700 italic mb-8">"We struggled for months to find a Lead Product Designer locally. Remote Hirring presented three phenomenal candidates within a week. We hired our lead, and couldn't be happier with the process."</p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64&q=80" alt="Sarah J" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sarah J.</h4>
                  <p className="text-sm text-slate-500">VP Product at Nexus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: 'How does the pricing model work?', a: 'We operate on a purely contingency basis. You only pay a one-time fee equal to 40% of the hired employee\'s first month\'s salary, and only after they have successfully joined your company.' },
              { q: 'Where do you source candidates from?', a: 'We have a truly global network. We source talent from over 120 countries, leveraging our proprietary databases, active developer communities, and deep professional networks.' },
              { q: 'How quickly can I expect to see candidates?', a: 'In most cases, we begin presenting vetted, shortlisted candidates within 72 hours of our initial kick-off call.' }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-slate-600 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-yellow-500">
              <Zap className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Stay ahead of the curve</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Get the latest insights on remote hiring trends, salary benchmarks, and global talent updates delivered straight to your inbox.
              </p>
              <form className="max-w-md mx-auto flex gap-3 sm:flex-row flex-col">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 rounded-full border border-slate-300 px-6 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-shadow"
                  required
                />
                <Button type="submit" className="rounded-full px-8 whitespace-nowrap">Subscribe</Button>
              </form>
              <p className="text-sm text-slate-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-slate-900/90 mix-blend-multiply"></div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale your team?</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join hundreds of fast-growing companies that trust Remote Hirring to build their global workforce. Pay only upon successful placement.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Start Hiring Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-slate-700 text-white hover:bg-slate-800 w-full sm:w-auto hover:text-white bg-slate-900">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
