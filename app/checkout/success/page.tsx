import Link from 'next/link';
import BrandLogo from '../../components/BrandLogo';

export default function CheckoutStatusPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo className="branding" />
      </header>

      <section className="page-header">
        <p className="eyebrow">Payment status</p>
        <h1>No payment has been confirmed.</h1>
        <p>
          This page cannot verify a payment. Do not treat a URL, reference or screenshot as proof that an order was paid.
        </p>
      </section>

      <section className="page-header">
        <p>
          Contact IMB Tech to confirm availability and payment instructions.
        </p>
        <Link href="/contact" className="primary-btn">Contact IMB Tech</Link>
      </section>
    </main>
  );
}
