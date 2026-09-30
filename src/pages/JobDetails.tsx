import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, DollarSign, Briefcase, Share2, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function JobDetails() {
  const { id } = useParams();

  // In a real app, fetch job details based on ID
  const job = {
    title: 'Senior Frontend Engineer',
    company: 'Acme Corp',
    location: 'Worldwide',
    type: 'Full-time',
    salary: '$120k - $150k',
    postedAt: '2 days ago',
    desc: 'We are looking for an experienced Frontend Engineer to lead our core product team. You will be working with React, TypeScript, and modern state management tools.',
    responsibilities: [
      'Lead the development of user-facing features using React.js and TypeScript',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across a vast array of web-capable devices and browsers',
      'Collaborate with backend engineers to design and integrate APIs'
    ],
    requirements: [
      'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model',
      'Thorough understanding of React.js and its core principles',
      'Experience with popular React.js workflows (such as Flux or Redux)',
      'Familiarity with newer specifications of ECMAScript (ES6+)',
      'Experience with data structure libraries (e.g., Immutable.js)',
      'Knowledge of isomorphic React is a plus'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Fully remote work environment',
      'Unlimited PTO and flexible working hours',
      'Health, dental, and vision insurance',
      'Home office stipend ($1,000)',
      'Annual company retreat'
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Link to="/jobs" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to jobs
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-400 border border-slate-200 shadow-sm">
                {job.company.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{job.title}</h1>
                <div className="text-xl text-slate-600 font-medium mb-6">{job.company}</div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700">
                    <MapPin className="h-4 w-4 text-slate-500" /> {job.location}
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700">
                    <Briefcase className="h-4 w-4 text-slate-500" /> {job.type}
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700">
                    <DollarSign className="h-4 w-4 text-slate-500" /> {job.salary}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 md:flex-none p-3 h-14" aria-label="Save job">
                  <Bookmark className="h-5 w-5 text-slate-500" />
                </Button>
                <Button variant="outline" className="flex-1 md:flex-none p-3 h-14" aria-label="Share job">
                  <Share2 className="h-5 w-5 text-slate-500" />
                </Button>
              </div>
              <Link to={`/apply/${id}`} className="block cursor-pointer">
                <Button size="lg" variant="secondary" className="w-full font-bold text-slate-950 bg-yellow-400 hover:bg-yellow-500 cursor-pointer shadow-sm">
                  Apply for this Job
                </Button>
              </Link>
              <div className="text-sm text-center text-slate-500 flex items-center justify-center gap-1.5 mt-2">
                <Clock className="h-4 w-4" /> Posted {job.postedAt}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">About the Role</h2>
              <div className="prose prose-lg text-slate-600">
                <p>{job.desc}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Responsibilities</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600 text-lg leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Requirements</h2>
              <ul className="space-y-4">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mt-2.5 flex-shrink-0"></div>
                    <span className="text-slate-600 text-lg leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits & Perks</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {job.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="h-2 w-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <div className="pt-8 border-t border-slate-100">
               <Link to={`/apply/${id}`} className="block cursor-pointer">
                <Button size="lg" variant="secondary" className="w-full text-lg font-bold text-slate-950 bg-yellow-400 hover:bg-yellow-500 cursor-pointer shadow-sm">
                  Apply for this Job
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-6">About {job.company}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Acme Corp is a leading technology company building the future of enterprise software. We are a remote-first team of 200+ passionate builders distributed across 30 countries.
              </p>
              <a href="#" className="text-amber-600 font-medium hover:text-amber-700 transition-colors inline-flex items-center">
                View company profile <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </a>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white">
              <h3 className="font-bold text-white mb-2">Need help?</h3>
              <p className="text-slate-400 mb-6 text-sm">Our team is here to assist you with your application process.</p>
              <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-800">
                Contact Support
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
