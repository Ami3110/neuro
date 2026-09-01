"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, Megaphone, Menu, X } from "lucide-react";
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
      <div
        data-testid="announcement-bar"
        className="bg-slate-900 text-slate-50 dark:bg-slate-950"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 py-2.5 lg:px-10">
          <Megaphone className="h-4 w-4 shrink-0 text-teal-300" aria-hidden="true" />
          <p className="text-xs leading-relaxed sm:text-sm">
            Annual Clinical Symposium 2026 registration is open — free and virtual.{" "}
            <a href="/#events" className="font-semibold underline decoration-teal-300 underline-offset-4">
              Reserve a seat
            </a>
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4 lg:px-10">
          <Link
            href="/"
            data-testid="site-logo-link"
            className="flex items-center gap-3 rounded-xl"
            aria-label="NeuroDevelopment Foundation home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Activity className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display leading-tight">
              <span className="block text-sm font-semibold tracking-tight">NeuroDevelopment</span>
              <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Foundation
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-link-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 xl:ml-0">
            <ThemeToggle />
            <Button asChild className="hidden rounded-full lg:inline-flex" data-testid="header-csr-button">
              <a href="/#csr">Partner with Us (CSR)</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="hidden rounded-full lg:inline-flex"
              data-testid="header-book-unit-button"
            >
              <a href="/#contact">Book Mobile Unit</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full xl:hidden"
              data-testid="mobile-menu-toggle"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {open && (
          <nav
            aria-label="Mobile"
            data-testid="mobile-nav"
            className="border-t border-border bg-background px-6 py-4 xl:hidden"
          >
            <ul className="space-y-1">
              {[...NAV, { href: "/crowdfunding", label: "Crowdfunding" }, { href: "/volunteer", label: "Volunteer" }].map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${n.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="block rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 hover:bg-muted"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <Button asChild className="rounded-full" data-testid="mobile-csr-button">
                <a href="/#csr" onClick={() => setOpen(false)}>Partner with Us (CSR)</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full" data-testid="mobile-book-unit-button">
                <a href="/#contact" onClick={() => setOpen(false)}>Book Mobile Unit</a>
              </Button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};
