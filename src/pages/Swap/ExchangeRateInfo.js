import classNames from "classnames"

import Grid from "../../components/tailwind/Grid"

export default function ExchangeRateInfo({ fromCoin, toCoin, exchangeRate }) {
  return (
    <>
      <hr />
      <div className={classNames("py-3.5 pr-6 pl-6 rounded-b-2xl ")}>
        <Grid cols={{ xs: 1, sm: 2 }} gapY={4}>
          <div className="text-center sm:text-left">
            <p className=" text-sm font-medium opacity-70 pb-0.5">
              Price per {fromCoin.symbol}
            </p>
            <span className="text-lg sm:text-2xl font-mono font-medium">
              {exchangeRate}
            </span>
            <span className="pl-2 text-lg font-mono font-medium ">
              {toCoin.symbol}
            </span>
          </div>
        </Grid>
      </div>
    </>
  )
}
