function calculateTip() {
  let bill = document.getElementById("bill").value;
  let tip = document.getElementById("tip").value;

  if (bill === "" || tip === "") {
    document.getElementById("result").innerText = "Please enter values!";
    return;
  }

  let tipAmount = (bill * tip) / 100;
  let total = Number(bill) + tipAmount;

  document.getElementById("result").innerText =
    "Tip: ₹" + tipAmount + " | Total: ₹" + total;
}