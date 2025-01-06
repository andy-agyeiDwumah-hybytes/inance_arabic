// React
import { Link, NavLink } from "react-router";

export default function Navigation({ styles }) {
  return (
    <nav
      className={["navbar", "navbar-expand-lg", styles.nav].join(" ")}
      aria-label="Primary"
    >
      <Link to="/" className="navbar-brand">
        <span className={styles.inanceText}>Inance</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className={styles.navTogglerSpan}> </span>
      </button>
      <div
        className={["collapse", "navbar-collapse"].join(" ")}
        id="navbarSupportedContent"
      >
        <menu className={["navbar-nav", styles.navbarNav].join(" ")}>
          <li className="nav-item">
            <NavLink
              to="/"
              className={[styles.menuLinks, "nav-link"].join(" ")}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={[styles.menuLinks, "nav-link"].join(" ")}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/services"
              className={[styles.menuLinks, "nav-link"].join(" ")}
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className={[styles.menuLinks, "nav-link"].join(" ")}
            >
              Contact Us
            </NavLink>
          </li>
        </menu>
      </div>
    </nav>
  );
}
