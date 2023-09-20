import { setupServer } from "msw/node";
import { handlers } from "../mocks/Handlers";
import "@testing-library/jest-dom";
import { test } from "vitest";

export const server = setupServer(...handlers);

beforeAll(() => server.listen()); // Start the server
beforeEach(() => {
  localStorage.clear();
}); // Clear localStorage before each test
afterEach(() => server.resetHandlers()); // Reset any runtime request handlers we may add during the tests.
afterAll(() => server.close()); // Clean up once the tests are done
