document.addEventListener("DOMContentLoaded", () => {
    const reviewForm = document.getElementById("reviewForm");
    const reviewText = document.getElementById("reviewText");
    const formMessage = document.getElementById("formMessage");
    const reviewsContainer = document.getElementById("reviewsContainer");

    // Functie om reviews op te halen
    function fetchReviews() {
        fetch("http://localhost:5001/reviews")
            .then(response => response.json())
            .then(data => {
                console.log("Reviews ontvangen:", data);
                reviewsContainer.innerHTML = "";

                if (data.length === 0) {
                    reviewsContainer.innerHTML = "<p>Er zijn nog geen reviews.</p>";
                    return;
                }

                data.forEach(review => {
                    const reviewElement = document.createElement("div");
                    reviewElement.classList.add("review-item");
                    reviewElement.innerHTML = `<p>${review.reviewtext}</p>`;
                    reviewsContainer.appendChild(reviewElement);
                });
            })
            .catch(error => {
                console.error("Fout bij ophalen van reviews:", error);
                reviewsContainer.innerHTML = "<p>Fout bij laden van reviews.</p>";
            });
    }

    // Review verzenden
    reviewForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const review = reviewText.value.trim();
        if (review === "") {
            formMessage.innerText = "Je review mag niet leeg zijn!";
            formMessage.style.color = "red";
            return;
        }

        fetch("http://localhost:5001/postreviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ reviewtext: review })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Review verzonden:", data);
            formMessage.innerText = "Review succesvol verzonden!";
            formMessage.style.color = "green";
            reviewText.value = ""; // Formulier leegmaken
            fetchReviews(); // Direct de lijst met reviews verversen
        })
        .catch(error => {
            console.error("Fout bij verzenden van review:", error);
            formMessage.innerText = "Er is een fout opgetreden.";
            formMessage.style.color = "red";
        });
    });

    // Haal reviews op bij het laden van de pagina
    fetchReviews();
});
