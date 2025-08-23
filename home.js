// console.log('home page is connected')
document.getElementById("add-monet-btn").addEventListener('click', function(e){
e.preventDefault();
// console.log('add money btn clicked')
const bank = document.getElementById("bank").value;
const accountNumber = document.getElementById("account-number").value;
const amount = parseInt(document.getElementById("add-amount").value);
const pin = document.getElementById("add-pin").value;
// console.log(bank, accountNumber, amount, pin)

const availableBalance = parseInt(
  document.getElementById("available-balance").innerText
);
// console.log(availableBalance)

const totalNewAvailabeBalance = amount + availableBalance;

// Now set the innerText in the code base to get the latest and total amount from the available balance and in this way to show final balance on the top of the app.
 document.getElementById("available-balance").innerText =
   totalNewAvailabeBalance;



});