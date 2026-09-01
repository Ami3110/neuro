"use client";

import { useState } from "react";
import { Baby, Brain, Truck, Users } from "lucide-react";
import { Section } from "./Section";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const SERVICES = [
  {
    num: "01",
    icon: Truck,
    title: "Mobile Therapy Fleet",
    plain: "Therapy vans that come to your village instead of you travelling to a city hospital.",
    body: "Fully equipped vans deliver occupational, speech and behavioural therapy at rural doorsteps on a fixed fortnightly route, so families do not lose a day's wage to reach care.",
    points: ["Occupational therapy", "Speech & language", "Behavioural support", "Fixed fortnightly routes"],
    span: "lg:col-span-8 lg:row-span-2",
    image:
      "https://images.unsplash.com/photo-1773140278162-fd7df1043f0c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzB8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbW9iaWxlJTIwY2xpbmljJTIwaGVhbHRofGVufDB8fHx8MTc4Njk5ODM5MXww&ixlib=rb-4.1.0&q=85",
    alt: "A medical response vehicle used as a mobile therapy unit.",
  },
  {
    num: "02",
    icon: Baby,
    title: "Maternal 1,000 Days Early Screening Protocol",
    plain: "Brain-development checks from pregnancy to the child's second birthday.",
    body: "Prenatal nutrition counselling paired with structured infant milestone surveillance at existing antenatal and immunisation visits — no new clinic required.",
    points: ["Prenatal nutrition", "Milestone surveillance", "Red-flag referral pathway"],
    span: "lg:col-span-4",
  },
  {
    num: "03",
    icon: Users,
    title: "Community Experience & Training Centers",
    plain: "Places where teachers and parents learn what to actually do day to day.",
    body: "District centres run educator workshops and caregiver empowerment programmes, turning clinical guidance into repeatable home and classroom routines.",
    points: ["Educator workshops", "Caregiver coaching", "Peer parent circles"],
    span: "lg:col-span-4",
  },
  {
    num: "04",
    icon: Brain,
    title: "Holistic Pediatric Rehabilitation",
    plain: "Longer-term support: calming practices, helpful devices and thinking-skill work.",
    body: "Mindfulness-based regulation, assistive and augmentative technology fitting, and structured cognitive enrichment delivered as a single coordinated plan per child.",
    points: ["Mindfulness & regulation", "Assistive technology", "Cognitive enrichment", "Coordinated care plan"],
    span: "lg:col-span-12",
    image:
      "https://images.pexels.com/photos/30483024/pexels-photo-30483024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Close-up of a child's hands working with therapy putty during a session.",
  },
];

export const Services = () => {
  const [active, setActive] = useState("01");

  return (
    <Section
      id="services"
      testId="services-section"
      tone="muted"
      overline="Core services"
      title="Field clinics that go where the children are"
      lead="Four programmes, one continuum of care. Each card carries a plain-language summary first, and the clinical detail underneath."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          const isActive = active === s.num;
          return (
            <Card
              key={s.num}
              data-testid={`service-card-${s.num}`}
              tabIndex={0}
              onMouseEnter={() => setActive(s.num)}
              onFocus={() => setActive(s.num)}
              className={`group rounded-2xl shadow-none transition-colors duration-200 ${s.span} ${
                isActive ? "border-primary/50 bg-card" : "border-border bg-card/60"
              }`}
            >
              <CardContent className="flex h-full flex-col p-8 sm:p-10">
                <div className="flex items-start justify-between gap-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-3xl font-light text-muted-foreground/50">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-medium tracking-tight sm:text-2xl">{s.title}</h3>
                <p className="mt-4 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-foreground">
                  {s.plain}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Badge variant="secondary" className="rounded-full font-normal">
                        {p}
                      </Badge>
                    </li>
                  ))}
                </ul>
                {s.image && (
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="mt-8 h-56 w-full rounded-xl border border-border object-cover sm:h-64"
                  />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};
