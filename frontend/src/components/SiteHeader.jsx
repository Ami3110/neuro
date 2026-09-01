"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, ArrowRight, Menu, Sparkles, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

const NAV = [
  { href: "/#services", label: "Services" },
  { href: "/#research-fund", label: "Research Fund" },
  { href: "/#publications", label: "Publications" },
  { href: "/#csr", label: "CSR Partnerships" },
  { href: "/#events", label: "Events & Highlights" },
  { href: "/#resources", label: "Free Public Resources" },
];

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar - Minimalist Modern Dark Banner */}
      <div
        data-testid="announcement-bar"
        className="relative z-50 bg-slate-950 text-slate-300 border-b border-white/[0.08] overflow-hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-10 text-xs">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-2.5 py-0.5 text-[11px] font-medium text-teal-300 border border-teal-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-400"></span>
              </span>
              Symposium 2026
            </span>
            <p className="text-slate-300 font-normal">
              Annual Clinical Symposium registration is open — free &amp; virtual.
            </p>
          </div>

          <a
            href="/#events"
            className="group hidden sm:inline-flex items-center gap-1 font-medium text-slate-200 hover:text-teal-300 transition-colors duration-150 text-xs shrink-0"
          >
            <span>Reserve a seat</span>
            <ArrowRight className="h-3.5 w-3.5 text-teal-400 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Main Navigation Header - Glassmorphic, Clean, Minimalist */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 transition-all duration-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
          
          {/* Logo */}
          <Link
            href="/"
            data-testid="site-logo-link"
            className="group flex items-center gap-3 rounded-xl transition-opacity hover:opacity-90"
            aria-label="NeuroDevelopment Foundation home"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-600 via-teal-500 to-emerald-400 text-white shadow-xs shadow-teal-500/20 ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-teal-500/30">
              <Activity className="h-4.5 w-4.5 stroke-[2.2]" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-semibold tracking-tight text-foreground">
                Neuro<span className="text-muted-foreground font-normal">Development</span>
              </span>
              <span className="block text-[9.5px] uppercase font-bold tracking-[0.22em] text-muted-foreground/75">
                Foundation
              </span>
            </span>
          </Link>

          {/* Center Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-link-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground transition-all duration-200 hover:bg-muted/80 hover:text-foreground active:scale-[0.98]"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ThemeToggle />

            <Button
              asChild
              className="hidden lg:inline-flex rounded-full h-8.5 px-4 text-xs font-medium bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 text-white shadow-xs shadow-teal-500/15 hover:shadow-sm hover:shadow-teal-500/25 transition-all duration-200 active:scale-[0.98]"
              data-testid="header-csr-button"
            >
              <a href="/#csr">Partner with Us (CSR)</a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="hidden lg:inline-flex rounded-full h-8.5 px-4 text-xs font-medium border-border/80 bg-background/50 hover:bg-muted/70 hover:border-foreground/20 text-foreground transition-all duration-200 active:scale-[0.98]"
              data-testid="header-book-unit-button"
            >
              <a href="/#contact">Book Mobile Unit</a>
            </Button>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="h-8.5 w-8.5 rounded-full xl:hidden text-muted-foreground hover:text-foreground hover:bg-muted/80"
              data-testid="mobile-menu-toggle"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {open && (
          <nav
            aria-label="Mobile"
            data-testid="mobile-nav"
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl px-6 py-5 xl:hidden shadow-lg animate-in slide-in-from-top-2 duration-200"
          >
            <ul className="space-y-1">
              {[...NAV, { href: "/crowdfunding", label: "Crowdfunding" }, { href: "/volunteer", label: "Volunteer" }].map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:bg-muted hover:text-foreground"
                  >
                    <span>{n.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground/50" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-2.5 pt-4 border-t border-border/50">
              <Button asChild className="w-full rounded-full h-9.5 text-xs font-medium bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-500 hover:to-emerald-400 text-white" data-testid="mobile-csr-button">
                <a href="/#csr" onClick={() => setOpen(false)}>Partner with Us (CSR)</a>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full h-9.5 text-xs font-medium border-border" data-testid="mobile-book-unit-button">
                <a href="/#contact" onClick={() => setOpen(false)}>Book Mobile Unit</a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
