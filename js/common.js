// Initialize seat variables
let selectedSeats = 0;
let availableSeats = 2;
const maxSelectedSeats = 4;

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

    // Mark the seat as selected
    seatButton.classList.add("seat-selected");

    // Update UI
    const remainingSeatsElement = document.getElementById("seat-remain");
    const selectedSeatsElement = document.getElementById("seat-increase");

    // Decrease available seats
    availableSeats--;
    // Increase selected seats
    selectedSeats++;

    remainingSeatsElement.innerText = availableSeats;
    selectedSeatsElement.innerText = selectedSeats;

    // Disable remaining seats if maximum selected seats is reached
    // ::::: problem :::::
    if (selectedSeats > maxSelectedSeats) {
      alert("You have reached the maximum number of tickets (4).");
    }

    // if no seats are available
    if (availableSeats < 0) {
      seatButton.classList.remove("seat-selected");
      alert("No seat is available");

      availableSeats++;
      selectedSeats--;
      remainingSeatsElement.innerText = availableSeats;
      selectedSeatsElement.innerText = selectedSeats;
    }
  });
}
