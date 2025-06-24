let glasses = 0;

function drink() {
  glasses = glasses + 1;
  document.getElementById("glasses").textContent = glasses;
}

function reset() {
  glasses = 0;
  document.getElementById("glasses").textContent = "0";
}
