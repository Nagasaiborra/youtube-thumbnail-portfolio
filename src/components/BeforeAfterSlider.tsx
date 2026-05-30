"use client";

import React from "react";
import { ArrowRight, TrendingUp, Percent, Flame } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  beforeCtr: string;
  afterCtr: string;
  increase: string;
  explanation: string;
  imageSrc: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "100x Level Gaming Challenge",
    category: "Gaming",
    beforeLabel: "Standard Gameplay Screenshot",
    afterLabel: "High-Contrast Glowing CTR Layout",
    beforeCtr: "3.4%",
    afterCtr: "11.2%",
    increase: "+229% CTR Boost",
    explanation: "Replaced a cluttered, low-contrast game capture with a dynamic glowing controller, custom ember overlays, and massive 3D text that immediately triggers emotional curiosity.",
    imageSrc: "/images/thumbnail_gaming.png",
  },
  {
    id: 2,
    title: "The Financial Freedom Secret",
    category: "Finance",
    beforeLabel: "Basic Line Chart & Small Text",
    afterLabel: "Sleek Gold Overlay & 3D Chart",
    beforeCtr: "2.8%",
    afterCtr: "9.8%",
    increase: "+250% CTR Boost",
    explanation: "Swapped out flat stock images for a highly polished glowing smartphone mockup, vibrant gold accents, and a clean typography hierarchy that promises immediate value.",
    imageSrc: "/images/thumbnail_finance.png",
  },
  {
    id: 3,
    title: "Next Gen Tech Review",
    category: "Tech",
    beforeLabel: "Dim Studio Photo with Unreadable Text",
    afterLabel: "Futuristic Neon Cyan Render",
    beforeCtr: "4.1%",
    afterCtr: "12.5%",
    increase: "+204% CTR Boost",
    explanation: "Transformed a flat product photo into an electrifying tech setup with high-saturation cyan neon lighting and structured layout grids to capture tech enthusiasts.",
    imageSrc: "/images/thumbnail_tech.png",
  },
];

export default function BeforeAfterSlider() {
  return (
    <div className="space-y-16">
      {CASE_STUDIES.map((study) => (
        <div
          key={study.id}
          className="group relative rounded-2xl border border-slate-800 bg-brand-card p-6 md:p-8 transition-all duration-300 hover:border-slate-700/80 hover:shadow-xl hover:shadow-brand-primary/5"
        >
          {/* Top Label & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <span className="rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-semibold tracking-wider uppercase text-brand-primary">
                {study.category} Case Study
              </span>
              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {study.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-sm font-bold text-emerald-400 border border-emerald-500/20 shadow-md">
              <TrendingUp className="h-4.5 w-4.5 animate-bounce" />
              {study.increase}
            </div>
          </div>

          {/* Before & After Images Grid */}
          <div className="mt-8 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            {/* Before Item */}
            <div className="relative">
              <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-red-500/30">
                {/* Visual Simulation of Low-Quality/Dull: high blur, low contrast, desaturated */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.imageSrc}
                  alt={`Before - ${study.title}`}
                  className="h-full w-full object-cover grayscale-65 contrast-75 brightness-65 blur-1.5"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 rounded bg-red-600 px-2 py-1 text-xs font-black tracking-wide uppercase text-white shadow-lg">
                  Before (CTR: {study.beforeCtr})
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-brand-subtext uppercase tracking-wider">
                {study.beforeLabel}
              </p>
            </div>

            {/* Transition Indicator */}
            <div className="flex justify-center md:flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 border border-slate-700 text-brand-primary shadow-lg shadow-brand-primary/5 transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
              </div>
            </div>

            {/* After Item */}
            <div className="relative">
              <div className="relative aspect-video overflow-hidden rounded-xl border-2 border-emerald-500/60 shadow-lg shadow-emerald-500/10 transition-all duration-300 group-hover:border-emerald-500/80">
                {/* Premium High Quality Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.imageSrc}
                  alt={`After - ${study.title}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3 rounded bg-emerald-500 px-2 py-1 text-xs font-black tracking-wide uppercase text-slate-950 shadow-lg flex items-center gap-1">
                  <Flame className="h-3 w-3 fill-slate-950" /> After (CTR: {study.afterCtr})
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {study.afterLabel}
              </p>
            </div>
          </div>

          {/* Explanation Text */}
          <div className="mt-8 rounded-xl bg-slate-900/60 p-4 border border-slate-800/40">
            <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Percent className="h-4 w-4 text-brand-primary" /> Redesign Strategy:
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-brand-subtext">
              {study.explanation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
