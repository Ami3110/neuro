export const Section = ({ id, overline, title, lead, children, testId, tone = "default" }) => (
  <section
    id={id}
    data-testid={testId}
    aria-labelledby={`${id}-heading`}
    className={
      tone === "muted"
        ? "border-y border-border bg-muted/40 py-20 sm:py-28"
        : "py-20 sm:py-28"
    }
  >
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
      <div className="max-w-3xl">
        {overline && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{overline}</p>
        )}
        <h2
          id={`${id}-heading`}
          className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl"
        >
          {title}
        </h2>
        {lead && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{lead}</p>}
      </div>
      <div className="mt-14">{children}</div>
    </div>
  </section>
);
