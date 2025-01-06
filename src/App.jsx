// React
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
// Components
import Layout from "./components/layout/Layout"
import Notfound from "./pages/notfound/Notfound"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
// Pages
import Index from "./pages/index"
// Make JQuery available to entire Project
import * as $ from "jquery";
// i18n
import i18n from "./i18n"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Notfound />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}