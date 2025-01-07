// Components
import About from "../../components/about/About"
import Client from "../../components/client/Client"
import Contact from "../../components/contact/Contact"
import Feature from "../../components/feature/Feature"
import Professional from "../../components/professional/Professional"
import Services from "../../components/services/Services"

export default function Index() {
  return (
    <>
      <Feature />
      <About />
      <Professional />
      <Services />
      <Client />
      <Contact />
    </>
  )
}
