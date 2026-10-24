"use client";

import { FormEvent, useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  amount: '250000',
  method: 'Card',
  order: 'IMB-1001',
};

export default function CheckoutPage() {
  const [form, setForm] = useState(initialValues);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);

    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      setMessage({
        type: 'error',
        text: data.error || 'Unable to initialize payment right now.',
      });
      return;
    }

    setMessage({
      type: 'success',
      text: `Payment initialized successfully. Reference: ${data.reference}. Status: ${data.status}.`,
    });

    if (data.reference) {
      window.location.href = `/checkout/success?reference=${encodeURIComponent(data.reference)}&amount=${encodeURIComponent(data.amount)}&order=${encodeURIComponent(data.order)}`;
    }
  }

  const updateField = (field: keyof typeof initialValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

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
        <p className="eyebrow">Secure checkout</p>
        <h1>Payment-ready IMB Tech checkout</h1>
        <p>
          This page is designed for real gateway integration. In production, it must verify payments server-side with
          Paystack or Flutterwave before marking any payment as successful.
        </p>
      </section>

      <section className="checkout-shell">
        <div className="checkout-summary">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Service / order</span>
            <strong>{form.order}</strong>
          </div>
          <div className="summary-row">
            <span>Amount due</span>
            <strong>₦{Number(form.amount).toLocaleString()}</strong>
          </div>
          <div className="summary-row">
            <span>Payment method</span>
            <strong>{form.method}</strong>
          </div>
          <div className="summary-box">
            <strong>Important:</strong>
            <p>
              A customer returning to a success page does not mean a payment is verified. Verification must happen
              server-side using the gateway API before updating order status.
            </p>
          </div>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input type="text" value={form.name} onChange={(event) => updateField('name', event.target.value)} required />
          </label>

          <label>
            Email address
            <input type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} required />
          </label>

          <label>
            Phone number
            <input type="tel" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} required />
          </label>

          <label>
            Order reference
            <input type="text" value={form.order} onChange={(event) => updateField('order', event.target.value)} required />
          </label>

          <label>
            Amount (₦)
            <input type="number" min="1" value={form.amount} onChange={(event) => updateField('amount', event.target.value)} required />
          </label>

          <label>
            Payment method
            <select value={form.method} onChange={(event) => updateField('method', event.target.value)}>
              <option>Card</option>
              <option>Bank transfer</option>
              <option>Cash</option>
            </select>
          </label>

          <button type="submit" className="primary-btn full-width">Continue to payment</button>

          {message && (
            <div className={message.type === 'success' ? 'status success' : 'status error'}>
              {message.text}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
