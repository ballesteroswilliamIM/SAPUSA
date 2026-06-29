const STEPS = [
  {
    num: "1",
    title: "First Approach",
    body: "We'll dive into your situation and figure out how we can lend a hand.",
    time: "Step 1",
  },
  {
    num: "2",
    title: "Diagnosis",
    body: "Find the perfect program that feels just right for you.",
    time: "Step 2",
  },
  {
    num: "3",
    title: "Constant Support",
    body: "We'll help you with your paperwork and walk you through each step.",
    time: "Step 3",
  },
];

export default function Engagement() {
  return (
    <section id="engagement" className="engagement">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How Our Progam Works</p>
          <h2>The sequence, in practice.</h2>
          <p className="section-lede">
            We'll help you map out a strategy to conquer your student loan debt.
          </p>
        </div>

        <ol className="ledger">
          {STEPS.map((step) => (
            <li className="ledger-entry" key={step.num}>
              <span className="ledger-num">{step.num}</span>
              <div className="ledger-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <span className="ledger-time">{step.time}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
