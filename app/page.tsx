const PHONE = "(289) 933-4126";
const TEL = "tel:+12899334126";
const SMS = "sms:+12899334126";
const EMAIL = "wrightwayoutdoors25@gmail.com";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Wright%20Way%20Outdoors&query_place_id=ChIJaTqPHsyV-WwRC1Ydyl-Rx9g";

const ICONS: Record<string, string> = {
  phone: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  message: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  clock: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  leaf: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6",
  sprout: "M7 20h10M10 20c5.5-2.5.8-6.4 3-10M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8zM14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",
  scissors: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12",
  shovel: "M2 22v-5l5-5 5 5-5 5zM9.5 14.5 16 8M17 2l5 5-.5.5a3.53 3.53 0 0 1-5 0 3.53 3.53 0 0 1 0-5z",
  bricks: "M3 3h18v18H3zM3 9h18M3 15h18M9 3v6M15 9v6M9 15v6",
  trees: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0zM7 16v6M13 19v3M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",
  broom: "m13 11 9-9M14.6 12.6c.8.8.9 2.1.2 3L10 22l-8-8 6.4-4.8c.9-.7 2.2-.6 3 .2zM6.5 13.5l1.5 4M10 22c-1-2-3-3-5-4",
  calendar: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  check: "M20 6 9 17l-5-5",
  sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41",
  user: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
  sparkle: "M12 3l1.9 5.8L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.2z",
  arrow: "M5 12h14M12 5l7 7-7 7",
  chevron: "m6 9 6 6 6-6",
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zM16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01",
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={ICONS[name]} />
    </svg>
  );
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

const services = [
  { icon: "sprout", name: "Lawn Maintenance", text: "Weekly or bi-weekly mowing, trimming and edging for homes across Waterdown and Freelton. Sloped, oddly shaped or just plain difficult lawns are welcome. Customers with tricky properties say this is the crew that finally handles them properly.", featured: true },
  { icon: "leaf", name: "Garden Maintenance", text: "Weeding, bed edging and garden clean-ups so your beds look cared for all season. Plenty of customers come home to find their gardens transformed and tell us they were blown away." },
  { icon: "broom", name: "Spring & Fall Clean-Ups", text: "Leaves, sticks, dead growth and winter debris cleared out so the yard is ready for the season ahead. Clean-up season gets busy, so call ahead to get on the list." },
  { icon: "shovel", name: "Mulch Installation", text: "Bulk mulch spread neatly through every bed. Jobs move fast: one customer had 25 yards of mulch spread between 8 a.m. and noon, with the driveway and yard left spotless afterward." },
  { icon: "scissors", name: "Hedge Trimming", text: "Clean, even shaping for hedges and shrubs, done on a schedule or as a one-time tidy-up. Clippings are raked up and hauled away, so all you see is a sharp-looking hedge." },
  { icon: "bricks", name: "Patios & Interlock", text: "Patio and interlock installation and repair for backyards and walkways. Call to talk through what you have in mind and get a straight price." },
  { icon: "trees", name: "Landscaping Projects", text: "Backyard improvements and landscape upgrades, planned with you and built with care. Tell Jack what you want the space to do and he will give you an honest plan and price." },
  { icon: "check", name: "Yard Clean-Up", text: "One-off clean-ups for overgrown yards, new homeowners, or a property getting ready to sell. We cut back, clear out and leave it tidy so you can start fresh." },
];

const reviews = [
  { name: "Tom M.", job: "25 yards of mulch", text: "Jack and his team showed up at 8 a.m. on a Saturday to spread 25 yards of mulch and were done by noon. The house and yard were left spotless. A seriously impressive work ethic." },
  { name: "Andrew C.", job: "Garden clean-up", text: "Great communication from start to finish. I came home and was blown away by how much they had cleaned up in the gardens, and the crew kept going through a ridiculously hot day." },
  { name: "Sandy S.", job: "Ongoing lawn maintenance", text: "Prompt, dependable, honest and respectful of our property. We have a difficult lawn, and this is the best maintenance team we have found." },
  { name: "Leslea L.", job: "Landscaping", text: "Found Jack through the Waterdown Facebook group. Professional, responsive and great to work with, with fast service and top-quality results. The team clearly takes pride in the work." },
  { name: "Pamela H.", job: "Spring clean-up", text: "Showed up on time and the communication was on point. Meticulous, hard-working, flexible and conscientious." },
  { name: "Brent M.", job: "Lawn care, clean-up & mulch", text: "Jack and his team handle our lawn maintenance, yard clean-up and mulch. The quality and service have been fantastic." },
];

const steps = [
  { title: "Call or text Jack", text: `Reach Jack directly at ${PHONE}. Tell him what you need and roughly where you are.` },
  { title: "Free quote", text: "Jack looks at the property, talks through what you want and gives you a clear, honest price." },
  { title: "We do the work", text: "The crew shows up when promised, works steadily in any weather and keeps you posted." },
  { title: "Spotless finish", text: "We clean up before we leave. You walk the yard, and if anything is not right, we fix it." },
];

const faqs = [
  { q: "What areas do you serve?", a: "We work in Waterdown, Freelton and the surrounding Flamborough area. If you are just outside those communities, call or text and ask. If we can fit you into the route, we will." },
  { q: "Are quotes free?", a: `Yes. Call or text ${PHONE} and Jack will get back to you, take a look at the job and give you a price before any work starts.` },
  { q: "Do you offer regular lawn maintenance?", a: "Yes. Recurring lawn maintenance is a big part of what we do, including difficult or sloped lawns. Many customers keep us on all season so they never have to think about the yard." },
  { q: "How soon can you start?", a: "It depends on the season. Spring and fall clean-up weeks fill up fast, so reach out early. For smaller one-off jobs we can often fit you in quickly. Just ask when you call." },
  { q: "Will you clean up after the job?", a: "Always. Leaving the property spotless is the part customers mention most. Mulch, clippings and debris are cleaned up before we head out." },
  { q: "Who will actually show up?", a: "Jack Wright runs the business and leads the work with his crew. You deal with him directly, from the first call to the final walk-around." },
  { q: "What hours do you work?", a: "Our day starts at 8 a.m. The easiest way to reach us is a call or text to the number above. If we are on a job, we will get back to you as soon as we can." },
];

const areas = ["Waterdown", "Freelton", "Flamborough"];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Wright Way Outdoors",
    telephone: "+1-289-933-4126",
    email: EMAIL,
    founder: { "@type": "Person", name: "Jack Wright" },
    areaServed: ["Waterdown, ON", "Freelton, ON", "Flamborough, ON"],
    address: { "@type": "PostalAddress", addressLocality: "Waterdown", addressRegion: "ON", addressCountry: "CA" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "60" },
    sameAs: ["https://www.facebook.com/wrightwayoutdoors", "https://www.instagram.com/wrightwayoutdoors"],
    hasMap: MAPS,
    makesOffer: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2">Skip to content</a>

      {/* Utility strip */}
      <div className="hidden bg-brand-dark text-[0.9rem] text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2"><Icon name="pin" className="h-4 w-4" />Serving Waterdown, Freelton &amp; Flamborough</span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2"><Icon name="clock" className="h-4 w-4" />Opens 8 a.m.</span>
            <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4" />Free quotes</span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Wright Way Outdoors home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="leading-tight">
              <span className="block text-[1.15rem] font-extrabold text-ink">Wright Way Outdoors</span>
              <span className="block text-[0.8rem] font-semibold text-muted">Lawn &amp; Garden Care · Waterdown</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[0.98rem] font-semibold text-ink lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About Jack</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden items-center gap-2 font-bold text-ink hover:text-brand md:flex"><Icon name="phone" className="h-5 w-5 text-brand" />{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-12 items-center rounded-xl bg-cta px-5 font-bold text-white hover:bg-cta-dark focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-cta sm:inline-flex">Get a Free Quote</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-xl bg-cta text-white sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="fade-up">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-[0.9rem] font-bold text-brand-dark">
                <Icon name="user" className="h-4 w-4" />Owner-operated by Jack Wright
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold text-ink">
                Lawn Care &amp; Landscaping in Waterdown, Freelton &amp; Flamborough
              </h1>
              <p className="mt-5 max-w-[56ch] text-[1.15rem] text-muted">
                Mowing, garden clean-ups, mulch, hedges and patios from a local crew that shows up when promised, works hard in any weather and leaves your yard spotless. Call Jack directly for a free quote.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-cta px-7 text-[1.1rem] font-bold text-white shadow-[0_10px_24px_-12px_oklch(0.4_0.12_150/0.8)] hover:bg-cta-dark">
                  <Icon name="phone" className="h-5 w-5" />Call {PHONE}
                </a>
                <a href={SMS} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-brand px-7 text-[1.1rem] font-bold text-brand hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" />Text Jack
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.98rem] font-semibold text-ink">
                <span className="flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /> 5.0 on Google</span>
                <span className="text-line" aria-hidden="true">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">60 Google reviews</a>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Free quotes</span>
              </div>
            </div>

            <figure className="fade-up-2 relative rounded-2xl border border-line bg-card p-7 shadow-[0_24px_50px_-30px_oklch(0.3_0.05_45/0.5)] md:p-8">
              <div className="flex items-center justify-between">
                <Stars />
                <span className="text-[0.85rem] font-semibold text-muted">Google review</span>
              </div>
              <blockquote className="mt-5 text-[1.2rem] font-semibold leading-snug text-ink">
                &ldquo;They arrived at 8 a.m. to spread 25 yards of mulch and were finished by noon, leaving the house and yard spotless. Very impressive work ethic.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-soft font-extrabold text-brand-dark">TM</span>
                <span>
                  <span className="block font-bold text-ink">Tom M.</span>
                  <span className="block text-[0.92rem] text-muted">Mulch installation</span>
                </span>
              </figcaption>
              <div className="mt-6 grid grid-cols-2 gap-3 text-[0.95rem]">
                <div className="rounded-xl bg-tint p-3.5"><span className="block text-[1.5rem] font-extrabold text-brand">5.0</span><span className="text-muted">Google rating</span></div>
                <div className="rounded-xl bg-tint p-3.5"><span className="block text-[1.5rem] font-extrabold text-brand">60</span><span className="text-muted">Google reviews</span></div>
              </div>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "sparkle", label: "Rated 5.0 on 60 Google reviews" },
              { icon: "user", label: "Talk to the owner directly" },
              { icon: "calendar", label: "Shows up when promised" },
              { icon: "broom", label: "Leaves it spotless" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/15"><Icon name={t.icon} className="h-5 w-5" /></span>
                <span className="font-bold leading-snug">{t.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-[62ch]">
              <p className="font-bold text-brand">Our services</p>
              <h2 className="mt-2 text-[clamp(1.85rem,3.4vw,2.6rem)] font-extrabold">Lawn, garden and yard work, done properly</h2>
              <p className="mt-4 text-muted">From weekly mowing to a full backyard refresh, here is what Jack and the crew handle for homeowners around Waterdown. Not sure if your job fits? Call and ask. If we can help, we will tell you straight.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.name} className={`lift flex flex-col rounded-2xl border bg-card p-6 ${s.featured ? "border-brand ring-1 ring-brand" : "border-line"}`}>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                    {s.featured && <span className="rounded-full bg-brand px-2.5 py-1 text-[0.78rem] font-bold text-white">Most booked</span>}
                  </div>
                  <h3 className="mt-5 text-[1.2rem] font-extrabold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[0.98rem] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-dark">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-bold text-brand">Reviews</p>
                <h2 className="mt-2 text-[clamp(1.85rem,3.4vw,2.6rem)] font-extrabold">Rated 5.0 from 60 Google reviews</h2>
                <p className="mt-3 max-w-[60ch] text-muted">Neighbours keep mentioning the same things: Jack answers quickly, the crew is on time, and the yard is cleaner when they leave than when they arrived.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn inline-flex min-h-12 shrink-0 items-center gap-2 rounded-xl border-2 border-brand bg-card px-5 font-bold text-brand hover:bg-brand-soft">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="lift flex flex-col rounded-2xl border border-line bg-card p-6">
                  <Stars className="h-[18px] w-[18px]" />
                  <blockquote className="mt-4 flex-1 text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <span className="block font-bold">{r.name}</span>
                    <span className="block text-[0.92rem] text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-[0.95rem] text-muted">Melissa S. says the crew always shows up when promised, and Diane S. called the backyard work very professional. Reviews paraphrased from Google for length.</p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-bold text-brand">About Wright Way Outdoors</p>
              <h2 className="mt-2 text-[clamp(1.85rem,3.4vw,2.6rem)] font-extrabold">A local business built one yard at a time</h2>
              <div className="mt-5 space-y-4 text-[1.05rem] text-muted">
                <p>Jack Wright started Wright Way Outdoors while he was still in high school, cutting lawns and tidying gardens for neighbours in Freelton and Waterdown. Word spread through the local Facebook groups, and the work kept coming because the work was good.</p>
                <p>Today Jack leads a small, hard-working crew that handles lawn maintenance, garden clean-ups, mulch, hedges, patios and landscaping projects. Sixty Google reviews later, the business holds a perfect 5.0 rating.</p>
                <p>When you call, you talk to Jack. He answers his own messages, shows up when he says he will, and signs his replies to reviews himself. That is the whole idea behind the name: do it the right way, every time.</p>
              </div>
              <a href={TEL} className="btn mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-cta px-6 font-bold text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" />Call Jack at {PHONE}</a>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "calendar", title: "On time, every time", text: "Customers say the crew shows up exactly when promised, and Jack keeps you posted if anything changes." },
                { icon: "sun", title: "Works in any weather", text: "Reviewers mention the crew working straight through scorching summer days until the job is done." },
                { icon: "broom", title: "Spotless when we leave", text: "Homes and yards left spotless. Reviewers mention the clean-up again and again." },
                { icon: "message", title: "Quick, clear answers", text: "Call or text and you hear back from the owner, with a straight answer on price and timing." },
              ].map((d) => (
                <div key={d.title} className="rounded-2xl border border-line bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                  <h3 className="mt-4 text-[1.1rem] font-extrabold">{d.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-muted">{d.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <p className="font-bold text-brand">How it works</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3.4vw,2.6rem)] font-extrabold">Four simple steps to a better-looking yard</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl border border-line bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-[1.15rem] font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-[1.15rem] font-extrabold">{s.title}</h3>
                  <p className="mt-1.5 text-[0.98rem] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-bold text-brand">Service area</p>
              <h2 className="mt-2 text-[clamp(1.85rem,3.4vw,2.6rem)] font-extrabold">Proudly serving Waterdown and Flamborough</h2>
              <p className="mt-4 text-muted">We are based locally and keep our routes tight, so we can show up on time and keep regular customers on schedule. Here is where we work most often:</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-4 py-2 font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
              <p className="mt-6 text-[0.98rem] text-muted">Just outside these areas? Text Jack your street and he will let you know if he can fit you in.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-card">
              <iframe title="Map of Waterdown, Ontario" src="https://maps.google.com/maps?q=Waterdown%2C%20ON&z=12&output=embed" className="h-[340px] w-full md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <p className="font-bold text-brand">FAQ</p>
            <h2 className="mt-2 text-[clamp(1.85rem,3.4vw,2.6rem)] font-extrabold">Questions homeowners ask before calling</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-line bg-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[1.08rem] font-bold">
                    {f.q}
                    <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="px-6 pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-brand-dark text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-[clamp(1.85rem,3.6vw,2.75rem)] font-extrabold">Ready for a yard you are proud of?</h2>
              <p className="mt-3 max-w-[52ch] text-[1.1rem] text-white/85">Call or text Jack at {PHONE} for a free quote. Our day starts at 8 a.m., and if we are on a job, we will get right back to you.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl bg-cta px-7 text-[1.1rem] font-bold text-white hover:bg-cta-dark"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
              <a href={`mailto:${EMAIL}`} className="btn inline-flex min-h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-white/70 px-7 text-[1.1rem] font-bold text-white hover:bg-white/10"><Icon name="mail" className="h-5 w-5" />Email us</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-line bg-bg pb-24 md:pb-0">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 md:grid-cols-4 md:px-6">
          <div className="md:col-span-1">
            <p className="text-[1.15rem] font-extrabold">Wright Way Outdoors</p>
            <p className="mt-2 text-[0.95rem] text-muted">Lawn &amp; garden maintenance and landscaping in Waterdown, Freelton and Flamborough, Ontario. Owner: Jack Wright.</p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.facebook.com/wrightwayoutdoors" target="_blank" rel="noopener noreferrer" aria-label="Wright Way Outdoors on Facebook" className="grid h-11 w-11 place-items-center rounded-xl border border-line text-brand hover:bg-brand-soft"><Icon name="facebook" className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/wrightwayoutdoors" target="_blank" rel="noopener noreferrer" aria-label="Wright Way Outdoors on Instagram" className="grid h-11 w-11 place-items-center rounded-xl border border-line text-brand hover:bg-brand-soft"><Icon name="instagram" className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
              <li><a href={TEL} className="hover:text-brand">{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="break-all hover:text-brand">{EMAIL}</a></li>
              <li>Opens 8 a.m.</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">View on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-bold">Service area</p>
            <ul className="mt-3 space-y-2 text-[0.95rem] text-muted">
              {areas.slice(0, 3).map((a) => <li key={a}>{a}, ON</li>)}
              <li>and nearby communities</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 text-[0.88rem] text-muted md:px-6">© {new Date().getFullYear()} Wright Way Outdoors. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 p-2.5 backdrop-blur md:hidden">
        <a href={TEL} className="btn flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cta font-bold text-white"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn flex min-h-12 items-center justify-center gap-2 rounded-xl border-2 border-brand font-bold text-brand"><Icon name="message" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
