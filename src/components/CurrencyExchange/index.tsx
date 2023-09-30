import Image from "next/image";

import {
    ModuleWrapper, ExchangeWrapper, ImageContainer, ImageWrapper
} from "@/components/CurrencyExchange/StyledExchange";

import {CurrencyForm} from "./CurrencyForm";
import {getExchangeRates, getExchangeSymbols} from "@/utils/exchangeUtils";
import {SymbolsResponse} from "@/types/exchangeTypes";

const CurrencyExchange = async () => {

    const symbols: SymbolsResponse = await getExchangeSymbols()


    return (
        <ModuleWrapper>
            <ExchangeWrapper>
                <ImageContainer>
                        <Image alt="Picture of the author" 
                               src="/exchangeRate2.jpg"
                               sizes="100vw"
                               priority={true}
                               quality={100}
                               style={{
                                   objectFit:'cover',
                                   width: '100%',
                               }}
                               width={800}
                               height={300}/>
                
                </ImageContainer>

                <CurrencyForm symbols={symbols.symbols}/>
            </ExchangeWrapper>
        </ModuleWrapper>
    );
};

export default CurrencyExchange