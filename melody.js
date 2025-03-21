document.addEventListener("DOMContentLoaded", function () {
    /*** 🎵 Enroll Guide Functionality ***/
    const enrollButton = document.getElementById("enroll-btn");
    const enrollGuide = document.getElementById("enroll-guide");
    const closeEnrollBtn = document.getElementById("close-btn");

    let isGuideOpen = false;

    if (enrollButton && enrollGuide && closeEnrollBtn) {
        enrollButton.addEventListener("click", function () {
            if (!isGuideOpen) {
                enrollGuide.classList.remove("hidden");
                enrollButton.classList.add("clicked");
                isGuideOpen = true;
            }
            setTimeout(() => {
                enrollButton.classList.remove("clicked");
            }, 300);
        });

        closeEnrollBtn.addEventListener("click", function () {
            enrollGuide.classList.add("hidden");
            isGuideOpen = false;
        });
    }

    /*** 🎶 Book a Free Trial Form Functionality ***/
    const trialFormContainer = document.getElementById("trial-form-container");
    const trialButton = document.querySelector(".book-trial-btn");
    const closeTrialForm = document.getElementById("close-trial-form");
    const bookingForm = document.getElementById("bookingForm");
    const errorMessage = document.getElementById("error-message");

    if (trialFormContainer && trialButton && closeTrialForm) {
        // Hide form on page load
        trialFormContainer.style.display = "none"; 

        // Show form when "Book a Free Trial" button is clicked
        trialButton.addEventListener("click", function () {
            trialFormContainer.style.display = "flex"; 
        });

        // Close form when clicking close button
        closeTrialForm.addEventListener("click", function () {
            trialFormContainer.style.display = "none"; 
        });

        // Optional: Hide form if clicking outside the modal
        trialFormContainer.addEventListener("click", function (event) {
            if (event.target === trialFormContainer) {
                trialFormContainer.style.display = "none";
            }
        });
    }

    /*** 🎯 Form Validation ***/
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const instrument = document.getElementById("instrument").value;
        const date = document.getElementById("date").value;

        // Validation rules
        if (name.length < 3) {
            showError("Name must be at least 3 characters.");
            return;
        }

        if (!validateEmail(email)) {
            showError("Enter a valid email address.");
            return;
        }

        if (instrument === "") {
            showError("Please select an instrument.");
            return;
        }

        if (!date) {
            showError("Please choose a date.");
            return;
        }

        // If all validations pass, submit the form (simulating submission)
        errorMessage.style.display = "none"; // Hide error messages
        alert("Your free trial is booked successfully!");
        bookingForm.reset();
        trialFormContainer.style.display = "none"; // Close the modal
    });

    // Helper function to show error messages
    function showError(message) {
        errorMessage.innerText = message;
        errorMessage.style.display = "block";
    }

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
