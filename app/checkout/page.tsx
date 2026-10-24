import Link from 'next/link';

const invoice = {
  number: 'IMB-INV-2026-1048',
  customer: 'Adebayo & Co.',
  issueDate: '2026-10-24',
  dueDate: '2026-11-07',
  amount: '₦150,000',
  paid: '₦100,000',
  balance: '₦50,000',
  status: 'Partially paid',
};

export default function InvoicePage() {
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
      </header>

      <section className="page-header">
        <p className="eyebrow">Invoice</p>
        <h1>{invoice.number}</h1>
        <p>Professional invoice display and payment tracking for customer accounts.</p>
      </section>

      <section className="invoice-card">
        <div className="invoice-header">
          <div>
            <h3>IMB Tech</h3>
            <p>Electrical Services & Materials</p>
          </div>
          <div className="invoice-status">{invoice.status}</div>
        </div>

        <div className="invoice-grid">
          <div>
            <p><strong>Customer:</strong> {invoice.customer}</p>
            <p><strong>Issue date:</strong> {invoice.issueDate}</p>
            <p><strong>Due date:</strong> {invoice.dueDate}</p>
          </div>
          <div>
            <p><strong>Invoice total:</strong> {invoice.amount}</p>
            <p><strong>Amount paid:</strong> {invoice.paid}</p>
            <p><strong>Outstanding:</strong> {invoice.balance}</p>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electrical installation</td>
              <td>1</td>
              <td>₦120,000</td>
              <td>₦120,000</td>
            </tr>
            <tr>
              <td>Materials supply</td>
              <td>1</td>
              <td>₦30,000</td>
              <td>₦30,000</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
