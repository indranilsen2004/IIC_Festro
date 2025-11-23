function goToPayment() {
  const id = new URLSearchParams(location.search).get("id");
  location.href = `/payment.html?id=${id}`;
}
