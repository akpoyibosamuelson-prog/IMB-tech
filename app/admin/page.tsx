export default function AdminPage() {
  return (
    <main className="inner-shell page-shell admin-shell">
      <aside className="admin-sidebar">
        <h3>IMB Tech</h3>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Bookings</a>
          <a href="#">Quotations</a>
          <a href="#">Inventory</a>
          <a href="#">Orders</a>
          <a href="#">Invoices</a>
          <a href="#">Customers</a>
        </nav>
      </aside>

      <section className="admin-main">
        <div className="admin-header">
          <div>
            <p className="eyebrow">Business dashboard</p>
            <h1>Owner & admin overview</h1>
          </div>
          <a href="/login" className="btn btn-light">Sign out</a>
        </div>

        <div className="feature-grid four-up admin-grid">
          <div className="info-card stat-card">
            <span>Total sales</span>
            <strong>₦0.00</strong>
          </div>
          <div className="info-card stat-card">
            <span>Bookings</span>
            <strong>0</strong>
          </div>
          <div className="info-card stat-card">
            <span>Open enquiries</span>
            <strong>0</strong>
          </div>
          <div className="info-card stat-card">
            <span>Inventory alerts</span>
            <strong>0</strong>
          </div>
        </div>

        <div className="info-card table-card">
          <h3>Recent activity</h3>
          <ul className="activity-list">
            <li>No recent activity yet.</li>
            <li>New enquiries and bookings will appear here.</li>
            <li>Inventory and payment updates will be tracked automatically once active data is connected.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
