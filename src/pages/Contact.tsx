// pages/Contact.tsx
import { useState } from 'react';
import type { FormEvent } from 'react';
import './Contact.css';

interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [form, setForm] = useState<ContactFormState>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your backend / email service
    console.log('Form submitted:', form);
    alert('Thank you! Your message has been received.');
    setForm(initialForm);
  };

  return (
    <div className="contact-page">
      {/* 1. Hero Banner with Breadcrumb */}
      <section className="capabilities-hero">
        <div className="hero-inner">
          <div className="breadcrumb-card">
            <h1>Contact Us</h1>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span>Home</span>
              <span className="breadcrumb-arrow">→</span>
              <span className="breadcrumb-current">Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* 2. Contact Info + Form */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT — Contact Info */}
            <div className="contact-info">
              <div className="contact-heading">
                <h2 className="outline-text">Contact Us</h2>
                <h2 className="solid-text">Get In Touch</h2>
              </div>

              <p className="contact-intro">
                We provide creative packaging and powerful branding solutions
                tailored to your business needs. Contact us today and let's
                build something exceptional together.
              </p>

              <div className="contact-details-grid">
                {/* Location */}
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-8 8-14a8 8 0 10-16 0c0 6 8 14 8 14z" />
                      <circle cx="12" cy="8" r="3" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h4>Location</h4>
                    <p>
                      1308, Hubtown Solaris,
                      <br />
                      Opp, Teli Gali, Vijay
                      <br />
                      Nagar, Andheri East,
                      <br />
                      Mumbai, Maharashtra
                      <br />
                      400069
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.9a2 2 0 01-.5 2.1L8 10a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.9.5 2.9.6a2 2 0 011.7 2z" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h4>Phone</h4>
                    <p>(+91) 9820 340 950</p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 6l10 7 10-7" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h4>Email</h4>
                    <p>krish@nbgreen tech.com</p>
                  </div>
                </div>

                {/* Work Hours */}
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="detail-text">
                    <h4>Work Hours</h4>
                    <p>
                      Everyday 07:00 AM -
                      <br />
                      19:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="contact-form-card">
              <h3>Leave A Message</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />

                <button type="submit" className="form-submit-btn">
                  Send Message
                </button>
              </form>

              <p className="form-footer-note">
                Have a question or project in mind? Send us a message and our
                team will respond quickly with expert guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Map Embed */}
      <section className="contact-map">
        <iframe
          title="Net Benefit Office Location"
          src="https://www.google.com/maps?q=Hubtown+Solaris,+Andheri+East,+Mumbai&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default Contact;