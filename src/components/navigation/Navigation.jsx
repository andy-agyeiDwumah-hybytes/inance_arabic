// React
import { Link, NavLink } from "react-router"
// i18
import { useTranslation } from "react-i18next"

export default function Navigation({ styles, t }) {
  const { i18n } = useTranslation()

  return (
    <nav
      className={["navbar", "navbar-expand-lg", styles.nav].join(" ")}
      aria-label="Primary"
    >
      <Link to={`/${i18n.language}`} className="navbar-brand">
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
              to={`/${i18n.language}`}
              className={[styles.menuLinks, "nav-link"].join(" ")}
              // Match only when the URL is exactly the same as link
              end
            >
              {t("homeLinkText")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/${i18n.language}/about`}
              className={[styles.menuLinks, "nav-link"].join(" ")}
              end
            >
              {t("aboutLinkText")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/${i18n.language}/services`}
              className={[styles.menuLinks, "nav-link"].join(" ")}
              end
            >
              {t("servicesLinkText")}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={`/${i18n.language}/contact`}
              className={[styles.menuLinks, "nav-link"].join(" ")}
              end
            >
              {t("contactLinkText")}
            </NavLink>
          </li>
        </menu>
      </div>
    </nav>
  );
}
