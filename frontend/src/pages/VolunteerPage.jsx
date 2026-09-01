"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "../components/ui/select";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../components/ui/accordion";
import { api } from "../lib/api";

const MODES = [
  "Corporate team volunteering day",
  "Teach or train (clinical professional)",
  "Caregiver workshop support",
  "Translation & language content",
  "Logistics, transport & camp support",
  "Remote / online support",
];

const FAQS = [
  ["Do I need a clinical background?", "No. Many roles are logistics, translation, photography or activity-station support. Clinical roles are matched to your registration and supervised by our therapists."],
  ["Can my company send a whole team?", "Yes. We run structured corporate volunteering days for groups of 8 to 40, including a briefing, supervised field activity and an impact debrief for your CSR reporting."],
  ["How are children safeguarded?", "Every volunteer signs our child-protection code, is briefed before contact, and is never left unsupervised with a child. Photography needs written caregiver consent."],
  ["What is the time commitment?", "A single day for corporate groups, or a recurring weekend slot for community volunteers. Remote roles can be a few hours a month."],
];

const EMPTY = { name: "", email: "", organisation: "", mode: MODES[0], skills: "", availability: "" };

export default function VolunteerPage() {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/volunteers", form);
      setDone(true);
      setForm(EMPTY);
      toast.success("Thank you for signing up", {
        description: "Our volunteering desk will match you to a placement and write back within a week.",
      });
    } catch (err) {
      toast.error("Signup failed", {
        description: err?.response?.data?.detail?.[0]?.msg || "Please review the form and try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <section className="border-b border-border py-20 sm:py-24" aria-labelledby="vol-heading">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Volunteer</p>
              <h1 id="vol-heading" className="mt-6 text-4xl font-light tracking-tight sm:text-5xl">
                Give a day. <span className="font-medium text-primary">Change a childhood.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Volunteers make our district camps possible — teaching parents home routines, running
                play stations for children, translating materials, and coordinating transport so
                families actually reach the van. Companies can bring a whole team.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="https://images.unsplash.com/photo-1708687045030-26702e62fc65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMG9jY3VwYXRpb25hbCUyMHRoZXJhcHklMjBzZW5zb3J5fGVufDB8fHx8MTc4Njk5ODM5MXww&ixlib=rb-4.1.0&q=85"
                alt="A volunteer giving a young boy an encouraging high five during an activity session."
                className="h-80 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24" aria-labelledby="vol-form-heading">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-10">
            <Card className="h-fit rounded-2xl border-border shadow-none">
              <CardContent className="p-8 sm:p-10">
                <h2 id="vol-form-heading" className="text-2xl font-medium tracking-tight">
                  Volunteer signup
                </h2>
                {done && (
                  <div
                    role="status"
                    data-testid="volunteer-success-state"
                    className="mt-6 flex gap-3 rounded-xl border border-primary/40 bg-primary/[0.06] p-5 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <p>You're on the list. We'll match you to a placement and write back within a week.</p>
                  </div>
                )}
                <form onSubmit={submit} className="mt-8 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="v-name">Full name</Label>
                    <Input id="v-name" required data-testid="volunteer-name-input" value={form.name} onChange={set("name")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="v-email">Email</Label>
                    <Input id="v-email" type="email" required data-testid="volunteer-email-input" value={form.email} onChange={set("email")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="v-org">Company / organisation (optional)</Label>
                    <Input id="v-org" data-testid="volunteer-org-input" value={form.organisation} onChange={set("organisation")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="v-mode">How would you like to help?</Label>
                    <Select value={form.mode} onValueChange={(v) => setForm((f) => ({ ...f, mode: v }))}>
                      <SelectTrigger id="v-mode" data-testid="volunteer-mode-select"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {MODES.map((m) => <SelectItem key={m} value={m}>{m}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="v-skills">Skills or profession</Label>
                    <Textarea id="v-skills" rows={3} required data-testid="volunteer-skills-input" value={form.skills} onChange={set("skills")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="v-avail">Availability</Label>
                    <Input id="v-avail" required placeholder="e.g. one Saturday a month" data-testid="volunteer-availability-input" value={form.availability} onChange={set("availability")} />
                  </div>
                  <Button type="submit" disabled={busy} className="w-full rounded-full" data-testid="volunteer-submit-button">
                    {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                    {busy ? "Submitting…" : "Sign me up"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-medium tracking-tight">Before you sign up</h2>
              <Accordion type="single" collapsible className="mt-8" data-testid="volunteer-faq">
                {FAQS.map(([q, a], i) => (
                  <AccordionItem key={q} value={`faq-${i}`}>
                    <AccordionTrigger data-testid={`volunteer-faq-trigger-${i}`} className="text-left">
                      {q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
