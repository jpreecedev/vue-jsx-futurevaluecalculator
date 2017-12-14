import { mapState } from 'vuex'
import TextField from '../Shared/TextField.jsx';

const BasicDetails = {
  methods: {
    priceChanged(pricePaid) {
      this.$store.commit('PRICE_PAID_CHANGED', pricePaid)
    },
    mortgageLengthChanged(mortgageLength) {
      this.$store.commit('MORTGAGE_LENGTH_CHANGED', mortgageLength)
    },
    expectedAnnualIncreaseChanged(expectedAnnualIncrease) {
      this.$store.commit('EXPECTED_ANNUAL_INCREASE_CHANGED', expectedAnnualIncrease)
    }
  },
  computed: mapState({
    pricePaid: state => state.pricePaid,
    mortgageLength: state => state.mortgageLength,
    expectedAnnualIncrease: state => state.expectedAnnualIncrease
  }),
  render(h) {
    return (
      <div class="row">
        <div class="col">
          <div class="card mb-3">
            <div class="card-header" role="tab" id="headingOne">
              <h5 class="mb-0">
                Your Property
              </h5>
            </div>
            <div class="card-body">
              <TextField type="number"
                         id="pricePaid"
                         label="Price Paid"
                         prefix="£"
                         suffix=".00"
                         value={ this.pricePaid }
                         changed={ value => this.priceChanged(Number(value)) } />

              <TextField type="number"
                         id="mortgageLength"
                         label="Mortgage Length"
                         suffix="years"
                         value={ this.mortgageLength }
                         changed={ value => this.mortgageLengthChanged(Number(value)) } />

              <TextField type="number"
                         id="expectedAnnualIncrease"
                         label="Expected annual increase"
                         suffix="%"
                         value={ this.expectedAnnualIncrease }
                         changed={ value => this.expectedAnnualIncreaseChanged(Number(value)) } />

            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default BasicDetails;
