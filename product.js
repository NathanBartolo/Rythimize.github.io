document.addEventListener('DOMContentLoaded', function() {
    // Select the product link
    var productLink = document.querySelector('.scroll-link');

    // Add click event listener
    productLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target section
        var targetSection = document.getElementById('featured-products');

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Select the "Get Started" button
    var getStartedBtn = document.getElementById('getStartedBtn');

    // Add click event listener to the button
    getStartedBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior

        // Get the target section
        var targetSection = document.getElementById('products');

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var newsletterSection = document.getElementById('newsletter');
    
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    function handleScroll() {
        if (isInViewport(newsletterSection)) {
            newsletterSection.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
    }
    
    window.addEventListener('scroll', handleScroll);
});
