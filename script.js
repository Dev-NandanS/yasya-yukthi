document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
    const sections = document.querySelectorAll('.section');
    let currentHovered = null;

    // Add hover listeners to each section
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            currentHovered = section;
            
            // Add active class to current section
            section.classList.add('active');
            
            // Remove active class from other sections
            sections.forEach(otherSection => {
                if (otherSection !== section) {
                    otherSection.classList.remove('active');
                }
            });
        });

        section.addEventListener('mouseleave', function() {
            currentHovered = null;
            section.classList.remove('active');
        });
    });

    // Handle visit buttons
    const visitButtons = document.querySelectorAll('.visit-btn');
    visitButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.closest('.section');
            const sectionType = section.dataset.section;
            
            // Add your navigation logic here
            console.log(`Navigating to ${sectionType} section`);
        });
    });
});