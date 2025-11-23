// confetti burst
setTimeout(() => {
  confetti({ particleCount: 200, spread: 360 });
}, 300);

function downloadReceipt() {
  const id = new URLSearchParams(location.search).get("id");
  window.location.href = `/receipt?id=${id}`;
}
