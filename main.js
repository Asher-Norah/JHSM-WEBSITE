// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.navigation');

if (mobileMenu) {
    mobileMenu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        navigation.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Dropdown Toggle for Mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        // Only handle dropdowns on mobile (screen width < 768px)
        if (window.innerWidth < 768) {
            e.preventDefault();
            e.stopPropagation();

            const dropdown = this.parentElement;

            // Close other open dropdowns first
            document.querySelectorAll('.dropdown.active').forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });

            // Toggle current dropdown
            dropdown.classList.toggle('active');
        }
        // On desktop, let hover handle it (don't prevent default)
    });
});

// Close mobile menu when clicking on navigation links
document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (window.innerWidth < 768) {
            // Close mobile menu
            navigation.classList.remove('active');
            mobileMenu.classList.remove('active');

            // Close any open dropdowns
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (window.innerWidth < 768) {
        if (!navigation.contains(e.target) && !mobileMenu.contains(e.target)) {
            navigation.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});