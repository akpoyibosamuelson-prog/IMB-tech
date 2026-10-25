'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

const enquiryOptions = [
  'Domestic electrical works',
  'Commercial maintenance and inspections',
  'Materials and supply enquiries',
  'Project quotations and contractor support',
  'Solar installation',
  'Solar maintenance',
];

export default function ContactPage() {
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enquiryType, setEnquiryType] = useState('');

  useEffect(() => {
    const requestedType = new URLSearchParams(window.location.search).get('enquiryType');
    if (requestedType && enquiryOptions.includes(requestedType)) {
      setEnquiryType(requestedType);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setMessage(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data: { error?: string; reference?: string } = await response.json();

      if (!response.ok || !data.reference) {
        setMessage({ type: 'error', text: data.error || 'Unable to send your enquiry.' });
        return;
      }

      form.reset();
      setEnquiryType('');
      setMessage({ type: 'success', text: `Enquiry saved. Reference: ${data.reference}. We will follow up with you.` });
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
        <p className="eyebrow">Contact IMB Tech</p>
        <h1>Tell us what you need and we will guide the next step.</h1>
        <p>
          We help with service bookings, project quotations, materials enquiries and general electrical
          support for homes, businesses and contractors.
        </p>
      </section>

      <section className="booking-layout">
        <form className="booking-form" onSubmit={handleSubmit} aria-label="Contact form">
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
            <input type="tel" name="phone" placeholder="+234 810 612 7461" />
          </label>

          <label>
            Enquiry type
            <select name="enquiryType" value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)} required>
              <option value="" disabled>
                Select an option
              </option>
              <option>Service booking</option>
              <option>Project quotation</option>
              <option>Materials enquiry</option>
              <option>Solar installation</option>
              <option>Solar maintenance</option>
              <option>General support</option>
            </select>
          </label>

          <label>
            Project details
            <textarea name="details" rows={5} placeholder="Tell us about your project or requirement" required />
          </label>

          <label className="consent-label">
            <input type="checkbox" name="consent" required />
            I agree IMB Tech may use these details to respond to my enquiry.
          </label>

          <button type="submit" className="primary-btn full-width" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Send enquiry'}
          </button>
          {message && (
            <div role="status" className={message.type === 'success' ? 'status success' : 'status error'}>
              {message.text}
            </div>
          )}
        </form>

        <aside className="booking-summary">
          <h3>What we can help with</h3>
          <ul>
            {enquiryOptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mini-box">
            <strong>Contact us directly</strong>
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
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Request quote</Link>
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
