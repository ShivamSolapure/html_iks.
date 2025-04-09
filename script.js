document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const sections = document.querySelectorAll('.service-section');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const weaponCategories = document.querySelectorAll('.weapon-category');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        
        // Search in sections
        sections.forEach(section => {
            const sectionTitle = section.querySelector('h2').textContent.toLowerCase();
            const sectionContent = section.textContent.toLowerCase();
            const isVisible = sectionTitle.includes(searchTerm) || sectionContent.includes(searchTerm);
            section.style.display = isVisible ? 'block' : 'none';
        });

        // Search in timeline items
        timelineItems.forEach(item => {
            const itemTitle = item.querySelector('h4').textContent.toLowerCase();
            const itemContent = item.textContent.toLowerCase();
            const isVisible = itemTitle.includes(searchTerm) || itemContent.includes(searchTerm);
            item.style.display = isVisible ? 'block' : 'none';
        });

        // Search in weapon categories
        weaponCategories.forEach(category => {
            const categoryTitle = category.querySelector('h4').textContent.toLowerCase();
            const categoryContent = category.textContent.toLowerCase();
            const isVisible = categoryTitle.includes(searchTerm) || categoryContent.includes(searchTerm);
            category.style.display = isVisible ? 'block' : 'none';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to weapon categories
    weaponCategories.forEach(category => {
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });

        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add animation to timeline items when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}); 
