var clk = 0;
let time = 30;
let scval = 0;
let miss = 0;

let splashScreen = document.getElementById("splashScreen");
let closeSplashButton = document.getElementById("closeSplashButton");
let mainContent = document.getElementById("mainContent");

closeSplashButton.addEventListener("click", () => {
  splashScreen.style.display = "none";
  mainContent.style.display = "block";
  timer();
  createBubble();
  click();
});
function click() {
  clk = Math.floor(Math.random() * 10);
  document.querySelector(".clickval").textContent = clk;
}
function createBubble() {
  let bubble = document.querySelector(".gbody");
  for (var i = 1; i <= 200; i++) {
    const num = Math.floor(Math.random() * 10);
    bubble.innerHTML += `<div class="bubble">${num}</div>`;
  }
}
function timer() {
  const timeval = document.querySelector(".timeval");
  let tint = setInterval(function () {
    if (time > 0) {
      time--;
      if (time <= 10) {
        timeval.style.color = "red";
      }
      timeval.textContent = time;
    } else {
      clearInterval(tint);
      document.querySelector(".gover").style.display = "flex";
      document.querySelector(".gbody").style.display = "none";
      document.querySelector(".scr").textContent = `Your Score: ${scval}`;
    }
  }, 1000);
}
function incScore() {
  scval += 10;
  document.querySelector(".scval").textContent = scval;
}
document.querySelector(".gbody").addEventListener("click", function (val) {
  let clickedval = +val.target.textContent;
  if (miss === 3) {
    document.querySelector(".gover").style.display = "flex";
    document.querySelector(".gbody").style.display = "none";
    document.querySelector(".scr").textContent = `Your Score: ${scval}`;
    console.log(document.querySelector("h3"));
  } else {
    if (clickedval === clk) {
      incScore();
      createBubble();
      click();
    } else {
      miss++;
      document.querySelector(".missval").innerHTML = miss;
      createBubble();
      click();
    }
  }
});
