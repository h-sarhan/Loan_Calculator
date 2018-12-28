// Declare DOM objects
const loanAmount = document.querySelector(".loan-amount");
const interest = document.querySelector(".interest");
const years = document.querySelector(".years");
const calcBtn = document.querySelector(".calc");
const calculating = document.querySelector("#calculating");
const results = document.querySelector(".results");
const monthlyPayment = document.querySelector(".monthly-payment");
const totalPayment = document.querySelector(".total-payment");
const totalInterest = document.querySelector(".total-interest");
const alert = document.querySelector(".alert");

// Calculating results
calcBtn.addEventListener("click", () => {
	//Show alert if one of the inputs is zero or empty then remove the alert after 2 seconds
	if (
		loanAmount.value == 0 ||
		interest.value == 0 ||
		years.value == 0 ||
		loanAmount.value == "" ||
		interest.value == "" ||
		years.value == ""
	) {
		alert.setAttribute("class", "alert alert-danger d-block");
		setTimeout(() => {
			alert.setAttribute("class", "alert alert-danger d-none");
		}, 2000);
	} else {
		//Reset results to disappear
		results.setAttribute("class", "results d-none");

		// Formula to calculate monthly payment
		let p = loanAmount.value;

		let r = interest.value / 100 / 12;

		let n = years.value * 12;

		let mp = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
		monthlyPayment.setAttribute("value", Math.round(mp * 100) / 100);

		// Formula to calculate total payment
		totalPayment.setAttribute(
			"value",
			Math.round(mp * years.value * 12 * 100) / 100
		);

		// Formula to calculate total interest
		totalInterest.setAttribute(
			"value",
			Math.round((totalPayment.value - loanAmount.value) * 100) / 100
		);
		// Show the loading icon for 2 seconds
		loading();

		//Show the results after 2 seconds
		setTimeout(() => {
			results.setAttribute("class", "results d-block");
		}, 2000);
	}
});

// Show the loading icon
function loading() {
	calculating.setAttribute("class", "d-block");
	setTimeout(() => {
		calculating.setAttribute("class", "d-none");
	}, 2000);
}
