const services = [
  {
    title: 'Electrical Installation',
    text: 'Safe planning and installation for homes, offices, retail spaces and commercial developments.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fault Diagnosis',
    text: 'Fast troubleshooting for power faults, outages and wiring concerns.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Lighting & Rewiring',
    text: 'Energy-efficient upgrades, rewiring, panel work and smart lighting installations.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80',
  },
];

const products = [
  { name: 'Cables & Wires', type: 'Electrical supply', price: 'From ₦4,500' },
  { name: 'Switches & Sockets', type: 'Accessories', price: 'From ₦2,000' },
  { name: 'Circuit Protection', type: 'Safety equipment', price: 'From ₦12,000' },
  { name: 'Lighting Fittings', type: 'LED & fixtures', price: 'From ₦8,400' },
  { name: 'Distribution Boards', type: 'Panel systems', price: 'From ₦18,000' },
  { name: 'Conduits & Accessories', type: 'Installation items', price: 'From ₦3,500' },
];

const steps = [
  'Share your project, issue or material need',
  'Receive a tailored recommendation or quote',
  'Approve the scope and schedule your service or order',
  'Track progress and receive support',
];

const faqs = [
  'Do you support both residential and commercial jobs?',
  'Can I request a quotation without visiting the office?',
  'Do you provide wholesale pricing for traders or contractors?',
  'Can I upload photos of damaged electrical items or installations?',
];

export default function HomePage() {
  return (
    <main className="site-shell">
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
          <a className="btn btn-light" href="/contact">Request Quote</a>
          <a className="btn btn-primary" href="/contact#book">Book a Service</a>
        </div>
      </header>

      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">Trusted electrical solutions</p>
          <h1>Reliable power, safe installations, and quality materials.</h1>
          <p className="lede">
            IMB Tech helps homes, businesses, contractors and retailers with electrical services,
            materials supply, quotations and project support.
          </p>

          <div className="cta-row">
            <a className="btn btn-primary" href="/contact#book">Book a Service</a>
            <a className="btn btn-light" href="/materials">Browse Materials</a>
            <a className="btn btn-ghost" href="/contact">Contact Us</a>
          </div>

          <div className="mini-stats">
            <div>
              <strong>Residential</strong>
              <span>Repairs & installs</span>
            </div>
            <div>
              <strong>Commercial</strong>
              <span>Site support</span>
            </div>
            <div>
              <strong>Wholesale</strong>
              <span>Retailer supply</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Electrician working on installation"
          />
        </div>
      </section>

      <section className="trust-row">
        <div><strong>Fast responses</strong><span>Service enquiries handled promptly</span></div>
        <div><strong>Professional team</strong><span>Skilled electrical support</span></div>
        <div><strong>Clear quotations</strong><span>Transparent pricing and scope</span></div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">What we do</p>
          <h2>Electrical services for homes, businesses and projects.</h2>
        </div>

        <div className="card-grid three-up">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="card-image-wrap">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="card-copy">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="card-actions">
                  <a href="/contact#book">Book now</a>
                  <a href="/contact">Get quote</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt-block">
        <div className="section-heading">
          <p className="eyebrow">Material supply</p>
          <h2>Electrical materials and fittings for your next project.</h2>
        </div>

        <div className="card-grid four-up">
          {products.map((item) => (
            <article className="product-card" key={item.name}>
              <div className="product-tag">{item.type}</div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button type="button">Add to enquiry</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="split-copy">
          <p className="eyebrow">Why IMB Tech</p>
          <h2>Professional, practical and safety-first electrical support.</h2>
          <p>
            We combine technical expertise with responsive customer service to deliver electrical
            installation, repair, inspection, materials and support for mixed residential and business needs.
          </p>
          <ul className="check-list">
            <li>Responsive booking and quotation support</li>
            <li>Materials sourcing for homes and commercial users</li>
            <li>Safety-conscious workmanship and reliable service</li>
            <li>Clear communication from enquiry to completion</li>
          </ul>
        </div>

        <div className="feature-panel">
          <h3>How it works</h3>
          <ol>
            {steps.map((step, index) => (
              <li key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="section-heading narrow">
          <p className="eyebrow">Client feedback</p>
          <h2>Trusted by people who need dependable electrical support.</h2>
        </div>

        <div className="testimonial-grid">
          <blockquote>
            “Fast response, clear communication and neat workmanship. Highly recommended for electrical work.”
            <footer>— Homeowner</footer>
          </blockquote>
          <blockquote>
            “We used IMB Tech for a project renewal and the process was smooth from quote to completion.”
            <footer>— Small business owner</footer>
          </blockquote>
        </div>
      </section>

      <section className="section faq-block">
        <div className="section-heading narrow">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div className="faq-item" key={faq}>
              <h3>{faq}</h3>
              <p>
                We provide tailored support for service requests, materials enquiries, repairs and project-based
                quotations depending on your requirements.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-panel" id="book">
        <div className="contact-copy">
          <p className="eyebrow">Get started</p>
          <h2>Request a quote or book an electrical service.</h2>
          <p>
            Share your project details and we can advise on service availability, quotation requirements and the
            best next step.
          </p>
          <div className="contact-meta">
            <span>WhatsApp: Available on request</span>
            <span>Email: hello@imbtech.example</span>
            <span>Business contact: To be configured</span>
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
          <button type="submit" className="btn btn-primary full-width">Send enquiry</button>
        </form>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <div className="brand-wrap footer-brand">
            <div className="brand-mark">IMB</div>
            <div>
              <div className="brand-name">IMB Tech</div>
              <div className="brand-tag">Electrical Services & Materials</div>
            </div>
          </div>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/materials">Materials</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="/faq">FAQs</a>
          <a href="/contact">Contact</a>
          <a href="/contact#book">Bookings</a>
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
