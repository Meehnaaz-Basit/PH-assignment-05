let seatNum = 0;
let seatLeft = 4;
const seatBtnAll = document.getElementsByClassName("seat-btn");
for (const seatBtn of seatBtnAll) {
  seatBtn.addEventListener("click", function () {
    // seat left
    const seatRemain = document.getElementById("seat-remain");
    seatLeft = seatLeft - 1;
    if (seatLeft < 0) {
      alert("No seat is available");
    } else {
      seatRemain.innerText = seatLeft;
    }
    // increase num
    const seatIncrease = document.getElementById("seat-increase");
    seatNum = seatNum + 1;
    if (seatLeft < 0) {
      alert("No seat is available");
    } else {
      seatIncrease.innerText = seatNum;
    }
  });
}
