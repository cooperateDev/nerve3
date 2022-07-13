import { Transition } from "@headlessui/react"

import Grid from "../../../components/tailwind/Grid"

import InfoListItem from "../../../components/InfoListItem"
import AugmentWithUnits from "../../../components/AugmentWithUnits"

import InfoSectionCard from "./InfoSectionCard"

export default function PoolInfoCard() {
  const totalLocked = 0
  const totalLockedUSD = 1

  return (
    <Grid cols={{ xs: 1, sm: 2 }} gap={4} className="mt-2 ">
      <div className="space-y-4">
        <InfoTransition show={true}>
          {/* <CurrencyReservesCard tokens={data} /> */}
        </InfoTransition>
      </div>
      <div>
        <InfoTransition show={totalLockedUSD ? true : false}>
          <InfoSectionCard title="Pool Info">
            <InfoListItem labelText="Trading Fee" content={0} />
            <InfoListItem labelText="Deposit Fee" content={0} />
            <InfoListItem labelText="Virtual Price" content={0} />
            <InfoListItem
              labelText="Total Liquidity"
              content={<AugmentWithUnits content={totalLocked} label={""} />}
            />
            <InfoListItem
              labelText="Total Liquidity USD"
              content={"$" + totalLockedUSD}
            />
          </InfoSectionCard>
        </InfoTransition>
      </div>
    </Grid>
  )
}

function InfoTransition({ show, children }) {
  return (
    <Transition
      show={show}
      enter="transition-all duration-75"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-100"
      leave="transition-all duration-150"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-0"
      className="origin-center transform-gpu"
    >
      {children}
    </Transition>
  )
}
