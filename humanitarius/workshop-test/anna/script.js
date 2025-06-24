let pee = 0;

function WC() {
  pee = pee + 1;
  document.getElementById("pee").textContent = pee;
  document.getElementById("counter").textContent += "🧻";
}
function reset() {
  pee = 0;
  document.getElementById("pee").textContent = pee;

  document.getElementById("counter").textContent = "";
}
