import React, { useState } from 'react';
import { X, UploadCloud, FileText } from 'lucide-react';
import { Button } from './ui/Button';

interface ApplyJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
  companyName?: string;
}

export function ApplyJobModal({ isOpen, onClose, jobTitle = "Senior Engineer", companyName = "Acme Corp" }: ApplyJobModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Submit Application</h3>
            <p className="text-sm text-slate-500">{jobTitle} at {companyName}</p>
          </div>
          <button onClick={onClose} aria-label="Close modal" className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {submitted ? (
          <div className="p-12 text-center">
            <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-10 w-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h4>
            <p className="text-slate-600 mb-6">Your application has been sent to {companyName}. You can track the status in your Candidate Dashboard.</p>
            <Button onClick={onClose} variant="secondary" className="cursor-pointer font-semibold text-slate-950">Go to Dashboard</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Full Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Resume / CV</label>
              <div className="relative border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-amber-400 hover:bg-amber-50/50 transition-colors group">
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  required
                />
                <UploadCloud className="h-8 w-8 text-slate-400 mb-3 group-hover:text-amber-500 transition-colors" />
                <p className="text-sm font-medium text-slate-900 mb-1">
                  {file ? file.name : "Click to upload or drag and drop"}
                </p>
                <p className="text-xs text-slate-500">PDF, DOCX, or TXT (Max 5MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Cover Letter (Optional)</label>
              <textarea 
                rows={3}
                placeholder="Why are you a good fit for this role?"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all resize-none"
              />
            </div>

            <div className="pt-4 flex gap-3 justify-end border-t border-slate-100">
              <Button type="button" variant="outline" className="cursor-pointer" onClick={onClose}>Cancel</Button>
              <Button type="submit" variant="secondary" className="cursor-pointer font-semibold text-slate-950">Submit Application</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
