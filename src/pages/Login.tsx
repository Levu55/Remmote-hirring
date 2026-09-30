import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Globe } from 'lucide-react';

export default function Login() {
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

          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Welcome back</h2>
          <p className="text-slate-600 mb-8">Log in to your account to continue.</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-900">Email Address</label>
              <input required type="email" className="w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-900">Password</label>
                <Link to="/forgot-password" className="text-sm font-medium text-amber-600 hover:text-amber-700">Forgot password?</Link>
              </div>
              <input required type="password" className="w-full rounded-xl border-slate-200 bg-white px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
            </div>

            <Button type="submit" size="lg" className="w-full">Sign In</Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Don't have an account? <Link to="/signup" className="font-medium text-amber-600 hover:text-amber-700">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block relative w-0 flex-1 bg-slate-900">
        <div className="absolute inset-0 h-full w-full object-cover bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] opacity-20 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">The new standard in global hiring.</h2>
            <p className="text-lg text-slate-400">Join thousands of companies and professionals building the future of work together.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
