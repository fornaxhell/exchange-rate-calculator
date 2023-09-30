export interface ExchangeRateResponse {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: {
        [key: string]: number;
    };
}

export interface CacheExchangeRate {
    rates: {
        [key: string]: ExchangeRateResponse;
    };
}

export interface SymbolsResponse {
    success: boolean;
    symbols: {
        [key: string]: string;
    };
}

export interface CurrencyInputsProps {
    symbols: {
        [key: string]: string;
    };
}