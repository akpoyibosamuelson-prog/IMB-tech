import Link from 'next/link';

const products = [
  {
    name: 'Copper Wiring Cable',
    category: 'Cables & Wires',
    price: '₦4,500',
    description: 'High-quality electrical cable for residential and commercial installations.',
  },
  {
    name: 'Aesthetic Switch Plate',
    category: 'Switches & Sockets',
    price: '₦2,000',
    description: 'Modern socket and switch accessories designed for neat interior finishing.',
  },
  {
    name: 'MCB Protection Unit',
    category: 'Circuit Protection',
    price: '₦12,000',
    description: 'Circuit protection solution for safe and efficient electrical distribution.',
  },
  {
    name: 'LED Panel Light',
    category: 'Lighting Fittings',
    price: '₦8,400',
    description: 'Energy-efficient lighting panel for offices, retail and residential spaces.',
  },
  {
    name: 'Conduit & Accessories',
    category: 'Conduits',
    price: '₦6,200',
    description: 'Installation and protection accessories for safe cable routing.',
  },
  {
    name: 'Insulated Hand Tools',
    category: 'Electrical Tools',
    price: '₦15,500',
    description: 'Professional electrical tools designed for safe installation and repair work.',
  },
];

export default function ProductsPage() {
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
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/contact">Book a Service</Link>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">Electrical materials</p>
        <h1>Quality products for homes, businesses and project work.</h1>
        <p>
          Browse dependable electrical materials and accessories for installation, maintenance, upgrades and site supply.
        </p>
      </section>

      <section className="product-grid">
        {products.map((product) => (
          <article className="shop-card" key={product.name}>
            <div className="product-pill">{product.category}</div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="product-row">
              <strong>{product.price}</strong>
              <button type="button" className="primary-btn small-btn">Enquire</button>
            </div>
          </article>
        ))}
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
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/contact">Materials enquiry</Link>
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
