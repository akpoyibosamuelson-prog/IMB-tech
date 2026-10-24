export default function ContactPage() {
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
          <a className="btn btn-primary" href="/contact#book">Request quote</a>
        </div>
      </header>

      <section className="page-hero">
        <p className="eyebrow">Contact us</p>
        <h1>Tell us about your electrical need and we will get back to you.</h1>
      </section>

      <section className="contact-panel contact-page" id="book">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Request a quote or book a service.</h2>
          <p>
            We are ready to support residential clients, commercial clients, contractors and retailers.
          </p>
          <div className="contact-meta">
            <span>Email: hello@imbtech.example</span>
            <span>Phone: +234 000 000 0000</span>
            <span>WhatsApp: Available on request</span>
          </div>
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
            Subject
            <select name="subject">
              <option>Service booking</option>
              <option>Materials enquiry</option>
              <option>Quotation request</option>
              <option>Technical support</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell us about your project or requirement" />
          </label>
          <button type="submit" className="btn btn-primary full-width">Send enquiry</button>
        </form>
      </section>
    </main>
  );
}
