import Link from 'next/link';

export default function ContactPage() {
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
        <p className="eyebrow">Contact IMB Tech</p>
        <h1>Request a quote, book a service or enquire about materials.</h1>
        <p>
          Use the form below to share your requirements and we will guide you on the right next step for your
          electrical job or supply need.
        </p>
      </section>

      <section className="contact-grid">
        <div className="contact-card">
          <h3>Contact details</h3>
          <p>Business contact information can be updated by the owner when fully configured.</p>
          <ul>
            <li>Email: hello@imbtech.example</li>
            <li>Phone: Available on request</li>
            <li>WhatsApp: Available on request</li>
            <li>Service area: Residential & commercial support</li>
          </ul>
        </div>

        <form className="contact-form" action="#" method="post">
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone number
            <input type="tel" name="phone" placeholder="Your phone number" />
          </label>
          <label>
            Email address
            <input type="email" name="email" placeholder="Your email" />
          </label>
          <label>
            Service or enquiry
            <select name="service">
              <option>Electrical installation</option>
              <option>Repair / troubleshooting</option>
              <option>Lighting upgrade</option>
              <option>Materials enquiry</option>
            </select>
          </label>
          <label>
            Project details
            <textarea name="details" placeholder="Tell us about your electrical need" rows={4} />
          </label>
          <button type="submit" className="primary-btn full-width">Send enquiry</button>
        </form>
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
          <Link href="/services">Service list</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/contact">Booking support</Link>
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

