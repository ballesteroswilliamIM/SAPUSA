import { Fragment } from "react";

const ITEMS = [
  "Crush Your Student Loans",
  "Learn to Manaage Your Loans",
  "Optimize Repayment Plans",
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Where we've worked">
      <div className="wrap trust-row">
        {ITEMS.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && <span className="dot">&middot;</span>}
            <span>{item}</span>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
