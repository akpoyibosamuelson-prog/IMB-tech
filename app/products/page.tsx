import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

const products = [
  {
    name: 'Cabling & Wiring',
    description: 'Reliable electrical cabling for residential, commercial and industrial installations.',
    tag: 'Essential supply',
  },
  {
    name: 'Lighting Solutions',
    description: 'Indoor, outdoor and energy-efficient lighting for new builds and upgrades.',
    tag: 'Popular',
  },
  {
    name: 'Protection Equipment',
    description: 'Breakers, protective devices, safety gear and essential circuit protection.',
    tag: 'Safety first',
  },
  {
    name: 'Switchgear & Accessories',
    description: 'Switches, sockets, control gear and installation accessories for reliable systems.',
    tag: 'Hardware',
  },
];

export default function ProductsPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo />

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/booking">Book a Service</Link>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">Electrical materials</p>
        <h1>Quality products for safe, dependable electrical work.</h1>
        <p>
          From essential installation materials to project-scale supply support, IMB Tech helps customers
          source the right components for the task at hand.
        </p>
      </section>

      <section className="service-list">
        {products.map((product) => (
          <article className="service-item" key={product.name}>
            <span className="product-tag">{product.tag}</span>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link href="/contact" className="primary-btn">Request quote</Link>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <div>
          <BrandLogo className="footer-brand" />
        </div>

        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
        </div>

        <div>
          <h4>Support</h4>
          <Link href="/booking">Bookings</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/faq">FAQs</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <span>hello@imbtech.co</span>
          <a href="tel:+2348106127461">+234 810 612 7461</a>
          <a href="https://wa.me/2348106127461" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <span>Wholesale and retail support</span>
        </div>
      </footer>
    </main>
  );
}
