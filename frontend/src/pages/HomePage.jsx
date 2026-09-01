"use client";

import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { Hero } from "../components/Hero";
import { MissionTeam } from "../components/MissionTeam";
import { Services } from "../components/Services";
import { ResearchFund } from "../components/ResearchFund";
import { Publications } from "../components/Publications";
import { CsrHub } from "../components/CsrHub";
import { VolunteerTeaser } from "../components/VolunteerTeaser";
import { Events } from "../components/Events";
import { Resources } from "../components/Resources";
import { ContactDesk } from "../components/ContactDesk";

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([
      api.get("/team"),
      api.get("/publications"),
      api.get("/events"),
      api.get("/gallery"),
      api.get("/resources"),
    ])
      .then(([team, publications, events, gallery, resources]) =>
        setData({
          team: team.data,
          publications: publications.data,
          events: events.data,
          gallery: gallery.data,
          resources: resources.data,
        }),
      )
      .catch(() => setData({ team: [], publications: [], events: [], gallery: [], resources: [] }));
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        {data ? (
          <>
            <MissionTeam team={data.team} />
            <Services />
            <ResearchFund />
            <Publications publications={data.publications} />
            <CsrHub />
            <VolunteerTeaser />
            {data.gallery.length > 0 && <Events events={data.events} gallery={data.gallery} />}
            <Resources resources={data.resources} />
            <ContactDesk />
          </>
        ) : (
          <p className="mx-auto max-w-7xl px-6 py-24 text-sm text-muted-foreground lg:px-10" data-testid="home-loading">
            Loading foundation content…
          </p>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
