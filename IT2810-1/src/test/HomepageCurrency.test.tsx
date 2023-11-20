import { render, act, screen, fireEvent } from "@testing-library/react";
import HomepageCurrency from "../components/HomepageCurrency.tsx";

const voidFunc = vi.fn();

describe("HomepageCurrency", () => {
  beforeEach(() => {
    render(
      <HomepageCurrency
        currency="USD"
        rate={1.12}
        nextArrow={voidFunc}
        prevArrow={voidFunc}
      />
    ); //Random value for testing
  });

  test("renders the correct content", async () => {
    await act(async () => {
      expect(screen.getByText("US Dollar")).toBeTruthy(); //Trying different functions, this one checks if there is something in the component that says "US Dollar"
      expect(screen.getByText("1 EURO ≈ 1.12 USD")).toBeTruthy();
      expect(screen.getByTestId("currency-favourite")).toHaveTextContent(
        "Favourite"
      ); //This one checks more specifically than the last two, it checks if the exact button says "Favourite"
    });
  });

  test("handles favourite click correctly", async () => {
    //This test checks if the favourite button works correctly
    await act(async () => {
      const favouriteButton = screen.getByTestId("currency-favourite");

      await fireEvent.click(favouriteButton);

      const storedFavourites = localStorage.getItem("favourites");

      expect(storedFavourites).not.toBeNull();
      expect(storedFavourites).toBe(
        JSON.stringify([{ currency: "USD", isFavourite: true }])
      );
    });
  });
});
