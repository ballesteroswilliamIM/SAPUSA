import { useState } from "react";

const initialForm = { name: "", email: "", company: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitted

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Template placeholder — wire this up to a real endpoint or form
    // service (e.g. Formspree, your own API) before publishing.
    console.log("Form submitted with:", form);
    setStatus("submitted");
  };

  return (
    <section id="contact" className="contact">
      <div className="wrap contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Get in touch</p>
          <h2>Start with one conversation.</h2>
          <p>
            Tell us what&rsquo;s prompting the call. We&rsquo;ll tell you
            plainly whether this is something we can help with.
          </p>
          <ul className="contact-details">
            <li>
              <span>Email</span>
              <a href="mailto:info@studyaidplanusa.com">
                info@studyaidplanusa.com
              </a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+17543181772">+1 (754) 318-1772</a>
            </li>
          </ul>
        </div>

        {status === "submitted" ? (
          <div className="contact-form" aria-live="polite">
            <h3 style={{ marginBottom: "12px" }}>Message received</h3>
            <p style={{ color: "var(--slate)" }}>
              We will get back to you within 24 hours. Thank you for reaching
              out!
            </p>
            <button
              type="button"
              className="btn btn-ghost"
              style={{ marginTop: "20px" }}
              onClick={() => {
                setForm(initialForm);
                setStatus("idle");
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            className="contact-form"
            aria-label="Contact form"
            onSubmit={handleSubmit}
          >
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                value={form.company}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="message">What&rsquo;s prompting the call?</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary form-submit">
              Send message
            </button>
            <p className="form-note">
              This is your first step towards getting the help you need.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
