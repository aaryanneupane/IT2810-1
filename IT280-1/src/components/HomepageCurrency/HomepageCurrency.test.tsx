import {
  render,
  act,
  screen,
  fireEvent,
} from "@testing-library/react";
import HomepageCurrency from "./HomepageCurrency.tsx";


 /* Having some trouble here with test 2. I can't use the .toHaveBeenLastCalledWith without a spy
or something like that, but I am not able to use jest's function for this for some reason. May need
to find a workaround, probably using another function for checking localstorage. */


describe("HomepageCurrency", () => {
  beforeEach(() => {
    render(<HomepageCurrency currency="USD" rate={1.12} />);
  });

  test("renders the correct content", async () => {
    await act(async () => {
      expect(screen.getByText("US Dollar")).toBeTruthy(); //Trying different functions, this one checks if there is something in the component that says "US Dollar"
      expect(screen.getByText("1 EURO ≈ 1.12 USD")).toBeTruthy();
      expect(screen.getByTestId("currency-favourite").textContent).toBe(
        "Favourite"
      ); //This one checks more specifically than the last two, it checks if the exact button says "Favourite"
    }); 
  });

  test("handles favourite click correctly", async () => {
    await act(async () => {
      fireEvent.click(screen.getByTestId("currency-favourite"));

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "favourites",
        JSON.stringify([{ currency: "USD", isFavourite: true }])
      );

      fireEvent.click(screen.getByTestId("currency-favourite"));

      expect(localStorage.setItem).toHaveBeenLastCalledWith(
        "favourites",
        JSON.stringify([])
      );
    });
  });
});
