import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function ContactInfo() {
  const contactInfo = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+93 708 760 475",
      href: "https://wa.me/93708760475",
      color: "#25D366",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rashidaymaq1994@gmail.com",
      href: "mailto:rashidaymaq1994@gmail.com",
      color: "#EA4335",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Kabul, Afghanistan",
      href: "#",
      color: "#3b82f6",
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/yourprofile",
      label: "Facebook",
      color: "#1877F2",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/abdul-rashid-aymaq-3854a435a",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com",
      label: "Instagram",
      color: "#E4405F",
    },
    {
      icon: FaGithub,
      url: "https://github.com/Aymaq-code",
      label: "GitHub",
      color: "#181717",
    },
  ];

  return (
    <div className="contactPage__info-wrapper">
      <div className="contactPage__info-card">
        <div className="info-header">
          <h2>Contact Information</h2>
          <p>Feel free to reach out through any of these channels</p>
        </div>

        <div className="contactPage__info-items">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="info-item"
              style={{ "--hover-color": item.color }}>
              <div
                className="info-icon"
                style={{
                  background: `${item.color}15`,
                  color: item.color,
                }}>
                <item.icon />
              </div>
              <div className="info-content">
                <span className="info-label">{item.label}</span>
                <span className="info-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="contactPage__social">
          <h3>Connect with Me</h3>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="social-link"
                style={{ "--social-color": social.color }}>
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="contactPage__availability">
          <div className="availability-dot"></div>
          <div className="availability-text">
            <span className="status-label">Available for</span>
            <span className="status-value">Freelance Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}
