
import { ExchangeRateResponse, SymbolsResponse } from "@/types/exchangeTypes";

export const getExchangeRates = async (): Promise<ExchangeRateResponse> =>{
    const res = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=dcb91dfaf63088f52730f15f6c2e7614')
    return await res.json()
}

export const getExchangeSymbols = async (): Promise<SymbolsResponse> => {
    const res = await fetch('http://api.exchangeratesapi.io/v1/symbols?access_key=dcb91dfaf63088f52730f15f6c2e7614')
    return await res.json()
}