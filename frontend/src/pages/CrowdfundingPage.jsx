"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "../components/ui/dialog";
import { api, inr } from "../lib/api";

const AMOUNTS = [1000, 2500, 5000, 10000];

export default function CrowdfundingPage() {
  const [campaigns, setCampaigns] = useState([]);
  const [active, setActive] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", amount_inr: 2500 });
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    api.get("/campaigns").then((r) => setCampaigns(r.data)).catch(() => setCampaigns([]));
  }, []);

  const pledge = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const { data } = await api.post(`/campaigns/${active.slug}/pledge`, {
        name: form.name,
        email: form.email,
        amount_inr: Number(form.amount_inr),
      });
      setCampaigns((cs) =>
        cs.map((c) => (c.slug === active.slug ? { ...c, ...data.campaign } : c)),
      );
      toast.success("Pledge recorded", {
        description: `Thank you. ${inr(Number(form.amount_inr))} pledged towards ${active.child_name}'s therapy. An 80G receipt will follow.`,
      });
      setForm({ name: "", email: "", amount_inr: 2500 });
      setActive(null);
    } catch {
      toast.error("Pledge failed", { description: "Please check your details and try again." });
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <section className="border-b border-border py-20 sm:py-24" aria-labelledby="cf-heading">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Sponsor a child
            </p>
            <h1 id="cf-heading" className="mt-6 max-w-4xl text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl">
              Fund one child's therapy, <span className="font-medium text-primary">start to finish.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Each case below has been reviewed by our clinical board, with a named therapy plan and a
              costed list of sessions and equipment. Contributions are ring-fenced to that child; any
              surplus moves to the next child on the same waiting list, with the donor informed.
            </p>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
              80G tax exemption issued for every contribution.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-24" aria-label="Active campaigns">
          <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <div className="grid gap-6 lg:grid-cols-3" data-testid="campaigns-grid">
              {campaigns.map((c) => (
                <Card
                  key={c.slug}
                  data-testid={`campaign-card-${c.slug}`}
                  className="flex flex-col rounded-2xl border-border shadow-none"
                >
                  <CardContent className="flex flex-1 flex-col p-8">
                    <Badge variant="secondary" className="w-fit rounded-full font-normal">
                      {c.location}
                    </Badge>
                    <h2 className="mt-5 text-xl font-medium tracking-tight">{c.child_name}</h2>
                    <p className="mt-1 text-sm text-primary">{c.condition}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.need}</p>

                    <div className="mt-8">
                      <Progress
                        value={c.percent}
                        className="h-2"
                        aria-label={`${c.percent}% funded`}
                        data-testid={`campaign-progress-${c.slug}`}
                      />
                      <p className="mt-3 text-sm" data-testid={`campaign-raised-${c.slug}`}>
                        <span className="font-medium">{inr(c.raised_inr)}</span>
                        <span className="text-muted-foreground"> raised of {inr(c.goal_inr)} · {c.percent}%</span>
                      </p>
                    </div>

                    <p className="mt-5 text-xs text-muted-foreground">Verified by {c.verified_by}</p>

                    <Button
                      className="mt-8 rounded-full"
                      data-testid={`campaign-donate-${c.slug}`}
                      onClick={() => setActive(c)}
                    >
                      Contribute to {c.child_name.split(",")[0]}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
          <DialogContent data-testid="pledge-modal">
            <DialogHeader>
              <DialogTitle>Contribute to {active?.child_name}</DialogTitle>
              <DialogDescription>
                Pledges are recorded now; our team confirms the payment route and issues your 80G
                receipt by email.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={pledge} className="mt-4 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="p-name">Your name</Label>
                <Input id="p-name" required data-testid="pledge-name-input" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="p-email">Email</Label>
                <Input id="p-email" type="email" required data-testid="pledge-email-input" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="p-amount">Amount (INR)</Label>
                <div className="flex flex-wrap gap-2">
                  {AMOUNTS.map((a) => (
                    <Button
                      key={a}
                      type="button"
                      variant={Number(form.amount_inr) === a ? "default" : "outline"}
                      className="rounded-full"
                      data-testid={`pledge-amount-${a}`}
                      onClick={() => setForm((f) => ({ ...f, amount_inr: a }))}
                    >
                      {inr(a)}
                    </Button>
                  ))}
                </div>
                <Input
                  id="p-amount"
                  type="number"
                  min={1}
                  required
                  data-testid="pledge-amount-input"
                  value={form.amount_inr}
                  onChange={(e) => setForm((f) => ({ ...f, amount_inr: e.target.value }))}
                />
              </div>
              <Button type="submit" disabled={busy} className="w-full rounded-full" data-testid="pledge-submit-button">
                {busy && <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                {busy ? "Recording…" : "Confirm pledge"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </main>
      <SiteFooter />
    </>
  );
}
