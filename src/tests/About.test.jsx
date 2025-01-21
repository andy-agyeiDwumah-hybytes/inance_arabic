// Testing
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// React
import { MemoryRouter } from "react-router";
import { HeadProvider } from "react-head";
// Pages
import Index from "../pages/index";
import AboutPage from "../pages/aboutPage/AboutPage";
// Context
import { LanguageContext } from "../context/languageContext";
// Mocks
import { mockContext } from "../__mocks__/LanguageContext";

test.only("renders About component with correct elements", () => {
  render(
    <HeadProvider>
      <LanguageContext.Provider value={mockContext}>
        <MemoryRouter initialEntries={["/en/about"]}>
          <AboutPage />
        </MemoryRouter>
      </LanguageContext.Provider>
    </HeadProvider>
  );
  const aboutPara = screen.getByText(
    /There are many variations of passages of Lorem Ipsum./i
  );
  const aboutHeading = screen.getByRole("heading", { level: 2 });

  expect(aboutPara).toBeInTheDocument();
  expect(aboutHeading).toHaveTextContent("About us");
});

test.skip("renders Read More link", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <AboutPage />
    </MemoryRouter>
  );
  const readMoreLink = screen.getByRole("link", { name: /Read More/i });
  expect(readMoreLink).toBeInTheDocument();
  expect(readMoreLink).toHaveAttribute("href", "/");
});

test.skip("renders the about image with correct attributes", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <AboutPage />
    </MemoryRouter>
  );
  const aboutImg = screen.getByRole("img");
  // use 'expectStringMatching' to get string value instead of complete path
  expect(aboutImg).toHaveAttribute(
    "src",
    expect.stringMatching("about-img.jpg")
  );
  expect(aboutImg).toHaveAttribute(
    "alt",
    "Man wearing an apron with tools, pencils, and pens in their pocket"
  );
  expect(aboutImg).toHaveAttribute("class", "about-img");
});

test.skip("applies correct classname based on about pathname", () => {
  // About route
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <AboutPage />
    </MemoryRouter>
  );
  const aboutSectionElement = screen.getByRole("region", { name: "About us" });
  expect(aboutSectionElement).toHaveClass("about_section layout_padding");
});

test.skip("applies correct classname based on home pathname", () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );
  const aboutSectionElement = screen.getByRole("region", { name: "About us" });
  expect(aboutSectionElement).toHaveClass(
    "about_section layout_padding-bottom"
  );
});
