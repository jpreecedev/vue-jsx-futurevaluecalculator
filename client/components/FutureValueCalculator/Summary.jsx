import { mapState } from 'vuex'

const Summary = {
  computed: mapState({
    mortgageLength: state => state.mortgageLength,
    futureValue: state => state.futureValue,
    expectedAnnualIncrease: state => state.expectedAnnualIncrease
  }),
  render (h) {
    return (
      <section class='summary'>
        <div class='row'>
          <div class='col'>
            <h2>Results</h2>
            <p>In <strong>{ this.mortgageLength }</strong> years the property will be worth around <strong>&pound;{ this.futureValue }</strong> assuming <strong>{ this.expectedAnnualIncrease }%</strong> annual growth.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Summary
