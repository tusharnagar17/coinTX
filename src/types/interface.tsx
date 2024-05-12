export interface CoinDataProps {
  [coinName: string]: {
    usd: number;
    usd_24h_change: number;
    inr: number;
    inr_24h_change: number;
  };
}

export interface TrendingCoinsProps {
  name: string;
  symbol: string;
  iconSmall: string;
  iconLarge: string;
  priceUSD: number;
  priceChangePercentage: number;
  sparkline: string;
}
