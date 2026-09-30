import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, UploadCloud, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../lib/utils';

export default function Apply() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/jobs');
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full p-8 rounded-3xl border border-slate-200 shadow-xl text-center">
          <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Submitted!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for applying. We have received your application and will be in touch shortly.
          </p>
          <p className="text-sm text-slate-400">Redirecting to jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link to={`/jobs/${id}`} className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Job Details
        </Link>
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Apply for Senior Frontend Engineer</h1>
          <p className="text-slate-600 font-medium">Acme Corp • Remote</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm space-y-10">
          
          {/* Personal Info */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Full Name *</label>
                <input required type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Email Address *</label>
                <input required type="email" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Phone Number *</label>
                <input required type="tel" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Location (City, Country) *</label>
                <input required type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="London, UK" />
              </div>
            </div>
          </section>

          {/* Professional Links */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Professional Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">LinkedIn Profile *</label>
                <input required type="url" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="https://linkedin.com/in/..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Portfolio / GitHub</label>
                <input type="url" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="https://github.com/..." />
              </div>
            </div>
          </section>

          {/* Details */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Experience & Expectations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Years of Experience *</label>
                <select required className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none appearance-none cursor-pointer">
                  <option value="">Select...</option>
                  <option value="1-3">1 - 3 years</option>
                  <option value="3-5">3 - 5 years</option>
                  <option value="5-10">5 - 10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Notice Period *</label>
                <input required type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="e.g. 4 weeks" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-900">Expected Salary (USD/Year) *</label>
                <input required type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" placeholder="e.g. $120,000" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-slate-900">Cover Letter / Note to Hiring Manager</label>
                <textarea rows={4} className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none resize-none" placeholder="Tell us why you are a great fit..."></textarea>
              </div>
            </div>
          </section>

          {/* Uploads */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Documents</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Resume / CV (PDF, DOCX) *</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                  <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <UploadCloud className="h-6 w-6 text-slate-500" />
                  </div>
                  <p className="text-slate-600 font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-400">Max file size: 5MB</p>
                </div>
              </div>
            </div>
          </section>

          {/* Declaration */}
          <section className="pt-4 border-t border-slate-100">
            <label className="flex items-start gap-3 cursor-pointer">
              <input required type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-yellow-500 focus:ring-yellow-500" />
              <span className="text-slate-600 text-sm leading-relaxed">
                I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that any misrepresentation or omission may result in rejection of my application or immediate termination if hired.
              </span>
            </label>
          </section>

          <Button 
            type="submit" 
            variant="secondary"
            size="lg" 
            className={cn("w-full text-lg h-14 font-bold text-slate-950 bg-yellow-400 hover:bg-yellow-500 cursor-pointer shadow-sm", isSubmitting && "opacity-80 cursor-wait")}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>

        </form>
      </div>
    </div>
  );
}
