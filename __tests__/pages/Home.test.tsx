import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page ", () => {
  describe("Rendering", () => {
    it('should have "Coming Soon" text', () => {
      render(<Home />);
      expect(screen.getByText("HomePage UI Coming SOON!")).toBeInTheDocument();
    });

    it("should have a link to the revenue page", () => {
      render(<Home />);
      expect(screen.getByText("Visit Revenue")).toBeInTheDocument();
    });
  });
});
