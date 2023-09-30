import {render, screen, fireEvent} from '@testing-library/react'
import {CurrencyForm} from '../components/CurrencyExchange/CurrencyForm'
import '@testing-library/jest-dom'


describe('CurrencyForm', () => {
    
    it('renders the CurrencyForm component', () => {
        const component = render(<CurrencyForm/>)
   
        const textDisclaimer = component.getByText(/Disclaimer/i)

        expect(textDisclaimer).toBeInTheDocument()
    });

    it('correct action of the exchange button', () => {
        const component = render(<CurrencyForm/>)
     
        const btnExchangeRate = component.getByTestId("btnExchangeRate")
        fireEvent.click(btnExchangeRate)
        const textResult = component.getByText(/provide an amount/i)

        expect(textResult).toBeInTheDocument()

      })
  })
