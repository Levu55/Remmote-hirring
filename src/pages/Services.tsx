import { ArrowRight, Search, ShieldCheck, Calendar, Briefcase, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: 'Candidate Sourcing',
      desc: 'We leverage deep networks, proprietary databases, and targeted outreach to find passive talent that perfectly matches your requirements.',
    },
    {
      icon: ShieldCheck,
      title: 'Candidate Screening',
      desc: 'Our rigorous multi-stage screening process includes technical assessments, behavioral interviews, and reference checks.',
    },
    {
      icon: Calendar,
      title: 'Interview Coordination',
      desc: 'We handle all scheduling logistics across time zones, ensuring a smooth and professional experience for both you and the candidate.',
    },
    {
      icon: Briefcase,
      title: 'End-to-End Hiring',
      desc: 'From initial consultation to final offer negotiation, we manage the entire recruitment lifecycle as your dedicated partner.',
    },
    {
      icon: BarChart,
      title: 'Market Mapping',
      desc: 'Get detailed insights into talent availability, compensation benchmarks, and hiring trends in specific global regions.',
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive remote recruitment solutions designed to help you build elite global teams quickly and efficiently.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-yellow-500 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="h-14 w-14 rounded-xl bg-slate-100 group-hover:bg-yellow-500/10 flex items-center justify-center mb-6 text-slate-900 group-hover:text-amber-600 transition-colors">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow mb-8">{service.desc}</p>
                <Link to="/contact" className="text-slate-900 font-medium inline-flex items-center group-hover:text-amber-600 transition-colors mt-auto">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
