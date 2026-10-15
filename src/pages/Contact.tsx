// pages/Contact.tsx
import { useState, useCallback } from "react";
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

type FieldErrors = Partial<Record<keyof ContactFormState, string>>;

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
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7635.895751995775!2d74.62296142530236!3d16.878472820345692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1792075515792!5m2!1sen!2sin",
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
    lines: [COMPANY.phonePrimary.display, COMPANY.phoneSecondary.display],
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

/* ---------- Icons ---------- */
const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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
);

const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const ArrowRightIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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
);

const ArrowDownIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
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
);

const ContactIcon = ({ name }: { name: ContactDetail["id"] }) => {
  const common = {
    width: 20,
    height: 20,
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

/* ---------- Validation ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: ContactFormState): FieldErrors {
  const errors: FieldErrors = {};

  if (!form.name.trim()) errors.name = "Please enter your name.";
  else if (form.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters.";

  if (!form.email.trim()) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (form.phone.trim() && !/^[\d\s()+-]{6,}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!form.message.trim()) errors.message = "Please enter a message.";
  else if (form.message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";

  return errors;
}

/* ---------- Component ---------- */
const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));

      // Clear the specific field error as the user types
      setErrors((prev) => {
        if (!prev[name as keyof ContactFormState]) return prev;
        const next = { ...prev };
        delete next[name as keyof ContactFormState];
        return next;
      });

      if (status !== "idle") setStatus("idle");
    },
    [status]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      // Focus the first invalid field
      const firstKey = Object.keys(nextErrors)[0];
      const el = document.getElementById(`contact-${firstKey}`);
      el?.focus();
      return;
    }

    setStatus("sending");

    // TODO: wire this up to your backend / email service
    try {
      // Simulate network request — replace with fetch/axios
      await new Promise((res) => setTimeout(res, 600));
      console.log("Form submitted:", form);

      setStatus("success");
      setForm(initialForm);
      setErrors({});
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
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
              <nav
                className="contact-hero-breadcrumb"
                aria-label="Breadcrumb"
              >
                <Link to="/" className="contact-breadcrumb-link">
                  Home
                </Link>
                <span
                  className="contact-breadcrumb-sep"
                  aria-hidden="true"
                >
                  /
                </span>
                <span className="contact-breadcrumb-current">
                  Contact
                </span>
              </nav>

              <span className="contact-hero-eyebrow">
                <span
                  className="contact-hero-eyebrow-dot"
                  aria-hidden="true"
                />
                Get In Touch
              </span>

              <h1 className="contact-hero-title">
                Let's start a{" "}
                <span className="contact-hero-title-em">
                  conversation
                </span>{" "}
                about packaging.
              </h1>

              <p className="contact-hero-description">
                Whether you're sourcing, designing, or scaling — our team
                has the packaging expertise to help you move faster, with
                the quality and turnaround your business depends on.
              </p>

              <div className="contact-hero-actions">
                <a
                  href="#contact-form"
                  className="contact-btn contact-btn-primary"
                >
                  Send a Message
                  <ArrowDownIcon />
                </a>
                <a
                  href={COMPANY.phonePrimary.href}
                  className="contact-btn contact-btn-ghost"
                >
                  <PhoneIcon size={16} />
                  Call Us
                </a>
              </div>

              {/* Trust bar */}
              <ul
                className="contact-hero-trust"
                aria-label="Highlights"
              >
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
            <div
              className="contact-hero-cards"
              aria-hidden="true"
            >
              <div className="contact-hero-cards-inner">
                <div className="contact-hero-card card-1">
                  <span className="contact-hero-card-icon">
                    <PhoneIcon size={18} />
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
                    <MailIcon size={18} />
                  </span>
                  <div className="contact-hero-card-body">
                    <span className="contact-hero-card-label">
                      Email
                    </span>
                    <span className="contact-hero-card-value">
                      {COMPANY.email}
                    </span>
                  </div>
                </div>

                <div className="contact-hero-card card-3">
                  <span className="contact-hero-card-icon">
                    <PhoneIcon size={18} />
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
                    <span className="contact-hero-card-label">
                      Status
                    </span>
                    <span className="contact-hero-card-value">
                      Available Now
                    </span>
                  </div>
                </div>

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
                Whether you're sourcing, designing, or scaling — our team
                has the packaging expertise to help you move faster.
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
                          <span
                            key={i}
                            className="contact-detail-line"
                          >
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
                    <div
                      key={detail.id}
                      className="contact-detail-item"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT — Form card */}
            <div className="contact-form-card" id="contact-form">
              <div className="contact-form-head">
                <span className="contact-form-eyebrow">
                  Send a Message
                </span>
                <h3 className="contact-form-title">Leave us a note</h3>
                <p className="contact-form-subtitle">
                  Fill in the form and we'll get back within one business
                  day.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
              >
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label
                      htmlFor="contact-name"
                      className="contact-label"
                    >
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
                      aria-invalid={!!errors.name}
                      aria-describedby={
                        errors.name ? "err-name" : undefined
                      }
                      required
                    />
                    {errors.name && (
                      <span
                        id="err-name"
                        className="contact-field-error"
                        role="alert"
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="contact-field">
                    <label
                      htmlFor="contact-email"
                      className="contact-label"
                    >
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
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "err-email" : undefined
                      }
                      required
                    />
                    {errors.email && (
                      <span
                        id="err-email"
                        className="contact-field-error"
                        role="alert"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label
                      htmlFor="contact-phone"
                      className="contact-label"
                    >
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
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "err-phone" : undefined
                      }
                    />
                    {errors.phone && (
                      <span
                        id="err-phone"
                        className="contact-field-error"
                        role="alert"
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="contact-field">
                    <label
                      htmlFor="contact-subject"
                      className="contact-label"
                    >
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
                  <label
                    htmlFor="contact-message"
                    className="contact-label"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project…"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "err-message" : undefined
                    }
                    required
                  />
                  {errors.message && (
                    <span
                      id="err-message"
                      className="contact-field-error"
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <ArrowRightIcon />
                </button>

                <div
                  className="contact-form-feedback"
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" && (
                    <p className="contact-msg success">
                      Thank you! Your message has been received. We'll
                      get back within one business day.
                    </p>
                  )}
                  {status === "error" &&
                    Object.keys(errors).length === 0 && (
                      <p className="contact-msg error">
                        Something went wrong. Please try again.
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
              Our manufacturing facility is located in Bamnoli, near
              Miraj, Sangli — easily reachable from Pune, Kolhapur, and
              Mumbai.
            </p>
          </div>
        </div>
        <div className="contact-map-frame">
          <iframe
            title={`${COMPANY.name} — Bamnoli, Sangli Location`}
            src={COMPANY.mapEmbedSrc}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;