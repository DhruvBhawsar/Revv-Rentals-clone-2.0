document.querySelector("form").addEventListener("submit", paymentFunction);

function paymentFunction(e) {
  e.preventDefault();
  var cc = document.getElementById("cc").value;
  var cvv = document.getElementById("cvv").value;

  if (cc.length == 16 && cvv.length == 3) {
    alert(`Enter Otp : "1234"`);
    document.querySelector(".otpDiv").style.display = "flex";
  }

  if (!(cc.length == 16 && cvv.length == 3)) {
    alert("Incorrect Details");
  }
}

document.getElementById("otpButton").addEventListener("click", otpFunction);

function otpFunction(e) {
  e.preventDefault();

  var valid = document.getElementById("otp").value;
  if (valid == 1234) {
    alert("Payment Successful");
    alert("Thank You For Purchasing");
  } else {
    alert("Invalid Otp");
  }
}
document.getElementById("otpButton").addEventListener("click", function () {
  setTimeout(() => {
    window.location.href = "payments.html";
  }, 3000);
});
