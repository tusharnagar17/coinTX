// @ts-ignore
const API_KEY = import.meta.env.VITE_COINGECKO;
const API_PATH = "https://api.coingecko.com/api/v3";

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "x-cg-demo-api-key": `${API_KEY}`,
  },
};

//  object mapping function

export const fetchCoin = async (coin: string) => {
  try {
    const response = await fetch(
      `${API_PATH}/simple/price?ids=${coin}&vs_currencies=usd%2Cinr&include_24hr_change=true`,
      options
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export const fetchTrending = async () => {
  try {
    const response = await fetch(`${API_PATH}/search/trending`, options);
    const data = await response.json();

    const coins = data.coins;
    const exactValuesNeeded = coins.map((item: any) => ({
      ["name"]: item.item["name"],
      ["symbol"]: item.item["symbol"],
      ["iconSmall"]: item.item["small"],
      ["iconLarge"]: item.item["large"],
      ["priceUSD"]: item.item.data["price"],
      ["priceChangePercentage"]:
        item.item.data.price_change_percentage_24h["usd"],
      ["sparkline"]: item.item.data["sparkline"],
    }));

    return exactValuesNeeded;
  } catch (error) {
    console.log("Fetch Trending Error", error);
  }
};

export const fetchSpecificCoin = async (coinName: string) => {
  try {
    const response = await fetch(`${API_PATH}/coins/${coinName}`, options);
    const data = await response.json();
    const newData = {
      name: data.name,
      symbol: data.symbol,
      smallImage: data.image.small,
      rank: data.market_cap_rank,
    };
    return newData;
  } catch (error) {
    console.log(error);
  }
};
