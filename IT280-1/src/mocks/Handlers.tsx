import { rest } from 'msw'

const mockCurrencyData = {
    rates: {
      USD: 1.12,
      EUR: 1.0,
      GBP: 0.86,
    }
}

export const handlers = [
    rest.get('http://api.exchangeratesapi.io/v1/latest?access_key=52d136b803554531e2d112135ba38576', (_, res, ctx) => {
        return res(ctx.json(mockCurrencyData))
      }),
]

