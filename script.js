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

// Calculating results
calcBtn.addEventListener("click", () => {
	// Formula to calculate monthly payment
	let p = loanAmount.value;
	console.log(p);
	let r = interest.value / 100 / 12;
	console.log(r);
	let n = years.value * 12;
	console.log(n);
	let mp = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
	monthlyPayment.setAttribute("value", Math.round(mp));
	console.log(mp);

	// Formula to calculate total payment
	totalPayment.setAttribute("value", Math.round(mp * years.value * 12));

	// Formula to calculate total interest
	totalInterest.setAttribute(
		"value",
		Math.round(totalPayment.value - loanAmount.value)
	);
	loading();
	//Show the results
	results.setAttribute("class", "results d-block");
});

function loading() {}
