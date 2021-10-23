import React from "react";
import { numberWithCommas } from "../utils/format";
import "../styles/Coin.css";
const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{numberWithCommas(price)} Huf</p>
          <p className="coin-volume">
            {/* {numberWithCommas(volume.toLocaleString())} Huf */}
            {numberWithCommas(volume)} Huf
          </p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: {numberWithCommas(marketcap)} Huf
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
