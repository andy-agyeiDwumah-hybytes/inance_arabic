// Testing
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// React
import { MemoryRouter } from "react-router";
// Components
import About from "../components/about/About";
// Pages
import Index from "../pages/index";

// Notes: About must be rendered within a router at it uses 'useLocation' hook
// MemoryRouter -> Designed for testing / provides routing context

test("renders About component with correct elements", () => {
  render(
    // Ensure component behaves as if it is being rendered at this path
    <MemoryRouter initialEntries={["/about"]}>
      <About />
    </MemoryRouter>
  );
  const aboutImg = screen.getByRole("img");
  const aboutLink = screen.getByRole("link");
  // case insensitive regex
  const aboutPara = screen.getByText(/There are many variations of passages of Lorem Ipsum/i);
  const aboutHeading = screen.getByRole("heading", { level: 2 })

  expect(aboutImg).toBeInTheDocument();
  expect(aboutLink).toHaveTextContent("Read More");
  expect(aboutPara).toBeInTheDocument();
  expect(aboutHeading).toHaveTextContent("About us");
});

test("renders Read More link", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <About />
    </MemoryRouter>
  );
  const readMoreLink = screen.getByRole("link", { name: /Read More/i });
  expect(readMoreLink).toBeInTheDocument();
  expect(readMoreLink).toHaveAttribute("href", "/");
});

test("renders the about image with correct attributes", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <About />
    </MemoryRouter>
  );
  const aboutImg = screen.getByRole("img");
  // use 'expectStringMatching' to get string value instead of complete path
  expect(aboutImg).toHaveAttribute("src", expect.stringMatching("about-img.jpg"));
  expect(aboutImg).toHaveAttribute(
    "alt",
    "Man wearing an apron with tools, pencils, and pens in their pocket"
  );
  expect(aboutImg).toHaveAttribute("class", "about-img");
});

test("applies correct classname based on about pathname", () => {
  // About route
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <About />
    </MemoryRouter>
  );
  const aboutSectionElement = screen.getByRole("region", { name: "About us" });
  expect(aboutSectionElement).toHaveClass("about_section layout_padding");
});

test("applies correct classname based on home pathname", () => {
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );
  const aboutSectionElement = screen.getByRole("region", { name: "About us" });
  expect(aboutSectionElement).toHaveClass("about_section layout_padding-bottom");
});
