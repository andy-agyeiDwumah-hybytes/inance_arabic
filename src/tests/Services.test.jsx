// Testing
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// Components
import Services from "../components/services/Services";
import Service from "../components/service/Service";
// React
import { MemoryRouter } from "react-router";
// Styles
import styles from "../components/services/Services.module.css";

test.skip("renders Services component with Service components", () => {
  // Wrap as Services component uses Link component
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  const servicesHeading = screen.getByRole("heading", { level: 2 });
  const maintenaceText = screen.getByText(/maintenance/i);
  const electricalText = screen.getByText(/electrical/i);
  const plumbingText = screen.getByText(/plumbing/i);
  const viewMoreBtn = screen.getByRole("link", { name: /view more/i });

  expect(servicesHeading).toBeInTheDocument();
  expect(maintenaceText).toBeInTheDocument();
  expect(electricalText).toBeInTheDocument();
  expect(plumbingText).toBeInTheDocument();
  expect(viewMoreBtn).toBeInTheDocument();
});

test.skip("renders Service component with correct props", () => {
  const testProps = {
    imgSrc: "maintenance.png",
    heading: "Maintenance",
    children: "Lorem Ipsum is placeholder text.",
    styles: styles,
  };

  render(<Service {...testProps} />);

  const serviceHeading = screen.getByRole("heading", { level: 5 });
  const serviceImg = screen.getByRole("img");
  const serviceText = screen.getByText(testProps.children);

  expect(serviceHeading).toBeInTheDocument();
  expect(serviceHeading).toHaveTextContent(testProps.heading);
  expect(serviceImg).toHaveAttribute("src", testProps.imgSrc);
  expect(serviceText).toBeInTheDocument();
});

test.skip("applies the correct styles to elements", () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>
  );

  const serviceSection = screen.getByRole("region", { name: "Our Services" });

  expect(serviceSection).toHaveClass("layout_padding");
  expect(serviceSection).toHaveClass(styles.section);
});
