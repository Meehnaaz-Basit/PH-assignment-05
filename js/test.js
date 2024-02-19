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
    if (selectedSeats >= maxSelectedSeats) {
      for (const remainingSeatButton of seatButtons) {
        if (!remainingSeatButton.classList.contains("seat-selected")) {
          remainingSeatButton.setAttribute("disabled", true);
        }
      }
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

    // discount price update

    // grand total price update
    grandTotal = totalPrice - discountPrice;
    const grandTotalPrice = document.getElementById("grand-total");
    grandTotalPrice.innerText = grandTotal;
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
