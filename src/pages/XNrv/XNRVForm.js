import { useState } from "react"

import Card from "../../components/tailwind/Card"
import InteractiveInputRow from "../../components/InteractiveInputRow"

export default function XNRVForm() {
  const [deposit, setDeposit] = useState("")
  const [withdraw, setWithdraw] = useState("")

  return (
    <Card title="xNRV Mint">
      <div className="mt-4">
        <InteractiveInputRow
          title="Mint"
          balanceStr={"0.0"}
          onClickBalance={() => {
            setDeposit(0)
          }}
          value={deposit}
          placeholder={"0.0"}
          onChange={(e) => setDeposit(e.target.value)}
          buttonLabel="Mint xNRV"
        />
        <InteractiveInputRow
          title="Redeem"
          balanceStr={"0.0"}
          onClickBalance={() => {
            setWithdraw(0)
          }}
          value={withdraw}
          placeholder={"0.0"}
          onChange={(e) => setWithdraw(e.target.value)}
          buttonLabel="Redeem NRV"
        />
      </div>
    </Card>
  )
}
