// console.log('script connected')

//Loging button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log('login button clicked');
  // console.log(e)
  const mobileNumber = 12345678910;
  const pinNumber = 1234;

  const mobileNumberValue = document.getElementById("mobile-number").value;

  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinNumberValueConverted === pinNumber
  ) { console.log("all value matched");
      window.location.href="./Home.html"
  }else{
    alert("invalid credentials");
  }
});
