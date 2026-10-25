import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

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
    title: 'Fault Diagnosis & Troubleshooting',
    description: 'Professional diagnosis of power problems, system faults, tripping circuits and technical issues.',
  },
  {
    title: 'Maintenance',
    description: 'Preventive electrical maintenance and support to reduce downtime and improve reliability.',
  },
  {
    title: 'Wiring & Rewiring',
    description: 'Full wiring support, upgrades and rewiring for older or expanding properties.',
  },
  {
    title: 'Lighting',
    description: 'Interior and exterior lighting installations, replacements and energy-efficient upgrades.',
  },
  {
    title: 'Solar Installation',
    description: 'Solar panel, inverter and battery installation enquiries, with recommendations based on your property and backup needs.',
  },
  {
    title: 'Solar Maintenance',
    description: 'Enquire about inspection and maintenance support for solar panels, inverters and battery systems.',
  },
];

export default function ServicesPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo />

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/catalogue">Catalogue</Link>
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
            <Link href={`/booking?service=${encodeURIComponent(item.title)}`} className="primary-btn">Book this service</Link>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <div>
          <BrandLogo className="footer-brand" />
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
          <a href="tel:+2348106127461">+234 810 612 7461</a>
          <a href="https://wa.me/2348106127461" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
