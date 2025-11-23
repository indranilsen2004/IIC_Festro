// Show/hide payment methods
document
  .getElementById("paymentMethod")
  .addEventListener("change", function () {
    const method = this.value;

    document.getElementById("upi-section").style.display =
      method === "upi" ? "block" : "none";
    document.getElementById("card-section").style.display =
      method === "card" ? "block" : "none";
  });
function goToSuccess() {
  // read order id from current page URL
  const id = new URLSearchParams(location.search).get("id");

  // go to success page WITH the order ID attached
  window.location.href = `/success.html?id=${id}`;
}
