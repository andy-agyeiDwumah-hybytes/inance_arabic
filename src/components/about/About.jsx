// React
import { Link, useLocation, useParams } from "react-router"
import { useEffect, useState } from "react"
// Images
import aboutImg from "../../assets/about-img.jpg"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// Components
import GetInTouch from "../getInTouch/GetInTouch"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import CanonicalTags from "../canonicalTags/CanonicalTags"

export default function About() {
  // Classname differs depending on the path
  const { pathname } = useLocation()
  const [layoutClassName, setLayoutClassName] = useState("")
  const { t, i18n } = useTranslation("about")
  // Add default value to avoid error when mounted
  // as a component rather than page
  let { langCode = "" } = useParams()
  let languageCode = i18n.language
  let currentPage = `/${languageCode}/about`

  useLanguageChange(langCode, pathname, `/${langCode}/about`)

  useEffect(() => {
    if (pathname === `/${languageCode}`) {
      setLayoutClassName("layout_padding-bottom")
    } else if (pathname === `/${languageCode}/about`) {
      setLayoutClassName("layout_padding")
    } else {
      return
    }
  }, [pathname, languageCode])

  return (
    <>
      {pathname === currentPage && (
        <>
          <CanonicalTags
            pagePath={currentPage}
            extension="about"
          />
          <div className="hero_area">
            <Header />
          </div>
        </>
      )}
      <section
        className={["about_section", layoutClassName].join(" ")}
        aria-labelledby="about"
      >
        <div className="container">
          <div className="row about-row">
            <div className="col-lg-5 col-md-6">
              <div className="about-section-detail-box">
                <h2 className="about-h2" id="about">
                  {t("heading")}
                </h2>
                <p className="about-para">{t("paragraph")}</p>
                <Link to={currentPage} className="about-link">
                  {t("linkText")}
                </Link>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="about-img-box">
                {/* Provide alt text - important for unit testing / allows it to be accessible */}
                {/* And will be read by Testing library */}
                <img
                  src={aboutImg}
                  alt={t("linkTextAlt")}
                  className="about-img"
                />
              </div>
            </div>
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
