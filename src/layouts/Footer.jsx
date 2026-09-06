import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaCode,
} from "react-icons/fa";

export default function Footer() {
  const currentDate = new Date().getFullYear();

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

  const quickLinks = [
    { label: "Resume", url: "/resume" },
    { label: "Projects", url: "/projects" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <FaCode className="footer__logo-icon" />
              <h2>Rashid Aymaq</h2>
            </div>
            <p className="footer__tagline">
              Frontend Developer • Creating digital experiences
            </p>
            <div className="footer__social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="footer__social-link"
                  style={{ "--hover-color": social.color }}>
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h3>Quick Links</h3>
              {quickLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="footer__link-group">
              <h3>Contact</h3>
              <a
                href="https://wa.me/93708760475"
                target="_blank"
                rel="noopener noreferrer">
                <FaWhatsapp /> +93 708 760 475
              </a>
              <a href="mailto:rashidaymaq1994@gmail.com">
                <FaEnvelope /> rashidaymaq1994@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentDate} Abdul Rashid Aymaq. All rights reserved.
          </p>
          <p className="footer__credit">Built with ❤️ using React</p>
        </div>
      </div>
    </footer>
  );
}
