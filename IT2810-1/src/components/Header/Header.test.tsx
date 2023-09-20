import { fireEvent, render, screen, act } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  test("renders the correct content", async () => {
    await act(async () => {
      expect(screen.getByTestId("logo")).toBeTruthy();
      expect(screen.getByTestId("Favourites-button")).toBeTruthy();
    });
  });

  test("Navigation to and from favourites", async () => { //Checks if the buttons in the header navigates correctly to the right pages.
    await act(async () => {
      fireEvent.click(screen.getByTestId("Favourites-button"));
      expect(global.window.location.pathname).toEqual("/favourites");
      fireEvent.click(screen.getByTestId("logo"));
      expect(global.window.location.pathname).toEqual("/");
    });
  });
});
