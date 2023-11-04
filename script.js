function showBookingForm(movieTitle) {
    var modal = document.getElementById("booking-modal");
    var movieTitleElement = document.getElementById("movie-title");
    movieTitleElement.textContent = movieTitle;
    modal.style.display = "block";
}

function hideBookingForm() {
    var modal = document.getElementById("booking-modal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    var modal = document.getElementById("booking-modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};