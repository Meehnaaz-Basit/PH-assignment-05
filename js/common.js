// Initialize seat variables
let selectedSeats = 0;
let availableSeats = 4;
const maxSelectedSeats = 41;

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
