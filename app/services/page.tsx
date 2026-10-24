const services = [
  {
    name: 'Electrical installation',
    description: 'Planning, installation and wiring for properties, offices and retail spaces.',
    price: 'From ₦25,000',
    badge: 'Residential & Commercial',
  },
  {
    name: 'Electrical repairs',
    description: 'Repairs for faulty sockets, switches, lighting and minor electrical issues.',
    price: 'From ₦12,000',
    badge: 'Repair work',
  },
  {
    name: 'Fault diagnosis',
    description: 'Secure and practical troubleshooting for recurring electrical problems.',
    price: 'Quotation required',
    badge: 'Inspection',
  },
  {
    name: 'Maintenance',
    description: 'Routine electrical checks and preventive service for long-term reliability.',
    price: 'From ₦15,000',
    badge: 'Preventive care',
  },
  {
    name: 'Lighting installation',
    description: 'Indoor and outdoor lighting upgrades for functional and decorative needs.',
    price: 'From ₦18,000',
    badge: 'Project work',
  },
  {
    name: 'Distribution board work',
    description: 'Panel upgrades, breaker protection and main distribution improvement work.',
    price: 'Quotation required',
    badge: 'Safety-critical',
  },
];

export default function ServicesPage() {
  return (
    <main className="site-shell inner-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">IMB</div>
          <div>
            <div className="brand-name">IMB Tech</div>
            <div className="brand-tag">Electrical Services & Materials</div>
          </div>
        </div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/materials">Materials</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href="/contact#book">Book now</a>
        </div>
      </header>

      <section className="page-hero">
        <p className="eyebrow">Our services</p>
        <h1>Quality electrical services tailored to your needs.</h1>
      </section>

      <section className="card-grid three-up service-list">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <div className="card-copy">
              <span className="service-badge">{service.badge}</span>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="service-meta">{service.price}</div>
              <div className="card-actions">
                <a href="/contact#book">Book service</a>
                <a href="/contact">Request quote</a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
