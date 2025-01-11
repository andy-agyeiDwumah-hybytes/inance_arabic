// Styles
import styles from "./Header.module.css"
// React
import { Link, useLocation } from "react-router"
import { useEffect, useState } from "react"
// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
// Components
import Navigation from "../navigation/Navigation"
import Slider from "../slider/Slider"
// i18
import { useTranslation } from "react-i18next"

export default function Header() {
  const { pathname } = useLocation()
  // Only show Slider component if current page is the index (home page)
  // True by default
  const [currentPageIsIndex, setCurrentPageIsIndex] = useState(true)
  const { t, i18n } = useTranslation("header")

  useEffect(() => {
    if (pathname === `/${i18n.language}`) {
      setCurrentPageIsIndex(true)
    } else {
      setCurrentPageIsIndex(false)
    }
  }, [pathname, i18n.language])

  return (
    <>
      <header className="header_section">
        <div className={styles.top}>
          <div className="container-fluid">
            <div className={["contact_nav", styles.contactNav].join(" ")}>
              <Link to={`/${i18n.language}`} className={styles.topHeaderLinks}>
                <div className={styles.iconTextContainer}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={[styles.headerIcon, styles.phoneIcon].join(" ")}
                  ></FontAwesomeIcon>
                </div>
                <div>{t("callText")}</div>
              </Link>
              <Link to={`/${i18n.language}`} className={styles.topHeaderLinks}>
                <div className={styles.iconTextContainer}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className={[styles.headerIcon, styles.envelopeIcon].join(
                      " "
                    )}
                  ></FontAwesomeIcon>
                </div>
                <div>{t("emailText")}</div>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className="container-fluid">
            <Navigation styles={styles} t={t} />
          </div>
        </div>
      </header>
      {currentPageIsIndex && <Slider />}
    </>
  )
}
