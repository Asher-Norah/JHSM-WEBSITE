// Image Slider Functionality for Kajiado Page
class ImageSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Dot click events
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideIndex = parseInt(e.target.getAttribute('data-slide'));
                this.goToSlide(slideIndex);
            });
        });
        
        // Start auto-slide
        this.startAutoSlide();
        
        // Pause on hover
        const slider = document.querySelector('.image-slider');
        slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0;
        }
        this.showSlide(nextIndex);
    }
    
    prevSlide() {
        let prevIndex = this.currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1;
        }
        this.showSlide(prevIndex);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoSlide() {
        this.stopAutoSlide(); // Clear any existing interval
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
    
}

function conCopyGivingDetails() {
            const paybill = "247247";
            const account = "1100281008321";
            const details = `Paybill: ${paybill}\nAccount Number: ${account}`;
            
            // Create a temporary textarea element
            const textArea = document.createElement("textarea");
            textArea.value = details;
            textArea.style.position = "fixed";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            
            // Select and copy the text
            textArea.select();
            textArea.setSelectionRange(0, 99999); // For mobile devices
            
            try {
                const successful = document.execCommand("copy");
                document.body.removeChild(textArea);
                
                // Provide user feedback
                if (successful) {
                    const btn = event.target;
                    const originalText = btn.textContent;
                    btn.textContent = "COPIED!";
                    btn.style.background = "linear-gradient(135deg, #27ae60, #27ae60)";
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";
                    }, 2000);
                } else {
                    alert("Failed to copy details. Please copy manually:\n" + details);
                }
            } catch (err) {
                document.body.removeChild(textArea);
                alert("Failed to copy details. Please copy manually:\n" + details);
            }
        }