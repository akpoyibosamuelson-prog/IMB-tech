import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <Link href="/" className="branding" aria-label="IMB Tech home">
          <div className="brand-mark">IMB</div>
          <div>
            <div className="brand-name">IMB Tech</div>
            <div className="brand-tag">Electrical Services & Materials</div>
          </div>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/contact">Book a Service</Link>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">About IMB Tech</p>
        <h1>Built on safety, service and dependable electrical expertise.</h1>
        <p>
          IMB Tech supports residential, commercial and project-based customers with complete electrical
          solutions, from installation and repairs to materials supply and expert advice.
        </p>
      </section>

      <section className="stat-grid">
        <div className="stat-box">
          <strong>Residential</strong>
          <span>Reliable upgrades, repair work and safe installations for homes.</span>
        </div>
        <div className="stat-box">
          <strong>Commercial</strong>
          <span>Equipment support, inspections and maintenance for business premises.</span>
        </div>
        <div className="stat-box">
          <strong>Wholesale</strong>
          <span>Supply partnerships for contractors, traders, retailers and project buyers.</span>
        </div>
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
              <li><span>1</span><p>Safety-first electrical work and responsible workmanship.</p></li>
              <li><span>2</span><p>Clear quotations and honest recommendations.</p></li>
              <li><span>3</span><p>Dependable support for homes, businesses and growing projects.</p></li>
            </ol>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <div className="branding footer-brand">
            <div className="brand-mark">IMB</div>
            <div>
              <div className="brand-name">IMB Tech</div>
              <div className="brand-tag">Electrical Services & Materials</div>
            </div>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h4>Support</h4>
          <Link href="/contact">Bookings</Link>
          <Link href="/contact">FAQs</Link>
          <Link href="/contact">Request quote</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <span>Business contact to be configured</span>
          <span>Email: hello@imbtech.example</span>
          <span>WhatsApp: available on request</span>
        </div>
      </footer>
    </main>
  );
}

