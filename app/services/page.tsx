const serviceList = [
  {
    name: 'Electrical installation',
    duration: '1-3 days',
    price: 'From ₦45,000',
    description: 'Power, lighting, and installation work for homes, offices, shops, and new construction needs.',
  },
  {
    name: 'Electrical repairs',
    duration: 'Same day / 48 hrs',
    price: 'Quoted',
    description: 'Repair of sockets, switches, control systems, broken circuits, and electrical faults.',
  },
  {
    name: 'Fault diagnosis',
    duration: '1 day',
    price: 'From ₦30,000',
    description: 'Inspection and identification of electrical issues before repair or redesign work begins.',
  },
  {
    name: 'Lighting installation',
    duration: '1-2 days',
    price: 'From ₦25,000',
    description: 'Interior and exterior fixture installation for home and commercial environments.',
  },
  {
    name: 'Solar installation',
    duration: '2-5 days',
    price: 'Quoted',
    description: 'Residential and commercial solar power installation and setup support with practical planning.',
  },
  {
    name: 'Commercial services',
    duration: 'Project based',
    price: 'Quoted',
    description: 'Electrical support for offices, commercial buildings, shops, and operational facilities.',
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-shell page-shell">
      <section className="page-hero compact-hero">
        <p className="eyebrow">Electrical services</p>
        <h1>Professional electrical support for every property type.</h1>
        <p>
          IMB Tech offers reliable repair, installation, inspection, and material supply services for homes, commercial spaces,
          and project work.
        </p>
      </section>

      <section className="feature-grid three-up service-list-grid">
        {serviceList.map((service) => (
          <div className="info-card service-card" key={service.name}>
            <div className="service-card-top">
              <span className="service-price">{service.price}</span>
              <span className="service-duration">{service.duration}</span>
            </div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className="card-links small-links">
              <a href="/contact">Book</a>
              <a href="/contact">Quote</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
