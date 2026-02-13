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

// Scroll to Top Button
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const footer = document.querySelector('.footer');
    
    if (footer && scrollTopBtn) {
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Show button when footer is visible
        if (footerPosition < windowHeight) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    }
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Scroll Looks Carousel
function scrollLooks(direction) {
    const looksGrid = document.getElementById('looksGrid');
    const scrollAmount = 330; // Width of one item + gap
    
    if (direction === 'left') {
        looksGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        looksGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Optional: Hide arrows at the start/end of scroll
function updateArrowsVisibility() {
    const looksGrid = document.getElementById('looksGrid');
    const leftArrow = document.querySelector('.looks-carousel-container .left-arrow');
    const rightArrow = document.querySelector('.looks-carousel-container .right-arrow');
    
    if (looksGrid && leftArrow && rightArrow) {
        // Hide left arrow at start
        if (looksGrid.scrollLeft <= 0) {
            leftArrow.style.opacity = '0.3';
            leftArrow.style.pointerEvents = 'none';
        } else {
            leftArrow.style.opacity = '1';
            leftArrow.style.pointerEvents = 'auto';
        }
        
        // Hide right arrow at end
        if (looksGrid.scrollLeft + looksGrid.clientWidth >= looksGrid.scrollWidth - 10) {
            rightArrow.style.opacity = '0.3';
            rightArrow.style.pointerEvents = 'none';
        } else {
            rightArrow.style.opacity = '1';
            rightArrow.style.pointerEvents = 'auto';
        }
    }
}

// Listen for scroll events
const looksGrid = document.getElementById('looksGrid');
if (looksGrid) {
    looksGrid.addEventListener('scroll', updateArrowsVisibility);
    // Initial check
    updateArrowsVisibility();
}


/*
// Scroll Gallery Carousel
function scrollGallery(direction) {
    const galleryGrid = document.getElementById('galleryGrid');
    const scrollAmount = 370; // Width of one item + gap
    
    if (direction === 'left') {
        galleryGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        galleryGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Update Gallery Arrows Visibility
function updateGalleryArrowsVisibility() {
    const galleryGrid = document.getElementById('galleryGrid');
    const leftArrow = document.querySelector('.gallery-carousel-container .carousel-arrow.left-arrow');
    const rightArrow = document.querySelector('.gallery-carousel-container .carousel-arrow.right-arrow');
    
    if (galleryGrid && leftArrow && rightArrow) {
        // Hide left arrow at start
        if (galleryGrid.scrollLeft <= 0) {
            leftArrow.style.opacity = '0.3';
            leftArrow.style.pointerEvents = 'none';
        } else {
            leftArrow.style.opacity = '1';
            leftArrow.style.pointerEvents = 'auto';
        }
        
        // Hide right arrow at end
        if (galleryGrid.scrollLeft + galleryGrid.clientWidth >= galleryGrid.scrollWidth - 10) {
            rightArrow.style.opacity = '0.3';
            rightArrow.style.pointerEvents = 'none';
        } else {
            rightArrow.style.opacity = '1';
            rightArrow.style.pointerEvents = 'auto';
        }
    }
}

// Listen for gallery scroll events
const galleryGrid = document.getElementById('galleryGrid');
if (galleryGrid) {
    galleryGrid.addEventListener('scroll', updateGalleryArrowsVisibility);
    // Initial check
    updateGalleryArrowsVisibility();
}

*/



// Scroll Services Carousel
function scrollServices(direction) {
    const servicesGrid = document.getElementById('servicesGrid');
    const scrollAmount = 370; // Width of one item + gap
    
    if (direction === 'left') {
        servicesGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        servicesGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Update Services Arrows Visibility
function updateServicesArrowsVisibility() {
    const servicesGrid = document.getElementById('servicesGrid');
    const leftArrow = document.querySelector('.services-carousel-container .left-arrow');
    const rightArrow = document.querySelector('.services-carousel-container .right-arrow');
    
    if (servicesGrid && leftArrow && rightArrow) {
        // Hide left arrow at start
        if (servicesGrid.scrollLeft <= 0) {
            leftArrow.style.opacity = '0.3';
            leftArrow.style.pointerEvents = 'none';
        } else {
            leftArrow.style.opacity = '1';
            leftArrow.style.pointerEvents = 'auto';
        }
        
        // Hide right arrow at end
        if (servicesGrid.scrollLeft + servicesGrid.clientWidth >= servicesGrid.scrollWidth - 10) {
            rightArrow.style.opacity = '0.3';
            rightArrow.style.pointerEvents = 'none';
        } else {
            rightArrow.style.opacity = '1';
            rightArrow.style.pointerEvents = 'auto';
        }
    }
}

// Listen for services scroll events
const servicesGrid = document.getElementById('servicesGrid');
if (servicesGrid) {
    servicesGrid.addEventListener('scroll', updateServicesArrowsVisibility);
    // Initial check
    updateServicesArrowsVisibility();
}
