let selectedSeats = 0;
let availableSeats = 8;
const maxSelectedSeats = 4;
let ticketPrice = 550;
let totalPrice = 0;
let grandTotal = 0;
let discountPrice = 0;

// Get all seat buttons
const seatButtons = document.getElementsByClassName("seat-btn");

// Add click event listeners to seat buttons
for (const seatButton of seatButtons) {
  seatButton.addEventListener("click", function () {
    // Check if the seat is already selected
    if (seatButton.classList.contains("seat-selected")) {
      alert("You already selected this seat.");
      return;
    }

    // Decrease available seats
    availableSeats--;

    // Increase selected seats
    selectedSeats++;

    // seat
    const remainingSeatsElement = document.getElementById("seat-remain");
    const selectedSeatsElement = document.getElementById("seat-increase");

    remainingSeatsElement.innerText = availableSeats;
    selectedSeatsElement.innerText = selectedSeats;

    // Mark the seat as selected
    seatButton.classList.add("seat-selected");

    // Disable remaining seats if reached max seat
    const couponBtn = document.getElementById("coupon-btn");
    if (selectedSeats >= maxSelectedSeats) {
      for (const remainingSeatButton of seatButtons) {
        if (!remainingSeatButton.classList.contains("seat-selected")) {
          remainingSeatButton.setAttribute("disabled", true);
        }
      }

      couponBtn.removeAttribute("disabled");
      alert("You have reached the maximum number of tickets (4).");
    }

    // table data cell update///
    const table = document.getElementById("table");
    // table body
    const tBody = document.getElementById("t-body");

    // create table row

    const tr = document.createElement("tr");
    // create table data

    const seatTd = document.createElement("td");
    seatTd.textContent = seatButton.innerText;
    tr.appendChild(seatTd);

    const classTd = document.createElement("td");
    classTd.textContent = "Economy";
    tr.appendChild(classTd);

    const costTd = document.createElement("td");
    costTd.textContent = ticketPrice;
    tr.appendChild(costTd);
    // console.log(td.innerText);

    // append data
    tBody.appendChild(tr);

    // Total price update
    totalPrice = totalPrice + ticketPrice;
    const price = document.getElementById("total-price");
    price.innerText = totalPrice;
    // console.log(typeof totalPrice, totalPrice);

    // grand total price update
    grandTotal = totalPrice - discountPrice;
    const grandTotalPrice = document.getElementById("grand-total");
    grandTotalPrice.innerText = grandTotal;

    //--------------- next btn ------------ problem ----
    const nextBtn = document.getElementById("next-btn");
    const phoneNumInput = document.getElementById("phone-number-input");
    const phoneValue = parseInt(phoneNumInput.value);
    console.log(phoneValue);
    if (seatButton.classList.contains("seat-selected") && phoneValue > -1) {
      nextBtn.removeAttribute("disabled");
    } else {
      nextBtn.setAttribute("disabled", true);
    }
    // --------------------------------------------

    // Alert if no seats are available
    if (availableSeats < 0) {
      alert("No seat is available");
      // Changing the state
      availableSeats++;
      selectedSeats--;
      remainingSeatsElement.innerText = availableSeats;
      selectedSeatsElement.innerText = selectedSeats;
      seatButton.classList.remove("seat-selected");
    }
  });
}

// discount price update

const couponBtn = document.getElementById("coupon-btn");
const couponInput = document.getElementById("coupon-input");

// Add event listener to the coupon
couponBtn.addEventListener("click", function () {
  const couponCode = couponInput.value;
  const discount = document.getElementById("discount");
  const couponSection = document.getElementById("coupon-section");
  const discountSection = document.getElementById("discount-section");

  if (couponCode === "NEW15") {
    discountPrice = totalPrice * (15 / 100);
    discount.innerText = discountPrice;
    couponSection.classList.add("hidden");
    discountSection.classList.remove("hidden");
  } else if (couponCode === "Couple 20") {
    discountPrice = totalPrice * (20 / 100);
    discount.innerText = discountPrice;
    couponSection.classList.add("hidden");
    discountSection.classList.remove("hidden");
  } else {
    alert("Invalid Coupon Code");
    couponInput.value = "";
  }
  // grand total after applying the discount
  grandTotal = totalPrice - discountPrice;
  const grandTotalPrice = document.getElementById("grand-total");
  grandTotalPrice.innerText = grandTotal;
});

//  Add event listener to the next button
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", function () {
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  const popUp = document.getElementById("pop-up");

  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  popUp.classList.remove("hidden");
});
