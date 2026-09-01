"use client";

import { useState } from "react";
import { toast } from "sonner";
import { BadgeCheck, CheckCircle2, FileBarChart, Loader2, Receipt, ScrollText } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "../lib/api";

const METRICS = [
  { icon: ScrollText, label: "CSR-1 compliant", detail: "100% statutory CSR-1 registration with the MCA" },
  { icon: Receipt, label: "80G & 12A", detail: "Tax exemption certificates issued for every contribution" },
  { icon: FileBarChart, label: "Quarterly ESG audits", detail: "Independently audited ESG and impact reports each quarter" },
  { icon: BadgeCheck, label: "87% programme spend", detail: "Administrative overhead capped at 13% by trust deed" },
];

const INTERESTS = [
  "Fund a mobile therapy van",
  "Adopt a district screening programme",
  "Sponsor the research fund",
  "Employee volunteering programme",
  "Multi-year strategic alliance",
];

const BANDS = ["Under ₹10 lakh", "₹10–50 lakh", "₹50 lakh–2 crore", "Above ₹2 crore", "To be discussed"];

const EMPTY = { contact_name: "", email: "", company: "", interest: INTERESTS[0], budget_band: BANDS[1], message: "" };

export const CsrHub = () => {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/csr-requests", form);
      setDone(true);
      setForm(EMPTY);
      toast.success("Proposal request logged", {
        description: "Our partnerships desk will send a tailored CSR proposal within three working days.",
      });
    } catch (err) {
      toast.error("Submission failed", {
        description: err?.response?.data?.detail?.[0]?.msg || "Please review the form and try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Section
      id="csr"
      testId="csr-section"
      overline="Institutional funding"
      title="CSR, foundations & philanthropy"
      lead="Built for CSR heads, grant-making foundations, government partners and philanthropists who need auditable outcomes, statutory compliance and a clear line from rupee to child."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-testid="csr-metrics">
        {METRICS.map(({ icon: Icon, label, detail }) => (
          <Card key={label} className="rounded-2xl border-border shadow-none">
            <CardContent className="p-7">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <p className="mt-5 font-display text-lg font-medium tracking-tight">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="A group of volunteers distributing supplies at an outdoor community aid camp."
              loading="lazy"
              className="h-72 w-full object-cover sm:h-80"
            />
          </div>
          <h3 className="mt-10 text-xl font-medium tracking-tight">What a partnership looks like</h3>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            {[
              "A named district or route, so your reporting maps to real geography.",
              "Baseline, midline and endline screening data with child-level outcome indicators.",
              "Quarterly ESG-ready reporting pack aligned to BRSR disclosure needs.",
              "Employee volunteering days at district workshops, with clinical supervision.",
              "Co-branded launch, press release and site visit for your leadership.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Card className="h-fit rounded-2xl border-border bg-muted/40 shadow-none">
          <CardContent className="p-8 sm:p-10">
            <h3 className="text-xl font-medium tracking-tight">Request a CSR proposal</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us the outcome you want to fund. We will send a costed, district-specific proposal.
            </p>

            {done && (
              <div
                data-testid="csr-success-state"
                role="status"
                className="mt-6 flex gap-3 rounded-xl border border-primary/40 bg-primary/[0.06] p-5 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p>
                  Request received. Our partnerships desk will be in touch within three working days
                  with a tailored proposal and compliance pack.
                </p>
              </div>
            )}

            <form onSubmit={submit} className="mt-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="csr-name">Your name</Label>
                <Input id="csr-name" data-testid="csr-name-input" required value={form.contact_name} onChange={set("contact_name")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="csr-email">Work email</Label>
                <Input id="csr-email" type="email" data-testid="csr-email-input" required value={form.email} onChange={set("email")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="csr-company">Company / foundation</Label>
                <Input id="csr-company" data-testid="csr-company-input" required value={form.company} onChange={set("company")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="csr-interest">Area of interest</Label>
                <Select value={form.interest} onValueChange={(v) => setForm((f) => ({ ...f, interest: v }))}>
                  <SelectTrigger id="csr-interest" data-testid="csr-interest-select"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {INTERESTS.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="csr-band">Indicative budget band</Label>
                <Select value={form.budget_band} onValueChange={(v) => setForm((f) => ({ ...f, budget_band: v }))}>
                  <SelectTrigger id="csr-band" data-testid="csr-budget-select"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {BANDS.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="csr-message">What outcome would you like to fund?</Label>
                <Textarea id="csr-message" rows={4} minLength={10} required data-testid="csr-message-input" value={form.message} onChange={set("message")} />
              </div>
              <Button type="submit" disabled={busy} className="w-full rounded-full" data-testid="csr-submit-button">
                {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                {busy ? "Sending…" : "Request proposal"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
};
