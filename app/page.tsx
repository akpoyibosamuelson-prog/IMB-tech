const serviceCards = [
  {
    title: 'Solar Installation',
    text: 'Grid-tied and off-grid solar power systems for homes, offices, shops, and businesses.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80',
    tag: 'Clean energy',
  },
  {
    title: 'Electrical Wiring',
    text: 'Safe residential and commercial wiring, rewiring, cabling, and power distribution upgrades.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    tag: 'Installation',
  },
  {
    title: 'Repairing & Maintenance',
    text: 'Electrical fault diagnosis, repair, maintenance, and emergency troubleshooting for all property types.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    tag: 'Support',
  },
  {
    title: 'Electronics Fixing',
    text: 'Repair and support for electrical appliances, fittings, device connections, and equipment services.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    tag: 'Fix & restore',
  },
];

const materialNeeds = [
  'Solar panels and accessories',
  'Cables and wires',
  'Switches and sockets',
  'Circuit breakers and protection devices',
  'Lighting fittings and appliances',
  'Distribution boards and control panels',
  'Electrical tools and installation materials',
  'Commercial and industrial supply requirements',
];

const businessTypes = [
  'Personal / Homeowner',
  'Retail customer',
  'Business / Commercial',
  'Wholesaler',
  'Retailer',
  'Installer / Contractor',
];

const reviews = [
  {
    quote: 'Professional service and very reliable after our solar installation. The work was neat and well explained.',
    name: 'Ada I.',
    role: 'Homeowner',
  },
  {
    quote: 'IMB Tech solved our wiring issue quickly and helped us set up a safer commercial setup.',
    name: 'Musa T.',
    role: 'Business owner',
  },
  {
    quote: 'Their materials and support for our electrical needs were timely and very helpful for our work.',
    name: 'Bose O.',
    role: 'Contractor',
  },
];

export default function HomePage() {
  return (
    <main className="imb-page">
      <header className="topbar">
        <div className="logo-wrap" aria-label="IMB Tech logo">
          <div className="logo-circle">
            <div className="logo-inner">
              <div className="logo-topline">
                <span className="logo-imb">IMB</span>
              </div>
              <div className="logo-main">tech</div>
              <div className="logo-tag">POWERING YOUR WORLD</div>
            </div>
          </div>
        </div>

        <nav className="site-nav">
          <a href="#services">Services</a>
          <a href="#materials">Materials</a>
          <a href="#wholesale">Wholesale</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-light" href="#contact">Request Quote</a>
          <a className="btn btn-gold" href="#contact">Book Service</a>
        </div>
      </header>

      <section className="hero-band">
        <div className="hero-copy">
          <p className="eyebrow">Solar • Wiring • Repairs • Electrical Materials</p>
          <h1>Safe electrical systems for homes, businesses, and projects.</h1>
          <p>
            IMB Tech delivers trusted solar installation, electrical wiring, maintenance, repairs,
            electronics fixing, and supply for personal, business, wholesale, and retail needs.
          </p>

          <div className="cta-row">
            <a href="#contact" className="btn btn-gold">Book Service</a>
            <a href="#materials" className="btn btn-light">Enquire for Materials</a>
            <a href="#wholesale" className="btn btn-ghost">Wholesale & Retail</a>
          </div>

          <div className="quick-stats">
            <div>
              <strong>Solar</strong>
              <span>Installation</span>
            </div>
            <div>
              <strong>Wiring</strong>
              <span>Repair & setup</span>
            </div>
            <div>
              <strong>Materials</strong>
              <span>Supply</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
            alt="Solar energy and electrical installation"
          />
        </div>
      </section>

      <section className="mini-strip">
        <div><strong>Solar solutions</strong><span>Powering homes and businesses</span></div>
        <div><strong>Electrical wiring</strong><span>Safe and reliable installation</span></div>
        <div><strong>Repairs</strong><span>Fault correction & support</span></div>
      </section>

      <section id="services" className="content-section">
        <div className="section-head">
          <p className="eyebrow">Our services</p>
          <h2>Solar, wiring, repairs and electrical support.</h2>
        </div>

        <div className="service-grid">
          {serviceCards.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-image-wrap">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-copy">
                <span className="service-tag">{service.tag}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="card-links">
                  <a href="#contact">Book now</a>
                  <a href="#materials">Ask for quote</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="materials" className="content-section alt-section">
        <div className="section-head">
          <p className="eyebrow">Enquire for materials</p>
          <h2>Products for homes, commercial projects, and electrical supply needs.</h2>
        </div>

        <div className="materials-grid">
          {materialNeeds.map((item) => (
            <div key={item} className="material-item">
              <span className="dot">•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div className="cta-row center-row">
          <a href="#contact" className="btn btn-gold">Enquire for Materials</a>
          <a href="#contact" className="btn btn-light">Request a Quote</a>
        </div>
      </section>

      <section className="content-section split-section">
        <div className="text-panel">
          <p className="eyebrow">Who we serve</p>
          <h2>Personal, retail, commercial, and wholesale support.</h2>
          <p>
            Whether you need a home electrical fix, a new solar system, retail materials, or business supply,
            IMB Tech is built to handle personal and commercial needs with clear support and professional service.
          </p>
          <ul className="feature-list">
            <li>Residential installation and fixing</li>
            <li>Commercial and property electrical work</li>
            <li>Retail and wholesale supply support</li>
            <li>Fast quotation and service response</li>
          </ul>
        </div>

        <div className="type-panel">
          {businessTypes.map((type) => (
            <div key={type} className="type-pill">{type}</div>
          ))}
        </div>
      </section>

      <section id="wholesale" className="content-section alt-section">
        <div className="section-head">
          <p className="eyebrow">Wholesale & retailer support</p>
          <h2>For traders, retailers, contractors, and business buyers.</h2>
        </div>

        <div className="wholesale-grid">
          <div className="wholesale-card">
            <h3>Wholesale</h3>
            <p>Bulk supply support for contractors, traders, and project buyers with pricing and product availability support.</p>
          </div>
          <div className="wholesale-card">
            <h3>Retail</h3>
            <p>Retail item enquiries for homes, offices, shops, and direct customer purchase requests on materials.</p>
          </div>
          <div className="wholesale-card">
            <h3>Business</h3>
            <p>Service, supply, and project support for commercial buyers, installers, and property managers.</p>
          </div>
        </div>
      </section>

      <section id="reviews" className="content-section">
        <div className="section-head narrow-head">
          <p className="eyebrow">Customer reviews</p>
          <h2>Trusted by clients who need dependable support.</h2>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars">★★★★★</div>
              <p>“{review.quote}”</p>
              <div className="reviewer">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Contact IMB Tech</p>
          <h2>Enquire for materials, service, repairs, solar solutions, or wholesale support.</h2>
          <p>
            Whether you need personal service, a repair, a solar setup, or retail and wholesale materials,
            let us know what you need and our team will guide you.
          </p>
          <div className="contact-meta">
            <span>📍 Location: To be configured</span>
            <span>📞 Phone: 08106127461</span>
            <span>💬 WhatsApp: Available on request</span>
            <span>✉️ Email: hello@imbtech.example</span>
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
            Customer type
            <select name="customerType">
              <option>Personal / homeowner</option>
              <option>Business / commercial</option>
              <option>Wholesaler</option>
              <option>Retailer</option>
              <option>Contractor</option>
            </select>
          </label>
          <label>
            Service or material need
            <select name="service">
              <option>Solar installation</option>
              <option>Electrical wiring</option>
              <option>Repair and maintenance</option>
              <option>Electronics fixing</option>
              <option>Materials supply</option>
              <option>Wholesale / retail inquiry</option>
            </select>
          </label>
          <label>
            Project details
            <textarea name="details" rows={4} placeholder="Tell us what you need" />
          </label>
          <button type="submit" className="btn btn-gold full-width">Send enquiry</button>
        </form>
      </section>

      <footer className="site-footer">
        <div>
          <div className="footer-brand">
            <div className="brand-mini">IMB</div>
            <div>
              <div className="brand-name">IMB Tech</div>
              <div className="brand-tag">SOLAR • WIRING • REPAIRS</div>
            </div>
          </div>
        </div>

        <div>
          <h4>Quick links</h4>
          <a href="#services">Services</a>
          <a href="#materials">Materials</a>
          <a href="#wholesale">Wholesale</a>
        </div>

        <div>
          <h4>Support</h4>
          <a href="#contact">Enquiries</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <span>Phone: 08106127461</span>
          <span>Email: hello@imbtech.example</span>
          <span>WhatsApp available</span>
        </div>
      </footer>
    </main>
  );
}
