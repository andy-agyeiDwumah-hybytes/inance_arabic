// Constants
import { LOCALHOSTURL } from "../../constants/Constants"
// Languages
import { languages } from "../../languages/languageCodes"
// React
import { Link, Meta } from "react-head"

export default function MetaData({ pagePath, extension = "" }) {
  // There is no extension for the home page but other pages do (e.g., en/about, en/services)
  return (
    <>
      {/* Open Graph Protocol */}
      <Meta property="og:title" content="" />
      <Meta property="og:type" content="website" />
      {/* <Meta property="og:image" content="" /> */}
      <Meta property="og:url" content="" />
      <Meta property="og:description" content="" />
      <Meta property="og:determiner" content="" />
      <Meta property="og:locale" content="" />
      {/* <Meta property="og:locale:alternate" content="" /> */}
      <Meta property="og:site_name" content="Inance" />
      {/* Canonical tag */}
      <Link rel="canonical" href={`${LOCALHOSTURL}${pagePath}`} />
      {/* Alternate canonical tags */}
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
