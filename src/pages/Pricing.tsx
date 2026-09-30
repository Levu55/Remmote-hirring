import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function Pricing() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-24 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">Simple, transparent pricing</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No hidden fees. No surprise charges. Choose the plan that best fits your hiring needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Basic</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Perfect for small teams starting out.</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">$49</span>
              <span className="text-slate-500 dark:text-slate-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Up to 3 active job postings</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Standard candidate support</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Basic applicant tracking</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Get Started</Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col relative transform md:-translate-y-4">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Most Popular</span>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
              <p className="text-slate-400 text-sm">Everything you need for growing companies.</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-white">$149</span>
              <span className="text-slate-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Unlimited job postings</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Priority candidate support</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Advanced ATS features</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Custom company profile</span>
              </li>
            </ul>
            <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">Upgrade to Pro</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Enterprise</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">For large-scale recruitment operations.</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>Custom API integrations</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>White-label options</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                <Check className="h-5 w-5 text-yellow-400 shrink-0" />
                <span>24/7 phone support</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
