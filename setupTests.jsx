import "@testing-library/jest-dom";
import { vi } from "vitest";

// react-owl-carousel may not be compatible with the Node.js environment used during testing
// mock the react-owl-carousel library to prevent this error during tests
vi.mock("react-owl-carousel", () => ({
  default: ({ children }) => <div>{children}</div>,
}));

// Mock the component as it relies on external APIs
vi.mock("./src/components/googleMap/GoogleMap.jsx", () => ({
  default: () => <div data-testid="google-map">Mock Google Map</div>,
}));

vi.mock("react-i18next", () => ({
  useTranslation: () => {
    let language = "en"; // Default language
    const i18n = {
      language,
      dir: vi.fn(() => (language === "ar" ? "rtl" : "ltr")), // Return 'rtl' for Arabic, 'ltr' for others
      changeLanguage: vi.fn((newLanguage) => {
        language = newLanguage; // Update the language
      }),
    };

    // Mock translations
    const translations = {
      en: {
        paragraph: "There are many variations of passages of Lorem Ipsum.",
        heading: "About us",
      },
      ar: {
        paragraph:
          "هناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تم تعديلها بشكل ما، عن طريق حقن الفكاهة، أو بشكل عشوائيهناك العديد من الأشكال المتوفرة لنصوص لوريم إيبسوم، لكن الأغلبية تعرضت للتعديل بشكل ما، عن طريق حقن الفكاهة ، أو عشوائية",
      },
        heading: "معلومات عنا",
    };

    // Return the correct translation based on the current language
    const t = (key) => {
      return translations[language][key] || key;
    };

    return {
      i18n,
      t,
    };
  },
}));