// Mission Statement Page Read More Functionality
document.addEventListener('DOMContentLoaded', function() {
    const missionCards = document.querySelectorAll('.mission-card');
    
    missionCards.forEach(card => {
        const content = card.querySelector('.mission-content');
        const paragraphs = content.querySelectorAll('p');
        
        // If there are more than 2 paragraphs, set up read more functionality
        if (paragraphs.length > 1) {
           
            
            // Create or find the read more button
            let readMoreBtn = card.querySelector('.read-more-btn');
            if (!readMoreBtn) {
                readMoreBtn = document.createElement('button');
                readMoreBtn.className = 'read-more-btn collapsed';
        
                content.appendChild(readMoreBtn);
            }
            
            // Add click event to toggle content
            readMoreBtn.addEventListener('click', function() {
                const hiddenContent = card.querySelectorAll('.hidden-content');
                
                if (this.classList.contains('collapsed')) {
                    // Show hidden content
                    hiddenContent.forEach(item => {
                        item.classList.add('show');
                    });
                    this.classList.remove('collapsed');
                    this.classList.add('expanded');
                } else {
                    // Hide content
                    hiddenContent.forEach(item => {
                        item.classList.remove('show');
                    });
                    this.classList.remove('expanded');
                    this.classList.add('collapsed');
                }
            });
        } else {
            // Remove read more button if there's only one paragraph
            const readMoreBtn = card.querySelector('.read-more-btn');
            if (readMoreBtn) {
                readMoreBtn.remove();
            }
        }
    });
});