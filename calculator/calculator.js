// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");
const amountInput = document.getElementById("loan-amount");
const yearsInput = document.getElementById("loan-years");
const rateInput = document.getElementById("loan-rate");
const resultArea = document.getElementById("calc-monthly-payment");


/** Retrieve form values. Returns object: {amount, years, rate}. */

function getFormValues() {
  return {
    amount: Number(amountInput.value),
    years: Number(yearsInput.value),
    rate: Number(rateInput.value),
  }
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  const monthsInYear = 12;
  const monthlyRate = (rate / 100) / monthsInYear;
  const n = Math.floor(years * monthsInYear);
  return (
      (monthlyRate * amount) /
      (1 - Math.pow((1 + monthlyRate), -n))
  );
}

/** Get form values, calculate, format to 2 decimal places, and display. */

function getFormValuesAndDisplayResults() {
  const {amount, years, rate} = getFormValues();
  const payment = calcMonthlyPayment(amount, years, rate);
  resultArea.innerText = "$" + payment.toFixed(2);
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  amountInput.value = 10000;
  yearsInput.value = 10;
  rateInput.value = 4.5;
  getFormValuesAndDisplayResults();
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}