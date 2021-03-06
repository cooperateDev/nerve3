import { useState } from "react"

import Card from "../components/tailwind/Card"

import ApyTooltip from "../components/ApyTooltip"
import BaseButton from "../components/BaseButton"
import InteractiveInputRow from "../components/InteractiveInputRow"

export default function StakeCard({
  poolName,
  poolLabel,
  rightContent = false,
}) {
  const [deposit, setDeposit] = useState("")
  const [withdraw, setWithdraw] = useState("")

  return (
    <Card
      title={
        <>
          <div className="text-16 xs:text-input">
            {poolLabel ?? poolName} Staking
          </div>
          <div className="flex text-16 xs:text-input">
            <div>Earning {0}% APR</div>
            <ApyTooltip className="ml-1" />
          </div>
        </>
      }
      btn={rightContent}
    >
      <div className="mt-4">
        <InteractiveInputRow
          title="Stake"
          balanceStr={"0.0"}
          onClickBalance={() => {
            setDeposit(0)
          }}
          placeholder={"0.0"}
          onChange={(e) => setDeposit(e.target.value)}
          value={deposit}
        />
        <InteractiveInputRow
          title="Unstake"
          balanceStr={"0.0"}
          onClickBalance={() => {
            setWithdraw(0)
          }}
          value={withdraw}
          placeholder={"0.0"}
          onChange={(e) => setWithdraw(e.target.value)}
        />
        <div className="mt-6">
          <BaseButton fancy={true} className="w-full py-4">
            Claim {"0.0"} NRV
          </BaseButton>
        </div>
      </div>
    </Card>
  )
}
