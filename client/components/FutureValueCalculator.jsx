import BasicDetails from './FutureValueCalculator/BasicDetails.jsx';
import Summary from './FutureValueCalculator/Summary.jsx';

const FutureValueCalculator = {
  render(h) {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="display-3 text-center mt-3">Future Value</h1>
            <p class="text-center mb-3">
              What will your property be worth at the end of the mortgage term?
            </p>
          </div>
        </div>

        <BasicDetails />
        <Summary />

      </div>
    );
  }
};

export default FutureValueCalculator;
