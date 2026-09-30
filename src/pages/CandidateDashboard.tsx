import { FileText, Bookmark, Bell, Clock, Building2, Calendar, Video, CheckCircle2, AlertCircle, TrendingUp, ChevronRight, Briefcase, Award } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { InterviewScheduler } from '../components/InterviewScheduler';

export default function CandidateDashboard() {
  const [jobAlertsEnabled, setJobAlertsEnabled] = useState(true);
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  const salaryTrends = [
    { month: 'Jan', frontend: 120, fullstack: 130 },
    { month: 'Feb', frontend: 125, fullstack: 135 },
    { month: 'Mar', frontend: 122, fullstack: 134 },
    { month: 'Apr', frontend: 130, fullstack: 140 },
    { month: 'May', frontend: 135, fullstack: 145 },
    { month: 'Jun', frontend: 140, fullstack: 148 },
  ];

  const activities = [
    { id: 1, type: 'application', text: 'You applied for Senior Frontend Engineer at Acme Corp', time: '2 hours ago', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
    { id: 2, type: 'interview', text: 'Interview scheduled with Nexus for Full Stack Developer', time: '1 day ago', icon: Calendar, color: 'text-yellow-500', bg: 'bg-amber-50' },
    { id: 3, type: 'offer', text: 'Offer received from GlobalTech', time: '2 days ago', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
    { id: 4, type: 'message', text: 'Message from AURA recruiter', time: '1 week ago', icon: Bell, color: 'text-slate-500', bg: 'bg-slate-100' },
  ];

  const calendarDays = [
    { date: 1, currentMonth: false }, { date: 2, currentMonth: false }, { date: 3, currentMonth: true },
    { date: 4, currentMonth: true, event: true }, { date: 5, currentMonth: true }, { date: 6, currentMonth: true },
    { date: 7, currentMonth: true }, { date: 8, currentMonth: true }, { date: 9, currentMonth: true, event: true },
    { date: 10, currentMonth: true }, { date: 11, currentMonth: true }, { date: 12, currentMonth: true },
    { date: 13, currentMonth: true }, { date: 14, currentMonth: true }
  ];

  const applications = [
    { id: 1, role: 'Senior Frontend Engineer', company: 'Acme Corp', status: 'Interviewing', applied: '2 days ago', nextStep: 'Technical Interview on Thursday' },
    { id: 2, role: 'Full Stack Developer', company: 'Nexus', status: 'In Review', applied: '1 week ago', nextStep: 'Awaiting feedback' },
    { id: 3, role: 'React Developer', company: 'GlobalTech', status: 'Offer Received', applied: '2 weeks ago', nextStep: 'Review offer details' },
    { id: 4, role: 'UI Engineer', company: 'AURA', status: 'Rejected', applied: '1 month ago', nextStep: 'None' },
  ];

  const interviews = [
    { id: 1, role: 'Senior Frontend Engineer', company: 'Acme Corp', date: 'Thursday, Aug 2', time: '10:00 AM EST', type: 'Technical (Video)', link: 'https://meet.google.com/abc-defg-hij', countdown: '2 days, 4 hours' }
  ];

  const handleExportPDF = () => {
    alert('Exporting profile to PDF...');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Interviewing': return 'bg-blue-50 text-blue-700';
      case 'In Review': return 'bg-amber-50 text-amber-700';
      case 'Offer Received': return 'bg-green-50 text-green-700';
      case 'Rejected': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-50 text-slate-700';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Candidate Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">Track your applications, interviews, and job alerts.</p>
        </div>
        <Button variant="outline" onClick={handleExportPDF} className="flex items-center gap-2 dark:bg-slate-800 dark:text-white dark:border-slate-700">
          <FileText className="h-4 w-4" />
          Export Profile to PDF
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between overflow-hidden group transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 dark:from-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Active Applications</p>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">3</h3>
          </div>
          <div className="relative z-10 h-14 w-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-amber-600 dark:text-yellow-400">
            <FileText className="h-7 w-7" />
          </div>
        </div>
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between overflow-hidden group transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 dark:from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Saved Jobs</p>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">12</h3>
          </div>
          <div className="relative z-10 h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Bookmark className="h-7 w-7" />
          </div>
        </div>
        <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between overflow-hidden group transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 dark:from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Upcoming Interviews</p>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">1</h3>
          </div>
          <div className="relative z-10 h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Bell className="h-7 w-7" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Salary Trends Chart */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-yellow-500" /> Salary Trends
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">Average remote salaries in thousands ($k)</p>
                </div>
                <select className="bg-slate-50 border border-slate-200 text-slate-700 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block p-2 outline-none">
                  <option>Past 6 Months</option>
                  <option>Past Year</option>
                </select>
              </div>
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={salaryTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorFrontend" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorFullstack" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(value) => `$${value}k`} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                      formatter={(value: number) => [`$${value}k`, undefined]}
                    />
                    <Area type="monotone" dataKey="frontend" name="Frontend" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorFrontend)" />
                    <Area type="monotone" dataKey="fullstack" name="Full Stack" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorFullstack)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
              <h3 className="font-bold text-slate-900 mb-6">Salary Comparison</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Your Expectation</span>
                    <span className="font-bold text-slate-900">$130k</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Market Average</span>
                    <span className="font-bold text-slate-900">$140k</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">Top 10% Earners</span>
                    <span className="font-bold text-slate-900">$180k+</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-6">
                  <p className="text-xs text-slate-500 text-center">Your expectation is slightly below market average. Consider negotiating!</p>
                </div>
              </div>
            </div>
          </div>

          {/* Applications Tracking */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Application Pipeline</h3>
              <Link to="/jobs" className="text-sm font-medium text-amber-600 hover:text-amber-700">Find More Jobs</Link>
            </div>
            <div className="divide-y divide-slate-100">
              {applications.map((app) => (
                <div key={app.id} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{app.role}</h4>
                      <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
                        <Building2 className="h-4 w-4" />
                        {app.company}
                        <span className="text-slate-300">•</span>
                        <Clock className="h-4 w-4" />
                        Applied {app.applied}
                      </div>
                    </div>
                    <span className={cn("px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider w-fit", getStatusColor(app.status))}>
                      {app.status}
                    </span>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-start gap-3">
                    {app.status === 'Offer Received' ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    ) : app.status === 'Rejected' ? (
                      <AlertCircle className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Next Step</p>
                      <p className="text-sm text-slate-600">{app.nextStep}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Career Path Visualizer */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Career Path Visualizer</h3>
              <p className="text-sm text-slate-500 mt-1">Your projected trajectory based on market data</p>
            </div>
            <div className="p-8">
              <div className="relative flex justify-between items-end pb-8 border-b border-slate-100 mb-6 mt-16 px-4">
                
                {/* Step 1: Current */}
                <div className="flex flex-col items-center relative z-10 w-1/3">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 mb-3 shadow-[0_0_0_8px_white]">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-center text-sm">Senior Frontend</h4>
                  <p className="text-xs text-slate-500">Current Role</p>
                  <p className="text-xs font-semibold text-amber-600 mt-1">$130k</p>
                </div>

                {/* Path 1 */}
                <div className="absolute left-[16.6%] right-[50%] top-6 -translate-y-1/2 border-t-2 border-dashed border-slate-300 -z-10"></div>

                {/* Step 2: Next */}
                <div className="flex flex-col items-center relative z-10 w-1/3 transform -translate-y-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-3 shadow-[0_0_0_8px_white]">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-center text-sm">Lead Engineer</h4>
                  <p className="text-xs text-slate-500">1-2 Years</p>
                  <p className="text-xs font-semibold text-blue-600 mt-1">$160k</p>
                </div>

                {/* Path 2 */}
                <div className="absolute left-[50%] right-[16.6%] top-2 -translate-y-1/2 border-t-2 border-dashed border-slate-300 -z-10"></div>

                {/* Step 3: Target */}
                <div className="flex flex-col items-center relative z-10 w-1/3 transform -translate-y-16">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-3 shadow-[0_0_0_8px_white]">
                    <Award className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-center text-sm">Director of Eng.</h4>
                  <p className="text-xs text-slate-500">3-5 Years</p>
                  <p className="text-xs font-semibold text-emerald-600 mt-1">$200k+</p>
                </div>

              </div>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                <h5 className="font-semibold text-slate-900 mb-3 text-sm">Recommended Actions</h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Gain experience in system architecture and cloud infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Mentor junior engineers to build leadership skills.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-8">
          
          {/* Interview Calendar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Interview Calendar</h3>
              <Button size="sm" variant="outline" className="h-8 text-xs bg-white" onClick={() => setIsSchedulerOpen(true)}>Availability</Button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-slate-900">August 2026</h4>
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-500">&lt;</button>
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-500">&gt;</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-xs font-medium text-slate-500">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center">
                {calendarDays.map((day, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-lg text-sm relative",
                      day.currentMonth ? "text-slate-900 hover:bg-slate-50 cursor-pointer" : "text-slate-300",
                      day.event && "bg-amber-50 font-bold text-amber-700 border border-amber-200"
                    )}
                  >
                    {day.date}
                    {day.event && <div className="absolute bottom-1 w-1 h-1 rounded-full bg-yellow-500"></div>}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold text-slate-900">Upcoming</h4>
                {interviews.map(interview => (
                  <div key={interview.id} className="border border-slate-200 rounded-xl p-3 relative overflow-hidden flex flex-col gap-2">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{interview.role}</h5>
                        <p className="text-xs text-slate-600">{interview.company}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-semibold text-slate-900">{interview.date}</p>
                        <p className="text-xs text-slate-500">{interview.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-2">
                       <Button className="w-full text-xs h-7 bg-yellow-400 text-black hover:bg-yellow-500" onClick={() => window.open(interview.link, '_blank')}>Join</Button>
                       <Button variant="outline" className="w-full text-xs h-7" onClick={() => setIsSchedulerOpen(true)}>Reschedule</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Stream */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Activity Stream</h3>
            </div>
            <div className="p-6">
              <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {activities.map(activity => (
                  <div key={activity.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className={cn("flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2", activity.bg, activity.color)}>
                      <activity.icon className="h-4 w-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-900 text-sm capitalize">{activity.type}</span>
                        <span className="text-xs text-slate-500">{activity.time}</span>
                      </div>
                      <p className="text-sm text-slate-600">{activity.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Assessment */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Skills Assessment</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">React Core</p>
                  <p className="text-sm text-slate-500">Passed - Top 10%</p>
                </div>
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                  92
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">Advanced CSS</p>
                  <p className="text-sm text-slate-500">Not taken yet</p>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs">Take Test</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-slate-900">TypeScript</p>
                  <p className="text-sm text-slate-500">Passed - Top 25%</p>
                </div>
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">
                  85
                </div>
              </div>
            </div>
          </div>

          {/* Job Alerts Settings */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Job Alerts</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-medium text-slate-900">Email Notifications</p>
                  <p className="text-sm text-slate-500">Get alerted for new matching jobs.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={jobAlertsEnabled} onChange={() => setJobAlertsEnabled(!jobAlertsEnabled)} />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-400"></div>
                </label>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Alert Keywords</label>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-700 flex items-center gap-1">Frontend <button className="hover:text-red-500">&times;</button></span>
                    <span className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-700 flex items-center gap-1">React <button className="hover:text-red-500">&times;</button></span>
                    <span className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-700 flex items-center gap-1">Remote <button className="hover:text-red-500">&times;</button></span>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm mt-2">Manage Alerts</Button>
              </div>
            </div>
          </div>
          
          {/* Onboarding Checklist */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 bg-slate-50/50">
              <h3 className="font-bold text-slate-900">Onboarding Checklist</h3>
            </div>
            <div className="p-6 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer sr-only" defaultChecked />
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-yellow-500 peer-checked:border-yellow-500 transition-all"></div>
                  <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm font-medium text-slate-500 line-through">Sign Offer Letter</span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-yellow-500 peer-checked:border-yellow-500 transition-all"></div>
                  <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm font-medium text-slate-900">Submit Tax Forms</span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-yellow-500 peer-checked:border-yellow-500 transition-all"></div>
                  <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm font-medium text-slate-900">Direct Deposit Setup</span>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex items-center justify-center mt-0.5">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-5 h-5 border-2 border-slate-300 rounded-md peer-checked:bg-yellow-500 peer-checked:border-yellow-500 transition-all"></div>
                  <CheckCircle2 className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <span className="text-sm font-medium text-slate-900">Equipment Request</span>
              </label>
            </div>
          </div>
          
        </div>
      </div>
      <InterviewScheduler 
        isOpen={isSchedulerOpen} 
        onClose={() => setIsSchedulerOpen(false)} 
        candidateName="Your Recruiter"
        role="Availability Window"
      />
    </div>
  );
}
