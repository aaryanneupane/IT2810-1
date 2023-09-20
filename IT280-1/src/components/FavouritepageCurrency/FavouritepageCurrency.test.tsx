import Currency from "./FavouritepageCurrency";
import { render, screen, RenderResult, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import handleFavouriteClick from "../../pages/FavouritesPage";

const favouriteClick = vi.fn(handleFavouriteClick);

describe("Currency", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Currency
        currency="USD"
        rate={1.12}
        favourite={true}
        voidFunc={favouriteClick}
      />,
    );
  });

  test("renders the correct content", () => {
    expect(screen.getByText("US Dollar")).toBeTruthy();
    expect(screen.getByText("1 EURO ≈ 1.12 USD")).toBeTruthy();
    expect(screen.getByTestId("currency-favorite").textContent).toBe(
      "Favourite",
    );
  });

  test("Favourite-button", async () => {
    //The functionality of the button won't run when I use fireEvent to click it, but it gets clicked.

    fireEvent.click(component.getByTestId("currency-favorite"));
    await waitFor(() => expect(favouriteClick).toHaveBeenCalledTimes(1));
  });
});
