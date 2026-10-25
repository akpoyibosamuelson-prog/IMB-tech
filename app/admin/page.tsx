import BrandLogo from '../components/BrandLogo';

export default function AdminPage() {
  return (
    <main className="inner-shell page-shell admin-shell">
      <aside className="admin-sidebar">
        <BrandLogo />
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Bookings</a>
          <a href="#">Quotations</a>
          <a href="#inventory">Inventory</a>
          <a href="#expenses">Expenses</a>
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

        <div className="info-card table-card" id="inventory">
          <h3>Inventory</h3>
          <ul className="activity-list">
            <li>No stock items recorded yet.</li>
            <li>Solar panels, inverters, batteries, cables and accessories will be listed here with quantities.</li>
          </ul>
        </div>

        <div className="info-card table-card" id="expenses">
          <h3>Expenses</h3>
          <ul className="activity-list">
            <li>No expenses recorded yet.</li>
            <li>Material purchases, transport and labour costs will be tracked here.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
