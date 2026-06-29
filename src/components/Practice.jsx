const PRACTICE_AREAS = [
  {
    title: "Go-to-market & pricing",
    body: "Our team is here to provide you with the expert guidance you need to free yourself from the burden of student loans.",
  },
  {
    title: "Organizational design",
    body: "Reporting lines, span of control, and decision rights for teams that have doubled headcount without revisiting structure.",
  },
  ,
];

export default function Practice() {
  return (
    <section id="practice" className="practice">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Just one call away</p>
          <h2>
            Don't wait any longer to take control of your financial situation.
          </h2>
        </div>

        <div className="practice-list">
          {PRACTICE_AREAS.map((area) => (
            <article className="practice-row" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.body}</p>
            </article>
          ))}
        </div>
        <div>
          <img
            className="practice-image"
            src="images/womanSmileSuit.jpg"
            alt="Woman smiling"
          />
        </div>
      </div>
    </section>
  );
}
