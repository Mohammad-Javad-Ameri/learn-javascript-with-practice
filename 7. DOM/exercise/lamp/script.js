let bulbImg = document.getElementById("bulb");
let btn = document.getElementById("btn");

let bulbFlag = false;

function turnOffOrOn() {
  // alert('Turn On/Off')

  if (bulbFlag) {
    bulbImg.setAttribute("src", "pics/bulboff.gif");
    btn.innerHTML = "Turn On";
    bulbFlag = false;
  } else {
    bulbImg.setAttribute("src", "pics/bulbon.gif");
    btn.innerHTML = "Turn Off";
    bulbFlag = true;
  }

  console.log(bulbFlag);
}
