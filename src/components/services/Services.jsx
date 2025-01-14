// Components
import Service from "../service/Service"
import GetInTouch from "../getInTouch/GetInTouch"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import CanonicalTags from "../canonicalTags/CanonicalTags"
// Images
import maintenanceImg from "../../assets/s1.png"
import electricalImg from "../../assets/s2.png"
import plumbingImg from "../../assets/s3.png"
// Styles
import styles from "./Services.module.css"
// React
import { Link, useLocation, useParams } from "react-router"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"

export default function Services() {
  const { t } = useTranslation("services")
  // Add default value to avoid error when shown
  // as a component rather than page
  let { langCode = "" } = useParams()
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  let languageCode = i18n.language
  let currentPage = `/${languageCode}/services`

  useLanguageChange(langCode, pathname, `/${langCode}/services`)

  return (
    <>
      {pathname === currentPage && (
        <>
          <CanonicalTags
            pagePath={currentPage}
            extension="services"
          />
          <div className="hero_area">
            <Header />
          </div>
        </>
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
              to={`/${languageCode}/services`}
              className={styles.btnBoxLink}
            >
              {t("linkText")}
            </Link>
          </div>
        </div>
      </section>
      {pathname === currentPage && (
        <>
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  )
}
