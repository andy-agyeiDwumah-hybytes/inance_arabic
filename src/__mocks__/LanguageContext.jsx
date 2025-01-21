import { vi } from "vitest"

export const mockContext = {
  languageOptions: { language: "en", textDirection: "ltr" },
  setLanguageOptions: vi.fn(),
};
