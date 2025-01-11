// Components
import Service from "../service/Service"
import GetInTouch from "../getInTouch/GetInTouch"
import Footer from "../footer/Footer"
import Header from "../header/Header"
// Images
import maintenanceImg from "../../assets/s1.png"
import electricalImg from "../../assets/s2.png"
import plumbingImg from "../../assets/s3.png"
// Styles
import styles from "./Services.module.css"
// React
import { Link, useLocation, useParams } from "react-router"
import { useContext } from "react"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// Context
import { LanguageContext } from "../../context/languageContext"

export default function Services() {
  const { t } = useTranslation("services")
  // Add default value to avoid error when shown
  // as a component rather than page
  let { langCode = "" } = useParams()
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const { handleLinkClick } = useContext(LanguageContext)
  let languageCode = i18n.language

  useLanguageChange(langCode, pathname, `/${langCode}/services`)

  return (
    <>
      {pathname === `/${languageCode}/services` && (
        <div className="hero_area">
          <Header />
        </div>
      )}
      <section
        className={["layout_padding", styles.section].join(" ")}
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="heading_container heading_center">
            <h2 id="services-heading">{t("heading")}</h2>
          </div>
          <div className="row">
            <Service
              heading={t("serviceOneHeading")}
              imgSrc={maintenanceImg}
              styles={styles}
            >
              {t("serviceOneText")}
            </Service>
            <Service
              heading={t("serviceTwoHeading")}
              imgSrc={electricalImg}
              styles={styles}
            >
              {t("serviceTwoText")}
            </Service>
            <Service
              heading={t("serviceThreeHeading")}
              imgSrc={plumbingImg}
              styles={styles}
            >
              {t("serviceThreeText")}
            </Service>
          </div>
          <div className={styles.btnBox}>
            <Link
              to={`/${languageCode}`}
              className={styles.btnBoxLink}
              onClick={e =>
                handleLinkClick(e, pathname, `/${languageCode}`)
              }
            >
              {t("linkText")}
            </Link>
          </div>
        </div>
      </section>
      {/* Show when pathname matches current page */}
      {pathname === `/${languageCode}/services` && (
        <>
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  );
}
