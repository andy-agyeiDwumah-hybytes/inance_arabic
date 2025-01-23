// Testing
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
// React
import { MemoryRouter } from "react-router";
import { HeadProvider } from "react-head";
// Pages
import AboutPage from "../pages/aboutPage/AboutPage";
// Context
import { LanguageContext } from "../context/languageContext";
// Mocks
import {
  englishMockContext,
  arabicMockContext,
} from "../__mocks__/LanguageContext";


test.skip("language remains in English when user navigates to English version and language code is stored in local storage", () => {
  render(
    <HeadProvider>
      <LanguageContext.Provider value={englishMockContext}>
        <MemoryRouter initialEntries={["/en/about"]}>
          <AboutPage />
        </MemoryRouter>
      </LanguageContext.Provider>
    </HeadProvider>
  );

  const aboutPara = screen.getByText(
    /There are many variations of passages of Lorem Ipsum available/i
  );
  const aboutHeading = screen.getByRole("heading", { level: 2 });
  const aboutLink = screen.getByRole("link", { name: /Read More/i });

  expect(aboutPara).toBeInTheDocument();
  expect(aboutHeading).toHaveTextContent("About us");
  expect(aboutLink).toBeInTheDocument();
});

test.skip("updates language to Arabic when user navigates to an Arabic version and language code is stored in local storage", () => {
  render(
    <HeadProvider>
      <LanguageContext.Provider value={arabicMockContext}>
        <MemoryRouter initialEntries={["/ar/about"]}>
          <AboutPage />
        </MemoryRouter>
      </LanguageContext.Provider>
    </HeadProvider>
  );

  const aboutPara = screen.getByText(
    /هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم./i
  );
  const aboutHeading = screen.getByRole("heading", { level: 2 });
  const aboutLink = screen.getByRole("link", { name: /اقرأ المزيد/i });

  expect(aboutPara).toBeInTheDocument();
  expect(aboutHeading).toHaveTextContent("معلومات عنا");
  expect(aboutLink).toBeInTheDocument();
});
