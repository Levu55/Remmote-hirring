import { useState } from 'react';
import { Users, Briefcase, DollarSign, Activity, CheckCircle2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { PostJobModal } from '../components/PostJobModal';

export default function AdminDashboard() {
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const stats = [
    { name: 'Total Revenue', value: '$124,500', change: '+12%', icon: DollarSign },
    { name: 'Active Jobs', value: '342', change: '+5%', icon: Briefcase },
    { name: 'Total Candidates', value: '12,045', change: '+18%', icon: Users },
    { name: 'Placements (MTD)', value: '48', change: '+24%', icon: Activity },
  ];

  const revenueData = [
    { name: 'Jan', revenue: 40000 },
    { name: 'Feb', revenue: 45000 },
    { name: 'Mar', revenue: 55000 },
    { name: 'Apr', revenue: 60000 },
    { name: 'May', revenue: 80000 },
    { name: 'Jun', revenue: 95000 },
    { name: 'Jul', revenue: 124500 },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
          <p className="text-slate-600">Welcome back, Admin.</p>
        </div>
        <Button onClick={() => setIsPostModalOpen(true)}>Post New Job</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => {
          const colors = [
            { bg: 'from-emerald-50', icon: 'bg-emerald-500/10 text-emerald-600', badge: 'bg-emerald-50 text-emerald-700' },
            { bg: 'from-blue-50', icon: 'bg-blue-500/10 text-blue-600', badge: 'bg-blue-50 text-blue-700' },
            { bg: 'from-amber-50', icon: 'bg-yellow-500/10 text-amber-600', badge: 'bg-amber-50 text-amber-700' },
            { bg: 'from-purple-50', icon: 'bg-purple-500/10 text-purple-600', badge: 'bg-purple-50 text-purple-700' },
          ];
          const color = colors[i % colors.length];

          return (
            <div key={stat.name} className="relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden group">
              <div className={cn("absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity", color.bg)} />
              <div className="relative z-10 flex justify-between items-start mb-4">
                <div className={cn("h-14 w-14 rounded-2xl flex items-center justify-center", color.icon)}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <span className={cn("inline-flex items-center px-2 py-1 rounded-md text-xs font-medium", color.badge)}>
                  {stat.change}
                </span>
              </div>
              <div className="relative z-10">
                <h3 className="text-4xl font-extrabold text-slate-900 mb-1 tracking-tight">{stat.value}</h3>
                <p className="text-slate-500 text-sm font-medium">{stat.name}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
           <div className="mb-6">
            <h3 className="font-bold text-slate-900">Revenue Growth</h3>
            <p className="text-sm text-slate-500">Monthly revenue from placements and subscriptions</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(value) => `$${value/1000}k`} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl shadow-sm p-6 text-white border border-slate-800">
           <h3 className="font-bold mb-6 text-lg">Job Board Quality</h3>
           <div className="space-y-6">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Curated by our team</h4>
                    <p className="text-sm text-slate-400">All jobs are manually verified and added by our team to ensure highest quality. No spam, no unnecessary listings.</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Strict Requirements</h4>
                    <p className="text-sm text-slate-400">Companies must meet our strict remote-first criteria before being allowed to list on the platform.</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
          <h3 className="font-bold text-slate-900">Recent Placements</h3>
          <button className="text-sm font-medium text-amber-600 hover:text-amber-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-white text-slate-500 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-semibold">Candidate</th>
                <th className="px-6 py-4 font-semibold">Role</th>
                <th className="px-6 py-4 font-semibold">Company</th>
                <th className="px-6 py-4 font-semibold">Fee Earned</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Alex Johnson', role: 'Senior React Developer', company: 'Acme Corp', fee: '$4,800', status: 'Completed' },
                { name: 'Maria Garcia', role: 'Product Manager', company: 'Nexus', fee: '$5,200', status: 'Pending Invoice' },
                { name: 'James Smith', role: 'Backend Engineer', company: 'GlobalTech', fee: '$6,000', status: 'Completed' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900">{row.name}</td>
                  <td className="px-6 py-4">{row.role}</td>
                  <td className="px-6 py-4">{row.company}</td>
                  <td className="px-6 py-4 font-medium text-green-600">{row.fee}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "inline-flex items-center px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wider",
                      row.status === 'Completed' ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                    )}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <PostJobModal isOpen={isPostModalOpen} onClose={() => setIsPostModalOpen(false)} />
    </div>
  );
}
