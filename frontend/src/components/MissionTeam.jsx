import { Compass, Eye, ShieldCheck } from "lucide-react";
import { Section } from "./Section";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const PILLARS = [
  {
    icon: Compass,
    title: "Our mission",
    body: "Make early neurodevelopmental identification and therapy reachable for every child, regardless of the district they are born in or what their family earns.",
  },
  {
    icon: Eye,
    title: "Our vision",
    body: "A country where a developmental delay is caught in months rather than years, and where the science behind that care is open to every clinician and teacher.",
  },
  {
    icon: ShieldCheck,
    title: "How we work",
    body: "Clinician-led, evidence-first, and openly audited. Protocols are published, outcomes are measured, and every rupee is reported against programme delivery.",
  },
];

export const MissionTeam = ({ team }) => (
  <Section
    id="about"
    testId="about-section"
    overline="Who we are"
    title="A clinician-led foundation built for partnership"
    lead="We work alongside state health missions, district administrations, NGOs and corporate funders. Whichever door you come through, the same clinical standard and the same open reporting applies."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {PILLARS.map(({ icon: Icon, title, body }) => (
        <Card key={title} className="rounded-2xl border-border shadow-none">
          <CardContent className="p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="mt-20">
      <h3 className="text-xl font-medium tracking-tight sm:text-2xl">Leadership &amp; team</h3>
      <div className="mt-8 grid gap-6 lg:grid-cols-2" data-testid="team-grid">
        {team.map((m) => (
          <Card
            key={m.name}
            data-testid={`team-card-${m.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            className={`rounded-2xl shadow-none ${
              m.is_president ? "border-primary/40 bg-primary/[0.04]" : "border-border"
            }`}
          >
            <CardContent className="p-8">
              <div className="flex flex-wrap items-center gap-3">
                <h4 className="text-lg font-medium tracking-tight">{m.name}</h4>
                {m.is_president && <Badge className="rounded-full">President</Badge>}
              </div>
              <p className="mt-1 text-sm font-medium text-primary">{m.role}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.credentials}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Focus — {m.focus}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </Section>
);
