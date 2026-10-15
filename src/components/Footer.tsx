// components/Footer.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

interface SocialLink {
  name: string;
  href: string;
  svg: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    svg: "M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4 1 .5.5.7.9 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-1 1.4-.5.5-.9.7-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-1-.5-.5-.7-.9-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 1-1.4.5-.5.9-.7 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.3-.1-1.7-.1-4.8-.1zm0 3a5 5 0 100 10 5 5 0 000-10zm0 8.2a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.4-8.4a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    svg: "M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.3 18.3V9.7H5.7v8.6h2.6zM7 8.6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11.3 9.7v-4.7c0-2.5-1.3-3.7-3.1-3.7-1.4 0-2.1.8-2.4 1.4V9.7h-2.6c0 .7 0 8.6 0 8.6h2.6v-4.8c0-.2 0-.5.1-.7.2-.4.6-1 1.4-1 1 0 1.4.8 1.4 1.9v4.6h2.6z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    svg: "M21.6 7.2s-.2-1.4-.8-2c-.8-.9-1.7-.9-2.1-.9C16.4 4.1 12 4.1 12 4.1h-.1s-4.4 0-7.7.2c-.4 0-1.3 0-2.1.9-.6.6-.8 2-.8 2S1 8.9 1 10.5v1.5c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.9 1.8.9 2.2 1 1.6.1 6.8.2 6.8.2s4.4 0 7.7-.2c.4 0 1.3 0 2.1-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.5c0-1.7-.2-3.3-.2-3.3zM9.9 14.5V9.1l5.4 2.7-5.4 2.7z",
  },
];

interface FooterLink {
  label: string;
  to: string;
}

const quickLinks: FooterLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Services", to: "/services" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact Us", to: "/contact" },
];

interface ContactItem {
  icon: "location" | "phone" | "mail";
  label: string;
  value: string;
  href?: string;
}

const contactItems: ContactItem[] = [
  {
    icon: "location",
    label: "Address",
    value:
      "M.No.2205, Ward No.02, Bamnoli, Sangli, Tal. Miraj, Dist. Sangli, Maharashtra 416410",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+91 84376 77830",
    href: "tel:+918437677830",
  },
  {
    icon: "mail",
    label: "Email",
    value: "adityaagroprintind55@gmail.com",
    href: "mailto:adityaagroprintind55@gmail.com",
  },
];

const ContactIcon = ({ name }: { name: ContactItem["icon"] }) => {
  if (name === "location") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setStatus("error");
      return;
    }

    // TODO: wire this up to your backend / Mailchimp / Brevo / etc.
    console.log("Subscribing:", trimmed);
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <footer className="footer" id="contact-footer">
      <div className="footer-glow" aria-hidden="true" />

      <div className="container">
        <div className="footer-grid">
          {/* ---------- BRAND ---------- */}
          <div className="footer-brand">
            <div className="logo-text">
              ADITYA AGRO PRINT
              <span>Connecting Dots, Driving Excellence</span>
            </div>
            <p>
              Aditya Agro Print is a flexible packaging supplier serving
              customers globally across diverse industries, including retail,
              food service, industrial, and hospitality sectors.
            </p>

            <div className="footer-social">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.svg} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ---------- QUICK LINKS ---------- */}
          <nav className="footer-links" aria-label="Footer navigation">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>
                    <span className="link-arrow" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="currentColor" width="10" height="10">
                        <path
                          fillRule="evenodd"
                          d="M7.293 4.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L12.586 11H3a1 1 0 110-2h9.586L7.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- CONTACT ---------- */}
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <ul>
              {contactItems.map((item, i) => (
                <li key={i} className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    <ContactIcon name={item.icon} />
                  </span>
                  <div className="contact-body">
                    <span className="contact-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href}>{item.value}</a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- NEWSLETTER ---------- */}
          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>
              Sign up to our newsletter for updates, news, and free industry
              insights.
            </p>

            <form className="input-group" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                aria-label="Email address"
                aria-invalid={status === "error"}
              />
              <button type="submit" aria-label="Subscribe">
                {status === "success" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                )}
              </button>
            </form>

            <div className="newsletter-feedback" role="status" aria-live="polite">
              {status === "success" && (
                <p className="newsletter-msg success">
                  Thank you for subscribing!
                </p>
              )}
              {status === "error" && (
                <p className="newsletter-msg error">
                  Please enter a valid email address.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            Copyright © {new Date().getFullYear()} Aditya Agro Print Ind Ltd.
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}