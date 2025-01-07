// React
import { Outlet } from "react-router"
// Components
import Header from "../header/Header"
import Footer from "../footer/Footer"
import GetInTouch from "../getInTouch/GetInTouch"

export default function Layout() {
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <GetInTouch />
      <Footer />
    </>
  )
}
