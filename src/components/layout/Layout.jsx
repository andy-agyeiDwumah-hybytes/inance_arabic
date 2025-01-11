// React
import { Outlet } from "react-router"
// Components
import Header from "../header/Header"

export default function Layout() {
  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  )
}
