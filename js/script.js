let selectedSeats = 0;
let availableSeats = 40;
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

    // Update seat information
    const remainingSeatsElement = document.getElementById("seat-remain");
    const selectedSeatsElement = document.getElementById("seat-increase");

    // Inner Text
    remainingSeatsElement.innerText = availableSeats;
    selectedSeatsElement.innerText = selectedSeats;

    // Mark seat selected
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
      alert(
        "You have reached the 4-ticket limit!! \n Also now you can enjoy savings with your coupon code."
      );
    }

    // Update table data
    const table = document.getElementById("table");
    const tBody = document.getElementById("t-body");
    const tr = document.createElement("tr");

    const seatTd = document.createElement("td");
    seatTd.textContent = seatButton.innerText;
    tr.appendChild(seatTd);

    const classTd = document.createElement("td");
    classTd.textContent = "Economy";
    tr.appendChild(classTd);

    const costTd = document.createElement("td");
    costTd.textContent = ticketPrice;
    tr.appendChild(costTd);

    tBody.appendChild(tr);

    // Update total price
    totalPrice = totalPrice + ticketPrice;
    const price = document.getElementById("total-price");
    price.innerText = totalPrice;

    // Update grand total price
    grandTotal = totalPrice - discountPrice;
    const grandTotalPrice = document.getElementById("grand-total");
    grandTotalPrice.innerText = grandTotal;
  });
}

// Add event listener to the coupon btn
const couponBtn = document.getElementById("coupon-btn");
couponBtn.addEventListener("click", function () {
  const couponInput = document.getElementById("coupon-input");
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

  // Update grand total after applying the discount
  grandTotal = totalPrice - discountPrice;
  const grandTotalPrice = document.getElementById("grand-total");
  grandTotalPrice.innerText = grandTotal;
});

// Add event listener to the phone number input
const phoneNumInput = document.getElementById("phone-number-input");
phoneNumInput.addEventListener("input", function () {
  const nextBtn = document.getElementById("next-btn");
  const phoneValue = parseInt(phoneNumInput.value);

  if (selectedSeats > 0 && phoneValue !== -1 && phoneNumInput.value !== "") {
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.setAttribute("disabled", true);
  }
});

// Add event listener to the next button
const nextBtn = document.getElementById("next-btn");
nextBtn.addEventListener("click", function () {
  // console.log("clicked next-btn");
  const header = document.getElementById("header");
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  const popUp = document.getElementById("pop-up");

  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  popUp.classList.remove("hidden");
});

// reload the page when click continue btn
const continueBtn = document.getElementById("continue-btn");
continueBtn.addEventListener("click", function () {
  // console.log("clicked continue btn");
  location.reload();
});
