// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoCurrenciesHeader = () => (
    <div className="list-header">
      <p className="coin-type">Coin Type</p>
      <div className="list-usd-euro">
        <p className="usd">USD</p>
        <p className="euro">EURO</p>
      </div>
    </div>
  )

  renderCryptoCurrenciesView = () => {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="list-container">
        {this.renderCryptoCurrenciesHeader()}
        <ul className="crypto-list">
          {cryptoCurrenciesData.map(eachCryptocurrency => (
            <CryptocurrencyItem
              key={eachCryptocurrency.id}
              cryptocurrencyDetails={eachCryptocurrency}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="image"
        />
        {this.renderCryptoCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
