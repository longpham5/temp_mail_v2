export const dynamic = "force-dynamic";

import { randomMail } from "@/lib/random";
import Link from "next/link";
import { ArrowRight, Shield, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import CopyEmailButton from "@/components/client/copy-email-button";

export default function Home() {
  const email = `${randomMail()}@antdev.org`;
  const encodedEmail = encodeURIComponent(email);
  
  return (
    <div className="space-y-12 py-6">
      {/* Hero section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Simple, Secure Temporary Email
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Get instant access to a disposable email address. No registration required.
        </p>
      </section>
      
      {/* Email box */}
      <section className="max-w-2xl mx-auto w-full">
        <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-50 to-indigo-100/30 p-5">
            <h2 className="text-lg font-medium text-slate-800">Your Temporary Email</h2>
          </div>
          
          <div className="p-5 space-y-4">
            <div className="relative">
              <input
                type="text"
                readOnly
                value={email}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-800 font-medium"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2">
                <CopyEmailButton email={email} className="h-8" />
              </span>
            </div>
            
            <div className="flex justify-center">
              <Link href={`/${email}`}>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white flex gap-2 items-center">
                  Open Inbox
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="size-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
            <Shield className="size-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">Privacy Protection</h3>
          <p className="text-slate-600">
            Keep your real email private and avoid unwanted marketing communications.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="size-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
            <RefreshCw className="size-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">Instant Creation</h3>
          <p className="text-slate-600">
            No account needed. Generate a new email address in seconds.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="size-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
            <Clock className="size-5 text-indigo-600" />
          </div>
          <h3 className="text-lg font-medium text-slate-800 mb-2">Auto-Cleanup</h3>
          <p className="text-slate-600">
            Emails automatically delete after three days for enhanced security.
          </p>
        </div>
      </section>
      
      {/* CTA */}
      <section className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to try it out?</h2>
        <p className="mb-6 text-indigo-100">
          It's completely free, open-source, and requires no sign-up.
        </p>
        <div className="flex justify-center">
          <Link href={`/${encodedEmail}`}>
            <Button className="bg-white hover:bg-slate-100 text-indigo-600">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
