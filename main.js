// Set minimum date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').setAttribute('min', today);

let selectedTime = '';

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
}

function openBookingModal(serviceName = '', price = '') {
    document.getElementById('bookingModal').style.display = 'block';
    closeMobileMenu();
    if (serviceName) {
        document.getElementById('service').value = serviceName;
    }
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function selectTime(element, time) {
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    element.classList.add('selected');
    document.getElementById('time').value = time;
    selectedTime = time;
}

function updatePrice() {
    const select = document.getElementById('service');
    const price = select.options[select.selectedIndex].getAttribute('data-price');
}

// Submit booking via WhatsApp
function submitBookingWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!time) {
        alert('Please select a time slot');
        return;
    }

    // Format the message for WhatsApp
    const message = `Hi Muleka Salon!%0A%0AI would like to book an appointment:%0A%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}%0ATime: ${time}%0A%0APlease confirm my booking. Thank you!`;
    
    // Open WhatsApp with the booking details
    window.open(`https://wa.me/27787659444?text=${message}`, '_blank');
    
    closeBookingModal();
}

// Submit booking via Gmail
function submitBookingGmail(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!time) {
        alert('Please select a time slot');
        return;
    }

    // Create email subject
    const subject = 'New Booking Request - Muleka Salon';
    
    // Create email body
    const body = `Hi Muleka Salon,

I would like to book an appointment with the following details:

Name: ${name}
Phone Number: ${phone}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}

Please confirm my booking.

Thank you!`;
    
    // Open Gmail with pre-filled information
    window.location.href = `mailto:kalonjilubo12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Close modal after a short delay
    setTimeout(() => {
        closeBookingModal();
    }, 1000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('bookingModal');
    if (event.target == modal) {
        closeBookingModal();
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }                                                           
    });        
});


