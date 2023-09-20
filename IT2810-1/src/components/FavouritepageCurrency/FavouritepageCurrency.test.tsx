import Currency from "./FavouritepageCurrency";
import { render, screen, RenderResult, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";

const voidFunc = vi.fn();

describe("Currency", () => {
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Currency
        currency="USD" //Random value for testing
        rate={1.12}
        favourite={true}
        voidFunc={voidFunc}
      />,
    );
  });

  test("renders the correct content", () => {
    expect(screen.getByText("US Dollar")).toBeTruthy();
    expect(screen.getByText("1 EURO ≈ 1.12 USD")).toBeTruthy();
    expect(screen.getByTestId("currency-favorite").textContent).toBe("Remove");
  });

  test("Favourite-button", async () => {
    //testing that the button works
    fireEvent.click(component.getByTestId("currency-favorite"));
    await waitFor(() => expect(voidFunc).toHaveBeenCalledTimes(1));
  });
});
