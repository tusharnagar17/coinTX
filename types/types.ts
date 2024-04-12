export type FetchGetPrice = {
    ids: string; // Assuming ids is a string
    vs_currencies: string; // Assuming vs_currencies is also a string
    include_24hr_change: boolean; // Assuming include_24hr_change is a boolean
}

export type FetchGetCoin = {
    id: string;
}