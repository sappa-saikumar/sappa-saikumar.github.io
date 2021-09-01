//@ts-check
let startDate_Date = document.getElementById("startdate-date");
let startDate_Month = document.getElementById("startdate-month");
let startDate_Year = document.getElementById("startdate-year");
let endDate_Date = document.getElementById("enddate-date");
let endDate_Month = document.getElementById("enddate-month");
let endDate_Year = document.getElementById("enddate-year");
let interestRate = document.getElementById("interst-rate");
let amount = document.getElementById("amount");
let form1 = document.getElementById("form");
let totalInterst;
let totalSum;
let days;

form1.addEventListener("submit", e => {
    e.preventDefault();
    calculate_Interest();
    update_UI_With_Result();
});

function calculate_NumberOfDays() {

    let full_StartDate = startDate_Month.value.trim() + "-" + startDate_Date.value.trim() + "-" + startDate_Year.value.trim();
    let full_EndDate = endDate_Month.value.trim() + "-" + endDate_Date.value.trim() + "-" + endDate_Year.value.trim();
    console.log("StartDate= " + full_StartDate);
    console.log("EndDate= " + full_EndDate);

    //Calculate number of days
    let date1 = new Date(full_StartDate);
    let date2 = new Date(full_EndDate);
    let days = (date2.getTime() - date1.getTime()) / (24 * 60 * 60 * 1000);
    //console.log("days: " + days);

    return days;
}

function calculate_Interest() {
    let interestRateValue = interestRate.value.trim();
    let amountValue = amount.value.trim();
    days= calculate_NumberOfDays();

    console.log("interestRateValue: " + interestRateValue);
    console.log("amountValue: " + amountValue);
    console.log("days: " + days);

    interestRateValue= parseInt(interestRateValue);
    amountValue= parseInt(amountValue);

    if (days != NaN && amountValue != NaN && interestRateValue != NaN) {
        totalInterst = (amountValue * interestRateValue * days)/(100*30);
        console.log("Total Interest: " + totalInterst);
    }

    totalSum= parseInt(amountValue)+totalInterst;
    console.log("Total Amount: " + totalSum);
}

function update_UI_With_Result(){
    const daysElement= document.getElementById("numberofdays");
    const interestElement= document.getElementById("interest");
    const amountElement= document.getElementById("total-amount");

    daysElement.innerHTML="Total number of days: "+days;
    interestElement.innerHTML="Total Interest: "+parseInt(totalInterst).toLocaleString('en-In');
    amountElement.innerHTML="Total Sum: "+parseInt(totalSum).toLocaleString('en-IN');
}
