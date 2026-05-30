"use client";

import React, { useState } from "react";
import { MessageSquare, Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

// Inline brand icon SVGs to maintain consistency with Lucide v1.x design guidelines
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  channelName: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  channelName?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    channelName: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    if (!formData.channelName.trim()) tempErrors.channelName = "Channel name is required.";
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate API submit
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", channelName: "", message: "" });
      }, 1200);
    }
  };

  // Dynamic WhatsApp Deep Link Generator
  const getWhatsAppLink = () => {
    const name = formData.name.trim() || "[Your Name]";
    const channel = formData.channelName.trim() || "[Your Channel]";
    const text = formData.message.trim() || "[Thumbnail details]";
    const email = formData.email.trim() || "[Your Email]";
    
    const message = `Hi Naga Sai! My name is ${name}. I run the YouTube channel "${channel}". I saw your portfolio and would love to hire you for thumbnail designs!\n\nEmail: ${email}\n\nProject details: ${text}`;
    
    return `https://wa.me/15552874769?text=${encodeURIComponent(message)}`;
  };

  // Dynamic Email Mailto Link Generator
  const getEmailLink = () => {
    const name = formData.name.trim() || "[Your Name]";
    const channel = formData.channelName.trim() || "[Your Channel]";
    const text = formData.message.trim() || "[Thumbnail details]";
    
    const subject = `Thumbnail Inquiry — ${channel}`;
    const body = `Hi Naga Sai,\n\nMy name is ${name}. I run the YouTube channel "${channel}".\n\nI saw your thumbnail portfolio and would love to work together.\n\nProject details:\n${text}`;
    
    return `mailto:nagasai@nagasaidesigns.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto items-start">
      {/* Left Column: Direct CTAs & Channels */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
            Get in touch
          </span>
          <h3 className="mt-4 text-3xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Viral
          </h3>
          <p className="mt-3 text-base text-brand-subtext leading-relaxed">
            Need high-CTR thumbnails fast? Skip the forms entirely and chat with me directly on WhatsApp, send an email, or complete the quick inquiry form.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          {/* WhatsApp CTA */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 px-6 py-4 text-base font-bold text-slate-950 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <MessageCircle className="h-6 w-6 fill-slate-950" />
            Chat on WhatsApp Instantly
          </a>

          {/* Email CTA */}
          <a
            href={getEmailLink()}
            className="flex items-center justify-center gap-3 w-full rounded-xl bg-brand-card hover:bg-slate-800/80 px-6 py-4 text-base font-bold text-white border border-slate-800 hover:border-slate-700 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
          >
            <Mail className="h-5 w-5 text-brand-primary" />
            Send Direct Email Inquiry
          </a>
        </div>

        {/* Designer Contact Details */}
        <div className="border-t border-slate-800 pt-6 space-y-4 text-sm text-brand-subtext">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-card border border-slate-800 text-brand-primary">
              <Mail className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">Direct Email</p>
              <p className="mt-0.5 font-medium">nagasai@nagasaidesigns.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-card border border-slate-800 text-brand-primary">
              <MessageSquare className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">Average Response Time</p>
              <p className="mt-0.5 font-medium text-emerald-400">Within 2 Hours</p>
            </div>
          </div>
        </div>

        {/* Social Badges */}
        <div className="space-y-3">
          <p className="text-xs font-bold text-white uppercase tracking-wider">Follow My Work</p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-card border border-slate-800 text-brand-subtext hover:text-white hover:border-slate-700 transition-all hover:scale-105"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-card border border-slate-800 text-brand-subtext hover:text-white hover:border-slate-700 transition-all hover:scale-105"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-card border border-slate-800 text-brand-subtext hover:text-white hover:border-slate-700 transition-all hover:scale-105"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Inquiry Form */}
      <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-brand-card p-6 md:p-8 shadow-xl shadow-slate-950/20">
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle className="h-10 w-10" />
            </div>
            <h4 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h4>
            <p className="text-brand-subtext max-w-md mx-auto">
              Thank you for reaching out! I have received your thumbnail design details and will review your YouTube channel. I will get back to you within 2 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 inline-flex rounded-lg border border-slate-850 px-5 py-2.5 text-sm font-semibold text-brand-primary hover:bg-slate-800 transition-all cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-3">
              Design Inquiry Form
            </h4>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. Jimmy Donaldson"
                className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all ${
                  errors.name ? "border-red-500/60" : "border-slate-800"
                }`}
              />
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.name}
                </p>
              )}
            </div>

            {/* Email & Channel Name Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. contact@mrbeast.com"
                  className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all ${
                    errors.email ? "border-red-500/60" : "border-slate-800"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Channel Name */}
              <div>
                <label htmlFor="channelName" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                  YouTube Channel Name
                </label>
                <input
                  type="text"
                  id="channelName"
                  name="channelName"
                  value={formData.channelName}
                  onChange={handleInputChange}
                  placeholder="e.g. MrBeast Gaming"
                  className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all ${
                    errors.channelName ? "border-red-500/60" : "border-slate-800"
                  }`}
                />
                {errors.channelName && (
                  <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" /> {errors.channelName}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-350 uppercase tracking-wider mb-2">
                Project Details & Video Concept
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                placeholder="Tell me about your next video idea, niche, typography preference, or color palette..."
                className={`w-full rounded-lg border bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all resize-none ${
                  errors.message ? "border-red-500/60" : "border-slate-800"
                }`}
              />
              {errors.message && (
                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary hover:bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-primary/20 hover:shadow-brand-primary/30 transition-all cursor-pointer ${
                loading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="h-4.5 w-4.5" />
                  Submit Design Inquiry
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
