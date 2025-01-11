// React
import { Link, useLocation, useParams } from "react-router"
import { useEffect, useState } from "react"
// Images
import aboutImg from "../../assets/about-img.jpg"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
import GetInTouch from "../getInTouch/GetInTouch"
import Footer from "../footer/Footer"

export default function About() {
  // Classname differs depending on the path
  const { pathname } = useLocation()
  const [layoutClassName, setLayoutClassName] = useState("")
  const { t, i18n } = useTranslation("about")
  // Add default value to avoid error when mounted
  // as a component rather than page
  let { langCode = "" } = useParams()

  useLanguageChange(langCode, pathname, `/${langCode}/about`)

  useEffect(() => {
    if (pathname === `/${i18n.language}`) {
      setLayoutClassName("layout_padding-bottom")
    } else if (pathname === `/${i18n.language}/about`) {
      setLayoutClassName("layout_padding")
    } else {
      return
    }
  }, [pathname, i18n.language])

  return (
    <>
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
                <Link
                  to={`/${i18n.language}`}
                  className="about-link"
                  state={{ linkWasNotClicked: false }}
                >
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
      {/* Show when pathname matches current page */}
      {pathname === `/${i18n.language}/about` && (
        <>
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  )
}
