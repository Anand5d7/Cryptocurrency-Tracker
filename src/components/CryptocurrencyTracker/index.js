// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {cryptoCurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoCurrency()
  }

  getCryptoCurrency = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const updatedCryptoCurrency = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
      currencyLogo: eachCurrency.currency_logo,
    }))
    this.setState({
      cryptoCurrenciesData: updatedCryptoCurrency,
      isLoading: false,
    })
  }

  render() {
    const {cryptoCurrenciesData, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
