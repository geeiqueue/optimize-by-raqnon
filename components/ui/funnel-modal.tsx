"use client";

import { useState } from "react";
import { X, ArrowRight, ShieldCheck, Gift, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FunnelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FunnelModal({ isOpen, onClose }: FunnelModalProps) {
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [context, setContext] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Securely declared deployment string mapping to your Google Apps Script pipeline
  const GOOGLE_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyVx_24AQ-Yl2u9K2yiUOwmNdjsAuEjBCuG3rRcomiUNf8W91z6BODM5KxWZx20lbzC/exec";

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    // Rigidly blocks webpage refreshes to protect the background data transfer
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);

    try {
      // Fires an asynchronous data post directly into your Google Sheets automation channel
      await fetch(GOOGLE_WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessName, context, email })
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Webhook processing failure:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop Dim Blur Panel */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

      {/* Main Glassmorphic Funnel Exchange Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/90 p-6 md:p-8 shadow-2xl backdrop-blur-xl text-white text-left overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
          <X className="h-5 w-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Value Indicator Banner Header */}
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 mb-4">
              <Gift className="h-5 w-5" />
            </div>

            <h3 className="text-xl font-extrabold tracking-tight text-slate-100 leading-snug">
              Let us swap details: Grab your Free Custom Workflow Audit
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Your context is incredibly valuable to me. In exchange for your details, I will personally analyze your processes and map out a tailored automation blueprint to save your team hours of manual entry.
            </p>
            {/* Input Submission Capture Fields */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Your Business Focus / Name
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g., Poker Club Host / Agency Founder"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600 disabled:opacity-50"
                />
              </div>

              {/* General low-friction exploration text area box to welcome startups */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  What are you looking to explore or improve? (Optional)
                </label>
                <textarea
                  rows={3}
                  disabled={isSubmitting}
                  placeholder="e.g., Just exploring how AI/automation can help us, looking to build an idea from scratch, or wanting to bounce some thoughts around..."
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-sky-400 transition-colors resize-none placeholder:text-slate-600 leading-relaxed disabled:opacity-50"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Where should I email your blueprint?
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-200 outline-none focus:border-sky-400 transition-colors placeholder:text-slate-600 disabled:opacity-50"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full mt-2 rounded-xl bg-white py-5 text-sm font-bold text-black hover:bg-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Securing Connection...
                  </>
                ) : (
                  <>
                    Secure My Free Audit
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Security Assurance Guard Stamp */}
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-emerald-400 font-medium">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>Strict Security: I do not spam, lease, or distribute your operational details.</span>
            </div>
          </div>
        ) : (
          /* Success Micro-Interactions State Screen */
          <div className="text-center py-6">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-100">Deal Secured!</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Thank you for sharing your contact details and operational context. I am currently mapping out a personalized automation blueprint to fix your bottlenecks and will reach out to your inbox shortly.
            </p>
            <Button onClick={() => { setIsSubmitted(false); setEmail(""); setBusinessName(""); setContext(""); onClose(); }} className="mt-6 rounded-xl border border-white/10 bg-white/5 px-6 text-xs text-white hover:bg-white hover:text-black">
              Back to Overview
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
