export default function AdminPage() {
  return (
    <main className="site-shell inner-page">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">IMB</div>
          <div>
            <div className="brand-name">IMB Tech</div>
            <div className="brand-tag">Owner dashboard</div>
          </div>
        </div>
      </header>

      <section className="page-hero dashboard-hero">
        <p className="eyebrow">Administration</p>
        <h1>Operations overview</h1>
      </section>

      <section className="card-grid four-up">
        <article className="info-card">
          <h3>Total sales</h3>
          <p>₦1,260,000</p>
        </article>
        <article className="info-card">
          <h3>Pending bookings</h3>
          <p>18</p>
        </article>
        <article className="info-card">
          <h3>Low stock items</h3>
          <p>11</p>
        </article>
        <article className="info-card">
          <h3>Outstanding invoices</h3>
          <p>₦214,500</p>
        </article>
      </section>
    </main>
  );
}
