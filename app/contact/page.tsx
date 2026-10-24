export default function ContactPage() {
  return (
    <main className="inner-shell page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Contact and enquiries</p>
        <h1>Reach IMB Tech for service, materials, or quotation requests.</h1>
      </section>

      <section className="contact-panel large-contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Tell us what you need and we’ll guide you.</h2>
          <div className="contact-meta">
            <span>📍 Location: To be configured</span>
            <span>📞 Phone: 08106127461</span>
            <span>💬 WhatsApp: Available on request</span>
            <span>✉️ Email: hello@imbtech.example</span>
          </div>
        </div>

        <form className="contact-form">
          <label>
            Full name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="Your phone number" />
          </label>
          <label>
            Email address
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Customer type
            <select>
              <option>Personal / homeowner</option>
              <option>Business / commercial</option>
              <option>Wholesaler</option>
              <option>Retailer</option>
              <option>Contractor</option>
            </select>
          </label>
          <label>
            Service / requirement
            <select>
              <option>Solar installation</option>
              <option>Electrical repair</option>
              <option>Materials supply</option>
              <option>Wholesale / retail inquiry</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows={4} placeholder="Please describe your request" />
          </label>
          <button type="submit" className="btn btn-gold full-width">Send enquiry</button>
        </form>
      </section>
    </main>
  );
}
