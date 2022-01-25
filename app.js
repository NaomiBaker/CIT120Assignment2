//Variables store information

let number1 = Number(prompt("Bill"));

let Tax = number1 * 0.07;
let TaxPrice = Tax + number1;
let TipPrice = TaxPrice * 0.05;

let TotalPrice = TipPrice+TaxPrice;


//write value of variables to the webpage

document.body.innerHTML=TotalPrice;


