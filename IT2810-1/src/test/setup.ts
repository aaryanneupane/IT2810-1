import { setupServer } from "msw/node";
import { rest } from "msw";
import "@testing-library/jest-dom";
import { mockCurrencyData } from "../mocks/MockingData";

export const handlers = [
  rest.get(
    "http://api.exchangeratesapi.io/v1/latest?access_key=62e1a010dfc6012cd03d275c1d59fbc6",
    (_, res, ctx) => {
      return res(ctx.json(mockCurrencyData));
    },
  ),
];

export const server = setupServer(...handlers);

beforeAll(() => server.listen()); // Start the server
beforeEach(() => {
  localStorage.clear();
}); // Clear localStorage before each test
afterEach(() => server.resetHandlers()); // Reset any runtime request handlers we may add during the tests.
afterAll(() => server.close()); // Clean up once the tests are done
