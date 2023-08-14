document.addEventListener("DOMContentLoaded", function() {
    const bookButton = document.getElementById("book-button");
    bookButton.addEventListener("click", function() {
        const location = document.getElementById("location").value;
        const destination = document.getElementById("destination").value;
        
        if (location && destination) {
            alert(`Booking confirmed from ${location} to ${destination}!`);
        } else {
            alert("Please fill in both pickup location and destination.");
        }
    });
});