import Link from 'next/link';
import BrandLogo from '../components/BrandLogo';

export default function AdminPage() {
  return (
    <main className="page-shell info-page">
      <header className="topbar">
        <BrandLogo className="branding" />
      </header>

      <section className="page-header">
        <p className="eyebrow">Business dashboard</p>
        <h1>Admin access is not active yet.</h1>
        <p>
          This page is disabled until server-side authentication, access roles and a production database are configured.
          No business records are displayed here.
        </p>
        <Link href="/contact" className="primary-btn">Contact IMB Tech</Link>
      </section>
    </main>
  );
}
