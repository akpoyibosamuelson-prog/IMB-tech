"use client";

import { FormEvent, useState } from 'react';
import BrandLogo from '../components/BrandLogo';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  amount: '250000',
  method: 'Card',
  order: 'IMB-1001',
};

type CheckoutResponse = {
  error?: string;
  reference?: string;
  amount?: number;
  order?: string;
};

export default function CheckoutForm() {
  const [form, setForm] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data: CheckoutResponse = await response.json();

      if (!response.ok || !data.reference || data.amount === undefined || !data.order) {
        setMessage({
          type: 'error',
          text: data.error || 'Unable to create a payment reference right now.',
        });
        return;
      }

      window.location.href = `/checkout/success?reference=${encodeURIComponent(data.reference)}&amount=${encodeURIComponent(data.amount)}&order=${encodeURIComponent(data.order)}`;
    } catch {
      setMessage({
        type: 'error',
        text: 'Could not reach the server. Check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const updateField = (field: keyof typeof initialValues, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo className="branding" />
      </header>

      <section className="page-header">
        <p className="eyebrow">Checkout request</p>
        <h1>Create a payment reference</h1>
        <p>
          This demo creates a reference only. It does not save an order, charge you, contact a payment provider, or
          confirm that money has been received.
        </p>
      </section>

      <section className="checkout-shell">
        <div className="checkout-summary">
          <h3>Request summary</h3>
          <div className="summary-row">
            <span>Service / order</span>
            <strong>{form.order}</strong>
          </div>
          <div className="summary-row">
            <span>Requested amount</span>
            <strong>₦{Number(form.amount).toLocaleString()}</strong>
          </div>
          <div className="summary-row">
            <span>Preferred payment method</span>
            <strong>{form.method}</strong>
          </div>
          <div className="summary-box">
            <strong>Important:</strong>
            <p>
              No payment is processed here. Only use a payment reference after IMB Tech has confirmed the amount and
              payment instructions with you.
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
            Requested amount (₦)
            <input
              type="number"
              min="1"
              step="0.01"
              value={form.amount}
              onChange={(event) => updateField('amount', event.target.value)}
              required
            />
          </label>

          <label>
            Preferred payment method
            <select value={form.method} onChange={(event) => updateField('method', event.target.value)}>
              <option>Card</option>
              <option>Bank transfer</option>
              <option>Cash</option>
            </select>
          </label>

          <button type="submit" className="primary-btn full-width" disabled={isSubmitting}>
            {isSubmitting ? 'Creating reference…' : 'Create payment reference'}
          </button>

          {message && (
            <div role="status" className={message.type === 'success' ? 'status success' : 'status error'}>
              {message.text}
            </div>
          )}
        </form>
      </section>
    </main>
  );
}
