var randomColor = Math.floor(Math.random()*16777215).toString(16);

function genColor(randomColor){
    return randomColor;
}
function updateAgeInput(val) {
  document.getElementById("ageRange").value = val;
}
function updateAgeRange(val) {
  document.getElementById("age").value = val;
}

function updateInsuredInput(val) {
  document.getElementById("insuredRange").value = `${val}`;
}
function updateInsuredRange(val) {
  document.getElementById("insured").value = `${val}`;
}
function updateIncomeInput(val) {
  document.getElementById("incomeRange").value = val;
}
function updateIncomeRange(val) {
  document.getElementById("incomeInput").value = val;
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}