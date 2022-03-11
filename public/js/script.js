document.addEventListener('DOMContentLoaded', function () {
    const windowHeight = window.innerHeight;

    const checkVisibility = () => {
        let listeItem = document.querySelectorAll('#home-list > a');
        listeItem.forEach(item => {
            const spaceToTop = item.getBoundingClientRect().top;
            if (spaceToTop - windowHeight < -50) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', function () {
        checkVisibility();
    });

    checkVisibility();

});