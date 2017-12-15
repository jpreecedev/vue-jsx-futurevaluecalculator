import { getPropertyFutureValue } from './utils'

const state = {
  pricePaid: 120000,
  mortgageLength: 25,
  expectedAnnualIncrease: 5
}

state.futureValue = getPropertyFutureValue(state)

export default state
