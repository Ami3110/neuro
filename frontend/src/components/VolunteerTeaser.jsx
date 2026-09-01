import Link from "next/link";
import { ArrowRight, GraduationCap, HandHeart, Users2 } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const WAYS = [
  {
    icon: Users2,
    title: "Corporate employee volunteering",
    body: "Bring a team for a supervised district day: run play-based activity stations, assist registration at screening camps, or coach parents on home routines alongside our therapists.",
  },
  {
    icon: GraduationCap,
    title: "Teach, train or mentor",
    body: "Speech therapists, special educators, psychologists and paediatricians run skill sessions for our field staff and caregiver circles — remotely or on site.",
  },
  {
    icon: HandHeart,
    title: "Individual community volunteers",
    body: "Help with translation, transport coordination, workshop logistics, photography, or building open-source AAC content in Indian languages.",
  },
];

export const VolunteerTeaser = () => (
  <Section
    id="volunteer"
    testId="volunteer-teaser-section"
    overline="Get involved"
    title="Volunteer, or send your team into the field"
    lead="Governments, NGOs, companies and individuals all plug into the same programme. We supervise every placement clinically, so volunteers add capacity without adding risk to children."
  >
    <div className="grid gap-6 md:grid-cols-3">
      {WAYS.map(({ icon: Icon, title, body }) => (
        <Card key={title} className="rounded-2xl border-border shadow-none">
          <CardContent className="p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-lg font-medium tracking-tight">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </CardContent>
        </Card>
      ))}
    </div>

    <div className="mt-12 flex flex-col gap-3 sm:flex-row">
      <Button asChild size="lg" className="rounded-full" data-testid="volunteer-page-cta">
        <Link href="/volunteer">
          Sign up to volunteer <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full" data-testid="crowdfunding-page-cta">
        <Link href="/crowdfunding">Sponsor a child's therapy</Link>
      </Button>
    </div>
  </Section>
);
