import InteractiveInputRow from "../components/InteractiveInputRow"

function TokenInput({ symbol, icon, max }) {
  let balanceStr = "0.0"

  return (
    <div className=" items-center">
      <div className="w-full">
        <InteractiveInputRow
          title={symbol}
          balanceStr={balanceStr}
          placeholder={"0.0"}
          showButton={false}
          icon={icon}
        />
      </div>
    </div>
  )
}

export default TokenInput
