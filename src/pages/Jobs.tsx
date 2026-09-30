import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, DollarSign, Briefcase, Filter, ShieldCheck, Bookmark, BookmarkCheck, Bell } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ApplyJobModal } from '../components/ApplyJobModal';
import { cn } from '../lib/utils';

import { JOBS } from '../data/jobs';

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('any');
  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<{title: string, company: string} | null>(null);
  const [savedJobs, setSavedJobs] = useState<Set<string>>(new Set());
  const [alertEmail, setAlertEmail] = useState('');
  const [alertSubscribed, setAlertSubscribed] = useState(false);

  const handleApply = (e: React.MouseEvent, jobTitle: string, company: string) => {
    e.preventDefault(); // Prevent Link navigation
    setSelectedJob({ title: jobTitle, company });
    setIsApplyModalOpen(true);
  };

  const toggleSaveJob = (e: React.MouseEvent, jobId: string) => {
    e.preventDefault();
    setSavedJobs(prev => {
      const next = new Set(prev);
      if (next.has(jobId)) {
        next.delete(jobId);
      } else {
        next.add(jobId);
      }
      return next;
    });
  };

  const toggleTypeFilter = (type: string) => {
    setSelectedTypes(prev => {
      const next = new Set(prev);
      if (next.has(type)) next.delete(type);
      else next.add(type);
      return next;
    });
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedRegion('any');
    setSelectedTypes(new Set());
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (alertEmail) {
      setAlertSubscribed(true);
      setAlertEmail('');
      setTimeout(() => setAlertSubscribed(false), 3000);
    }
  };

  const filteredJobs = JOBS.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesRegion = selectedRegion === 'any' || 
      job.location.toLowerCase().includes(selectedRegion.toLowerCase()) || 
      (selectedRegion === 'worldwide' && job.location.toLowerCase() === 'worldwide');

    const matchesType = selectedTypes.size === 0 || selectedTypes.has(job.type);

    return matchesSearch && matchesRegion && matchesType;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header & Search */}
      <div className="bg-slate-900 pt-20 pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Find Your Next Remote Role</h1>
            <p className="text-xl text-slate-400">Join the world's best companies. Work from anywhere.</p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-2xl flex flex-col md:flex-row gap-4 max-w-4xl mx-auto -mb-40 relative z-10">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input 
                type="text" 
                placeholder="Job title, keywords, or company" 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-yellow-500 text-slate-900 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full md:w-64 relative border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-4">
              <MapPin className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <select 
                className="w-full pl-10 md:pl-12 pr-4 py-4 rounded-xl bg-transparent border-none text-slate-900 outline-none appearance-none font-medium cursor-pointer"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
              >
                <option value="any">Any Region</option>
                <option value="worldwide">Worldwide</option>
                <option value="americas">Americas Only</option>
                <option value="europe">Europe Only</option>
                <option value="asia">Asia Only</option>
              </select>
            </div>
            <Button size="lg" className="w-full md:w-auto px-10">Search Jobs</Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-48">
        
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-900">Curated Quality Guarantee</h3>
            <p className="text-amber-700 text-sm mt-1">Every job listed on this platform has been manually vetted and added by our team. We do not allow automated scraping or unnecessary listings. You are looking at only the highest quality remote roles.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </h3>
                <button className="text-sm text-slate-500 hover:text-slate-900 cursor-pointer" onClick={clearFilters}>Clear all</button>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Job Type</h4>
                  <div className="space-y-3">
                    {['Full-time', 'Contract', 'Part-time', 'Freelance'].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500"
                          checked={selectedTypes.has(type)}
                          onChange={() => toggleTypeFilter(type)}
                        />
                        <span className="text-slate-600 text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Experience Level</h4>
                  <div className="space-y-3">
                    {['Junior', 'Mid-Level', 'Senior', 'Lead', 'Executive'].map(level => (
                      <label key={level} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="text-slate-600 text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-4">Salary Range</h4>
                  <div className="space-y-3">
                    {['$50k - $100k', '$100k - $150k', '$150k - $200k', '$200k+'].map(salary => (
                      <label key={salary} className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500" />
                        <span className="text-slate-600 text-sm">{salary}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 mt-6 sticky top-[500px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
                  <Bell className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-slate-900">Get Job Alerts</h3>
              </div>
              <p className="text-sm text-amber-900 mb-4">Don't miss out! Get new remote roles delivered straight to your inbox.</p>
              {alertSubscribed ? (
                <div className="bg-green-100 text-green-700 p-3 rounded-lg text-sm font-medium text-center">
                  Successfully subscribed to alerts!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all text-sm"
                    value={alertEmail}
                    onChange={(e) => setAlertEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full text-sm">Create Job Alert</Button>
                </form>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900">
                {filteredJobs.length} Jobs Found
              </h2>
              <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 outline-none cursor-pointer">
                <option>Most Recent</option>
                <option>Highest Salary</option>
              </select>
            </div>

            {filteredJobs.map((job) => (
              <Link key={job.id} to={`/jobs/${job.id}`} className="block group">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-yellow-500 hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-400 border border-slate-200">
                        {job.company.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{job.title}</h3>
                            {job.featured && (
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">Featured</span>
                            )}
                          </div>
                          <div className="text-slate-500 font-medium">{job.company}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            type="button"
                            onClick={(e) => toggleSaveJob(e, job.id)}
                            aria-label="Save job"
                            className={cn(
                              "hidden md:flex items-center justify-center h-10 w-10 rounded-lg border transition-colors cursor-pointer",
                              savedJobs.has(job.id) ? "bg-amber-50 text-amber-600 border-amber-200" : "bg-white text-slate-400 border-slate-200 hover:text-slate-600 hover:bg-slate-50"
                            )}
                          >
                            {savedJobs.has(job.id) ? <BookmarkCheck className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                          </button>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            className="flex items-center cursor-pointer font-semibold text-slate-950 bg-yellow-400 hover:bg-yellow-500 border border-yellow-500/30 shadow-sm px-4 py-2" 
                            onClick={(e) => handleApply(e, job.title, job.company)}
                          >
                            Apply Now
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 mb-6 line-clamp-2">
                        {job.desc}
                      </p>

                      <div className="flex flex-wrap gap-4 items-center text-sm font-medium text-slate-500">
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <MapPin className="h-4 w-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <Briefcase className="h-4 w-4" /> {job.type}
                        </div>
                        <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                          <DollarSign className="h-4 w-4" /> {job.salary}
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 ml-auto">
                          <Clock className="h-4 w-4" /> {job.postedAt}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            <div className="pt-8 flex justify-center">
              <Button variant="outline" size="lg">Load More Jobs</Button>
            </div>
          </div>

        </div>
      </div>

      <ApplyJobModal 
        isOpen={isApplyModalOpen} 
        onClose={() => setIsApplyModalOpen(false)} 
        jobTitle={selectedJob?.title}
        companyName={selectedJob?.company}
      />
    </div>
  );
}
