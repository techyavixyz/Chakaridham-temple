// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
    // Hide the popup after 10 seconds
    setTimeout(hidePopup, 10000);
}

// Function to hide the popup
function hidePopup() {
    document.getElementById('popup').style.display = 'none';
}
