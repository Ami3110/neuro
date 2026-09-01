"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Download, FileText, Search } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const CATEGORIES = ["All", "Clinical Papers", "Policy Briefs", "Educator Toolkits"];

export const Publications = ({ publications }) => {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return publications.filter(
      (p) =>
        (tab === "All" || p.category === tab) &&
        (!needle ||
          p.title.toLowerCase().includes(needle) ||
          p.abstract.toLowerCase().includes(needle) ||
          p.authors.toLowerCase().includes(needle)),
    );
  }, [publications, tab, query]);

  return (
    <Section
      id="publications"
      testId="publications-section"
      tone="muted"
      overline="Knowledge repository"
      title="Publications, briefs and toolkits — all open-access"
      lead="Everything we learn is published free of paywalls, with a plain-language summary so caregivers and teachers can use it too."
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Tabs value={tab} onValueChange={setTab} className="w-full lg:w-auto">
          <TabsList className="h-auto flex-wrap justify-start gap-1 rounded-full p-1">
            {CATEGORIES.map((c) => (
              <TabsTrigger
                key={c}
                value={c}
                data-testid={`publications-tab-${c.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-full px-4 py-2 text-sm"
              >
                {c}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="relative w-full lg:max-w-sm">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            data-testid="publications-search-input"
            aria-label="Search publications by title, abstract or author"
            placeholder="Search titles, abstracts, authors…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="rounded-full pl-9"
          />
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" data-testid="publications-count" aria-live="polite">
        Showing {filtered.length} of {publications.length} publications
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2" data-testid="publications-grid">
        {filtered.map((p) => (
          <Card
            key={p.slug}
            data-testid={`publication-card-${p.slug}`}
            className="flex flex-col rounded-2xl border-border bg-card shadow-none"
          >
            <CardContent className="flex flex-1 flex-col p-8">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary" className="rounded-full font-normal">{p.category}</Badge>
                <span className="text-xs text-muted-foreground">{p.year}</span>
              </div>
              <h3 className="mt-5 text-lg font-medium leading-snug tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.authors}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.abstract}</p>
              <p className="mt-4 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed">
                <span className="font-medium">In plain language: </span>
                {p.plain_language}
              </p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText className="h-4 w-4" aria-hidden="true" /> PDF · {p.pdf_size}
                </span>
                <Button
                  variant="outline"
                  className="rounded-full"
                  data-testid={`publication-download-${p.slug}`}
                  onClick={() =>
                    toast.success("Preparing your download", {
                      description: `${p.title} — open-access PDF (${p.pdf_size}).`,
                    })
                  }
                >
                  <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                  Download Open-Access PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground" data-testid="publications-empty">
          No publications match that search. Try a broader term, or reset the category to “All”.
        </p>
      )}
    </Section>
  );
};
