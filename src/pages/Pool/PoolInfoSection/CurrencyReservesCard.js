import { SWAPABLE_TOKENS_MAP } from "../../../constants"

import InfoListItem from "../../../components/InfoListItem"
import AugmentWithUnits from "../../../components/AugmentWithUnits"
import InfoSectionCard from "./InfoSectionCard"

export default function CurrencyReservesCard({ tokens }) {
  return (
    <InfoSectionCard title="Currency Reserves">
      {tokens.map((token, idx) => (
        <CurrencyInfoListItem {...token} key={idx} />
      ))}
    </InfoSectionCard>
  )
}

function CurrencyInfoListItem({ symbol, percent }) {
  const { name, icon } = SWAPABLE_TOKENS_MAP[symbol]

  return (
    <InfoListItem
      labelText={
        <div className="inline-flex items-center">
          <img
            className="relative text-white shadow-solid w-6 mr-2"
            src={icon}
          />
          <div>
            <div>{name}</div>
            <div className="font-medium">{percent}</div>
          </div>
        </div>
      }
      content={<AugmentWithUnits content={0} label={symbol} />}
    />
  )
}
