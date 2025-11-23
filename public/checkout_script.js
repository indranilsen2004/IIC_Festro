document
  .getElementById("checkoutForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target));

    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // Redirect user WITH the ID
    window.location.href = `/payment.html?id=${data.order_id}`;
  });
