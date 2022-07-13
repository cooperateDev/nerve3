import TokenInput from "../components/TokenInput"
import BaseButton from "../components/BaseButton"

export default function PoolManagementDeposit({ tokens }) {
  return (
    <div className="flex-col">
      {tokens.map((token, key) => (
        <div className="mt-4" key={key}>
          <TokenInput symbol={token.symbol} icon={token.icon} max={token.max} />
        </div>
      ))}
      <BaseButton
        fancy={true}
        className="w-full mt-4 text-md items-center px-6 py-3 rounded-lg"
      >
        Deposit
      </BaseButton>
      {/* < priceImpact={priceImpact} /> */}
    </div>
  )
}
