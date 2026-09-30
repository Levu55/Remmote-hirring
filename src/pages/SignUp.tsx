import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Globe, Building2, User } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function SignUp() {
  const [accountType, setAccountType] = useState<'employer' | 'candidate'>('employer');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500 text-black">
              <Globe className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Remote Hirring</span>
          </Link>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Create an account</h2>
          <p className="text-slate-600 mb-8">Choose your account type to get started.</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button
              type="button"
              onClick={() => setAccountType('employer')}
              className={cn(
                "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                accountType === 'employer' 
                  ? "border-yellow-500 bg-amber-50/50 text-amber-700" 
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              )}
            >
              <Building2 className="h-6 w-6 mb-2" />
              <span className="font-semibold text-sm">I'm hiring</span>
            </button>
            <button
              type="button"
              onClick={() => setAccountType('candidate')}
              className={cn(
                "flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all",
                accountType === 'candidate' 
                  ? "border-yellow-500 bg-amber-50/50 text-amber-700" 
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              )}
            >
              <User className="h-6 w-6 mb-2" />
              <span className="font-semibold text-sm">I'm a candidate</span>
            </button>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">
                {accountType === 'employer' ? 'Company Name' : 'Full Name'}
              </label>
              <input required type="text" className="w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Work Email</label>
              <input required type="email" className="w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Password</label>
              <input required type="password" className="w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
            </div>

            <Button type="submit" size="lg" className="w-full">Create Account</Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Already have an account? <Link to="/login" className="font-medium text-amber-600 hover:text-amber-700">Log in</Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block relative w-0 flex-1 bg-slate-900">
        <div className="absolute inset-0 h-full w-full object-cover bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80')] opacity-20 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Build your dream team.</h2>
            <p className="text-lg text-slate-400">Access the top 1% of global talent with our comprehensive remote hirring platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
