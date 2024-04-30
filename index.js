document.addEventListener('DOMContentLoaded', function() {
    // Select the product link
    var productLink = document.querySelector('.scroll-link');

    // Add a click event listener
    productLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the section
        var targetSection = document.getElementById('featured-products');

        // Scroll to the section smoothly
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

        // Get the section
        var targetSection = document.getElementById('products');

        // Scroll to the section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
//newsletter animation
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

//plus minus signon the FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const plusMinus = this.querySelector('.plus-minus');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                plusMinus.textContent = '+';
            } else {
                answer.style.display = 'block';
                plusMinus.textContent = '-';
            }
        });
    });
});
//featured product animation
document.addEventListener('DOMContentLoaded', function() {
    var featuredProductsSection = document.getElementById('featured-products');

    function isInViewport(element) {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.bottom >= 0
        );
    }

    function handleScroll() {
        if (isInViewport(featuredProductsSection)) {
            featuredProductsSection.classList.add('animate');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
});

