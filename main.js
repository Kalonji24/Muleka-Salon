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

        function submitBooking(event) {
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
            const message = `Hi Muleka Salon!%0A%0AI would like to book an appointment:%0A%0AName: ${name}%0AService: ${service}%0ADate: ${date}%0ATime: ${time}%0A%0APlease confirm my booking. Thank you!`;
            
            // Remove + from phone if present and clean it
            const cleanPhone = phone.replace(/\+/g, '').replace(/\s/g, '');
            
            // Open WhatsApp with the booking details
            window.open(`https://wa.me/27603634053?text=${message}`, '_blank');
            
            closeBookingModal();
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