// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyDetails} = props
  const {
    currencyName,
    euroValue,
    usdValue,
    currencyLogo,
  } = cryptocurrencyDetails

  return (
    <li className="list-item">
      <div className="image-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="title">{currencyName}</p>
      </div>
      <div className="crypto-types">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
