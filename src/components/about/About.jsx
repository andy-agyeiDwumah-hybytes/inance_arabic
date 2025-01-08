// React
import { Link, useLocation, useParams } from "react-router"
import { useContext, useEffect, useState } from "react"
// Images
import aboutImg from "../../assets/about-img.jpg"
// i18
import { useTranslation } from "react-i18next"
// Context
import { LanguageContext } from "../../context/languageContext"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"

export default function About() {
  // Classname differs depending on the path
  const { pathname } = useLocation()
  const { languageOptions } = useContext(LanguageContext)
  const { language } = languageOptions
  const [layoutClassName, setLayoutClassName] = useState("")
  const { t } = useTranslation("about")
  // Add default value to avoid error when mounted
  // as a component rather than page
  let { langCode = "" } = useParams()

  useLanguageChange(langCode, pathname, `/${langCode}/about`)

  useEffect(() => {
    if (pathname === `/${language}`) {
      setLayoutClassName("layout_padding-bottom")
    } else if (pathname === `/${language}/about`) {
      setLayoutClassName("layout_padding")
    } else {
      return
    }
  }, [pathname, language])

  return (
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
              <Link to={`/${language}`} className="about-link">
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
  )
}
