import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Video } from 'lucide-react';
import { Button } from './ui/Button';

interface InterviewSchedulerProps {
  isOpen: boolean;
  onClose: () => void;
  candidateName?: string;
  role?: string;
}

export function InterviewScheduler({ isOpen, onClose, candidateName = 'Alex Johnson', role = 'Senior Frontend Engineer' }: InterviewSchedulerProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('Technical (Video)');
  const [scheduled, setScheduled] = useState(false);

  if (!isOpen) return null;

  const handleSchedule = (e: React.FormEvent) => {
    e.preventDefault();
    setScheduled(true);
    setTimeout(() => {
      setScheduled(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Schedule Interview</h3>
            <p className="text-sm text-slate-500">with {candidateName} for {role}</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {scheduled ? (
          <div className="p-8 text-center">
            <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="h-8 w-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Interview Scheduled!</h4>
            <p className="text-slate-600">An invitation has been sent to the candidate.</p>
          </div>
        ) : (
          <form onSubmit={handleSchedule} className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Date</label>
              <div className="relative">
                <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="date" 
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Time</label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input 
                  type="time" 
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Interview Type</label>
              <div className="relative">
                <Video className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <select 
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="Screening (Phone)">Screening (Phone)</option>
                  <option value="Technical (Video)">Technical (Video)</option>
                  <option value="Culture Fit (Video)">Culture Fit (Video)</option>
                  <option value="Final (Video)">Final (Video)</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <Button type="button" variant="outline" className="flex-1" onClick={onClose}>Cancel</Button>
              <Button type="submit" className="flex-1">Schedule</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
