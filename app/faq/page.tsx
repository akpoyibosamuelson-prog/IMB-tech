import BrandLogo from '../components/BrandLogo';

const faqs = [
  {
    question: 'Do you support both residential and commercial jobs?',
    answer: 'Yes. IMB Tech assists with residential installations, repairs and maintenance and also supports commercial and facility-based electrical work.',
  },
  {
    question: 'Can I request a quotation without visiting the office?',
    answer: 'Yes. You can send a message through the contact form or request a quote online and our team will review your requirement.',
  },
  {
    question: 'Do you offer wholesale pricing?',
    answer: 'Yes, wholesale and retailer support is available where the business is configured to support bulk supply and project requirements.',
  },
  {
    question: 'Can I upload photos of a damaged electrical item?',
    answer: 'Yes. Clients can upload relevant photos so the team can better understand the issue, estimate requirements and prepare support.',
  },
  {
    question: 'How long does a quotation take?',
    answer: 'Quotation timelines vary by project size and complexity, but the business aims to respond quickly and clearly once the requirement is reviewed.',
  },
];

export default function FAQPage() {
  return (
    <main className="site-shell inner-page">
      <header className="topbar">
        <BrandLogo className="brand-wrap" />

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/materials">Materials</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary" href="/contact#book">Ask a question</a>
        </div>
      </header>

      <section className="page-hero">
        <p className="eyebrow">Frequently asked questions</p>
        <h1>Helpful answers about our services and materials support.</h1>
      </section>

      <section className="faq-list faq-page-list">
        {faqs.map((item) => (
          <div className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
