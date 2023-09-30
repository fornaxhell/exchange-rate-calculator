'use client'

import React, {useState} from "react";
import {
    CloseButton, DisclaimerText,
    InputWrapper, MessageWrapper, ResultWrapper,
    SelectWrapper,
    StyledButton,
    StyledInput,
    StyledOption,
    StyledSelect
} from "./StyledExchange";

import {getExchangeRates} from "../../utils/exchangeUtils";
import {CacheExchangeRate, CurrencyInputsProps, ExchangeRateResponse} from "../../types/exchangeTypes";


export const CurrencyForm =({symbols}: CurrencyInputsProps) => {
    const tenMinutes = 600000

    const [amount, setAmount] = useState<string>("")
    const [actualCurrency, setActualCurrency] = useState<string>("EUR")
    const [desireCurrency, setDesireCurrency] = useState<string>("")
    const [dataCached, setDataCached] = useState<any>({})

    const [exchanged, setExchanged] = useState<number | null>(null)
    const [conversionRate, setConversionRate] = useState<number | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExchanged(null)
        setAmount(e.target.value)
    }

    const handleActualCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExchanged(null)
        setActualCurrency(e.target.value)
    }

    const handleDesireCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setExchanged(null)
        setDesireCurrency(e.target.value)
    }
    const handleCloseMessage = () => {
        setExchanged(null)
    }

    const handleCloseError = () => {
        setError(false)
    }

    const handleExchange = async () => {
        if (amount && actualCurrency && desireCurrency) {
            setExchanged(null)
            setConversionRate(null)
            setError(false)
            setIsLoading(true)

            const isInCache = dataCached[actualCurrency];
            const rates: ExchangeRateResponse = isInCache ? dataCached[actualCurrency] : await getExchangeRates()
            const numericAmount = parseFloat(amount)
            setExchanged(numericAmount * rates.rates[desireCurrency])
            setConversionRate(rates.rates[desireCurrency])
            setIsLoading(false)

            if (!isInCache) {
            const base = rates.base
            setDataCached((prev: CacheExchangeRate) => {
                return {...prev, [base]: rates}
            })

                setTimeout(() => {
                    const removedDataCached = {...dataCached}
                    delete removedDataCached[base]
                    setDataCached(removedDataCached)
                }, tenMinutes)
            }


        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 8000)
        }
    }

    return (
        <>
            <InputWrapper>
                <StyledInput placeholder='Place the amout to convert' type='number' onChange={handleAmountChange}
                             value={amount}/>
            </InputWrapper>

            <SelectWrapper>
                <StyledSelect disabled value={actualCurrency} onChange={handleActualCurrencyChange}>
                    <option value="" disabled hidden>Select your actual currency</option>
                    {symbols && Object.keys(symbols).map((symbol: any, symbolIndex: number) => {
                        return (<StyledOption value={symbol} key={symbol}>{symbol}</StyledOption>)
                    })}
                </StyledSelect>

                <StyledSelect value={desireCurrency} onChange={handleDesireCurrencyChange}>
                    <option value="" disabled hidden>Select your desire currency</option>
                    {symbols && Object.keys(symbols).map((symbol: any, symbolIndex: number) => {
                        return (<StyledOption value={symbol} key={symbol}>{symbol}</StyledOption>)
                    })}
                </StyledSelect>
            </SelectWrapper>

            <StyledButton type="button" onClick={handleExchange} data-testid="btnExchangeRate">
                Exchange rate
            </StyledButton>

            {error &&
                <ResultWrapper>
                    <MessageWrapper>
                        <div>
                            <h3> Input data has error, please provide an amount, and the 2 currencies to exchange
                                from-to </h3></div>
                        <CloseButton onClick={handleCloseError}>x</CloseButton>
                    </MessageWrapper>
                </ResultWrapper>
            }

            {isLoading &&
                <ResultWrapper>
                    <div>
                        <h3> Loading ... </h3>
                    </div>
                </ResultWrapper>
            }

            {exchanged &&
                <ResultWrapper>
                    <MessageWrapper>
                        <div>
                            <h3> {`${amount} ${actualCurrency} is equivalent to ${exchanged.toFixed(2)} ${desireCurrency}`} </h3>
                            <span> {`The conversion rate is ${conversionRate} ${desireCurrency} per 1 ${actualCurrency}`} </span>
                        </div>
                        <CloseButton onClick={handleCloseMessage}>x</CloseButton>
                    </MessageWrapper>
                </ResultWrapper>
            }

            {!exchanged && !isLoading && !error &&
                <ResultWrapper>
                    <MessageWrapper>
                        <div>
                            <h3> Exchange result </h3>
                        </div>
                    </MessageWrapper>
                </ResultWrapper>
            }

            <ResultWrapper>
                <DisclaimerText> Disclaimer: Base currency is always EUR because exchangeratesapi.io has this
                    functionality behind a paywall</DisclaimerText>
            </ResultWrapper>
        </>
    );
}
;