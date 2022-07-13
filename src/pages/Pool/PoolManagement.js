import DepositDisplay from "./DepositDisplay"
import { POOLS_MAP } from "../../constants"

export default function PoolManagement(props) {
  const poolTokens = POOLS_MAP[props.poolName]
  const tokens = poolTokens.map(({ symbol, name, icon }) => ({
    symbol,
    name,
    icon,
    max: 0,
    inputValue: "",
  }))
  return <DepositDisplay {...{ props, tokens, poolTokens }} />
}
