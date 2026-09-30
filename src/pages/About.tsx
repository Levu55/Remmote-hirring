import { Building2, Globe2, Heart, Target, Users2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">About Remote Hirring</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe that talent is equally distributed globally, but opportunity is not. We're on a mission to bridge that gap.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  Founded in 2023, Remote Hirring was born out of a simple observation: companies were struggling to scale their engineering teams locally, while brilliant professionals around the world were looking for impactful work.
                </p>
                <p className="mb-4">
                  We set out to build a platform and a service that removes the friction from global hiring. We handle the sourcing, the vetting, and the logistics, allowing companies to focus on building great products.
                </p>
                <p>
                  Today, we are proud to partner with some of the most innovative startups and enterprise companies worldwide, helping them build high-performing, distributed teams.
                </p>
              </div>
            </div>
            <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The principles that guide how we operate, make decisions, and build relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: 'Empathy First', desc: 'We treat every candidate and client with profound respect and understanding.' },
              { icon: Target, title: 'Excellence in Execution', desc: 'We maintain incredibly high standards for the candidates we present.' },
              { icon: Globe2, title: 'Global Mindset', desc: 'We embrace diversity and believe cross-cultural teams build better products.' }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
