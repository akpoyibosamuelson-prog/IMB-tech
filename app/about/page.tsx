import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

const stats = [
  { value: '1,200+', label: 'service appointments supported' },
  { value: '12+', label: 'years of practical electrical experience' },
  { value: '24/7', label: 'support for urgent fault enquiries' },
];

const principles = [
  'Safety-first electrical work and responsible workmanship.',
  'Clear quotations and honest recommendations.',
  'Dependable support for homes, businesses and growing projects.',
];

export default function AboutPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo />

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
        <p className="eyebrow">About IMB Tech</p>
        <h1>Built on safety, service and dependable electrical expertise.</h1>
        <p>
          IMB Tech supports residential, commercial and project-based customers with complete
          electrical solutions, from installation and repairs to materials supply and expert advice.
        </p>
      </section>

      <section className="stat-grid">
        {stats.map((item) => (
          <div className="stat-box" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="split-section">
          <div className="split-copy">
            <p className="eyebrow">Our mission</p>
            <h2>Deliver practical electrical solutions people can trust.</h2>
            <p>
              We focus on clear communication, professional workmanship, quality materials and timely
              support for every stage of the customer journey.
            </p>
          </div>

          <div className="feature-panel">
            <h3>What we stand for</h3>
            <ol>
              {principles.map((principle, index) => (
                <li key={principle}>
                  <span>{index + 1}</span>
                  <p>{principle}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
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
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Request quote</Link>
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
