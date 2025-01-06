// Components
import App from "../App";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
// Testing
import { render, screen, within } from "@testing-library/react";
import { expect, test } from "vitest";
// React
import {
  createMemoryRouter,
  createRoutesFromElements,
  MemoryRouter,
  Route,
  RouterProvider,
} from "react-router";
// Styles
import headerStyles from "../components/header/Header.module.css";
import footerStyles from "../components/footer/Footer.module.css";
// Pages
import Notfound from "../pages/notfound/Notfound";
import Index from "../pages/index";

test("renders all landmarks", () => {
  render(<App />);

  const banner = screen.getByRole("banner");
  const navigation = screen.getByRole("navigation");
  const heroSection = screen.getByRole("region", {
    name: "Repair and Maintenance Services",
  });
  const mainSection = screen.getByRole("main");
  const aboutSection = screen.getByRole("region", { name: "About us" });
  const professionalSection = screen.getByRole("region", {
    name: "We Provide Professional Home Services.",
  });
  const servicesSection = screen.getByRole("region", { name: "Our Services" });
  const clientSection = screen.getByRole("region", {
    name: "What Our Clients Say",
  });
  const contactSection = screen.getByRole("region", { name: "Contact Us" });
  const contactForm = screen.getByRole("form");
  const getInTouch = screen.getByRole("region", { name: "Get In Touch" });
  const footerSection = screen.getByRole("contentinfo");

  expect(banner).toBeInTheDocument();
  expect(navigation).toBeInTheDocument();
  expect(heroSection).toBeInTheDocument();
  expect(mainSection).toBeInTheDocument();
  expect(aboutSection).toBeInTheDocument();
  expect(professionalSection).toBeInTheDocument();
  expect(servicesSection).toBeInTheDocument();
  expect(clientSection).toBeInTheDocument();
  expect(contactSection).toBeInTheDocument();
  expect(contactForm).toBeInTheDocument();
  expect(getInTouch).toBeInTheDocument();
  expect(footerSection).toBeInTheDocument();
});

test("renders navigation links and links point to the correct paths", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const navigation = screen.getByRole("navigation");
  const homeLink = within(navigation).getByRole("link", { name: "Home" });
  const aboutLink = within(navigation).getByRole("link", { name: "About" });
  const serviceLink = within(navigation).getByRole("link", {
    name: "Services",
  });
  // There is another link with the same href value in the header component, hence within
  const contactLink = within(navigation).getByRole("link", {
    name: "Contact Us",
  });

  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute("href", "/");

  expect(aboutLink).toBeInTheDocument();
  expect(aboutLink).toHaveAttribute("href", "/about");

  expect(serviceLink).toBeInTheDocument();
  expect(serviceLink).toHaveAttribute("href", "/services");

  expect(contactLink).toBeInTheDocument();
  expect(contactLink).toHaveAttribute("href", "/contact");
});

test("applies correct classnames to banner, navigation, and footer", () => {
  render(<App />);
  const banner = screen.getByRole("banner");
  const navigation = screen.getByRole("navigation");
  const footerSection = screen.getByRole("contentinfo");

  expect(banner).toHaveClass("header_section");
  expect(navigation).toHaveClass(`navbar navbar-expand-lg ${headerStyles.nav}`);
  expect(footerSection).toHaveClass(footerStyles.footer);
});

test("notFound component renders when pathname doesn't match any routes", () => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Notfound />}>
        <Route index element={<Index />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    ),
    { initialEntries: ["/invalid-route"] }
  );

  render(<RouterProvider router={router} />);

  // Get text from notFound component
  const pageNotFoundText = screen.getByText(/Page not found/i);
  expect(pageNotFoundText).toBeInTheDocument();
});
