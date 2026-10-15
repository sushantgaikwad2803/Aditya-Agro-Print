// pages/Contact.tsx
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";

/* ---------- Types ---------- */
interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

interface ContactDetail {
  id: "location" | "phone" | "mail" | "hours";
  label: string;
  lines: string[];
  href?: string;
}

/* ---------- Data (aligned with Footer) ---------- */
const COMPANY = {
  name: "Aditya Agro Print Ind Ltd",
  phonePrimary: {
    display: "+91 84376 77830",
    href: "tel:+918437677830",
  },
  phoneSecondary: {
    display: "+91 88304 02855",
    href: "tel:+918830402855",
  },
  email: "adityaagroprintind55@gmail.com",
  emailHref: "mailto:adityaagroprintind55@gmail.com",
  addressShort: "Bamnoli, Sangli",
  addressLines: [
    "M.No.2205, Ward No.02, Bamnoli,",
    "Tal. Miraj, Dist. Sangli,",
    "Maharashtra 416410",
  ],
};

const contactDetails: ContactDetail[] = [
  {
    id: "location",
    label: "Address",
    lines: COMPANY.addressLines,
  },
  {
    id: "phone",
    label: "Phone",
    lines: [
      COMPANY.phonePrimary.display,
      COMPANY.phoneSecondary.display,
    ],
    href: COMPANY.phonePrimary.href,
  },
  {
    id: "mail",
    label: "Email",
    lines: [COMPANY.email],
    href: COMPANY.emailHref,
  },
  {
    id: "hours",
    label: "Work Hours",
    lines: ["Monday – Saturday", "09:00 AM – 07:00 PM"],
  },
];

const ContactIcon = ({ name }: { name: ContactDetail["id"] }) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "location":
      return (
        <svg {...common}>
          <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "hours":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
  }
};

/* ---------- Component ---------- */
const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // TODO: wire this up to your backend / email service
    console.log("Form submitted:", form);

    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  return (
    <div className="contact-page">
      {/* ---------- 1. HERO — Typographic Split ---------- */}
      <section className="contact-hero">
        <div className="contact-hero-bg" aria-hidden="true">
          <span className="contact-hero-blob blob-1" />
          <span className="contact-hero-blob blob-2" />
          <span className="contact-hero-grid" />
        </div>

        <div className="container">
          <div className="contact-hero-layout">
            {/* LEFT — Editorial content */}
            <div className="contact-hero-content">
              <nav className="contact-hero-breadcrumb" aria-label="Breadcrumb">
                <Link to="/" className="contact-breadcrumb-link">
                  Home
                </Link>
                <span className="contact-breadcrumb-sep" aria-hidden="true">
                  /
                </span>
                <span className="contact-breadcrumb-current">Contact</span>
              </nav>

              <span className="contact-hero-eyebrow">
                <span className="contact-hero-eyebrow-dot" aria-hidden="true" />
                Get In Touch
              </span>

              <h1 className="contact-hero-title">
                Let's start a{" "}
                <span className="contact-hero-title-em">conversation</span>{" "}
                about packaging.
              </h1>

              <p className="contact-hero-description">
                Whether you're sourcing, designing, or scaling — our team has
                the packaging expertise to help you move faster, with the
                quality and turnaround your business depends on.
              </p>

              <div className="contact-hero-actions">
                <a
                  href="#contact-form"
                  className="contact-btn contact-btn-primary"
                >
                  Send a Message
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </a>
                <a
                  href={COMPANY.phonePrimary.href}
                  className="contact-btn contact-btn-ghost"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                  </svg>
                  Call Us
                </a>
              </div>

              {/* Trust bar */}
              <ul className="contact-hero-trust" aria-label="Highlights">
                <li className="contact-hero-trust-item">
                  <span className="contact-hero-trust-value">15+</span>
                  <span className="contact-hero-trust-label">
                    Years of experience
                  </span>
                </li>
                <li className="contact-hero-trust-item">
                  <span className="contact-hero-trust-value">1 day</span>
                  <span className="contact-hero-trust-label">
                    Response time
                  </span>
                </li>
                <li className="contact-hero-trust-item">
                  <span className="contact-hero-trust-value">Global</span>
                  <span className="contact-hero-trust-label">
                    Shipping coverage
                  </span>
                </li>
              </ul>
            </div>

            {/* RIGHT — Floating contact cards */}
            <div className="contact-hero-cards" aria-hidden="true">
              <div className="contact-hero-cards-inner">
                <div className="contact-hero-card card-1">
                  <span className="contact-hero-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                    </svg>
                  </span>
                  <div className="contact-hero-card-body">
                    <span className="contact-hero-card-label">
                      Phone &middot; Primary
                    </span>
                    <span className="contact-hero-card-value">
                      {COMPANY.phonePrimary.display}
                    </span>
                  </div>
                </div>

                <div className="contact-hero-card card-2">
                  <span className="contact-hero-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                  </span>
                  <div className="contact-hero-card-body">
                    <span className="contact-hero-card-label">Email</span>
                    <span className="contact-hero-card-value">
                      {COMPANY.email}
                    </span>
                  </div>
                </div>

                <div className="contact-hero-card card-3">
                  <span className="contact-hero-card-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                    </svg>
                  </span>
                  <div className="contact-hero-card-body">
                    <span className="contact-hero-card-label">
                      Phone &middot; Secondary
                    </span>
                    <span className="contact-hero-card-value">
                      {COMPANY.phoneSecondary.display}
                    </span>
                  </div>
                </div>

                <div className="contact-hero-card card-4">
                  <span className="contact-hero-card-dot" />
                  <div className="contact-hero-card-body">
                    <span className="contact-hero-card-label">Status</span>
                    <span className="contact-hero-card-value">
                      Available Now
                    </span>
                  </div>
                </div>

                {/* Decorative ring behind cards */}
                <span className="contact-hero-cards-ring" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 2. CONTACT MAIN ---------- */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT — Contact details */}
            <div className="contact-info">
              <span className="contact-eyebrow">Get In Touch</span>
              <h2 className="contact-h2">We're here to help.</h2>
              <p className="contact-intro">
                Whether you're sourcing, designing, or scaling — our team has
                the packaging expertise to help you move faster.
              </p>

              <div className="contact-details">
                {contactDetails.map((detail) => {
                  const content = (
                    <>
                      <div className="contact-detail-icon">
                        <ContactIcon name={detail.id} />
                      </div>
                      <div className="contact-detail-text">
                        <span className="contact-detail-label">
                          {detail.label}
                        </span>
                        {detail.lines.map((line, i) => (
                          <span key={i} className="contact-detail-line">
                            {line}
                          </span>
                        ))}
                      </div>
                    </>
                  );

                  return detail.href ? (
                    <a
                      key={detail.id}
                      href={detail.href}
                      className="contact-detail-item is-link"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={detail.id} className="contact-detail-item">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — Form card */}
            <div className="contact-form-card" id="contact-form">
              <div className="contact-form-head">
                <span className="contact-form-eyebrow">Send a Message</span>
                <h3 className="contact-form-title">Leave us a note</h3>
                <p className="contact-form-subtitle">
                  Fill in the form and we'll get back within one business day.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-label">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-label">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-phone" className="contact-label">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="(+91) 00000 00000"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-subject" className="contact-label">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message" className="contact-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>

                <div
                  className="contact-form-feedback"
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" && (
                    <p className="contact-msg success">
                      Thank you! Your message has been received.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="contact-msg error">
                      Please fill in your name, email, and message.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 3. MAP ---------- */}
      <section className="contact-map">
        <div className="container">
          <div className="contact-map-head">
            <span className="contact-eyebrow">Find Us</span>
            <h2 className="contact-h2">
              Visit our {COMPANY.addressShort} plant
            </h2>
            <p className="contact-map-subtitle">
              Our manufacturing facility is located in Bamnoli, near Miraj,
              Sangli — easily reachable from Pune, Kolhapur, and Mumbai.
            </p>
          </div>
        </div>
        <div className="contact-map-frame">
          <iframe
            title={`${COMPANY.name} — Bamnoli, Sangli Location`}
            src="https://www.google.com/maps?q=Bamnoli,+Miraj,+Sangli,+Maharashtra+416410&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;