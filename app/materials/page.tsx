const products = [
  { name: 'Cables & Wires', category: 'Electrical supply', price: '₦4,500+', stock: 'In stock' },
  { name: 'Switches & Sockets', category: 'Accessories', price: '₦2,000+', stock: 'Available' },
  { name: 'Lighting Fittings', category: 'Lighting', price: '₦8,400+', stock: 'Available' },
  { name: 'Circuit Breakers', category: 'Safety equipment', price: '₦12,000+', stock: 'Low stock' },
  { name: 'Distribution Boards', category: 'Panel systems', price: '₦18,000+', stock: 'In stock' },
  { name: 'Conduits & Accessories', category: 'Installation items', price: '₦3,500+', stock: 'Available' },
];

export default function MaterialsPage() {
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
          <a className="btn btn-light" href="/contact">Enquire</a>
        </div>
      </header>

      <section className="page-hero">
        <p className="eyebrow">Materials catalogue</p>
        <h1>Electrical products for homes, projects and commercial supply.</h1>
      </section>

      <section className="card-grid four-up product-list">
        {products.map((product) => (
          <article className="product-card" key={product.name}>
            <div className="product-tag">{product.category}</div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="stock-status">{product.stock}</div>
            <button type="button">Request quote</button>
          </article>
        ))}
      </section>
    </main>
  );
}
