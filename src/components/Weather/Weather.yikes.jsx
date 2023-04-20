import { render, screen } from "@testing-library/react";
import { ForecastWeather } from "./ForecastWeather";

describe("ForecastWeather component", () => {
  it("should test for presence of subheading in the component", () => {
    render(<ForecastWeather />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
