import BalanceInputContainer from "../components/BalanceInputContainer"
import BaseButton from "../components/BaseButton"

export default function InteractiveInputRow({
  title,
  balanceStr,
  onClickBalance,
  value,
  placeholder,
  onChange,
  disabled,
  onClickEnter,
  buttonLabel,
  icon,
  showButton = true,
}) {
  let titleContent
  if (icon) {
    titleContent = (
      <div className="inline-block pb-1">
        <img className="w-5 mr-2.5 -mt-1 inline-block" alt="icon" src={icon} />
        <div className="inline-block ">{title}</div>
      </div>
    )
  } else {
    titleContent = title
  }

  return (
    <div className="mt-4">
      <div className="inline-flex items-center space-x-2 w-full">
        <BalanceInputContainer
          title={titleContent}
          balanceStr={balanceStr}
          className="w-full"
          onClickBalance={onClickBalance}
        >
          <div className="input-container-style xs:input-container-style xs:text-button">
            <input
              className="input-style xs:input-style xs:text-button"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
          </div>
        </BalanceInputContainer>
        {showButton && (
          <BaseButton
            className="text-12 w-2/5 max-w-content mt-5 text-button xs:text-button"
            disabled={disabled}
            onClick={onClickEnter}
          >
            {buttonLabel ?? title}
          </BaseButton>
        )}
      </div>
    </div>
  )
}
