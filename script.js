document.addEventListener('DOMContentLoaded', function() {
    const leftPanel = document.querySelector('.split.left');
    const rightPanel = document.querySelector('.split.right');
    const separator = document.querySelector('.gradient-separator');
    const header = document.querySelector('header');
    const buttons = document.querySelectorAll('.visit-btn');

    function handlePanelHover(isLeft, isEntering) {
        const activePanel = isLeft ? leftPanel : rightPanel;
        const inactivePanel = isLeft ? rightPanel : leftPanel;

        if (isEntering) {
            // Expand active panel
            activePanel.style.width = '60%';
            inactivePanel.style.width = '40%';

            // Update header color
            header.style.color = isLeft ? '#fff' : '#000';

            // Show description with animation
            const description = activePanel.querySelector('.description');
            description.style.opacity = '1';
            description.style.transform = 'translateY(0)';

            // Scale background image
            const image = activePanel.querySelector('.background-image');
            if (image) {
                image.style.transform = 'scale(1.05)';
            }

            // Move separator
            if (separator) {
                separator.style.transform = `translateX(${isLeft ? '-40%' : '-60%'}) rotate(3deg)`;
            }
        } else {
            // Reset only if neither panel is hovered
            if (!leftPanel.matches(':hover') && !rightPanel.matches(':hover')) {
                // Reset panel widths
                leftPanel.style.width = '50%';
                rightPanel.style.width = '50%';

                // Reset header color
                header.style.color = '#fff';

                // Reset separator
                if (separator) {
                    separator.style.transform = 'translateX(-50%) rotate(3deg)';
                }

                // Reset background images
                document.querySelectorAll('.background-image').forEach(img => {
                    img.style.transform = 'scale(1.01)';
                });
            }
        }
    }

    // Add hover event listeners to panels
    leftPanel.addEventListener('mouseenter', () => handlePanelHover(true, true));
    leftPanel.addEventListener('mouseleave', () => handlePanelHover(true, false));
    rightPanel.addEventListener('mouseenter', () => handlePanelHover(false, true));
    rightPanel.addEventListener('mouseleave', () => handlePanelHover(false, false));

    // Handle visit buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.closest('.split');
            const isLeft = section.classList.contains('left');
            const sectionName = isLeft ? 'YASYA' : 'YUKTHI';
            console.log(`Navigating to ${sectionName} section`);
        });
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth <= 768) {
                // Reset styles for mobile
                leftPanel.style.width = '100%';
                rightPanel.style.width = '100%';
                header.style.color = '#fff';
                if (separator) {
                    separator.style.display = 'none';
                }
            } else {
                // Reset to desktop styles
                leftPanel.style.width = '50%';
                rightPanel.style.width = '50%';
                if (separator) {
                    separator.style.display = 'block';
                    separator.style.transform = 'translateX(-50%) rotate(3deg)';
                }
            }
        }, 250);
    });

    // Initial check for mobile layout
    if (window.innerWidth <= 768) {
        if (separator) {
            separator.style.display = 'none';
        }
    }
});