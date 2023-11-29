interface Currency {
  base: string;
  date: string;
  rates: {
    [currencyCode: string]: number;
  };
  success: boolean;
  timestamp: number;
}

export default Currency;
