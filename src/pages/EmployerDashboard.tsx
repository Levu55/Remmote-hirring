import { Briefcase, FileText, CheckCircle2, MoreVertical, Users, Calendar, Video, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { InterviewScheduler } from '../components/InterviewScheduler';

export default function EmployerDashboard() {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [schedulerCandidate, setSchedulerCandidate] = useState<{name: string, role: string} | null>(null);

  const activeJobs = [
    { id: 1, title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote', candidates: 24, new: 5, status: 'Active' },
    { id: 2, title: 'Product Designer', type: 'Full-time', location: 'Remote', candidates: 12, new: 2, status: 'Active' },
    { id: 3, title: 'Backend Developer', type: 'Contract', location: 'Remote', candidates: 8, new: 0, status: 'Paused' },
  ];

  const recentCandidates = [
    { id: 1, name: 'Alex Johnson', role: 'Senior Frontend Engineer', stage: 'Interview', match: '95%' },
    { id: 2, name: 'Sarah Williams', role: 'Product Designer', stage: 'Screening', match: '88%' },
    { id: 3, name: 'Michael Chen', role: 'Senior Frontend Engineer', stage: 'Applied', match: '72%' },
  ];

  const upcomingInterviews = [
    { id: 1, candidate: 'Alex Johnson', role: 'Senior Frontend Engineer', date: 'Thursday, Aug 2', time: '10:00 AM EST', type: 'Technical (Video)' }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Applied': return 'bg-slate-100 text-slate-700';
      case 'Screening': return 'bg-blue-50 text-blue-700';
      case 'Interview': return 'bg-amber-50 text-amber-700';
      case 'Offer': return 'bg-green-50 text-green-700';
      default: return 'bg-slate-50 text-slate-700';
    }
  };

  const openScheduler = (name?: string, role?: string) => {
    if (name && role) {
      setSchedulerCandidate({ name, role });
    } else {
      setSchedulerCandidate(null);
    }
    setIsSchedulerOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Company Dashboard</h1>
          <p className="text-slate-600">Manage your job postings, candidates, and interviews.</p>
        </div>
        <Button className="w-full sm:w-auto">Post New Job</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm font-medium mb-1">Active Jobs</p>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">3</h3>
          </div>
          <div className="relative z-10 h-14 w-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-amber-600">
            <Briefcase className="h-7 w-7" />
          </div>
        </div>
        <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm font-medium mb-1">Total Candidates</p>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">44</h3>
          </div>
          <div className="relative z-10 h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600">
            <Users className="h-7 w-7" />
          </div>
        </div>
        <div className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-between overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <p className="text-slate-500 text-sm font-medium mb-1">Upcoming Interviews</p>
            <h3 className="text-4xl font-extrabold text-slate-900 tracking-tight">1</h3>
          </div>
          <div className="relative z-10 h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Jobs */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Active Jobs</h3>
              <Link to="/jobs" className="text-sm font-medium text-amber-600 hover:text-amber-700">View All</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {activeJobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900">{job.title}</h4>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                      <span>{job.type}</span>
                      <span className="text-slate-300">•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-slate-900">{job.candidates}</p>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Candidates</p>
                    </div>
                    {job.new > 0 && (
                      <div className="text-center">
                        <p className="text-2xl font-bold text-amber-600">+{job.new}</p>
                        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">New</p>
                      </div>
                    )}
                    <button className="text-slate-400 hover:text-slate-600 p-2">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate Pipeline */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Recent Candidates</h3>
              <Button variant="outline" size="sm">View Pipeline</Button>
            </div>
            <div className="divide-y divide-slate-100">
              {recentCandidates.map((candidate) => (
                <div key={candidate.id} className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                      {candidate.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{candidate.name}</h4>
                      <p className="text-slate-500 text-sm">{candidate.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-end">
                      <span className={cn("px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-1", getStageColor(candidate.stage))}>
                        {candidate.stage}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        Match: <span className="text-slate-900">{candidate.match}</span>
                      </span>
                    </div>
                    <Button size="sm" variant="outline" onClick={() => openScheduler(candidate.name, candidate.role)}>Interview</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          {/* Upcoming Interviews */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Interviews</h3>
              <Button size="sm" className="h-8 text-xs" onClick={() => openScheduler()}>Schedule</Button>
            </div>
            <div className="p-6">
              {upcomingInterviews.length > 0 ? (
                <div className="space-y-4">
                  {upcomingInterviews.map(interview => (
                    <div key={interview.id} className="border border-slate-200 rounded-xl p-4 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                      <h4 className="font-bold text-slate-900 mb-1">{interview.candidate}</h4>
                      <p className="text-sm text-slate-600 mb-4">{interview.role}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          {interview.date} at {interview.time}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          <Video className="h-4 w-4 text-slate-400" />
                          {interview.type}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button className="w-full text-xs">Join</Button>
                        <Button variant="outline" className="w-full text-xs" onClick={() => openScheduler(interview.candidate, interview.role)}>Reschedule</Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500 text-center py-4">No upcoming interviews.</p>
              )}
            </div>
          </div>
          
          {/* Interview Feedback System */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Pending Feedback</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="border border-slate-200 rounded-xl p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">Jane Doe - React Developer</p>
                <p className="text-xs text-slate-500 mb-3">Interviewed yesterday</p>
                
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-3 space-y-2">
                  <p className="text-xs font-semibold text-slate-700">Team Notes</p>
                  <div className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-[10px] font-bold shrink-0">TB</div>
                    <p className="text-xs text-slate-600 bg-white p-2 rounded border border-slate-100 w-full">Very strong system design skills. Needs to brush up on specific React hooks.</p>
                  </div>
                  <div className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-[10px] font-bold shrink-0">SM</div>
                    <p className="text-xs text-slate-600 bg-white p-2 rounded border border-slate-100 w-full">Great culture fit, communicative. I say we proceed.</p>
                  </div>
                </div>

                <textarea 
                  className="w-full border border-slate-200 rounded-lg p-2 text-sm outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 mb-2 resize-none" 
                  rows={2} 
                  placeholder="Add your feedback / collaborative notes..."
                ></textarea>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" size="sm" className="h-7 text-xs bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700">Reject</Button>
                  <Button size="sm" className="h-7 text-xs bg-green-600 hover:bg-green-700">Pass</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-sm overflow-hidden text-white p-6">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 text-sm font-medium transition-colors">
                Browse Talent Pool
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 text-sm font-medium transition-colors">
                Team Settings
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-slate-800 text-sm font-medium transition-colors">
                Billing & Invoices
              </button>
            </div>
          </div>

        </div>
      </div>

      <InterviewScheduler 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
        candidateName={schedulerCandidate?.name}
        role={schedulerCandidate?.role}
      />
    </div>
  );
}
