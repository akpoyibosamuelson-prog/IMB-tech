import BrandLogo from '../components/BrandLogo';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="inner-shell page-shell auth-shell">
      <section className="auth-panel">
        <BrandLogo />
        <div className="auth-header">
          <p className="eyebrow">Account access</p>
          <h1>Staff sign-in is not active yet.</h1>
        </div>

        <p>
          Secure staff accounts have not been configured. Do not enter a password on this page. Contact the owner for
          business access.
        </p>
        <div className="auth-links">
          <Link href="/contact">Contact IMB Tech</Link>
        </div>
      </section>
    </main>
  );
}
