export default function AboutPage() {
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
          <a className="btn btn-light" href="/contact">Request Quote</a>
        </div>
      </header>

      <section className="page-hero">
        <p className="eyebrow">About IMB Tech</p>
        <h1>Professional electrical support built around safety, quality and trust.</h1>
      </section>

      <section className="content-grid two-col">
        <div>
          <h2>Our story</h2>
          <p>
            IMB Tech delivers dependable electrical services and materials to homes, businesses,
            contractors, retailers and project buyers. Our work is focused on safe installations,
            practical repairs and reliable support from enquiry to completion.
          </p>
          <p>
            We help clients with electrical maintenance, installation work, emergency faults, wiring,
            lighting upgrades and a wide range of electrical products needed for daily operations and projects.
          </p>
        </div>

        <div className="info-panel">
          <h3>Mission</h3>
          <p>To deliver trusted, quality electrical service that keeps homes and businesses safe and running efficiently.</p>

          <h3>Vision</h3>
          <p>To become the go-to electrical service and materials partner for residential, commercial and retail needs.</p>
        </div>
      </section>

      <section className="section">
        <div className="card-grid three-up">
          <article className="info-card">
            <h3>Residential support</h3>
            <p>Fault finding, rewiring, lighting support and electrical repair for homes.</p>
          </article>
          <article className="info-card">
            <h3>Commercial support</h3>
            <p>Workplace maintenance, installations and support for offices, shops and facilities.</p>
          </article>
          <article className="info-card">
            <h3>Materials supply</h3>
            <p>Quality electrical fittings, accessories and equipment supplied for projects and orders.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
