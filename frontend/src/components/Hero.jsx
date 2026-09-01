import { ArrowRight, FlaskConical, HeartHandshake } from "lucide-react";
import { Button } from "./ui/button";

const FACTS = [
  ["14,820", "children screened"],
  ["96", "villages reached"],
  ["4,380", "caregivers trained"],
  ["87%", "spend on programmes"],
];

export const Hero = () => (
  <section className="relative border-b border-border" aria-labelledby="hero-heading">
    <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Care · Research · Equity
        </p>
        <h1
          id="hero-heading"
          className="mt-6 text-4xl font-light tracking-tight sm:text-5xl lg:text-6xl"
        >
          Transforming Neurodevelopment Through{" "}
          <span className="font-medium text-primary">Care, Research &amp; Equity.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
          We run van-based therapy clinics that reach rural doorsteps, screen brain development
          across the maternal 1,000 days, publish open scientific toolkits any clinician can use
          for free, and fund independent research grants on low-resource neurodevelopmental care.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full" data-testid="hero-caregiver-cta">
            <a href="/#services">
              <HeartHandshake className="mr-2 h-5 w-5" aria-hidden="true" />
              I'm a parent or caregiver
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full"
            data-testid="hero-institution-cta"
          >
            <a href="/#research-fund">
              <FlaskConical className="mr-2 h-5 w-5" aria-hidden="true" />
              I'm a funder or researcher
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
          {FACTS.map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {value}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src="https://images.unsplash.com/photo-1758598737547-666bce663667?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxjaGlsZCUyMG9jY3VwYXRpb25hbCUyMHRoZXJhcHklMjBzZW5zb3J5fGVufDB8fHx8MTc4Njk5ODM5MXww&ixlib=rb-4.1.0&q=85"
            alt="A mother and her young son building together with colourful blocks during a therapy session."
            className="h-[420px] w-full object-cover lg:h-[560px]"
            loading="eager"
          />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Every field session ends with a caregiver coaching routine the family can repeat at home.
        </p>
      </div>
    </div>
  </section>
);
