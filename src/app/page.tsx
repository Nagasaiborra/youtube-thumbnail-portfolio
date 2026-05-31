"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  TrendingUp,
  Search,
  Sparkles,
  MessageCircle,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Video,
  Eye,
  Flame,
  Award,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/components/AnimatedCounter";
import PortfolioGrid from "@/components/PortfolioGrid";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";

// FAQ Questions List
const FAQ_ITEMS = [
  {
    question: "How fast is delivery?",
    answer: "Our standard delivery time is within 24 hours for individual thumbnails. For bulk orders (like the Creator Pack), we establish a consistent calendar and deliver drafts within 48 to 72 hours of your upload schedule.",
  },
  {
    question: "How many revisions are included?",
    answer: "The Starter package includes 2 complete rounds of revisions. The Creator Pack and Custom packages include unlimited revisions because we believe in building a long-term partnership and ensuring your complete satisfaction.",
  },
  {
    question: "What file formats are delivered?",
    answer: "You receive high-resolution, pixel-perfect 1280x720 PNG and JPG files fully optimized under the 2MB YouTube limit for crisp rendering. Photoshop Source PSD files are available upon request in Custom packages.",
  },
  {
    question: "Do you offer monthly packages?",
    answer: "Yes! The Creator Pack is designed specifically as a monthly retainer. It guarantees you up to 10 thumbnails per month with priority scheduling, giving your channel a highly consistent visual brand identity.",
  },
  {
    question: "Can you redesign old underperforming thumbnails?",
    answer: "Absolutely. Swapping out low-CTR thumbnails on existing videos is one of the fastest and most cost-effective ways to get search and recommendation algorithms to revive and push your older videos.",
  },
];

// Testimonials List
const TESTIMONIALS = [
  {
    quote: "Naga Sai is an absolute game-changer. Our Minecraft gaming channel was stuck at a 4.2% CTR. After redesigning our core series thumbnails with Naga Sai, our CTR jumped to 9.5% in just a week! Our views have skyrocketed.",
    author: "Jimmy G.",
    channel: "JimmyCraft Gaming (500K+ Subs)",
    stars: 5,
    niche: "Gaming",
  },
  {
    quote: "Unbelievably fast turnaround and extremely professional communication! The cybernetic cyan neon styling Naga Sai crafted for our AI tech review series made our search traffic spike. He understands visual psychology.",
    author: "Sarah K.",
    channel: "Sarah Reviews Tech (120K Subs)",
    stars: 5,
    niche: "Tech & Gadgets",
  },
  {
    quote: "Our finance channel requires a balance of trust and excitement. Naga Sai hit the nail on the head. Swapping flat stock charts for sleek metallic 3D charts and bold gold typography drove +250% click-through growth.",
    author: "Marcus T.",
    channel: "Wealth Blueprint (250K Subs)",
    stars: 5,
    niche: "Finance & Investing",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-play testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Single Page Layout */}
      <main className="flex-grow">
        
        {/* =======================================
            SECTION 1 — HERO SECTION
            ======================================= */}
        <section id="home" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 lg:pb-40 border-b border-slate-900">
          {/* Subtle Ambient Background Glows */}
          <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              
              {/* Hero Left: Text Content */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                {/* Micro badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                  <Star className="h-3.5 w-3.5 fill-brand-primary text-brand-primary animate-pulse" />
                  Premium YouTube Thumbnail Designer
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] sm:leading-[1.15]">
                  High-Converting <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-400 to-cyan-400">
                    YouTube Thumbnails
                  </span> <br />
                  That Get More Clicks
                </h1>

                <p className="mx-auto lg:mx-0 max-w-xl text-base sm:text-lg md:text-xl text-brand-subtext leading-relaxed">
                  I design attention-grabbing thumbnails that help creators stand out, improve CTR, and grow faster. Turn casual scrollers into loyal viewers.
                </p>

                {/* Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#portfolio"
                    onClick={(e) => handleNavClick(e, "#portfolio")}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-primary hover:bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-brand-card hover:bg-slate-800 border border-slate-800 hover:border-slate-700 px-8 py-4 text-base font-bold text-white hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
                  >
                    Contact Me
                  </a>
                </div>

                {/* Designer Profile Micro-Snippet */}
                <div className="flex items-center justify-center lg:justify-start gap-3 border-t border-slate-800/80 pt-6 mt-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/designer_profile.jpg"
                    alt="Naga Sai"
                    className="h-12 w-12 rounded-full border-2 border-brand-primary object-cover"
                  />
                  <div className="text-left">
                    <p className="text-sm font-extrabold text-white">Naga Sai</p>
                    <p className="text-xs text-brand-subtext">Lead CTR Architect & Thumbnail Designer</p>
                  </div>
                </div>
              </div>

              {/* Hero Right: Collage Showcase */}
              <div className="lg:col-span-6 relative">
                {/* Stylized background layout */}
                <div className="relative mx-auto max-w-lg lg:max-w-none flex flex-col items-center">
                  
                  {/* Absolute Glowing Badge */}
                  <div className="absolute -top-4 -left-4 z-20 rounded-xl bg-emerald-500 text-slate-950 font-black p-3.5 shadow-xl shadow-emerald-500/10 rotate-[-6deg] text-center border border-emerald-400/20">
                    <p className="text-xs uppercase tracking-wider">Average CTR</p>
                    <p className="text-2xl tracking-tight leading-none mt-0.5">11.4%</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full rotate-[1deg] group">
                    {/* Gaming */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-xl group-hover:scale-[0.98] transition-transform duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/thumbnail_gaming.png"
                        alt="Gaming Thumbnail Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 rounded bg-brand-primary/90 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                        Gaming
                      </div>
                    </div>
                    {/* Finance */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-xl translate-y-3 group-hover:scale-[0.98] transition-transform duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/thumbnail_finance.png"
                        alt="Finance Thumbnail Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 rounded bg-amber-500/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-950 uppercase tracking-wider">
                        Finance
                      </div>
                    </div>
                    {/* Tech */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-xl -translate-y-1 group-hover:scale-[0.98] transition-transform duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/thumbnail_tech.png"
                        alt="Tech Thumbnail Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 rounded bg-cyan-500/90 px-1.5 py-0.5 text-[9px] font-bold text-slate-950 uppercase tracking-wider">
                        Tech
                      </div>
                    </div>
                    {/* Entertainment */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-xl translate-y-2 group-hover:scale-[0.98] transition-transform duration-300">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/thumbnail_entertainment.png"
                        alt="Entertainment Thumbnail Showcase"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 rounded bg-purple-500/90 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider">
                        Entertainment
                      </div>
                    </div>
                  </div>

                  {/* Collage Subtitle */}
                  <p className="mt-8 text-center text-xs font-bold text-brand-subtext uppercase tracking-widest flex items-center gap-1.5">
                    <Video className="h-4 w-4 text-brand-accent animate-pulse" /> Verified designs driving millions of impressions
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 2 — TRUST METRICS
            ======================================= */}
        <section className="bg-slate-900/50 py-12 border-b border-slate-850">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 text-center items-center">
              
              {/* Stat 1 */}
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-primary flex justify-center items-center">
                  <AnimatedCounter target={100} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-subtext">
                  Thumbnails Designed
                </p>
              </div>

              {/* Stat 2 */}
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white flex justify-center items-center">
                  <AnimatedCounter target={20} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-subtext">
                  Clients Served
                </p>
              </div>

              {/* Stat 3 */}
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-accent flex justify-center items-center">
                  <AnimatedCounter target={8} suffix="+" />
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-subtext">
                  Niches Worked With
                </p>
              </div>

              {/* Stat 4 */}
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl md:text-5xl font-black text-emerald-400 flex justify-center items-center">
                  <AnimatedCounter target={24} suffix="h" />
                </p>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-subtext">
                  Average Delivery Time
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 3 — PORTFOLIO SECTION
            ======================================= */}
        <section id="portfolio" className="py-20 md:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Recent Projects
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              My Work
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-subtext">
              Selected thumbnail projects engineered for high-CTR performance across various categories.
            </p>
          </div>

          {/* Filter Grid Component */}
          <PortfolioGrid />
        </section>

        {/* =======================================
            SECTION 4 — BEFORE & AFTER
            ======================================= */}
        <section id="before-after" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                Case Studies
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Results-Focused Design
              </h2>
              <p className="mx-auto max-w-xl text-base text-brand-subtext">
                Real comparative examples showcasing standard layout deficits compared to our highly optimized viral designs.
              </p>
            </div>

            {/* Slider Comparison cards */}
            <BeforeAfterSlider />
          </div>
        </section>

        {/* =======================================
            SECTION 5 — SERVICES (PRICING)
            ======================================= */}
        <section id="services" className="py-20 md:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Transparent Pricing
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Thumbnail Design Services
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-subtext">
              Choose a design package that fits your channel&apos;s current upload frequency and growth goals.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
            
            {/* Package 1: Starter */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-brand-card p-6 md:p-8 transition-all hover:border-slate-700/80">
              <div className="flex-grow">
                <span className="text-xs font-bold text-brand-subtext uppercase tracking-widest">
                  Starter Pack
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">Starter</h3>
                <p className="mt-2 text-sm text-brand-subtext leading-relaxed">
                  Perfect for creators testing out new video ideas or uploading occasionally.
                </p>
                <p className="mt-5 text-4xl font-extrabold text-white tracking-tight">
                  $45
                  <span className="text-sm font-semibold text-brand-subtext"> / thumbnail</span>
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>1 Custom High-CTR Thumbnail</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>24 Hour Express Delivery</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>2 Revision Rounds</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>1280x720 Optimized PNG/JPG</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex w-full items-center justify-center rounded-xl bg-slate-800 border border-slate-750 px-4 py-3 text-sm font-bold text-white hover:bg-slate-750 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Order Starter Package
                </a>
              </div>
            </div>

            {/* Package 2: Creator Pack (Highlighted) */}
            <div className="flex flex-col rounded-2xl border-2 border-brand-primary bg-brand-card p-6 md:p-8 shadow-xl shadow-brand-primary/5 relative scale-103 z-10">
              {/* Popular Tag */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary px-4 py-1 text-xs font-black tracking-widest uppercase text-white shadow-md">
                Most Popular
              </div>

              <div className="flex-grow">
                <span className="text-xs font-bold text-brand-primary uppercase tracking-widest">
                  Best Value
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white flex items-center gap-2">
                  Creator Pack <Flame className="h-5 w-5 fill-brand-accent text-brand-accent animate-pulse" />
                </h3>
                <p className="mt-2 text-sm text-brand-subtext leading-relaxed">
                  Best for serious, consistent creators aiming to maintain brand identity and dominate.
                </p>
                <p className="mt-5 text-4xl font-extrabold text-white tracking-tight">
                  $350
                  <span className="text-sm font-semibold text-brand-subtext"> / month</span>
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                    <span className="font-semibold">10 Custom High-CTR Thumbnails</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                    <span>Priority Scheduling (Fast Delivery)</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                    <span className="text-brand-primary font-bold">Unlimited Revisions</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                    <span>Free competitor thumbnail analysis</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-white">
                    <Check className="h-4.5 w-4.5 text-emerald-400 shrink-0" />
                    <span>Consistent Brand Guidelines Setup</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex w-full items-center justify-center rounded-xl bg-brand-primary hover:bg-blue-600 px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-primary/20 hover:shadow-brand-primary/30 active:scale-[0.98] transition-all cursor-pointer glow-primary"
                >
                  Order Creator Pack
                </a>
              </div>
            </div>

            {/* Package 3: Custom */}
            <div className="flex flex-col rounded-2xl border border-slate-800 bg-brand-card p-6 md:p-8 transition-all hover:border-slate-700/80">
              <div className="flex-grow">
                <span className="text-xs font-bold text-brand-subtext uppercase tracking-widest">
                  Enterprise
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">Custom</h3>
                <p className="mt-2 text-sm text-brand-subtext leading-relaxed">
                  Tailored for YouTube production agencies, media networks, or heavy channels.
                </p>
                <p className="mt-5 text-4xl font-extrabold text-white tracking-tight">
                  Custom
                  <span className="text-sm font-semibold text-brand-subtext"> pricing</span>
                </p>

                {/* Features */}
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>Unlimited Scaling & Thumbnails</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>Dedicated Agency Slack/Discord Support</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>Click-map & A/B testing strategy</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-200">
                    <Check className="h-4.5 w-4.5 text-brand-primary shrink-0" />
                    <span>Photoshop PSD source files included</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="flex w-full items-center justify-center rounded-xl bg-slate-800 border border-slate-750 px-4 py-3 text-sm font-bold text-white hover:bg-slate-750 active:scale-[0.98] transition-all cursor-pointer"
                >
                  Get Custom Package Quote
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 6 — WHY WORK WITH ME
            ======================================= */}
        <section id="why-me" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                My Advantages
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Why Work With Me
              </h2>
              <p className="mx-auto max-w-xl text-base text-brand-subtext">
                I do not just create pretty graphics. I build scientifically-engineered visual hooks focused entirely on driving clicks.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              
              {/* Feature 1 */}
              <div className="rounded-xl border border-slate-800 bg-brand-card p-6 space-y-4 hover:border-slate-750 transition-colors duration-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary border border-brand-primary/15">
                  <Clock className="h-6 w-6" />
                </span>
                <h4 className="text-lg font-bold text-white">Fast Turnaround</h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  Upload schedule tight? I deliver prompt drafts within 24 hours, ensuring your upload calendar is always met.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="rounded-xl border border-slate-800 bg-brand-card p-6 space-y-4 hover:border-slate-750 transition-colors duration-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/15">
                  <TrendingUp className="h-6 w-6" />
                </span>
                <h4 className="text-lg font-bold text-white">CTR-Focused Designs</h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  Engineered using design elements: high-contrast lighting, bold focal text, and expression magnification.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="rounded-xl border border-slate-800 bg-brand-card p-6 space-y-4 hover:border-slate-750 transition-colors duration-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent border border-brand-accent/15">
                  <Search className="h-6 w-6" />
                </span>
                <h4 className="text-lg font-bold text-white">Trend Research</h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  Constant analysis of viral formats on the platform, integrating what is working into your assets instantly.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="rounded-xl border border-slate-800 bg-brand-card p-6 space-y-4 hover:border-slate-750 transition-colors duration-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/15">
                  <Sparkles className="h-6 w-6" />
                </span>
                <h4 className="text-lg font-bold text-white">Unlimited Creativity</h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  No generic templates. From advanced digital artwork to futuristic 3D compositions, each asset is bespoke.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="rounded-xl border border-slate-800 bg-brand-card p-6 space-y-4 hover:border-slate-750 transition-colors duration-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/15">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <h4 className="text-lg font-bold text-white">Professional Communication</h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  Dedicated client channel via Slack or WhatsApp. We establish structured workspaces to prevent delayed revisions.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="rounded-xl border border-slate-800 bg-brand-card p-6 space-y-4 hover:border-slate-750 transition-colors duration-200">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/15">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <h4 className="text-lg font-bold text-white">Consistent Branding</h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  Consistent color themes and structural fonts make your channel immediately recognizable to return viewers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 7 — WORK PROCESS
            ======================================= */}
        <section id="process" className="py-20 md:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
              Simple Workflow
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              My Design Process
            </h2>
            <p className="mx-auto max-w-xl text-base text-brand-subtext">
              How we collaborate to build high-performance assets from concept to final upload.
            </p>
          </div>

          {/* Process Timeline Layout */}
          <div className="relative max-w-5xl mx-auto mt-12">
            
            {/* Dotted Connection Line on Desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-800 -z-10" />

            <div className="grid gap-8 lg:grid-cols-5 relative z-10 text-center lg:text-left">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-800 text-lg font-bold text-brand-primary">
                  1
                </span>
                <h4 className="text-base font-bold text-white pt-1">
                  Send Video Concept
                </h4>
                <p className="text-xs md:text-sm text-brand-subtext leading-relaxed max-w-xs lg:max-w-none">
                  Provide your video title, concept ideas, and any raw image assets or frames.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-800 text-lg font-bold text-brand-primary">
                  2
                </span>
                <h4 className="text-base font-bold text-white pt-1">
                  Competitor Research
                </h4>
                <p className="text-xs md:text-sm text-brand-subtext leading-relaxed max-w-xs lg:max-w-none">
                  I analyze your niche competitors to build design options that physically stand out.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-brand-primary text-lg font-bold text-brand-primary shadow-lg shadow-brand-primary/10">
                  3
                </span>
                <h4 className="text-base font-bold text-white pt-1">
                  Design Concepts
                </h4>
                <p className="text-xs md:text-sm text-brand-subtext leading-relaxed max-w-xs lg:max-w-none">
                  I construct custom, high-contrast layouts incorporating glowing highlights.
                </p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border-2 border-slate-800 text-lg font-bold text-brand-primary">
                  4
                </span>
                <h4 className="text-base font-bold text-white pt-1">
                  Revision Process
                </h4>
                <p className="text-xs md:text-sm text-brand-subtext leading-relaxed max-w-xs lg:max-w-none">
                  We review the design together, tweaking typography, assets, or sizing.
                </p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center lg:items-start space-y-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 border-2 border-emerald-400 text-lg font-bold text-slate-950 shadow-lg shadow-emerald-500/10">
                  5
                </span>
                <h4 className="text-base font-bold text-white pt-1">
                  Final Delivery
                </h4>
                <p className="text-xs md:text-sm text-brand-subtext leading-relaxed max-w-xs lg:max-w-none">
                  Get high-resolution PNG/JPG files optimized and completely ready to upload.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =======================================
            SECTION 8 — TESTIMONIALS
            ======================================= */}
        <section id="testimonials" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-900 overflow-hidden relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Client Success
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                What Creators Say
              </h2>
            </div>

            {/* Testimonials Slider Wrapper */}
            <div className="relative rounded-2xl border border-slate-800 bg-brand-card p-6 md:p-10 shadow-xl shadow-slate-950/20 max-w-3xl mx-auto">
              
              {/* Testimonial Content with Slide transition effect */}
              <div className="space-y-6 transition-all duration-300">
                <div className="flex gap-1 text-brand-accent">
                  {[...Array(TESTIMONIALS[activeTestimonial].stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-brand-accent text-brand-accent" />
                  ))}
                </div>

                <p className="text-lg md:text-xl font-medium leading-relaxed text-white italic">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-6">
                  <div>
                    <p className="font-extrabold text-white text-base">
                      {TESTIMONIALS[activeTestimonial].author}
                    </p>
                    <p className="text-xs text-brand-subtext">
                      {TESTIMONIALS[activeTestimonial].channel}
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary">
                    {TESTIMONIALS[activeTestimonial].niche}
                  </span>
                </div>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
                <button
                  onClick={handlePrevTestimonial}
                  className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-brand-subtext hover:text-white hover:border-slate-600 shadow-md cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
                <button
                  onClick={handleNextTestimonial}
                  className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-brand-subtext hover:text-white hover:border-slate-600 shadow-md cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? "bg-brand-primary w-6"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 9 — ABOUT ME
            ======================================= */}
        <section id="about" className="py-20 md:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            {/* About Image Left */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Visual shadow glow */}
                <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl blur-xl group-hover:scale-105 transition-all duration-350" />
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-brand-card p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/designer_profile.jpg"
                    alt="Naga Sai Professional Headshot"
                    className="w-full aspect-square object-cover rounded-xl"
                  />
                  <div className="mt-4 flex justify-between items-center text-xs">
                    <span className="font-semibold text-brand-subtext flex items-center gap-1">
                      <Award className="h-4 w-4 text-brand-accent" /> Creator Partner
                    </span>
                    <span className="font-bold text-emerald-400">Available to Hire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Text Right */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                About the designer
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Hey, I&apos;m Naga Sai
              </h2>
              <p className="text-base text-brand-subtext leading-relaxed">
                I am a professional YouTube Thumbnail Designer and CTR specialist with over 4 years of experience working alongside prominent gaming, technology, and finance creators. My primary goal is helping channels unlock viral potential by crafting visuals that physically stand out in a saturated feed.
              </p>
              
              <div className="rounded-xl border border-slate-850 bg-slate-900/60 p-5 space-y-4">
                <h4 className="font-bold text-white text-sm uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-brand-accent" /> Creative Philosophy
                </h4>
                <p className="text-sm text-brand-subtext leading-relaxed">
                  A high-converting thumbnail is not just standard graphics—it is visual psychology. By capturing the core high-interest point of your concept and structuring text for immediate readability under 150 milliseconds, I help you outrank competitors and capture recommendation feeds.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="rounded-lg bg-brand-card border border-slate-800 px-4 py-2 text-sm text-white font-semibold">
                  🚀 4+ Years Niche Exp
                </div>
                <div className="rounded-lg bg-brand-card border border-slate-800 px-4 py-2 text-sm text-white font-semibold">
                  📈 100+ Happy Creators
                </div>
                <div className="rounded-lg bg-brand-card border border-slate-800 px-4 py-2 text-sm text-white font-semibold">
                  🎯 Click Psychology Expert
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================
            SECTION 10 — FAQ SECTION
            ======================================= */}
        <section id="faq" className="py-20 md:py-28 bg-slate-900/40 border-y border-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-16">
              <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-primary">
                Answers
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-xl text-base text-brand-subtext">
                Got a question about packages, file formats, or turnarounds? Read details below.
              </p>
            </div>

            {/* Accordion Component */}
            <Accordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* =======================================
            SECTION 11 — CONTACT SECTION
            ======================================= */}
        <section id="contact" className="py-20 md:py-28 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </section>

      </main>

      {/* =======================================
          SECTION 12 — FOOTER
          ======================================= */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Footer Logo */}
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary text-xs font-black text-white shadow-md shadow-brand-primary/20">
                NS
              </span>
              <span className="font-extrabold text-white tracking-tight">NAGA SAI</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-brand-subtext hover:text-white transition-colors">
                Home
              </a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")} className="text-brand-subtext hover:text-white transition-colors">
                Portfolio
              </a>
              <a href="#before-after" onClick={(e) => handleNavClick(e, "#before-after")} className="text-brand-subtext hover:text-white transition-colors">
                Before & After
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-brand-subtext hover:text-white transition-colors">
                Services
              </a>
              <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")} className="text-brand-subtext hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-brand-subtext text-center md:text-right">
              &copy; {new Date().getFullYear()} Naga Sai Designs. All rights reserved. <br className="md:hidden" /> Crafted for maximum YouTube conversion.
            </p>

          </div>
        </div>
      </footer>

    </div>
  );
}
