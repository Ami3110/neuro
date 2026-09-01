import Link from "next/link";
import { Activity, Mail, MapPin, Phone } from "lucide-react";

const DIRECTORY = [
  { desk: "Mobile clinic bookings", email: "clinics@neurodevfoundation.org", phone: "+91 135 400 1180" },
  { desk: "Research fund & grants", email: "research@neurodevfoundation.org", phone: "+91 135 400 1184" },
  { desk: "CSR & institutional alliances", email: "partnerships@neurodevfoundation.org", phone: "+91 135 400 1190" },
  { desk: "Media & press", email: "press@neurodevfoundation.org", phone: "+91 135 400 1195" },
];

export const SiteFooter = () => (
  <footer className="border-t border-border bg-slate-900 text-slate-200" data-testid="site-footer">
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-500 text-slate-950">
              <Activity className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-white">
              NeuroDevelopment Foundation
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
            A clinical, research and equity organisation working on neurodevelopmental care for
            children in low-resource districts. Registered public charitable trust.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-400">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              Registered office: 12 Rajpur Road, Dehradun 248001, Uttarakhand, India
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              +91 135 400 1180 (Mon–Sat, 9:30–18:00 IST)
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" aria-hidden="true" />
              hello@neurodevfoundation.org
            </li>
          </ul>
        </div>

        <nav aria-label="Contact directory">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
            Institutional desks
          </h2>
          <ul className="mt-6 space-y-5 text-sm">
            {DIRECTORY.map((d) => (
              <li key={d.desk}>
                <p className="font-medium text-white">{d.desk}</p>
                <a
                  href={`mailto:${d.email}`}
                  className="block text-slate-400 underline-offset-4 hover:underline"
                  data-testid={`footer-email-${d.email.split("@")[0]}`}
                >
                  {d.email}
                </a>
                <p className="text-slate-500">{d.phone}</p>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">Explore</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-400">
            {[
              ["/#services", "Services & field clinics"],
              ["/#research-fund", "Research fund"],
              ["/#publications", "Publications"],
              ["/#csr", "CSR partnerships"],
              ["/#resources", "Free public resources"],
              ["/#contact", "Contact & booking desk"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="underline-offset-4 hover:text-white hover:underline">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link href="/crowdfunding" className="underline-offset-4 hover:text-white hover:underline">
                Sponsor a child's therapy
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="underline-offset-4 hover:text-white hover:underline">
                Volunteer with us
              </Link>
            </li>
          </ul>
          <div className="mt-8 space-y-1 text-xs text-slate-500">
            <p>CSR-1 registered · 80G &amp; 12A exemption</p>
            <p>Quarterly ESG audit reports published</p>
          </div>
        </nav>
      </div>

      <div className="mt-14 border-t border-slate-800 pt-8 text-xs text-slate-500">
        © {new Date().getFullYear()} NeuroDevelopment Foundation. Open-access publications released under
        CC BY 4.0.
      </div>
    </div>
  </footer>
);
