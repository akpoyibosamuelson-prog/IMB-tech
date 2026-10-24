type SuccessPageProps = {
  searchParams: {
    reference?: string;
    amount?: string;
    order?: string;
  };
};

export default function CheckoutSuccessPage({ searchParams }: SuccessPageProps) {
  const reference = searchParams.reference || 'pending';
  const amount = searchParams.amount || '0';
  const order = searchParams.order || 'N/A';

  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <div className="branding">
          <div className="brand-mark">IMB</div>
          <div>
            <div className="brand-name">IMB Tech</div>
            <div className="brand-tag">Electrical Services & Materials</div>
          </div>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">Payment status</p>
        <h1>Checkout request received</h1>
        <p>
          Your payment reference has been created. Final confirmation is pending secure verification using the selected
          gateway and server-side validation before order status is updated.
        </p>
      </section>

      <section className="checkout-success">
        <div className="summary-box">
          <strong>Reference:</strong>
          <p>{reference}</p>
        </div>
        <div className="summary-box">
          <strong>Amount:</strong>
          <p>₦{Number(amount).toLocaleString()}</p>
        </div>
        <div className="summary-box">
          <strong>Order:</strong>
          <p>{order}</p>
        </div>
        <div className="summary-box">
          <strong>Next step:</strong>
          <p>
            Configure Paystack or Flutterwave secret keys and webhooks, then use the verification endpoint to confirm
            payments before any order or booking is marked as paid.
          </p>
        </div>
      </section>
    </main>
  );
}
