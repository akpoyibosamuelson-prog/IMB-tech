import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Electrical Installation",
    description:
      "Electrical installations for homes, offices, commercial buildings and new projects.",
  },
  {
    number: "02",
    title: "Repairs & Fault Diagnosis",
    description:
      "Identify electrical faults and request professional support for repairs and troubleshooting.",
  },
  {
    number: "03",
    title: "Wiring & Lighting",
    description:
      "Wiring, lighting installation, rewiring and electrical system improvements.",
  },
  {
    number: "04",
    title: "Maintenance & Inspection",
    description:
      "Electrical maintenance and inspections to help keep your property operating safely.",
  },
];

const features = [
  {
    title: "Retail & Wholesale",
    description:
      "Enquire about electrical materials for individual purchases, contractors and bulk orders.",
  },
  {
    title: "Service Bookings",
    description:
      "Tell us about your electrical project, describe the problem and request an appointment.",
  },
  {
    title: "Project Quotations",
    description:
      "Request a quotation for labour, electrical materials or complete installation projects.",
  },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <Link href="/" className="branding" aria-label="IMB Tech home">
          <img src="/imb-logo.svg" alt="IMB Tech logo" className="brand-logo" />
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/contact" className="secondary-btn">
            Request Quote
          </Link>
          <Link href="/booking" className="primary-btn">
            Book a Service
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">POWERING HOMES. SUPPORTING BUSINESSES.</p>

          <h1>
            Reliable electrical services.
            <br />
            <span>Materials you can count on.</span>
          </h1>

          <p className="hero-description">
            IMB Tech connects homes, businesses, contractors and retailers
            with electrical services, material enquiries, project quotations
            and convenient service bookings.
          </p>

          <div className="hero-actions">
            <Link href="/booking" className="primary-btn">
              Book Electrical Service
            </Link>
            <Link href="/products" className="secondary-btn">
              Explore Materials
            </Link>
          </div>

          <div className="hero-note">
            Electrical installations <span>•</span> Repairs <span>•</span>{" "}
            Materials <span>•</span> Project support
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-topline">
            <span className="status-dot" />
            YOUR ELECTRICAL PROJECT, SIMPLIFIED
          </div>

          <div className="electric-symbol">ϟ</div>

          <div className="visual-card">
            <div>
              <span className="visual-label">OUR APPROACH</span>
              <h3>From enquiry to completion.</h3>
            </div>
            <p>
              Discuss your needs, request a quotation, arrange a service
              and keep track of the next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Our services">
        <div>
          <strong>01</strong>
          <span>Electrical Services</span>
        </div>
        <div>
          <strong>02</strong>
          <span>Material Enquiries</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Retail & Wholesale</span>
        </div>
        <div>
          <strong>04</strong>
          <span>Project Quotations</span>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Electrical support for your next project.</h2>
          </div>
          <Link href="/services" className="text-link">
            Explore all services →
          </Link>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="card-number">{service.number}</span>
              <div className="service-icon">ϟ</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link href="/booking" className="text-link">
                Request service →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="materials-section">
        <div className="materials-copy">
          <p className="eyebrow">ELECTRICAL MATERIALS</p>
          <h2>Get the right materials for the job.</h2>
          <p>
            Looking for electrical cables, switches, sockets, lighting,
            protection equipment or installation accessories? Browse
            available products or request a quotation for your materials list.
          </p>
          <div className="hero-actions">
            <Link href="/products" className="primary-btn">
              Browse Products
            </Link>
            <Link href="/contact" className="secondary-btn">
              Request Material Quote
            </Link>
          </div>
        </div>

        <div className="materials-panel">
          <div className="material-row">
            <span className="material-icon">↗</span>
            <div>
              <strong>Retail purchases</strong>
              <p>Enquire about individual product requirements.</p>
            </div>
          </div>
          <div className="material-row">
            <span className="material-icon">▦</span>
            <div>
              <strong>Wholesale enquiries</strong>
              <p>Request pricing for bulk and contractor orders.</p>
            </div>
          </div>
          <div className="material-row">
            <span className="material-icon">✓</span>
            <div>
              <strong>Project quotations</strong>
              <p>Submit a materials list for pricing and review.</p>
            </div>
          </div>
          <p className="availability-note">
            Product availability and pricing should be confirmed before
            an order is finalised.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A SIMPLER WAY TO GET STARTED</p>
            <h2>What do you need help with?</h2>
          </div>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <article className="feature-card" key={feature.title}>
              <span className="card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link
                href={
                  index === 0
                    ? "/products"
                    : index === 1
                      ? "/booking"
                      : "/contact"
                }
                className="text-link"
              >
                Get started →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <p className="eyebrow">LET'S DISCUSS YOUR PROJECT</p>
        <h2>Have a job to complete or materials to source?</h2>
        <p>
          Tell us what you need. Request a service appointment, ask about
          electrical materials or discuss your project requirements.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="primary-btn">
            Contact IMB Tech
          </Link>
          <Link href="/booking" className="secondary-btn">
            Request an Appointment
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <Link href="/" className="branding footer-brand">
            <img src="/imb-logo.svg" alt="IMB Tech logo" className="brand-logo" />
          </Link>
          <p>
            Electrical services, materials and project support for homes,
            businesses and contractors.
          </p>
        </div>

        <div>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/services">Our Services</Link>
          <Link href="/products">Products</Link>
        </div>

        <div>
          <h4>Customer Support</h4>
          <Link href="/booking">Book a Service</Link>
          <Link href="/contact">Request a Quote</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>Business Portal</h4>
          <p>
            Inventory, orders, bookings and payment management can be
            provided through a separate secured owner dashboard.
          </p>
        </div>
      </footer>

      <div className="copyright">
        © {new Date().getFullYear()} IMB Tech. All rights reserved.
      </div>
    </main>
  );
}
