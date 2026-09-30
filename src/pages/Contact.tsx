import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to scale your global team or looking for your next career move? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Get in touch</h2>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">hello@remotehiring.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                  <p className="text-slate-600">100 Remote Way, Suite 300<br />San Francisco, CA 94107</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">Monday - Friday: 9am - 6pm PST</p>
                </div>
              </div>
            </div>

            <div className="h-64 rounded-3xl bg-slate-100 overflow-hidden relative">
              {/* Google Maps Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                <p className="text-slate-500 font-medium">Google Maps Placeholder</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">First Name</label>
                  <input type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Last Name</label>
                  <input type="text" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Email Address</label>
                <input type="email" className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">I am a...</label>
                <select className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none appearance-none cursor-pointer">
                  <option>Company looking to hire</option>
                  <option>Professional looking for a job</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-900">Message</label>
                <textarea rows={5} className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-yellow-500 focus:ring-yellow-500 border outline-none resize-none"></textarea>
              </div>
              <Button size="lg" className="w-full">Send Message</Button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
