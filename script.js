function updateTotal() {
  const price = 199;
  const qty1 = parseInt(document.getElementById("qty1").value);
  const total = price * qty1;
  document.getElementById("total").innerText = total;
}

function placeOrder() {
  const qty1 = parseInt(document.getElementById("qty1").value);
  if (qty1 > 0) {
    document.getElementById("confirmation").innerText = "🎉 Order placed successfully!";
  } else {
    document.getElementById("confirmation").innerText = "⚠️ Please select at least 1 pizza.";
  }
}
