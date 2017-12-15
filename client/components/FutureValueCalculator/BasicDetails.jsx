import { mapState } from 'vuex'
import { commit } from '../../store'

import {
  priceChangedAction,
  mortgageLengthChangedAction,
  expectedAnnualIncreaseChangedAction
} from '../../store/actions'

import TextField from '../Shared/TextField.jsx'

const BasicDetails = {
  methods: {
    priceChanged (pricePaid) {
      commit(priceChangedAction(pricePaid))
    },
    mortgageLengthChanged (mortgageLength) {
      commit(mortgageLengthChangedAction(mortgageLength))
    },
    expectedAnnualIncreaseChanged (expectedAnnualIncrease) {
      commit(expectedAnnualIncreaseChangedAction(expectedAnnualIncrease))
    }
  },
  computed: mapState({
    pricePaid: state => state.pricePaid,
    mortgageLength: state => state.mortgageLength,
    expectedAnnualIncrease: state => state.expectedAnnualIncrease
  }),
  render (h) {
    return (
      <div class='row'>
        <div class='col'>
          <div class='card mb-3'>
            <div class='card-header' role='tab' id='headingOne'>
              <h5 class='mb-0'>
                Your Property
              </h5>
            </div>
            <div class='card-body'>
              <TextField type='number'
                id='pricePaid'
                label='Price Paid'
                prefix='£'
                suffix='.00'
                value={ this.pricePaid }
                changed={ value => this.priceChanged(Number(value)) } />

              <TextField type='number'
                id='mortgageLength'
                label='Mortgage Length'
                suffix='years'
                value={ this.mortgageLength }
                changed={ value => this.mortgageLengthChanged(Number(value)) } />

              <TextField type='number'
                id='expectedAnnualIncrease'
                label='Expected annual increase'
                suffix='%'
                value={ this.expectedAnnualIncrease }
                changed={ value => this.expectedAnnualIncreaseChanged(Number(value)) } />

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BasicDetails
