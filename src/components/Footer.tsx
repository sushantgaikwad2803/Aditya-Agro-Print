// components/Footer.tsx
import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRight,
  faPaperPlane,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "./Footer.css";

/* ============================================================
   SOCIAL LINKS
   ============================================================ */

interface SocialLink {
  name: string;
  href: string;
  icon: IconDefinition;
}

const socialLinks: SocialLink[] = [
  { name: "Facebook", href: "https://facebook.com", icon: faFacebookF },
  { name: "Instagram", href: "https://instagram.com", icon: faInstagram },
  { name: "LinkedIn", href: "https://linkedin.com", icon: faLinkedinIn },
  { name: "YouTube", href: "https://youtube.com", icon: faYoutube },
];

/* ============================================================
   QUICK LINKS
   ============================================================ */

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

/* ============================================================
   CONTACT INFO
   ------------------------------------------------------------
   Each item can have a primary `value` + optional `extra`
   entries for additional lines (e.g. second phone number).
   ============================================================ */

interface ContactLine {
  value: string;
  href?: string;
}

interface ContactItem {
  icon: IconDefinition;
  label: string;
  lines: ContactLine[];
}

const contactItems: ContactItem[] = [
  {
    icon: faLocationDot,
    label: "Address",
    lines: [
      {
        value:
          "M.No.2205, Ward No.02, Bamnoli, Sangli, Tal. Miraj, Dist. Sangli, Maharashtra 416410",
      },
    ],
  },
  {
    icon: faPhone,
    label: "Phone",
    lines: [
      { value: "+91 84376 77830", href: "tel:+918437677830" },
      { value: "+91 88304 02855", href: "tel:+918830402855" },
    ],
  },
  {
    icon: faEnvelope,
    label: "Email",
    lines: [
      {
        value: "adityaagroprintind55@gmail.com",
        href: "mailto:adityaagroprintind55@gmail.com",
      },
    ],
  },
];

/* ============================================================
   FOOTER
   ============================================================ */

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
      {/* Decorative top accent + glow */}
      <div className="footer-glow" aria-hidden="true" />

      <div className="container">
        <div className="footer-grid">
          {/* ---------- BRAND ---------- */}
          <div className="footer-brand">
            <div className="footer-logo">
              ADITYA AGRO PRINT
              <span>Built for Business. Designed for Growth</span>
            </div>

            <p>
              A flexible packaging supplier serving customers globally across
              diverse industries — retail, food service, industrial, and
              hospitality sectors.
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
                  <FontAwesomeIcon icon={s.icon} aria-hidden="true" />
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
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                    <span>{l.label}</span>
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
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <div className="contact-body">
                    <span className="contact-label">{item.label}</span>
                    {item.lines.map((line, j) =>
                      line.href ? (
                        <a key={j} href={line.href}>
                          {line.value}
                        </a>
                      ) : (
                        <span key={j} className="contact-value">
                          {line.value}
                        </span>
                      )
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
              Sign up for updates, news, and free industry insights — straight
              to your inbox.
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
                <FontAwesomeIcon
                  icon={status === "success" ? faCheck : faPaperPlane}
                  aria-hidden="true"
                />
              </button>
            </form>

            <div
              className="newsletter-feedback"
              role="status"
              aria-live="polite"
            >
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

        {/* ---------- BOTTOM BAR ---------- */}
        <div className="footer-bottom">
          <span className="footer-copy">
            Copyright © {new Date().getFullYear()} Aditya Agro Print Ind Ltd.
            All rights reserved.
          </span>
          <span className="footer-credit">
            Crafted with care in Sangli, Maharashtra
          </span>
        </div>
      </div>
    </footer>
  );
}