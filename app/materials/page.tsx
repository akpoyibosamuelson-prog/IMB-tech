import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

const products = [
  'Cables and wires',
  'Switches and sockets',
  'Lighting and fittings',
  'Circuit breakers and protection devices',
  'Distribution boards',
  'Conduits and accessories',
  'Electrical tools',
  'Solar accessories',
  'Installation materials',
  'Commercial supply items',
  'Solar panels and mounting systems',
  'Inverters and battery storage',
  'Solar cables and protection equipment',
];

export default function MaterialsPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo className="branding" />
        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/materials">Materials</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/booking">Book a Service</Link>
        </div>
      </header>

      <section className="page-hero compact-hero">
        <p className="eyebrow">Electrical materials</p>
        <h1>Quality electrical supply for homes, contractors, and businesses.</h1>
        <p>
          From basic fittings to project-critical components, IMB Tech can help you source the correct materials for your work.
        </p>
      </section>

      <section className="feature-grid two-up product-grid">
        {products.map((product) => (
          <div className="info-card product-item" key={product}>
            <h3>{product}</h3>
            <p>Available through enquiry, quotation, or direct consultation for suitable project requirements.</p>
            <Link href={`/contact?enquiryType=${encodeURIComponent(product.toLowerCase().includes('solar') || product.toLowerCase().includes('inverter') ? 'Solar installation' : 'Materials enquiry')}`}>
              Request availability <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </section>

      <section className="cta-box">
        <div>
          <p className="eyebrow">Need a quote?</p>
          <h3>Tell us your material requirement and quantity.</h3>
        </div>
        <Link href="/contact" className="primary-btn">Send enquiry</Link>
      </section>

      <footer className="site-footer">
        <div><BrandLogo className="footer-brand" /></div>
        <div>
          <h4>Support</h4>
          <Link href="/booking">Book a service</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+2348106127461">+234 810 612 7461</a>
          <a href="https://wa.me/2348106127461" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
