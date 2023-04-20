import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label component", () => {
  it("should render Label component correctly", () => {
    render(<Label />);
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});
