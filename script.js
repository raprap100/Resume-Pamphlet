document.addEventListener('DOMContentLoaded', function() {
    const coverRight = document.querySelector('.cover.cover-right');
    const pageLeft = document.querySelector('.book-page.page-left');
    const pages = document.querySelectorAll('.book-page.page-right');
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
    const contactMeBtn = document.querySelector('.btn.contact-me');
    const backProfileBtn = document.querySelector('.back-profile');

    let totalPages = pages.length;
    let pageNumber = 0;

    // Code for turning the page buttons
    pageTurnBtn.forEach((el, index) => {  
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 - index;
                }, 500);
            } else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 20 + index;
                }, 500);
            }
        };
    });

    // Contact me button code
    if (contactMeBtn) {
        contactMeBtn.onclick = () => {
            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    setTimeout(() => {
                        page.style.zIndex = 20 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        };
    } else {
        console.error("Contact me button not found");
    }

    function reverseIndex() {
        pageNumber--;
        if (pageNumber < 0) {
            pageNumber = totalPages - 1;
        }
    }

    // Back profile button code
    if (backProfileBtn) {
        backProfileBtn.onclick = () => {
            pages.forEach((_, index) => {
                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].classList.remove('turn');
                    setTimeout(() => {
                        pages[pageNumber].style.zIndex = 10 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        };
    } else {
        console.error("Back profile button not found");
    }

    // Intro animation
    setTimeout(() => {
        coverRight.classList.add('turn');
    }, 2100);

    setTimeout(() => {
        coverRight.style.zIndex = -1;
    }, 2800);

    setTimeout(() => {
        pageLeft.style.zIndex = 20;
    }, 3200);

    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 2100);
    });
});