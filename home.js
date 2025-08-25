const transactioniData = []



// console.log('home page is connected')
//Function to get Input Values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValueNumber = parseInt(inputField.value);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

//Function to get Inner Text || (which is with ID for like span, h1, p tag etc)
function getInnerText(id) {
  const element = document.getElementById("available-balance");
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}
//Function to set innerText
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}
//Function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  // console.log(forms);
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

//Function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  // console.log(formBtns)
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

//-------------------------------------
//Add Money Feature:
const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log('add money btn clicked')
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    // console.log(bank, accountNumber, amount, pin)

    const availableBalance = getInnerText("available-balance");
    // console.log(amount, availableBalance)

    if (accountNumber.length < 11) {
      alert("Please provide valid account Number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide valid pin Number");
      return;
    }
    const totalNewAvailabeBalance = amount + availableBalance;

    // Now set the innerText in the code base to get the latest and total amount from the available balance and in this way we can show the final balance on the top of the app.

    setInnerText(totalNewAvailabeBalance);
  });
//Cash-Out Money Feature:
document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log('withdraw button clicked')
  const agentNumber = getInputValueNumber("agent-number");
  const amount = getInputValueNumber("withdraw-amount");
  const pin = getInputValueNumber("cashOutPin");
  const availableBalance = getInnerText("available-balance");

  // console.log(amount, availableBalance)
  //
  if (agentNumber.length < 11) {
    alert("Please provide valid account Number");
    return;
  }

  if (pin !== validPin) {
    alert("Please provide valid pin Number");
    return;
  }
  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  setInnerText(totalNewAvailableBalance);
});
//Transfer Money Feature:

document
  .getElementById("money-transfer-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // console.log('transfer button clicked')
    const userAccountNumber = document.getElementById("user-acc-number").value;
    const transferAmount = getInputValueNumber("transfer-amount");
    const pin = getInputValueNumber("pin-number");
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // console.log(transferAmount, availableBalance);

    if (userAccountNumber.length < 11) {
      alert("Please provide valid account Number");
      return;
    }

    if (pin !== validPin) {
      alert("Please provide valid pin Number");
      return;
    }

    const totalNewAvailabeBalance = availableBalance - transferAmount;
    setInnerText(totalNewAvailabeBalance);
  });

// Toggling Feature:
document.getElementById("add-button").addEventListener("click", function (e) {
  handleToggle("add-money-parent");

  handleButtonToggle("add-button");
});

document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");

    handleButtonToggle("cash-out-button");
  });

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("money-transfer-parent");

    handleButtonToggle("transfer-button");
  });
document
  .getElementById("get-bonus-button")
  .addEventListener("click", function () {
    handleToggle("get-bonus-parent");

    handleButtonToggle("get-bonus-button");
  });
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    handleToggle("pay-bill-parent");

    handleButtonToggle("pay-bill-button");
  });
document
  .getElementById("transaction-button")
  .addEventListener("click", function () {
    handleToggle("money-transactions-parent");

    handleButtonToggle("transaction-button");
  });

//Log Out Feature :
document
  .getElementById("log-out-button")
  .addEventListener("click", function () {
    alert("log out button clicked");
    window.location = "./index.html";
  });
