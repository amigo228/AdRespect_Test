const expandBtn = document.querySelector('.expand-btn');
const reduceBtn = document.querySelector('.reduce-btn');
const cover = document.querySelector('.cover');
const grid = document.querySelector('.grid');
const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 43,
    columnWidth: 451,
    horizontalOrder: true,
});

expandBtn.addEventListener('click', () => {
    const hiddenItems = document.querySelectorAll('.grid-item-hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('grid-item-hidden');
    });

    msnry.layout();
    expandBtn.style.display = "none";
    reduceBtn.style.display = "block";
    cover.style.display = "none";
});

reduceBtn.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item, index) => {
        if (index > 8) {
            item.classList.add('grid-item-hidden');
        }
    });

    msnry.layout();
    expandBtn.style.display = "block";
    reduceBtn.style.display = "none";
    cover.style.display = "block";
});

Fancybox.bind('[data-fancybox="gallery"]', {});

const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
    const options = navItem.querySelector('.options');
    if (options) {
        navItem.addEventListener('mouseenter', () => {
            options.style.display = 'flex';
            setTimeout(() => {
                options.style.opacity = '1';
                options.style.transform = 'translateY(0)';
            }, 10);
        });

        navItem.addEventListener('mouseleave', () => {
            options.style.opacity = '0';
            options.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                options.style.display = 'none';
            }, 300);
        });
    }
});

const input = document.querySelector('.search');
const navList = document.querySelector('.nav-list');
const navLinkText = document.querySelector('.nav-link-text');

navLinkText.addEventListener('click', () => {
    if (input.classList.contains('close-animation')) {
        input.classList.remove('close-animation');
        input.classList.remove('active');
        setTimeout(() => {
            navList.classList.remove('changed');
        }, 300);
    } else {
        input.classList.add('close-animation');
        input.classList.add('active');
        navList.classList.add('changed');
    }
});

$('.slick-container').slick({slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
});

const btn = document.querySelector('.btn-brg-holder');
const header = document.querySelector('.header');

btn.addEventListener('click', () => {
    if(!header.classList.contains('active')) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
})







