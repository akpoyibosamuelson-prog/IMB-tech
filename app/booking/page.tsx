'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

const serviceOptions = [
  'Electrical Installation',
  'Electrical Repairs',
  'Fault Diagnosis & Troubleshooting',
  'Repairs & Fault Diagnosis',
  'Wiring & Lighting',
  'Wiring & Rewiring',
  'Lighting',
  'Maintenance & Inspection',
  'Maintenance',
  'Solar Installation',
  'Solar Maintenance',
];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const requestedService = new URLSearchParams(window.location.search).get('service');
    if (requestedService && serviceOptions.includes(requestedService)) {
      setSelectedService(requestedService);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data: { error?: string; reference?: string } = await response.json();

      if (!response.ok || !data.reference) {
        setMessage({ type: 'error', text: data.error || 'Unable to submit your booking request.' });
        return;
      }

      form.reset();
      setSelectedService('');
      setMessage({ type: 'success', text: `Request saved. Reference: ${data.reference}. We will contact you to confirm the appointment.` });
    } catch {
      setMessage({ type: 'error', text: 'Could not reach the server. Check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo />

        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">Request Quote</Link>
          <Link className="primary-btn" href="/booking">Book a Service</Link>
        </div>
      </header>

      <section className="page-header">
        <p className="eyebrow">Book a service</p>
        <h1>Schedule support for your next electrical job.</h1>
        <p>
          Tell us about the issue, the location and the type of work needed. We will confirm the next
          available appointment and requirements.
        </p>
      </section>

      <section className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit} aria-label="Booking form">
          <label>
            Full name
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            Email address
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            Phone number
            <input type="tel" name="phone" placeholder="+234 810 612 7461" required />
          </label>

          <label>
            Service required
            <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>

          <label>
            Preferred date
            <input type="date" name="date" />
          </label>

          <label>
            Project details
            <textarea name="details" rows={5} placeholder="Describe the issue, property type or project scope" required />
          </label>

          <label className="consent-label">
            <input type="checkbox" name="consent" required />
            I agree IMB Tech may use these details to respond to my booking request.
          </label>

          <button type="submit" className="primary-btn full-width" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Submit booking request'}
          </button>
          {message && (
            <div role="status" className={message.type === 'success' ? 'status success' : 'status error'}>
              {message.text}
            </div>
          )}
        </form>

        <aside className="booking-summary">
          <h3>Booking summary</h3>
          {selectedService && (
            <div className="selected-service">
              <span>Selected service</span>
              <strong>{selectedService}</strong>
            </div>
          )}
          <ul>
            <li>Quick service scheduling for homes and businesses</li>
            <li>Clear communication before the visit</li>
            <li>Professional support for repairs and installations</li>
          </ul>
          <div className="mini-box">
            <strong>Need a faster response?</strong>
            <p>hello@imbtech.co</p>
            <a href="tel:+2348106127461">Call +234 810 612 7461</a>
            <a href="https://wa.me/2348106127461" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          </div>
        </aside>
      </section>

      <footer className="site-footer">
        <div>
          <BrandLogo className="footer-brand" />
        </div>

        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
        </div>

        <div>
          <h4>Support</h4>
          <Link href="/booking">Book a service</Link>
          <Link href="/contact">Request quote</Link>
          <Link href="/faq">FAQs</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <span>hello@imbtech.co</span>
          <a href="tel:+2348106127461">+234 810 612 7461</a>
          <a href="https://wa.me/2348106127461" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
      </footer>
    </main>
  );
}
