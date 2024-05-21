// Image carousel
var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var currentIndex = 0;

function showImage(index) {
    var carouselImage = document.getElementById("carouselImage");
    carouselImage.src = images[index];
}
document.getElementById("signupForm").onsubmit = function(event) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        event.preventDefault(); // Prevent form submission
    }
};

document.getElementById("prevButton").onclick = function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
};
document.getElementById("loginButton").onclick = function() {
    alert("Login button clicked!");
};

document.getElementById("signupButton").onclick = function() {
    alert("Sign Up button clicked!");
};

document.getElementById("nextButton").onclick = function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
};

// Initialize carousel with the first image
showImage(currentIndex);
