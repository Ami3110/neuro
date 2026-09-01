"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Cpu, FlaskConical, Loader2, Salad, Speech } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "../lib/api";

const AREAS = [
  {
    icon: Cpu,
    title: "Low-resource diagnostics",
    body: "Screening and diagnostic tools that work without a specialist, a laboratory or reliable electricity — including on-device AI triage.",
  },
  {
    icon: Speech,
    title: "AAC speech technology",
    body: "Affordable augmentative and alternative communication for non-speaking children, in Indian languages, on hardware families already own.",
  },
  {
    icon: Salad,
    title: "Maternal nutrition studies",
    body: "Trials and cohort work linking maternal micronutrient status across the 1,000 days to measurable infant neurodevelopmental outcomes.",
  },
];

const EMPTY = {
  principal_investigator: "", email: "", organisation: "",
  priority_area: "Low-resource diagnostics", abstract: "", budget_inr: "",
};

export const ResearchFund = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/grant-proposals", form);
      toast.success("Proposal received", {
        description: "Our research office will acknowledge your submission within five working days.",
      });
      setForm(EMPTY);
      setOpen(false);
    } catch (err) {
      toast.error("We could not submit that", {
        description: err?.response?.data?.detail?.[0]?.msg || "Please check the fields and try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Section
      id="research-fund"
      testId="research-fund-section"
      overline="Scientific pillar"
      title="The NeuroDevelopment Research Fund"
      lead="An independent, ring-fenced fund financing clinical trials, diagnostic AI and translational neurodevelopment research. Decisions are made by an external scientific review panel, and every funded output must be released open-access."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <h3 className="text-xl font-medium tracking-tight">Priority grant areas</h3>
          <div className="mt-8 space-y-4">
            {AREAS.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="rounded-2xl border-border shadow-none">
                <CardContent className="flex gap-5 p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className="text-lg font-medium tracking-tight">{title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="h-fit rounded-2xl border-border bg-muted/40 shadow-none">
          <CardContent className="p-8 sm:p-10">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
              <FlaskConical className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-medium tracking-tight">Open call for proposals</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-muted-foreground">Grant ceiling</dt>
                <dd className="font-medium">₹40,00,000 over 24 months</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Eligibility</dt>
                <dd className="font-medium">Universities, hospitals, registered non-profits</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Review cycle</dt>
                <dd className="font-medium">Rolling, panel meets quarterly</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Committed to date</dt>
                <dd className="font-medium">₹1,25,00,000 across 9 projects</dd>
              </div>
            </dl>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="mt-8 w-full rounded-full" data-testid="open-grant-modal-button">
                  Submit Grant Proposal / RFP
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl" data-testid="grant-modal">
                <DialogHeader>
                  <DialogTitle>Submit a grant proposal</DialogTitle>
                  <DialogDescription>
                    A short abstract is enough at this stage. Shortlisted teams are invited to submit a
                    full protocol.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit} className="mt-4 space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="grant-pi">Principal Investigator</Label>
                    <Input id="grant-pi" data-testid="grant-pi-input" required value={form.principal_investigator} onChange={set("principal_investigator")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grant-email">Email</Label>
                    <Input id="grant-email" type="email" data-testid="grant-email-input" required value={form.email} onChange={set("email")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grant-org">University / Organisation</Label>
                    <Input id="grant-org" data-testid="grant-org-input" required value={form.organisation} onChange={set("organisation")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grant-area">Priority area</Label>
                    <Select value={form.priority_area} onValueChange={(v) => setForm((f) => ({ ...f, priority_area: v }))}>
                      <SelectTrigger id="grant-area" data-testid="grant-area-select">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {AREAS.map((a) => (
                          <SelectItem key={a.title} value={a.title}>{a.title}</SelectItem>
                        ))}
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grant-abstract">Abstract (min. 20 characters)</Label>
                    <Textarea id="grant-abstract" rows={5} data-testid="grant-abstract-input" required minLength={20} value={form.abstract} onChange={set("abstract")} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="grant-budget">Indicative budget (INR)</Label>
                    <Input id="grant-budget" data-testid="grant-budget-input" required placeholder="e.g. 18,00,000" value={form.budget_inr} onChange={set("budget_inr")} />
                  </div>
                  <Button type="submit" disabled={busy} className="w-full rounded-full" data-testid="grant-submit-button">
                    {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                    {busy ? "Submitting…" : "Submit proposal"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
