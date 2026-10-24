import Link from 'next/link';

const serviceCatalog = [
  {
    title: 'Electrical Installation',
    description: 'New fitting and installation work for homes, retail spaces, offices and upgrading projects.',
  },
  {
    title: 'Electrical Repairs',
    description: 'Repair services for faulty wiring, damaged sockets, lights, switches and recurring electrical issues.',
  },
  {
    title: 'Fault Diagnosis &amp; Troubleshooting',
    description: 'Professional diagnosis of power problems, system faults, tripping circuits and technical issues.',
  },
  {
    title: 'Maintenance',
    description: 'Preventive electrical maintenance and support to reduce downtime and improve reliability.',
  },
  {
    title: 'Wiring &amp; Rewiring',
    description: 'Full wiring support, upgrades and rewiring for older or expanding properties.',
  },
  {
    title: 'Lighting',
    description: 'Interior and exterior lighting installations, replacements and energy-efficient upgrades.',
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <Link href="/" className="branding" aria-label="IMB Tech home">
          <div className="brand-mark">IMB</div>
          <div>
            <div className="brand-name">IMB Tech</div>
            <div className="brand-tag">Electrical Services &amp; Materials</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/booking">Book a Service</Link>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">Electrical services</p>
        <h1>Solutions for installation, maintenance, upgrades and repairs.</h1>
        <p>
          IMB Tech offers dependable support for homes, businesses and projects that need safe electrical
          work, expert guidance and clear communication.
        </p>
      </section>

      <section className="service-list">
        {serviceCatalog.map((item) => (
          <article className="service-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <Link href="/booking" className="primary-btn">Book this service</Link>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <div>
          <div className="branding footer-brand">
            <div className="brand-mark">IMB</div>
            <div>
              <div className="brand-name">IMB Tech</div>
              <div className="brand-tag">Electrical Services &amp; Materials</div>
            </div>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
        </div>

        <div>
          <h4>Support</h4>
          <Link href="/booking">Bookings</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/faq">Materials enquiry</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <span>hello@imbtech.co</span>
          <span>+27 (0) 11 123 4567</span>
          <span>WhatsApp: available on request</span>
        </div>
      </footer>
    </main>
  );
}
