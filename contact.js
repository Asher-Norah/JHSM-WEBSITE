// Contact Form Validation - save as contact.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = '#e9ecef';
                }
            });
            
            // Check if at least one inquiry is selected
            const inquiryCheckboxes = contactForm.querySelectorAll('input[name="inquiry"]:checked');
            if (inquiryCheckboxes.length === 0) {
                isValid = false;
                alert('Please select at least one nature of inquiry.');
            }
            
            if (isValid) {
                // Show loading state
                const submitButton = contactForm.querySelector('.submit-button');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Submitting...';
                submitButton.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.style.borderColor = '#e74c3c';
                } else {
                    this.style.borderColor = '#e9ecef';
                }
            });
            
            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '#32229c';
                }
            });
        });
    }
});