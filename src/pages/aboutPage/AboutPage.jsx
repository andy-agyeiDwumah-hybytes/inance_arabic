// React
import { useLocation, useParams } from "react-router"
import { useEffect, useState } from "react"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// Components
import Header from "../../components/header/Header"
import CanonicalTags from "../../components/canonicalTags/CanonicalTags"
import GetInTouch from "../../components/getInTouch/GetInTouch"
import Footer from "../../components/footer/Footer"
import About from "../../components/about/About"

export default function AboutPage() {
  // Classname differs depending on the path
  const { pathname } = useLocation()
  const [layoutClassName, setLayoutClassName] = useState("")
  const { t, i18n } = useTranslation("about")
  let { langCode } = useParams()
  let languageCode = i18n.language
  let currentPage = `/${languageCode}/about`

  useLanguageChange(langCode, pathname, `/${langCode}/about`)

  useEffect(() => {
    if (pathname === `/${languageCode}`) {
      setLayoutClassName("layout_padding-bottom")
    } else if (pathname === `/${languageCode}/about`) {
      setLayoutClassName("layout_padding")
    }
  }, [pathname, languageCode])

  return (
    <>
      {pathname === currentPage ? (
        <>
          <CanonicalTags pagePath={currentPage} extension="about" />
          <div className="hero_area">
            <Header />
          </div>
          <main>
            <About
              layoutClassName={layoutClassName}
              currentPage={currentPage}
              heading={t("heading")}
              paragraph={t("paragraph")}
              linkText={t("linkText")}
              linkTextAlt={t("linkTextAlt")}
            />
          </main>
          <GetInTouch />
          <Footer />
        </>
      ) : (
        // Do not show main tag when pathname doesn't match current page
        <About
          layoutClassName={layoutClassName}
          currentPage={currentPage}
          heading={t("heading")}
          paragraph={t("paragraph")}
          linkText={t("linkText")}
          linkTextAlt={t("linkTextAlt")}
        />
      )}
    </>
  )
}
