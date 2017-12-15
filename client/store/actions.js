export const InvestmentActions = {
  PRICE_PAID_CHANGED: 'PRICE_PAID_CHANGED',
  MORTGAGE_LENGTH_CHANGED: 'MORTGAGE_LENGTH_CHANGED',
  EXPECTED_ANNUAL_INCREASE_CHANGED: 'EXPECTED_ANNUAL_INCREASE_CHANGED'
}

export const priceChangedAction = value => {
  return {
    type: InvestmentActions.PRICE_PAID_CHANGED,
    payload: value
  }
}

export const mortgageLengthChangedAction = value => {
  return {
    type: InvestmentActions.MORTGAGE_LENGTH_CHANGED,
    payload: value
  }
}

export const expectedAnnualIncreaseChangedAction = value => {
  return {
    type: InvestmentActions.EXPECTED_ANNUAL_INCREASE_CHANGED,
    payload: value
  }
}
