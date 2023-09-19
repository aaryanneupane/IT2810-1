import { setupServer } from 'msw/node'
import { handlers } from '../mocks/Handlers'  
import '@testing-library/jest-dom';

export const server = setupServer(...handlers)

beforeAll(() => server.listen())  
beforeEach(() => {localStorage.clear()})  
afterEach(() => server.resetHandlers())  // Reset any runtime request handlers we may add during the tests.
afterAll(() => server.close())  
