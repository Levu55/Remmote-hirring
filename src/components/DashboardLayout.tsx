import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Zap, LayoutDashboard, Briefcase, Users, FileText, Settings, LogOut, BarChart, Bell, Sun, Moon, Globe } from 'lucide-react';
import { cn } from '../lib/utils';
import { useDarkMode } from '../hooks/useDarkMode';

export function DashboardLayout() {
  const location = useLocation();
  const isAdmin = location.pathname.includes('admin');
  const isEmployer = location.pathname.includes('employer');
  const [showNotifications, setShowNotifications] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const adminLinks = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Jobs', href: '/admin/jobs', icon: Briefcase },
    { name: 'Companies', href: '/admin/companies', icon: Globe },
    { name: 'Candidates', href: '/admin/candidates', icon: Users },
    { name: 'Applications', href: '/admin/applications', icon: FileText },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
  ];

  const employerLinks = [
    { name: 'Dashboard', href: '/employer', icon: LayoutDashboard },
    { name: 'My Jobs', href: '/employer/jobs', icon: Briefcase },
    { name: 'Candidates', href: '/employer/candidates', icon: Users },
    { name: 'Settings', href: '/employer/settings', icon: Settings },
  ];

  const candidateLinks = [
    { name: 'Dashboard', href: '/candidate', icon: LayoutDashboard },
    { name: 'My Applications', href: '/candidate/applications', icon: FileText },
    { name: 'Profile', href: '/candidate/profile', icon: Users },
    { name: 'Settings', href: '/candidate/settings', icon: Settings },
  ];

  const links = isAdmin ? adminLinks : isEmployer ? employerLinks : candidateLinks;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex transition-colors">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 dark:bg-slate-950 text-slate-400 flex flex-col fixed inset-y-0 z-50 hidden md:flex border-r border-slate-800 dark:border-slate-800/50">
        <div className="h-20 flex items-center px-6 border-b border-slate-800 dark:border-slate-800/50">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-black">
              <Zap className="h-6 w-6 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white uppercase leading-tight">Remote<br/>Hirring</span>
          </Link>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium transition-colors",
                location.pathname === link.href 
                  ? "bg-amber-500 text-black" 
                  : "hover:bg-slate-800 dark:hover:bg-slate-900 hover:text-white"
              )}
            >
              <link.icon className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
        </div>

        <div className="p-4 border-t border-slate-800 dark:border-slate-800/50">
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-slate-900 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        <header className="h-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-40 transition-colors">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {isAdmin ? 'Admin Portal' : isEmployer ? 'Employer Portal' : 'Candidate Portal'}
          </h2>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
              >
                <Bell className="h-6 w-6" />
                <span className="absolute top-1.5 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                    <h3 className="font-semibold text-slate-900">Notifications</h3>
                    <button className="text-xs text-amber-600 hover:text-amber-700 font-medium">Mark all read</button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto">
                    {[
                      { title: 'New Job Alert', desc: 'Senior Frontend Engineer at Stripe', time: '10m ago', unread: true },
                      { title: 'Application Update', desc: 'Your application for React Developer was viewed', time: '2h ago', unread: true },
                      { title: 'Interview Scheduled', desc: 'Tomorrow at 10:00 AM PST', time: '1d ago', unread: false },
                    ].map((notif, i) => (
                      <div key={i} className={cn("p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors", notif.unread ? 'bg-blue-50/50' : '')}>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className={cn("text-sm font-semibold text-slate-900", notif.unread ? '' : 'font-medium')}>{notif.title}</h4>
                          <span className="text-xs text-slate-500">{notif.time}</span>
                        </div>
                        <p className="text-sm text-slate-600 line-clamp-2">{notif.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
               <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
