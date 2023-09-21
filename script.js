function updateCountdown() {
    const targetDate = new Date("2023-06-12").getTime();
    const currentDate = new Date().getTime();
    const timeDifference = currentDate - targetDate;

    if (timeDifference >= 0) {
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    } else {
        document.getElementById("countdown").innerText = "This date is in the future.";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();