import Link from 'next/link';
import BrandLogo from '../../components/BrandLogo';

type CheckoutStatusProps = {
  searchParams: {
    reference?: string;
    amount?: string;
    order?: string;
  };
};

export default function CheckoutStatusPage({ searchParams }: CheckoutStatusProps) {
  const reference = searchParams.reference;
  const parsedAmount = Number(searchParams.amount);
  const amount = Number.isFinite(parsedAmount) && parsedAmount > 0 ? parsedAmount : null;
  const order = searchParams.order;

  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo className="branding" />
      </header>

      <section className="page-header">
        <p className="eyebrow">Payment status</p>
        <h1>Reference created — payment not processed</h1>
        <p>
          This reference is not saved to an order. No money was charged or verified, and it is not a payment receipt.
        </p>
      </section>

      {reference && (
        <section className="checkout-success">
          <div className="summary-box">
            <strong>Reference:</strong>
            <p>{reference}</p>
          </div>
          {amount !== null && (
            <div className="summary-box">
              <strong>Requested amount:</strong>
              <p>₦{amount.toLocaleString()}</p>
            </div>
          )}
          {order && (
            <div className="summary-box">
              <strong>Order:</strong>
              <p>{order}</p>
            </div>
          )}
        </section>
      )}

      <section className="page-header">
        <p>
          Contact IMB Tech to confirm the correct amount and payment instructions. Do not treat this page as confirmation
          that payment has been received.
        </p>
        <Link href="/checkout" className="primary-btn">Return to checkout</Link>
      </section>
    </main>
  );
}
