// Constants
import { LOCALHOSTURL } from "../../constants/Constants"
// Languages
import { languages } from "../../languages/languageCodes"
// React
import { Link } from "react-head"

export default function CanonicalTags({ pagePath, extension = "" }) {
  // There is no extension for the home page but other pages do (e.g., en/about, en/services)
  return (
    <>
      {/* Canonical tag */}
      <Link rel="canonical" href={`${LOCALHOSTURL}${pagePath}`} />
      {/* Alternate */}
      {languages.map(lang => {
        return (
          <Link
            key={lang.language}
            rel="alternate"
            hrefLang={lang.languageCode}
            href={
              extension
                ? `${LOCALHOSTURL}/${lang.languageCode}/${extension}`
                : `${LOCALHOSTURL}/${lang.languageCode}`
            }
          ></Link>
        )
      })}
    </>
  )
}
