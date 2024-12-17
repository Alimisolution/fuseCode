"use strict";

document.getElementById("success").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Create a FormData object from the form element
  const formData = new FormData(this); // Use 'this' to reference the form

  // Submit the form data using Fetch API
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        // Adjust this path if necessary
        window.location.href = "/success"; // Update the path as needed
      } else {
        alert("There was a problem with your submission. Please try again.");
      }
    })
    .catch((error) => {
      alert("There was a problem with your submission. Please try again.");
    });
});
