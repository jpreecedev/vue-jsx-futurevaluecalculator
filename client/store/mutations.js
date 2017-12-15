import { getPropertyFutureValue } from './utils'

export const PRICE_PAID_CHANGED = (state, pricePaid) => {
  Object.assign(state, {
    pricePaid
  })
  state.futureValue = getPropertyFutureValue(state)
}

export const MORTGAGE_LENGTH_CHANGED = (state, mortgageLength) => {
  Object.assign(state, {
    mortgageLength
  })
  state.futureValue = getPropertyFutureValue(state)
}

export const EXPECTED_ANNUAL_INCREASE_CHANGED = (state, expectedAnnualIncrease) => {
  Object.assign(state, {
    expectedAnnualIncrease
  })
  state.futureValue = getPropertyFutureValue(state)
}
