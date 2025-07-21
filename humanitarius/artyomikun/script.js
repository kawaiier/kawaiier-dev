let souls = 0
let smayl = 0

function eat() {
  souls += 1
  document.getElementById("soulCounter").textContent = souls
  smayl += 1
  if (smayl < 15) {
    document.getElementById("smaylik").textContent += "⚰️🎃🌕"
  }
  if (souls == 1) {
    document.getElementById("words").textContent = "душу человека"
  } else if (souls > 1 && souls < 5) {
    document.getElementById("words").textContent = "души людей"
  } else {
    document.getElementById("words").textContent = "душ людей"
  }
}

function yearAnew() {
  souls = 0
  document.getElementById("soulCounter").textContent = souls
  document.getElementById("smaylik").textContent = ""
}