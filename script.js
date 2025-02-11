document.addEventListener("DOMContentLoaded", () => {
    // 🎉 Wedding date countdown
    const weddingDate = new Date("2025-09-27T00:00:00").getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // Update the values in the HTML
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // Display a message when the wedding date arrives
        if (timeLeft < 0) {
            clearInterval(timer);
            document.querySelector(".countdown").innerHTML = "<p>¡Es el gran día!</p>";
        }
    };

    // Update the countdown every second
    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    // 🎁 Toggle Gift Section (Regalo)
    const giftSection = document.querySelector(".gift-content");
    const toggleIcon = document.querySelector(".gift .toggle-icon");
    const giftTitle = document.querySelector(".gift .titulo");

    if (giftSection && toggleIcon && giftTitle) {
        // Hide content initially
        giftSection.style.display = "none";

        giftTitle.addEventListener("click", function () {
            if (giftSection.style.display === "none") {
                giftSection.style.display = "block";
                setTimeout(() => {
                    giftSection.classList.add("show");
                }, 10);
                toggleIcon.style.transform = "rotate(180deg)";
            } else {
                giftSection.classList.remove("show");
                setTimeout(() => {
                    giftSection.style.display = "none";
                }, 300);
                toggleIcon.style.transform = "rotate(0deg)";
            }
        });
    }
});
