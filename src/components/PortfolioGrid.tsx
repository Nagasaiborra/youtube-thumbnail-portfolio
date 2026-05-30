"use client";

import React, { useState } from "react";
import { Eye, ArrowUpRight, Flame } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: "Gaming" | "Finance" | "Tech" | "Education" | "Entertainment";
  ctr: string;
  views: string;
  imageSrc: string;
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "100x Level Survival Challenge",
    category: "Gaming",
    ctr: "11.2% CTR",
    views: "1.2M Views",
    imageSrc: "/images/thumbnail_gaming.png",
  },
  {
    id: 2,
    title: "The Financial Freedom Blueprint",
    category: "Finance",
    ctr: "9.8% CTR",
    views: "840K Views",
    imageSrc: "/images/thumbnail_finance.png",
  },
  {
    id: 3,
    title: "Next Gen Artificial Intelligence Tech",
    category: "Tech",
    ctr: "12.5% CTR",
    views: "2.1M Views",
    imageSrc: "/images/thumbnail_tech.png",
  },
  {
    id: 4,
    title: "How to Learn 10x Faster Today",
    category: "Education",
    ctr: "10.4% CTR",
    views: "620K Views",
    imageSrc: "/images/thumbnail_education.png",
  },
  {
    id: 5,
    title: "The Uncomfortable Truth Exposed",
    category: "Entertainment",
    ctr: "11.9% CTR",
    views: "3.4M Views",
    imageSrc: "/images/thumbnail_entertainment.png",
  },
  {
    id: 6,
    title: "Minecraft Hardcore 500 Days",
    category: "Gaming",
    ctr: "10.8% CTR",
    views: "950K Views",
    imageSrc: "/images/thumbnail_gaming.png",
  },
  {
    id: 7,
    title: "Crypto Crash: What Happens Now?",
    category: "Finance",
    ctr: "9.2% CTR",
    views: "430K Views",
    imageSrc: "/images/thumbnail_finance.png",
  },
  {
    id: 8,
    title: "Ultimate 2026 Developer Desk Setup",
    category: "Tech",
    ctr: "11.7% CTR",
    views: "720K Views",
    imageSrc: "/images/thumbnail_tech.png",
  },
  {
    id: 9,
    title: "How Ancient Rome Actually Collapsed",
    category: "Education",
    ctr: "9.9% CTR",
    views: "1.1M Views",
    imageSrc: "/images/thumbnail_education.png",
  },
  {
    id: 10,
    title: "I Survived 100 Hours In The Arctic",
    category: "Entertainment",
    ctr: "13.2% CTR",
    views: "4.8M Views",
    imageSrc: "/images/thumbnail_entertainment.png",
  },
  {
    id: 11,
    title: "Valorant Pro Aim Secret Guide",
    category: "Gaming",
    ctr: "10.5% CTR",
    views: "580K Views",
    imageSrc: "/images/thumbnail_gaming.png",
  },
  {
    id: 12,
    title: "Smart Passive Income in College",
    category: "Finance",
    ctr: "10.1% CTR",
    views: "380K Views",
    imageSrc: "/images/thumbnail_finance.png",
  },
];

const CATEGORIES = ["All", "Gaming", "Finance", "Tech", "Education", "Entertainment"];

export default function PortfolioGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer ${
              selectedCategory === category
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-103"
                : "bg-brand-card text-brand-subtext border border-slate-800 hover:border-slate-700 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of items */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-brand-card transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-700 hover:shadow-xl hover:shadow-brand-primary/5"
          >
            {/* Image Container with overlay */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.imageSrc}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Black Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="flex items-center gap-1.5 rounded-full bg-brand-primary px-4 py-2 text-xs font-bold text-white shadow-lg shadow-brand-primary/30 scale-90 transition-transform duration-300 group-hover:scale-100">
                  <Eye className="h-4 w-4" /> View Full Scale
                </span>
              </div>

              {/* CTR Floating Tag */}
              <div className="absolute top-3 left-3 rounded-lg bg-emerald-500/90 backdrop-blur-xs px-2.5 py-1 text-xs font-extrabold text-slate-950 shadow-md flex items-center gap-1 border border-emerald-400/20">
                <Flame className="h-3.5 w-3.5 fill-slate-950 text-slate-950" /> {item.ctr}
              </div>

              {/* Views Floating Tag */}
              <div className="absolute bottom-3 right-3 rounded-lg bg-slate-950/75 backdrop-blur-xs px-2.5 py-1 text-xs font-semibold text-slate-200 shadow-md">
                {item.views}
              </div>
            </div>

            {/* Title & Info */}
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-primary">
                {item.category}
              </span>
              <h4 className="mt-1.5 font-bold leading-snug text-white transition-colors duration-200 group-hover:text-brand-primary line-clamp-2">
                {item.title}
              </h4>
              <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs text-brand-subtext">
                <span>Freelance Project</span>
                <span className="flex items-center gap-0.5 text-white font-semibold transition-colors duration-200 group-hover:text-brand-primary">
                  Details <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
