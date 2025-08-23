// console.log('home page is connected')
//Add Money Feature:

const validPin = 1234
document.getElementById("add-monet-btn").addEventListener('click', function(e){
e.preventDefault();
// console.log('add money btn clicked')
const bank = document.getElementById("bank").value;
const accountNumber = document.getElementById("account-number").value;
const amount = parseInt(document.getElementById("add-amount").value);
const pin = parseInt(document.getElementById("add-pin").value);
// console.log(bank, accountNumber, amount, pin)

const availableBalance = parseInt(
  document.getElementById("available-balance").innerText
);
// console.log(amount, availableBalance)

if(accountNumber.length <11){
 alert('Please provide valid account Number')
 return;
}

if (pin !== validPin) {
  alert('Please provide valid pin Number')
  return;
}


const totalNewAvailabeBalance = amount + availableBalance;

// Now set the innerText in the code base to get the latest and total amount from the available balance and in this way to show final balance on the top of the app.
 document.getElementById("available-balance").innerText =
   totalNewAvailabeBalance;

});

//Cash-Out Money Feature:
document.getElementById("withdraw-btn").addEventListener('click', function(e){
e.preventDefault();
// console.log('withdraw button clicked')
const amount = parseInt(document.getElementById("withdraw-amount").value);

const availableBalance = parseInt(
  document.getElementById("available-balance").innerText
);

// console.log(amount, availableBalance)
//
const totalNewAvailableBalance = availableBalance - amount;

console.log(totalNewAvailableBalance)

document.getElementById('available-balance').innerText = totalNewAvailableBalance;

}); 




// Toggling Feature:

document.getElementById("add-button").addEventListener('click', function(){

  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});

document.getElementById("cash-out-button").addEventListener('click', function(){
  document.getElementById("add-money-parent").style.display = 'none'
  document.getElementById("cash-out-parent").style.display = 'block';
});

//