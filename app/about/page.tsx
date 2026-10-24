export default function AboutPage() {
  return (
    <main className="inner-shell page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">About IMB Tech</p>
        <h1>Electrical expertise built for homes, businesses, and projects.</h1>
        <p>
          IMB Tech provides dependable electrical services, solar support, repairs, and electrical materials for residential,
          commercial, and project clients. We focus on safe workmanship, practical guidance, and reliable supply.
        </p>
      </section>

      <section className="feature-grid two-up">
        <div className="info-card">
          <h3>Our mission</h3>
          <p>
            To power communities and businesses with safe, professional, and cost-conscious electrical solutions that are practical
            and dependable.
          </p>
        </div>
        <div className="info-card">
          <h3>Our vision</h3>
          <p>
            To become the preferred electrical partner for installation, repair, energy solutions, and quality materials supply.
          </p>
        </div>
      </section>

      <section className="feature-grid three-up">
        <div className="info-card">
          <h3>Services</h3>
          <p>Solar installation, wiring, fault diagnosis, repairs, maintenance, lighting, inspections, and commercial support.</p>
        </div>
        <div className="info-card">
          <h3>Supply</h3>
          <p>Materials for homes, properties, contractors, and projects including cables, breakers, fittings, tools, and accessories.</p>
        </div>
        <div className="info-card">
          <h3>Safety</h3>
          <p>We prioritise safe installations, code-conscious work, and honest recommendations tailored to each property and project.</p>
        </div>
      </section>

      <section className="cta-box">
        <div>
          <p className="eyebrow">Need support?</p>
          <h3>Book a service or request a quotation.</h3>
        </div>
        <div className="cta-row">
          <a href="/contact" className="btn btn-gold">Contact IMB Tech</a>
          <a href="/services" className="btn btn-light">View services</a>
        </div>
      </section>
    </main>
  );
}
