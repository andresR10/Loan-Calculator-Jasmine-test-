window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 235000,
    years: 30,
    rate: 6
  };
  const loanAmount = document.getElementById('loan-amount');
  const loanYears = document.getElementById('loan-years');
  const loanRate = document.getElementById('loan-rate');

  loanAmount.value = values.amount;
  loanYears.value = values.years;
  loanRate.value = values.rate;

  update();
 /* loanAmount.value = '235000';
  loanYears.value = '30';
  loanRate.value = '6';
  const currentMonthlyPayment = calculateMonthlyPayment(
    parseFloat(loanAmount.value),
    parseInt(loanYears.value),
    parseFloat(loanRate.value)
    ); */
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  const updatedPayment = calculateMonthlyPayment(currentUIValues);
  updateMonthly(updatedPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const loanAmount = values.amount;
  const loanYears = values.years;
  const loanRate = values.rate;

  const monthlyRate = loanRate / 100 / 12;
  const numberOfPayments = loanYears * 12;

  const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById('monthly-payment');
  monthlyUI.innerText = '$' + monthly;
}
