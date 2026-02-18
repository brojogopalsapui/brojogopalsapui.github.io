document.addEventListener('DOMContentLoaded', function () {
    let elements = document.querySelectorAll('.fadeIn');
    elements.forEach(function (element) {
        window.addEventListener('scroll', function () {
            if (element.getBoundingClientRect().top < window.innerHeight) {
                element.classList.add('in-view');
            }
        });
    });
});
