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


    const saveDateBtn = document.getElementById("saveDateBtn");

    if (saveDateBtn) {
        saveDateBtn.addEventListener("click", function (event) {
            event.preventDefault();

            // 📅 Detalles del evento
            const title = "Boda de María y Mario";
            const location = "Iglesia XXXX, Madrid";
            const description = "Nos encantaría que nos acompañes en este día tan especial. ¡Reserva la fecha!";
            const startDate = "20250927T160000Z"; // Formato UTC YYYYMMDDTHHMMSSZ
            const endDate = "20250927T220000Z"; // 6 horas después

            // Generar el enlace de Google Calendar
            const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}&sf=true&output=xml`;

            // Abrir en una nueva pestaña
            window.open(googleCalendarURL, "_blank");
        });
    }

    // Toggle Gift Section (Regalo)
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

    // Toggle Mobile Menu and Close on Click
    const menuToggle = document.getElementById("mobile-menu");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", function () {
        navList.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en una opción
    document.querySelectorAll(".nav-list a").forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        });
    });

});
