import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "../pages/HomePage";

describe("HomePage", () => {
  let queryClient: QueryClient;
  beforeEach(() => {
    queryClient = new QueryClient();
  });

  test("snapshot test", () => {
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
