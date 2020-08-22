import { config } from "../../config";

const { TOKEN, BASE_URL } = config;

export const getDividend = async (ticker: string) => {
  try {
    let response = await fetch(
      `${BASE_URL}/stock/${ticker}/stats?token=${TOKEN}`
    );
    const { status } = response;
    if (status !== 200) {
      throw "Not found";
    }
    const { dividendYield, companyName } = await response.json();
    return { dividendYield, companyName };
  } catch (err) {
    console.error(err);
  }
};

export const getQuote = async (ticker: string) => {
  try {
    let response = await fetch(
      `${BASE_URL}/stock/${ticker}/previous?token=${TOKEN}`
    );
    const { status } = response;
    if (status !== 200) {
      throw "Not found";
    }
    const { symbol, close } = await response.json();
    return { symbol, close };
  } catch (err) {
    console.error(err);
  }
};
