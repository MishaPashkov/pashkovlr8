let getName = prompt("Your name") || "User";
let userName = document.getElementById("userName");
userName.textContent = getName;
let uv = document.getElementById("uVictory");
let uCount = 0;
uv.textContent = uCount;
let cv = document.getElementById("cVictory");
let cCount = 0;
cv.textContent = cCount;
function Generate(){
  let uNumber = document.getElementById("uNumber");
  let cNumber = document.getElementById("cNumber");
  let uNum = Math.floor(Math.random()*10);
  let cNum = Math.floor(Math.random()*10);
  uNumber.textContent = uNum;
  cNumber.textContent = cNum;
  if (uNum > cNum) {
    uCount++;
    uv.textContent = uCount;
  } else if (cNum > uNum) {
    cCount++;
    cv.textContent = cCount;
  }
  if (uCount === 3) {
  setTimeout(() => {
    alert(getName + " won!");
    resetGame();
  }, 100);
}
if (cCount === 3) {
  setTimeout(() => {
    alert("Computer won!");
    resetGame();
  }, 100);
}

}
function resetGame() {
  uCount = 0;
  cCount = 0;
  uv.textContent = uCount;
  cv.textContent = cCount;
  document.getElementById("uNumber").textContent = "";
  document.getElementById("cNumber").textContent = "";

}
