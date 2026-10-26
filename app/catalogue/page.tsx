import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Headphones, ShieldCheck, Truck, Wrench } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import CatalogueGrid from './CatalogueGrid';
import styles from './catalogue.module.css';

export const metadata: Metadata = {
  title: 'Marketplace Catalogue | IMB Tech',
  description:
    'Browse the IMB Tech catalogue of solar panels, inverters, batteries, electrical materials and electronics repair services. Retail and wholesale quotes available.',
};

const proofOfWork = [
  {
    image: '/images/work/solar-rooftop-install.jpeg',
    title: 'Rooftop solar installation',
    caption: 'Panel mounting and secure fixing by our installation team.',
  },
  {
    image: '/images/work/electronics-repair-bench.jpeg',
    title: 'Electronics repair bench',
    caption: 'Board-level diagnostics and repair of power electronics.',
  },
];

const reasons = [
  { icon: ShieldCheck, title: 'Product information', text: 'Confirm specifications, availability and pricing with IMB Tech before ordering.' },
  { icon: Wrench, title: 'Supply + installation', text: 'Buy the materials and let our technicians fit them.' },
  { icon: Truck, title: 'Retail & wholesale', text: 'Ask the team about quantities and project requirements.' },
  { icon: Headphones, title: 'Direct support', text: 'Contact IMB Tech by phone or WhatsApp with product and service questions.' },
];

export default function CataloguePage() {
  return (
    <main className={`page-shell ${styles.page}`}>
      <header className="topbar">
        <BrandLogo className="branding" />
        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/catalogue" aria-current="page">
            Catalogue
          </Link>
          <Link href="/booking">Booking</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link className="secondary-btn" href="/contact">
            Request Quote
          </Link>
          <Link className="primary-btn" href="/booking">
            Book a Service
          </Link>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>IMB Tech Marketplace</p>
          <h1 className={styles.heroTitle}>
            Premium solar, electrical &amp; electronics — <span>all in one catalogue.</span>
          </h1>
          <p className={styles.heroText}>
            Panels, inverters, batteries, cables, protection gear and expert repair services. Choose what you need and
            get a tailored retail or wholesale quote from the team that also installs it.
          </p>
          <div className={styles.heroActions}>
            <a href="#catalogue" className={styles.quoteBtn}>
              Browse catalogue
            </a>
            <Link href="/contact?enquiryType=Project%20quotation" className={styles.ghostBtn}>
              Send a materials list
            </Link>
          </div>
          <ul className={styles.heroStats} aria-label="Why customers choose IMB Tech">
            <li>
              <ShieldCheck aria-hidden="true" size={18} /> Genuine products
            </li>
            <li>
              <Award aria-hidden="true" size={18} /> Skilled technicians
            </li>
            <li>
              <Truck aria-hidden="true" size={18} /> Bulk supply
            </li>
          </ul>
        </div>
        <div className={styles.heroVisual}>
          <Image
            src="/images/work/solar-rooftop-install.jpeg"
            alt="IMB Tech technician installing rooftop solar panels"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
            className={styles.mediaImg}
          />
          <div className={styles.heroCard}>
            <span className={styles.kicker}>Supply + Install</span>
            <strong>We sell it. We fit it. We stand behind it.</strong>
          </div>
        </div>
      </section>

      <CatalogueGrid />

      <section className={styles.proof} aria-labelledby="proof-title">
        <div className={styles.proofHead}>
          <p className={styles.kicker}>Proof of work</p>
          <h2 id="proof-title" className={styles.sectionTitle}>
            Real jobs, done properly.
          </h2>
          <p className={styles.muted}>
            We are the team that installs and repairs what we sell — so the products in this catalogue come with hands-on
            expertise behind them.
          </p>
        </div>
        <div className={styles.proofGrid}>
          {proofOfWork.map((job) => (
            <figure key={job.title} className={styles.proofCard}>
              <div className={styles.proofMedia}>
                <Image src={job.image} alt={job.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.mediaImg} />
              </div>
              <figcaption>
                <strong>{job.title}</strong>
                <span>{job.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.reasons} aria-labelledby="reasons-title">
        <div className={styles.proofHead}>
          <p className={styles.kicker}>Why IMB Tech</p>
          <h2 id="reasons-title" className={styles.sectionTitle}>
            The best team to work with.
          </h2>
        </div>
        <ul className={styles.reasonGrid}>
          {reasons.map((reason) => (
            <li key={reason.title} className={styles.reasonCard}>
              <span className={styles.reasonIcon}>
                <reason.icon aria-hidden="true" size={22} />
              </span>
              <strong>{reason.title}</strong>
              <span>{reason.text}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.cta}>
        <div>
          <p className={styles.kicker}>Wholesale &amp; contractors</p>
          <h2 className={styles.sectionTitle}>Buying in bulk? Get trade pricing.</h2>
          <p className={styles.muted}>Send your materials list and quantities — we&apos;ll reply with a full quotation.</p>
        </div>
        <div className={styles.heroActions}>
          <Link href="/contact?enquiryType=Materials%20enquiry" className={styles.quoteBtn}>
            Request wholesale quote
          </Link>
          <a href="tel:+2348106127461" className={styles.ghostBtn}>
            Call +234 810 612 7461
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <BrandLogo className="footer-brand" />
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/products">Products</Link>
          <Link href="/materials">Materials</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link href="/booking">Book a service</Link>
          <Link href="/faq">FAQs</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="tel:+2348106127461">+234 810 612 7461</a>
          <a href="https://wa.me/2348106127461" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </div>
      </footer>
      <div className="copyright">© {new Date().getFullYear()} IMB Tech. All rights reserved.</div>
    </main>
  );
}
