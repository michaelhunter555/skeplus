import Image from "next/image";
import { ContactForm } from "./components/contact-form";
import { ServiceAccordion } from "./components/service-accordion";
import { SiteHeader } from "./components/site-header";

const mechanicServices = [
  {
    title: "Engine repair",
    body: "Engine work in the bay, from a focused repair to a fuller teardown.",
    src: "/images/mechanic-ratchet.png",
    alt: "Mechanic using a ratchet on an open engine bay",
  },
  {
    title: "Diagnostics",
    body: "A close look at the engine so the problem is clear before parts are changed.",
    src: "/images/mechanic-diagnostics.png",
    alt: "Close view of an engine cover and wiring",
  },
  {
    title: "Batteries and electrical",
    body: "Batteries, starting, and charging systems when a vehicle will not turn over.",
    src: "/images/mechanic-battery.png",
    alt: "Technician lifting a car battery out of an engine bay",
  },
];

const offerings = [
  ["Trucking", "Local and long haul"],
  ["Mechanics", "Engines and electrical"],
  ["Quotes", "Ask for a rate"],
];

const features = ["Route notes", "Timing", "Paperwork", "Questions"];

export default function Home() {
  return (
    <div className="bg-white text-black">
      <SiteHeader />
      <main>
        <Hero />
        <Mechanics />
        <About />
        <Logistics />
        <ServiceAreas />
        <Planning />
        <QuoteBanner />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[720px] overflow-hidden lg:min-h-[850px]">
      <Image
        src="/images/hero-truck.png"
        alt="Black semi truck driving toward the camera on an open highway"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <SvgAsset
        src="/images/hero-overlay.svg"
        width={954}
        height={981}
        className="pointer-events-none absolute top-0 left-0 hidden sm:block"
      />
      <div className="relative z-10 mx-auto flex min-h-[720px] w-full max-w-[1512px] items-center px-4 pt-24 sm:px-6 lg:min-h-[850px] lg:px-[106px]">
        <div className="flex max-w-[640px] flex-col gap-11">
          <div>
            <p className="font-display text-lg font-normal tracking-[0.42em] uppercase sm:text-[26px] sm:tracking-[16px]">
              SKE Plus
            </p>
            <h1 className="mt-1 font-display text-4xl leading-[1.05] font-semibold sm:text-5xl">
              Trucking and mechanic services
            </h1>
            <p className="mt-4 max-w-[600px] text-lg leading-normal sm:text-[22px]">
              SKE Plus hauls freight and handles the mechanical work that keeps trucks and other
              vehicles moving. Ask about a load, an engine, or both.
            </p>
          </div>
          <ActionRow />
        </div>
      </div>
    </section>
  );
}

function Mechanics() {
  return (
    <section id="mechanics" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid w-full max-w-[1512px] gap-4 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-[106px] lg:py-20">
        <a href="#trucking" className="group relative min-h-[320px] overflow-hidden sm:min-h-[380px]">
          <Image
            src="/images/fleet.png"
            alt="A row of red, blue, and white semi trucks parked side by side"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/10" />
          <div className="relative flex h-full min-h-[320px] flex-col justify-end p-8 text-white sm:min-h-[380px] sm:p-10">
            <p className="font-display text-sm tracking-[0.28em] uppercase">Trucking</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Haul freight with a clear plan
            </h2>
            <p className="mt-3 max-w-md text-lg leading-snug">
              Local pickups and longer runs, set up before the truck leaves.
            </p>
          </div>
        </a>
        <a href="#mechanic-work" className="group relative min-h-[320px] overflow-hidden sm:min-h-[380px]">
          <Image
            src="/images/mechanic-engine.jpg"
            alt="Mechanic assembling an engine block"
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover object-[70%_center] transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-navy/10" />
          <div className="relative flex h-full min-h-[320px] flex-col justify-end p-8 text-white sm:min-h-[380px] sm:p-10">
            <p className="font-display text-sm tracking-[0.28em] uppercase">Mechanics</p>
            <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
              Repair work you can book
            </h2>
            <p className="mt-3 max-w-md text-lg leading-snug">
              Engines, diagnostics, and electrical service in the bay.
            </p>
          </div>
        </a>
      </div>

      <div id="mechanic-work" className="scroll-mt-24 bg-[rgba(245,243,234,0.72)]">
        <div className="mx-auto w-full max-w-[1512px] px-4 py-16 sm:px-6 lg:px-[106px] lg:py-20">
          <p className="font-display text-sm tracking-[0.28em] uppercase">Mechanic services</p>
          <h2 className="mt-2 max-w-[720px] font-display text-3xl font-semibold sm:text-4xl">
            Mechanic work for the vehicles you depend on
          </h2>
          <p className="mt-4 max-w-[680px] text-lg leading-normal">
            Engine repair, diagnostics, and electrical work, handled in the same company that
            moves the freight.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {mechanicServices.map((service) => (
              <article key={service.title} className="border border-black/10 bg-white">
                <div className="relative aspect-[824/668]">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-6 py-6">
                  <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-lg leading-normal">{service.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1512px] lg:grid-cols-2">
        <div className="relative min-h-[320px] sm:min-h-[420px]">
          <Image
            src="/images/mechanic-shop.jpg"
            alt="Engine on a stand in a service bay, with vehicles raised on lifts behind it"
            fill
            sizes="(min-width: 1024px) 756px, 100vw"
            className="object-cover object-[70%_center]"
          />
        </div>
        <div className="flex flex-col justify-center bg-navy px-6 py-12 text-white sm:px-12 lg:px-16">
          <p className="font-display text-sm tracking-[0.28em] uppercase">The bay</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            A bay built for the mechanical work
          </h2>
          <p className="mt-4 max-w-[520px] text-lg leading-[1.4]">
            Bring the vehicle in and we will walk through the repair, from the first look to the
            work in the bay.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center justify-center bg-gold px-8 py-4 text-lg font-semibold text-black hover:brightness-105"
          >
            Schedule mechanic work
          </a>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1512px] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-cream px-6 py-12 sm:px-12 lg:px-16">
          <p className="font-display text-sm tracking-[0.28em] uppercase">With the mechanics</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Hands on the job</h2>
          <p className="mt-4 max-w-[520px] text-lg leading-[1.4]">
            You can talk with the person doing the work. Parts and labor are laid out before the
            repair starts.
          </p>
        </div>
        <div className="relative min-h-[320px] sm:min-h-[420px]">
          <Image
            src="/images/mechanic-wrench.jpg"
            alt="Smiling mechanic holding a wrench beside a transmission on a stand"
            fill
            sizes="(min-width: 1024px) 756px, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-navy text-white">
      <div className="mx-auto flex min-h-[420px] w-full max-w-[760px] flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:min-h-[520px] lg:py-28">
        <p className="font-display text-lg tracking-[0.28em] text-gold uppercase">About Us</p>
        <h2 className="mt-3 font-display text-4xl font-semibold">SKE Plus</h2>
        <p className="mt-4 text-lg leading-[1.45]">
          SKE Plus hauls freight and repairs cars. Trucking moves loads. Mechanic service covers
          engines, diagnostics, and electrical work for everyday vehicles as well.
        </p>
        <p className="mt-6 inline-flex bg-gold px-6 py-3.5 font-display text-2xl font-semibold text-black">
          Trucking and car repair
        </p>
      </div>
    </section>
  );
}

function Logistics() {
  return (
    <section id="trucking" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid w-full max-w-[1512px] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[606px_1fr] lg:px-[106px] lg:py-10">
        <div className="relative h-[420px] sm:h-[480px]">
          <Image
            src="/images/fleet.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 606px, 100vw"
            className="object-cover object-left"
          />
          <div className="absolute top-8 right-4 left-4 flex max-w-[412px] flex-col gap-3 sm:top-12 sm:left-auto">
            {offerings.map(([title, note]) => (
              <div
                key={title}
                className="flex items-center gap-2.5 border border-gold-dark bg-white/61 px-5 py-4 backdrop-blur-[25px]"
              >
                <SvgAsset src="/images/stat-icon.svg" width={73} height={55} />
                <div>
                  <p className="text-2xl leading-none font-semibold">{title}</p>
                  <p className="mt-1 text-lg">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="max-w-[518px] font-display text-4xl leading-normal font-semibold">
            Trucking for the loads you need moved
          </h2>
          <div className="mt-2 max-w-[533px] space-y-4 text-lg leading-[1.35]">
            <p>
              Tell us the pickup, the drop, and the freight. We will put a plan together for the
              run.
            </p>
            <p>
              From a local haul to a longer route, the load leaves with a clear route and a driver
              who knows the job.
            </p>
          </div>
          <div className="mt-6">
            <ActionRow compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="service-areas" className="relative overflow-hidden bg-brand-red text-white">
      <Image
        src="/images/service-map.png"
        alt=""
        width={921}
        height={586}
        className="pointer-events-none absolute top-1/2 left-1/2 h-auto w-[min(921px,140%)] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-overlay"
      />
      <div className="relative mx-auto flex min-h-[560px] w-full max-w-[1512px] flex-col items-center justify-between px-4 py-14 text-center sm:px-6 lg:min-h-[693px] lg:py-16">
        <div>
          <h2 className="font-display text-4xl font-semibold">Our Service Areas</h2>
          <p className="mx-auto mt-3 max-w-[468px] font-display text-lg">
            Ask about a lane or a repair. Email dacosta@skeplus.com and tell us where the work is.
          </p>
        </div>
        <ActionRow />
      </div>
    </section>
  );
}

function Planning() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1512px] gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,650px)_1fr] lg:px-[106px] lg:py-20">
        <div className="flex flex-col gap-6">
          <article className="bg-cream px-8 py-12 sm:px-10">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Plan the trip before the wheels turn
            </h2>
            <p className="mt-4 font-display text-lg leading-normal">
              A haul goes more smoothly when the route, the timing, and the truck are talked
              through first.
            </p>
          </article>
          <article className="bg-cream px-8 py-12 sm:px-10">
            <h2 className="max-w-[566px] font-display text-3xl font-semibold sm:text-4xl">
              Routes, fuel, and timing
            </h2>
            <p className="mt-4 font-display text-lg leading-normal">
              We look at the route, the stops, and the conditions on the way so the trip is set
              before departure.
            </p>
          </article>
        </div>
        <div className="relative min-h-[520px] lg:min-h-[766px]">
          <Image
            src="/images/fleet.png"
            alt="Blue semi truck cab"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[80%_center]"
          />
          <div className="absolute top-1/2 left-4 flex w-[min(325px,calc(100%-2rem))] -translate-y-1/2 flex-col gap-5 sm:left-0 sm:-translate-x-8">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex flex-col items-center justify-center gap-2.5 border border-[#d5d5d5] bg-white/75 px-5 py-4 text-center backdrop-blur-[25px]"
              >
                <SvgAsset src="/images/feature-icon.svg" width={40} height={35} />
                <p className="text-2xl font-semibold sm:text-[28px]">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBanner() {
  return (
    <section className="relative min-h-[320px] overflow-hidden lg:min-h-[389px]">
      <Image
        src="/images/cta-banner.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="relative z-10 mx-auto flex min-h-[320px] w-full max-w-[1512px] flex-col items-start justify-center gap-8 px-6 py-16 sm:px-12 lg:min-h-[389px] lg:flex-row lg:items-center lg:justify-between lg:px-[206px]">
        <div className="text-white">
          <p className="font-display text-4xl font-semibold sm:text-5xl">Need a haul or a repair?</p>
          <p className="mt-2 font-copy text-2xl">Tell us what needs to move, or what needs to be fixed.</p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-black px-12 py-5 text-lg font-semibold text-white hover:bg-neutral-800"
        >
          Request a quote
        </a>
      </div>
    </section>
  );
}

function Careers() {
  return (
    <section id="services" className="scroll-mt-20 bg-white">
      <div className="grid lg:grid-cols-[minmax(280px,544px)_1fr]">
        <div className="relative min-h-[560px]">
          <Image
            src="/images/driver.png"
            alt="Driver standing with arms crossed in front of a truck"
            fill
            sizes="(min-width: 1024px) 544px, 100vw"
            className="object-cover object-top"
          />
          <div className="relative z-10 m-6 max-w-[571px] bg-white/70 px-8 py-10 backdrop-blur-[18px] sm:m-10 sm:px-12 sm:py-12">
            <h2 className="font-display text-4xl font-semibold">Our services</h2>
            <div className="mt-4 space-y-3.5 font-copy text-lg leading-[1.35]">
              <p>
                Trucking and mechanic services are both in this list. Open a row to read what it
                covers, and close it when you are done.
              </p>
              <p>Ask about a load, an engine, or the electrical work that gets a vehicle started.</p>
            </div>
            <a
              href="mailto:dacosta@skeplus.com"
              className="mt-8 inline-flex w-[285px] max-w-full items-center justify-center bg-black px-8 py-5 text-lg font-semibold text-white hover:bg-neutral-800"
            >
              Email SKE Plus
            </a>
          </div>
        </div>
        <div className="px-4 py-10 sm:px-8 lg:py-20 lg:pr-16 lg:pl-12">
          <ServiceAccordion />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-sand">
      <SvgAsset
        src="/images/contact-wave.svg"
        width={1637}
        height={215}
        className="pointer-events-none absolute bottom-0 -left-12"
      />
      <div className="relative mx-auto grid w-full max-w-[1512px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_659px] lg:items-start lg:px-[108px] lg:py-24">
        <div className="max-w-[571px] bg-white/70 px-8 py-10 backdrop-blur-[18px] sm:px-12 sm:py-12">
          <h2 className="max-w-[471px] font-display text-4xl font-semibold">
            Let Us Lend a Helping Hand
          </h2>
          <p className="mt-4 max-w-[471px] font-copy text-lg leading-[1.35]">
            Tell us about the load or the repair. Email dacosta@skeplus.com, or send a note with
            the form.
          </p>
          <a
            href="mailto:dacosta@skeplus.com"
            className="mt-8 flex items-center gap-2.5 border border-[#a49786] bg-[#eaeaea] px-5 py-6"
          >
            <SvgAsset src="/images/contact-icon.svg" width={29} height={29} />
            <span className="font-label text-xl sm:text-2xl">dacosta@skeplus.com</span>
          </a>
          <a
            href="#services"
            className="mt-8 inline-flex w-full max-w-[285px] items-center justify-center bg-gold-dark px-12 py-5 text-lg font-semibold text-white hover:brightness-110"
          >
            View services
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <Image
        src="/images/footer-truck.png"
        alt=""
        width={697}
        height={444}
        className="pointer-events-none absolute top-8 right-0 h-auto w-[min(697px,70%)] max-w-none opacity-66 mix-blend-lighten"
      />
      <div className="relative mx-auto w-full max-w-[1512px] px-4 pt-16 sm:px-6 lg:px-[104px] lg:pt-28">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <p className="inline-flex h-11 items-center rounded-[4px] bg-white px-3 text-xl font-semibold text-black">
              SKE Plus
            </p>
            <p className="mt-6 text-lg font-semibold">Freight on the road. Repairs in the bay.</p>
            <p className="mt-2 max-w-[392px] text-lg">
              SKE Plus moves freight and works on the vehicles that carry it.
            </p>
            <SvgAsset
              src="/images/social.svg"
              width={137}
              height={25}
              className="mt-8"
            />
          </div>
          <FooterColumn
            title="TERMS"
            links={[
              ["Terms and Conditions", "#contact"],
              ["Privacy Policy", "#contact"],
            ]}
          />
          <FooterColumn
            title="LINKS"
            links={[
              ["Mechanic Services", "#mechanics"],
              ["Trucking Services", "#trucking"],
              ["All services", "#services"],
            ]}
          />
          <FooterColumn
            title="CONTACT INFO"
            links={[
              ["dacosta@skeplus.com", "mailto:dacosta@skeplus.com"],
              ["Service area", "#service-areas"],
            ]}
          />
        </div>
        <p className="mt-16 border-t border-white/25 py-5 text-center text-base text-white/60">
          SKE PLUS © 2026 | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <p className="text-2xl font-semibold">{title}</p>
      <ul className="mt-4 space-y-1 text-xl leading-[1.55]">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:text-gold">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ActionRow({ compact = false }: { compact?: boolean }) {
  const size = compact ? "h-10 w-full px-4 sm:w-[204px]" : "px-9 py-[22px]";
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
      <a
        href="mailto:dacosta@skeplus.com"
        className={`inline-flex items-center justify-center bg-gold text-lg font-semibold text-black hover:brightness-105 ${size}`}
      >
        Email us
      </a>
      <a
        href="#contact"
        className={`inline-flex items-center justify-center bg-black text-lg font-semibold text-white hover:bg-neutral-800 ${size}`}
      >
        Request a quote
      </a>
    </div>
  );
}

function SvgAsset({
  src,
  width,
  height,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt="" width={width} height={height} className={`max-w-none ${className}`} />
  );
}
