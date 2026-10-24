const products = [
  'Cables and wires',
  'Switches and sockets',
  'Lighting and fittings',
  'Circuit breakers and protection devices',
  'Distribution boards',
  'Conduits and accessories',
  'Electrical tools',
  'Solar accessories',
  'Installation materials',
  'Commercial supply items',
];

export default function MaterialsPage() {
  return (
    <main className="inner-shell page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Electrical materials</p>
        <h1>Quality electrical supply for homes, contractors, and businesses.</h1>
        <p>
          From basic fittings to project-critical components, IMB Tech can help you source the correct materials for your work.
        </p>
      </section>

      <section className="feature-grid two-up product-grid">
        {products.map((product) => (
          <div className="info-card product-item" key={product}>
            <h3>{product}</h3>
            <p>Available through enquiry, quotation, or direct consultation for suitable project requirements.</p>
            <a href="/contact">Request availability</a>
          </div>
        ))}
      </section>

      <section className="cta-box">
        <div>
          <p className="eyebrow">Need a quote?</p>
          <h3>Tell us your material requirement and quantity.</h3>
        </div>
        <a href="/contact" className="btn btn-gold">Send enquiry</a>
      </section>
    </main>
  );
}
