import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

export default function CheckoutForm() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo className="branding" />
      </header>

      <section className="page-header">
        <p className="eyebrow">Online checkout</p>
        <h1>Payment is not available on this site yet.</h1>
        <p>
          This application does not have a configured payment provider or order-backed checkout. No order or payment
          can be created here. Contact IMB Tech to confirm product availability, pricing and payment instructions.
        </p>
        <Link href="/contact" className="primary-btn">Contact IMB Tech</Link>
      </section>
    </main>
  );
}
