import Link from 'next/link';

const serviceOptions = [
  'Electrical installation',
  'Fault diagnosis',
  'Lighting upgrades',
  'Maintenance visits',
  'Project quotation',
];

export default function BookingPage() {
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
        <p className="eyebrow">Book a service</p>
        <h1>Schedule support for your next electrical job.</h1>
        <p>
          Tell us about the issue, the location and the type of work needed. We will confirm the next
          available appointment and requirements.
        </p>
      </section>

      <section className="booking-layout">
        <form
          className="booking-form"
          onSubmit={(event) => event.preventDefault()}
          aria-label="Booking form"
        >
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" />
          </label>

          <label>
            Email address
            <input type="email" name="email" placeholder="you@example.com" />
          </label>

          <label>
            Phone number
            <input type="tel" name="phone" placeholder="+27 00 000 0000" />
          </label>

          <label>
            Service required
            <select name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label>
            Preferred date
            <input type="date" name="date" />
          </label>

          <label>
            Project details
            <textarea name="details" rows={5} placeholder="Describe the issue, property type or project scope" />
          </label>

          <button type="submit" className="primary-btn full-width">
            Submit booking request
          </button>
        </form>

        <aside className="booking-summary">
          <h3>Booking summary</h3>
          <ul>
            <li>Quick service scheduling for homes and businesses</li>
            <li>Clear communication before the visit</li>
            <li>Professional support for repairs and installations</li>
          </ul>
          <div className="mini-box">
            <strong>Need a faster response?</strong>
            <p>hello@imbtech.co</p>
            <p>+27 (0) 11 123 4567</p>
          </div>
        </aside>
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
          <Link href="/booking">Book a service</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/faq">FAQs</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <span>hello@imbtech.co</span>
          <span>+27 (0) 11 123 4567</span>
          <span>Johannesburg, South Africa</span>
        </div>
      </footer>
    </main>
  );
}
