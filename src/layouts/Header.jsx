import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../components/layouts/Logo";
import useScrollThreshold from "../hooks/useScrollThreshold";
import useNavigationState from "../hooks/useNavigationState";

export default function Navigation() {
  const isScrolled = useScrollThreshold(50);
  const { isMenuOpen, toggleMenu, closeMenu, handleNavigation } =
    useNavigationState();

  const navLinks = [
    { to: "/resume", label: "Resume" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? "navigation--scrolled" : ""}`}>
        <div className="navigation__container">
          {/* Logo/Brand */}

          <Logo onClick={handleNavigation} />

          {/* Desktop Navigation */}
          <ul className="navigation__links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "navigation__link navigation__link--active"
                      : "navigation__link"
                  }
                  onClick={closeMenu}>
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <NavLink
                to="/contact"
                className="navigation__cta"
                onClick={closeMenu}>
                Let's Talk
              </NavLink>
            </li>
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="navigation__toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`navigation__overlay ${isMenuOpen ? "navigation__overlay--active" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Navigation */}
      <div
        className={`navigation__mobile ${isMenuOpen ? "navigation__mobile--active" : ""}`}>
        <ul className="navigation__mobile-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "navigation__mobile-link navigation__mobile-link--active"
                    : "navigation__mobile-link"
                }
                onClick={closeMenu}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              className="navigation__mobile-cta"
              onClick={closeMenu}>
              Let's Talk
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
