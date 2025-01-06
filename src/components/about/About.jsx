// React
import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
// Images
import aboutImg from "../../assets/about-img.jpg"
// i18
import { useTranslation } from "react-i18next";

export default function About() {
  // classname differs depending on the path
  const { pathname } = useLocation()
  const [layoutClassName, setLayoutClassName] = useState("")
  const {t} = useTranslation("about")

  useEffect(() => {
    if (pathname === "/") {
      setLayoutClassName("layout_padding-bottom")
    } else if (pathname === "/about") {
      setLayoutClassName("layout_padding")
    } else {
      return
    }
  }, [pathname])

  return (
    <section className={["about_section", layoutClassName].join(" ")} aria-labelledby="about">
      <div className="container">
        <div className="row about-row">
          <div className="col-lg-5 col-md-6">
            <div className="about-section-detail-box">
              <h2 className="about-h2" id="about">{t("heading")}</h2>
              <p className="about-para">
                {t("paragraph")}
              </p>
              <Link to="/" className="about-link">{t("linkText")}</Link>
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="about-img-box">
              {/* Provide alt text - important for unit testing / allows it to be accessible */}
              {/* And will be read by Testing library */}
              <img
                src={aboutImg} alt={t("linkTextAlt")}
                className="about-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
