import { toast } from "sonner";
import { Download, Languages } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const Resources = ({ resources }) => (
  <Section
    id="resources"
    testId="resources-section"
    overline="Open public hub"
    title="Free downloadable resources for every family"
    lead="No sign-up, no email wall, no cost. Print them, share them on WhatsApp, use them in your clinic or classroom."
  >
    <div className="grid gap-6 md:grid-cols-2" data-testid="resources-grid">
      {resources.map((r) => (
        <Card
          key={r.slug}
          data-testid={`resource-card-${r.slug}`}
          className="flex flex-col rounded-2xl border-border shadow-none"
        >
          <CardContent className="flex flex-1 flex-col p-8">
            <h3 className="text-lg font-medium tracking-tight">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.description}</p>
            <p className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Languages className="h-4 w-4" aria-hidden="true" /> {r.languages} · {r.format} · {r.size}
            </p>
            <Button
              className="mt-8 self-start rounded-full"
              data-testid={`resource-download-${r.slug}`}
              onClick={() =>
                toast.success("Download starting", { description: `${r.title} (${r.format}, ${r.size}).` })
              }
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              Download free
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </Section>
);
