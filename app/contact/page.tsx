import Link from 'next/link';

const enquiryOptions = [
  'Domestic electrical works',
  'Commercial maintenance and inspections',
  'Materials and supply enquiries',
  'Project quotations and contractor support',
];

export default function ContactPage() {
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
        <p className="eyebrow">Contact IMB Tech</p>
        <h1>Tell us what you need and we will guide the next step.</h1>
        <p>
          We help with service bookings, project quotations, materials enquiries and general electrical
          support for homes, businesses and contractors.
        </p>
      </section>

      <section className="booking-layout">
        <form
          className="booking-form"
          onSubmit={(event) => event.preventDefault()}
          aria-label="Contact form"
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
            Enquiry type
            <select name="enquiryType" defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option>Service booking</option>
              <option>Project quotation</option>
              <option>Materials enquiry</option>
              <option>General support</option>
            </select>
          </label>

          <label>
            Project details
            <textarea name="details" rows={5} placeholder="Tell us about your project or requirement" />
          </label>

          <button type="submit" className="primary-btn full-width">
            Send enquiry
          </button>
        </form>

        <aside className="booking-summary">
          <h3>What we can help with</h3>
          <ul>
            {enquiryOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mini-box">
            <strong>Contact us directly</strong>
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
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Request quote</Link>
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
