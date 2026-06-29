const CARDS = [
  {
    num: "Knowledge is power",
    title: "We work with the best",
    body: "We partner with the most experienced teams to ensure you get the best advice and support.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Approach</p>
          <h2>Embracing our Core Values</h2>
          <p className="section-lede">
            Discover how we’re committed to guiding you through federal student
            loans, aiming for forgiveness, and uncovering ways to save.
          </p>
        </div>

        <div className="approach-grid">
          {CARDS.map((card) => (
            <article className="approach-card" key={card.num}>
              <p className="card-num">{card.num}</p>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
          <div>
            <img src="images/cross-arms-brunnette.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
