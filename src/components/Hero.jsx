export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            Federal Student Loan Plan Assistance &middot; Always ready to assist
          </p>
          <h1>
            Ditch the student loan hassle with our expert guidance.
            <br />
            Not a slide deck.
          </h1>
          <p className="hero-lede">
            Receive structured guidance for Student Loan Repayment Programs.
          </p>
          <div className="hero-actions">
            <a href="tel:+17543181772" className="btn btn-primary">
              Call Now!
            </a>
            <a href="tel:+17543181772" className="btn btn-primary">
              Send us a message
            </a>
          </div>
          <p className="hero-fineprint">
            One of Our team members will reach out to you within 24 hours. We
            look forward to helping you!
          </p>
        </div>

        <div className="hero-panel" aria-label="Current engagement snapshot">
          <img src="images/blksuit.webp" alt="Woman in a suit smiling" />
        </div>
      </div>
    </section>
  );
}
