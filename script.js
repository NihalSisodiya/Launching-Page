// Countdown Timer for Launching Soon
function updateCountdown() {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30); // Set to 30 days from now (adjust as needed)

    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('countdown').innerHTML = '<p>Launched!</p>';
    }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Email Signup Form Validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const message = document.getElementById('signup-message');
    
    if (emailRegex.test(email)) {
        message.textContent = 'Thank you! We\'ll notify you soon.';
        message.style.color = '#D4AF37';
        document.getElementById('email').value = '';
    } else {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = '#FF6B6B'; // Error color
    }
});