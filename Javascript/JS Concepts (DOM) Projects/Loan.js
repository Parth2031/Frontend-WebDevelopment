// * Event Listener Based Project

const form = document.querySelector("#loan-form");
const button = document.querySelector(".btn");
const results = document.querySelector("#results");
const loader = document.querySelector("#loading");

form.addEventListener("submit", (event) =>
{
  // ! Hide results:
  results.style.display = 'none';

  // ! Show loader:
  loader.style.display = 'block';
  
  setTimeout(calculateResults, 2000);

  event.preventDefault();
});

function calculateResults()
{  
  console.log("Calculating...");
  
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;
  
  // ! Calculate Monthly Payments:

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);
  
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    // ! Show Results:
    results.style.display = "block";
    
    // ! Hide Loader:
    loader.style.display = "none";
  }
  else {
    showError('Please check your numbers');
  }
}

function showError(error)
{
  // ! Hide results:
  results.style.display = 'none';

  // ! Hide Loader:
  loader.style.display = "none";

  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  // ! .insertBefore() --> It is used to insert any element before the next element.
  //  TODO:: Syntax --> main_element.insertBefore(what element to insert,before which element to be inserted).

  card.insertBefore(errorDiv, heading);

  // ! Clear error after 3 seconds and in setTimeout, the time is in miliseconds.
  // ? So, 1 second = 1000 miliseconds.
  // TODO:: Syntax of setTimeout --> setTimeout(function_name,time in miliseconds).

  setTimeout(clearError, 3000);
}

function clearError(){
  document.querySelector('.alert').remove();
}
