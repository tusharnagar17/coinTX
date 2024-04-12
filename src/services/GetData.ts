import axios, { AxiosResponse } from "axios";
import { FetchGetCoin, FetchGetPrice } from "../../types/types";


const apiKey = import.meta.env.VITE_COINGECKO_API_KEY

const BaseUrl: string = "https://api.coingecko.com/api/v3"

const api = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json",
        "x-cg-demo-api-key": apiKey,
    }
})

export const GetPrice = async (params: FetchGetPrice): Promise<AxiosResponse<any, any>> => {
    try {
        const response = await api.get("/simple/price", {
            params
        })
        return response.data
    } catch (error) {
        console.error("Error fetching '/simple/price' endpoint", error)
        throw error;
    }
}

export const GetTrending = async () => {
    try {
        const response = await api.get("/search/trending",)
        return response.data
    } catch (error) {
        console.error("Error fetching '/search/trending' endpoint", error)
        throw error;
    }
}

export const GetCoin = async (params: FetchGetCoin): Promise<AxiosResponse<any, any>> => {
    try {
        const response = await api.get(`/coins/${params.id}`)
        return response.data
    } catch (error) {
        console.error("Error fetching '/coins' endpoint", error)
        throw error;
    }
}