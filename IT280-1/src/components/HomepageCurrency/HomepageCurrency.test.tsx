import { render, act, waitFor, screen } from "@testing-library/react";
import HomepageCurrency from "./HomepageCurrency.tsx";

describe("HomepageCurrency", () => {
  beforeEach(() => {
    render(<HomepageCurrency currency="USD" rate={1.12} />);
  });

  test("renders the correct content", async () => {
    await act(async () => {
      // Wait for the component to finish loading
      await waitFor(() => screen.getByText("US Dollar"));

      expect(screen.getByText("US Dollar")).toBeTruthy();
      expect(screen.getByText("1 EURO ≈ 1.12 USD")).toBeTruthy();
      expect(screen.getByTestId("currency-favourite").textContent).toBe(
        "Favourite",
      );
    }); //angående testID over, den må nesten hete "favourite" siden alt annet har britisk favourite.
  });
});
