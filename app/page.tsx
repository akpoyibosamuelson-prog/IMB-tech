import Link from 'next/link';

export default function BookingPage() {
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
          <Link href="/products">Products</Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/booking">Book a Service</Link>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">Book a service</p>
        <h1>Request electrical support for your home, office or project.</h1>
        <p>
          Tell us what is happening and we will guide you on scheduling, pricing and the best next step for your job.
        </p>
      </section>

      <section className="booking-layout">
        <form className="booking-form" action="#" method="post">
          <label>
            Full name
            <input type="text" name="customerName" placeholder="Your full name" />
          </label>
          <label>
            Phone number
            <input type="tel" name="phone" placeholder="Your phone number" />
          </label>
          <label>
            Email address
            <input type="email" name="email" placeholder="Your email address" />
          </label>
          <label>
            Service required
            <select name="service">
              <option>Electrical installation</option>
              <option>Fault diagnosis</option>
              <option>Lighting and rewiring</option>
              <option>Electrical maintenance</option>
            </select>
          </label>
          <label>
            Preferred date
            <input type="date" name="preferredDate" />
          </label>
          <label>
            Urgency
            <select name="urgency">
              <option>Routine</option>
              <option>Priority</option>
              <option>Emergency</option>
            </select>
          </label>
          <label>
            Project details
            <textarea name="details" rows={5} placeholder="Describe the problem or installation required" />
          </label>
          <button type="submit" className="primary-btn full-width">Submit booking request</button>
        </form>

        <aside className="booking-summary">
          <h3>Booking information</h3>
          <ul>
            <li>Service requests are reviewed before confirmation.</li>
            <li>Quotations may be provided for inspection or project work.</li>
            <li>Uploads and photos can be submitted where needed.</li>
            <li>Business contact and scheduling details are configured by the owner.</li>
          </ul>
          <div className="mini-box">
            <strong>Need a faster response?</strong>
            <p>Use WhatsApp or contact us directly for urgent electrical support.</p>
          </div>
        </aside>
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
          <Link href="/products">Products</Link>
        </div>

        <div>
          <h4>Support</h4>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/contact">Contact</Link>
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
