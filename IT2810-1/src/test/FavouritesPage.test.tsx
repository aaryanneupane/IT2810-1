import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavouritesPage from "../pages/FavouritesPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("FavouritesPage", () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("snapshot test", () => {
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <Router>
          <FavouritesPage />
        </Router>
      </QueryClientProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
