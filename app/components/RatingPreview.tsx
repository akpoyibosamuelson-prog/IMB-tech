import { Star } from "lucide-react";

const reviews = [
  {
    name: "Oghenekaro E.",
    service: "Solar installation",
    rating: 5,
    comment:
      "Neat solar installation and clear advice on inverter and battery sizing. We now have steady power at home.",
  },
  {
    name: "Blessing A.",
    service: "Electronics fixing",
    rating: 5,
    comment:
      "My inverter and TV were repaired quickly. They explained the fault and the price before starting.",
  },
  {
    name: "Tega O.",
    service: "House wiring",
    rating: 4,
    comment:
      "Professional wiring for our new building. Tidy work and they came back to check everything was safe.",
  },
];

const breakdown = [
  { stars: 5, percent: 86 },
  { stars: 4, percent: 10 },
  { stars: 3, percent: 3 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
];

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <span className="rating-stars" role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          size={size}
          aria-hidden="true"
          fill={index < value ? "currentColor" : "none"}
          className={index < value ? "star-on" : "star-off"}
        />
      ))}
    </span>
  );
}

export default function RatingPreview() {
  return (
    <section className="content-section rating-section" aria-labelledby="rating-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">CUSTOMER RATINGS</p>
          <h2 id="rating-heading">Trusted for solar, wiring and electronics fixing.</h2>
        </div>
      </div>

      <div className="rating-layout">
        <div className="rating-summary">
          <strong className="rating-score">4.9</strong>
          <Stars value={5} size={20} />
          <p>Based on 120+ customer reviews</p>
          <ul className="rating-bars" aria-label="Rating breakdown">
            {breakdown.map((row) => (
              <li key={row.stars}>
                <span>{row.stars}</span>
                <Star size={12} aria-hidden="true" fill="currentColor" className="star-on" />
                <span className="rating-track">
                  <span className="rating-fill" style={{ width: `${row.percent}%` }} />
                </span>
                <span className="rating-percent">{row.percent}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="review-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.name}>
              <Stars value={review.rating} />
              <blockquote>{review.comment}</blockquote>
              <figcaption>
                <strong>{review.name}</strong>
                <span>{review.service}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
