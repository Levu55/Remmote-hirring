import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Former VP of Talent at hyper-growth tech companies. Passionate about building global, distributed teams.',
    },
    {
      name: 'David Chen',
      role: 'Head of Recruitment',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80',
      bio: '10+ years of technical recruitment experience. Specializes in finding top-tier engineering talent globally.',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Client Success Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Ensures our partners get exactly what they need. Expert in onboarding and remote team integration.',
    },
    {
      name: 'Marcus Thorne',
      role: 'Lead Sourcing Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80',
      bio: 'Master of identifying passive talent. Marcus finds the candidates who aren\'t actively looking.',
    }
  ];

  return (
    <div className="bg-white pb-24">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Meet Our Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A dedicated group of recruitment experts, talent sourcers, and industry veterans committed to your success.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5] bg-slate-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:text-amber-600 transition-colors shadow-lg">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-slate-900 hover:text-amber-600 transition-colors shadow-lg">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
              <p className="text-amber-600 font-medium mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
