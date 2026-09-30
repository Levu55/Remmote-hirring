import { motion } from 'motion/react';
import { FileText, Search, UserCheck, Users, MessageSquare, Briefcase } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: FileText,
      title: 'Company Submits Requirements',
      desc: 'You provide detailed information about the role, required skills, company culture, and compensation.',
    },
    {
      icon: Search,
      title: 'Sourcing & Outreach',
      desc: 'Our recruitment team leverages global networks, specialized communities, and direct sourcing to find top talent.',
    },
    {
      icon: UserCheck,
      title: 'Screening & Initial Interview',
      desc: 'We conduct rigorous technical and behavioral evaluations to ensure high quality and cultural fit.',
    },
    {
      icon: Users,
      title: 'Shortlist Presentation',
      desc: 'You receive a curated list of the top 3-5 candidates, complete with profiles, assessment notes, and compensation expectations.',
    },
    {
      icon: MessageSquare,
      title: 'Client Interviews',
      desc: 'You conduct final round interviews with the shortlisted candidates. We coordinate all scheduling.',
    },
    {
      icon: Briefcase,
      title: 'Successful Hire',
      desc: 'You select the perfect candidate and make an offer. We assist with negotiations to ensure a smooth closing.',
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">How We Hire</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A refined, proven six-step methodology that guarantees you only meet the top 1% of global talent.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
            
            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0 h-24 w-24 rounded-full bg-white border-4 border-yellow-500 flex items-center justify-center text-amber-600 shadow-xl hidden md:flex">
                    <step.icon className="h-10 w-10" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-grow bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
                    {/* Mobile Icon */}
                    <div className="md:hidden h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-amber-600 mb-6">
                      <step.icon className="h-6 w-6" />
                    </div>
                    
                    <div className="text-sm font-bold text-yellow-500 tracking-widest uppercase mb-2">Step 0{i + 1}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
