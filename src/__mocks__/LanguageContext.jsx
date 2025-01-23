import { vi } from "vitest"

const englishMockContext = {
  languageOptions: { language: "en", textDirection: "ltr" },
  setLanguageOptions: vi.fn(),
};

const arabicMockContext = {
  languageOptions: { language: "ar", textDirection: "rtl" },
  setLanguageOptions: vi.fn(),
};

export { englishMockContext, arabicMockContext };