"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "../lib/api";

const PURPOSES = [
  "Book a mobile clinic visit",
  "Screening appointment for my child",
  "Researcher / academic query",
  "CSR or institutional alliance",
  "Volunteer enquiry",
  "Media & press",
];

const DESKS = [
  ["Mobile clinic bookings", "clinics@neurodevfoundation.org", "+91 135 400 1180"],
  ["Research fund & grants", "research@neurodevfoundation.org", "+91 135 400 1184"],
  ["CSR & institutional alliances", "partnerships@neurodevfoundation.org", "+91 135 400 1190"],
  ["Volunteering", "volunteer@neurodevfoundation.org", "+91 135 400 1192"],
  ["Media & press", "press@neurodevfoundation.org", "+91 135 400 1195"],
];

const EMPTY = { name: "", email: "", phone: "", purpose: PURPOSES[0], district: "", message: "" };

export const ContactDesk = () => {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/enquiries", form);
      setDone(true);
      setForm(EMPTY);
      toast.success("Enquiry received", { description: "Our desk replies within two working days." });
    } catch (err) {
      toast.error("Could not send that", {
        description: err?.response?.data?.detail?.[0]?.msg || "Please check the form and try again.",
      });
    } finally {
      setBusy(false);
    }
  };

  return (
    <Section
      id="contact"
      testId="contact-section"
      tone="muted"
      overline="Contact & booking desk"
      title="One desk for clinics, researchers and funders"
      lead="Use this form to request a mobile clinic visit in your area, ask a research question, or start a CSR conversation. If you prefer, write directly to the relevant desk listed alongside."
    >
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <Card className="rounded-2xl border-border bg-card shadow-none">
          <CardContent className="p-8 sm:p-10">
            {done && (
              <div
                role="status"
                data-testid="contact-success-state"
                className="mb-8 flex gap-3 rounded-xl border border-primary/40 bg-primary/[0.06] p-5 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p>Thank you — your enquiry is logged and our desk will reply within two working days.</p>
              </div>
            )}
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="c-name">Full name</Label>
                  <Input id="c-name" required data-testid="contact-name-input" value={form.name} onChange={set("name")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" required data-testid="contact-email-input" value={form.email} onChange={set("email")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-phone">Phone (optional)</Label>
                  <Input id="c-phone" data-testid="contact-phone-input" value={form.phone} onChange={set("phone")} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-district">District / city</Label>
                  <Input id="c-district" data-testid="contact-district-input" value={form.district} onChange={set("district")} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-purpose">Reason for contact</Label>
                <Select value={form.purpose} onValueChange={(v) => setForm((f) => ({ ...f, purpose: v }))}>
                  <SelectTrigger id="c-purpose" data-testid="contact-purpose-select"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {PURPOSES.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">How can we help?</Label>
                <Textarea id="c-message" rows={5} minLength={10} required data-testid="contact-message-input" value={form.message} onChange={set("message")} />
              </div>
              <Button type="submit" disabled={busy} className="w-full rounded-full sm:w-auto" data-testid="contact-submit-button">
                {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                {busy ? "Sending…" : "Send enquiry"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div>
          <h3 className="text-xl font-medium tracking-tight">Institutional directory</h3>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {DESKS.map(([desk, email, phone]) => (
              <li key={desk} className="py-5">
                <p className="font-medium">{desk}</p>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 block text-sm text-primary underline-offset-4 hover:underline"
                  data-testid={`desk-email-${email.split("@")[0]}`}
                >
                  {email}
                </a>
                <p className="text-sm text-muted-foreground">{phone}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-border bg-card p-7 text-sm leading-relaxed text-muted-foreground">
            <p className="font-medium text-foreground">Registered office</p>
            <p className="mt-2">12 Rajpur Road, Dehradun 248001, Uttarakhand, India</p>
            <p className="mt-4 font-medium text-foreground">Desk hours</p>
            <p className="mt-2">Monday to Saturday, 9:30–18:00 IST</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
