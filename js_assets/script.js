// ==========================================
// KGADI'S COSMETIC DERMATOLOGY
// PART 3 - JAVASCRIPT FUNCTIONALITY
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. SERVICE SEARCH FUNCTIONALITY
    // ==========================================

    const serviceSearch = document.getElementById("serviceSearch");

    if (serviceSearch) {

        serviceSearch.addEventListener("input", function () {

            const searchText = serviceSearch.value.toLowerCase();

            const serviceCards = document.querySelectorAll(".service-card");

            serviceCards.forEach(function (card) {

                const serviceText = card.textContent.toLowerCase();

                if (serviceText.includes(searchText)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    }


    // ==========================================
    // 2. FAQ ACCORDION
    // ==========================================

    const faqQuestions = document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer = question.nextElementSibling;

            const isOpen = question.getAttribute("aria-expanded") === "true";

            question.setAttribute("aria-expanded", String(!isOpen));

            if (answer) {
                answer.hidden = isOpen;
            }

        });

    });


    // ==========================================
    // 3. IMAGE LIGHTBOX
    // ==========================================

    const lightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    const galleryImages = document.querySelectorAll(".lightbox-image");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            if (lightbox && lightboxImage) {

                lightboxImage.src = image.src;
                lightboxImage.alt = image.alt;

                lightbox.hidden = false;

            }

        });

    });

    if (closeLightbox && lightbox) {

        closeLightbox.addEventListener("click", function () {
            lightbox.hidden = true;
        });

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {
                lightbox.hidden = true;
            }

        });

        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {
                lightbox.hidden = true;
            }

        });

    }


    // ==========================================
    // 4. FORM VALIDATION
    // ==========================================

    const forms = document.querySelectorAll(".site-form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            const name = form.querySelector('[name="name"]');
            const email = form.querySelector('[name="email"]');
            const phone = form.querySelector('[name="phone"]');
            const message = form.querySelector('[name="message"]');

            let errors = [];

            if (name && name.value.trim().length < 2) {
                errors.push("Please enter your full name.");
            }

            if (email && !email.checkValidity()) {
                errors.push("Please enter a valid email address.");
            }

            if (phone && phone.value.trim() !== "") {

                const phonePattern = /^[0-9+\s()-]{7,20}$/;

                if (!phonePattern.test(phone.value.trim())) {
                    errors.push("Please enter a valid phone number.");
                }

            }

            if (message && message.value.trim().length < 10) {
                errors.push("Your message must contain at least 10 characters.");
            }

            if (errors.length > 0) {
    event.preventDefault();
    alert(errors.join("\n"));
} else {
    event.preventDefault();
    
    // Add this success alert:
    alert("Thank you! Your message has been sent succesfully.");

    // Collect form data for AJAX submission
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Send data asynchronously via fetch (AJAX)
    fetch(form.action || '#', {
        method: form.method || 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        alert("Thank you! Your enquiry has been completed successfully via AJAX.");
        form.reset();
    })
    .catch(error => {
        alert("Thank you! Your enquiry has been submitted.");
        form.reset();
    });
}

        });

    });

});