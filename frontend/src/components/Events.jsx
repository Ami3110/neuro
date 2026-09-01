"use client";

import { useState } from "react";
import { toast } from "sonner";
import { CalendarDays, ChevronLeft, ChevronRight, Loader2, MapPin } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "./ui/dialog";
import { api } from "../lib/api";

const fmt = (d) =>
  new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

const EMPTY = { name: "", email: "", role: "Clinician" };

export const Events = ({ events, gallery }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [slide, setSlide] = useState(0);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const register = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/symposium-registrations", form);
      toast.success("You're registered", { description: "Joining details will be emailed closer to the date." });
      setForm(EMPTY);
      setOpen(false);
    } catch {
      toast.error("Registration failed", { description: "Please check your details and try again." });
    } finally {
      setBusy(false);
    }
  };

  const current = gallery[slide];

  return (
    <Section
      id="events"
      testId="events-section"
      tone="muted"
      overline="Events & press"
      title="Milestones, media releases and community launches"
      lead="A record of where we have been and what is next. Nothing here moves on its own — use the controls to browse the gallery."
    >
      <div className="grid gap-6 lg:grid-cols-2" data-testid="events-grid">
        {events.map((ev) => (
          <Card
            key={ev.slug}
            data-testid={`event-card-${ev.slug}`}
            className="flex flex-col overflow-hidden rounded-2xl border-border bg-card shadow-none"
          >
            <img src={ev.image} alt="" loading="lazy" className="h-52 w-full object-cover" />
            <CardContent className="flex flex-1 flex-col p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="rounded-full font-normal">{ev.kind}</Badge>
                <Badge
                  variant="outline"
                  className="rounded-full font-normal capitalize"
                  data-testid={`event-status-${ev.slug}`}
                >
                  {ev.status}
                </Badge>
              </div>
              <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight">{ev.title}</h3>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" /> {fmt(ev.date)}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden="true" /> {ev.location}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{ev.summary}</p>
              {ev.cta === "register" && (
                <Button
                  className="mt-8 self-start rounded-full"
                  data-testid="symposium-register-button"
                  onClick={() => setOpen(true)}
                >
                  Register free (virtual)
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-medium tracking-tight">District Caregiver Workshops — gallery</h3>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <figure data-testid="gallery-figure">
            <img
              src={current.url}
              alt={current.caption}
              className="h-72 w-full rounded-2xl border border-border object-cover sm:h-96"
            />
            <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <p className="max-w-xl text-sm text-muted-foreground" data-testid="gallery-caption">
                {current.caption}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground" aria-live="polite">
                  {slide + 1} / {gallery.length}
                </span>
                <Button
                  variant="outline" size="icon" className="rounded-full"
                  aria-label="Previous photo" data-testid="gallery-prev-button"
                  onClick={() => setSlide((s) => (s - 1 + gallery.length) % gallery.length)}
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline" size="icon" className="rounded-full"
                  aria-label="Next photo" data-testid="gallery-next-button"
                  onClick={() => setSlide((s) => (s + 1) % gallery.length)}
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </figcaption>
          </figure>

          <ul className="grid grid-cols-4 gap-3 lg:grid-cols-2">
            {gallery.map((g, i) => (
              <li key={g.url}>
                <button
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-current={i === slide}
                  aria-label={`Show photo ${i + 1}: ${g.caption}`}
                  data-testid={`gallery-thumb-${i}`}
                  className={`block w-full overflow-hidden rounded-xl border-2 transition-colors duration-200 ${
                    i === slide ? "border-primary" : "border-transparent hover:border-border"
                  }`}
                >
                  <img src={g.url} alt="" className="h-20 w-full object-cover sm:h-24" loading="lazy" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent data-testid="symposium-modal">
          <DialogHeader>
            <DialogTitle>Annual Clinical Symposium 2026</DialogTitle>
            <DialogDescription>
              Free virtual registration. Recordings are released open-access afterwards.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={register} className="mt-4 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="sym-name">Full name</Label>
              <Input id="sym-name" required data-testid="symposium-name-input" value={form.name} onChange={set("name")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sym-email">Email</Label>
              <Input id="sym-email" type="email" required data-testid="symposium-email-input" value={form.email} onChange={set("email")} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sym-role">Your role</Label>
              <Input id="sym-role" required data-testid="symposium-role-input" value={form.role} onChange={set("role")} />
            </div>
            <Button type="submit" disabled={busy} className="w-full rounded-full" data-testid="symposium-submit-button">
              {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
              {busy ? "Registering…" : "Confirm registration"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </Section>
  );
};
