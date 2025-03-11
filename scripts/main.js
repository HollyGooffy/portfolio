document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.mob-header__toggler');
    const nav = document.querySelector('.mob-header__nav');
    const navLinks = document.querySelectorAll('.mob-header__link');

    // Функция закрытия меню
    const closeMenu = () => {
        nav.classList.remove('mob-header__nav--open');
        toggler.classList.remove('mob-header__toggler--active');
        document.body.style.overflow = 'auto';
        nav.setAttribute('aria-hidden', 'true');
        toggler.setAttribute('aria-label', 'Open menu');
    };

    // Обработчик для бургер-кнопки
    toggler.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('mob-header__nav--open');
        toggler.classList.toggle('mob-header__toggler--active');
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        nav.setAttribute('aria-hidden', !isOpen);
        toggler.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (nav.classList.contains('mob-header__nav--open')) {
                e.preventDefault();
                closeMenu();

                setTimeout(() => {
                    window.location.href = e.target.href;
                }, 300);
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mob-header') && nav.classList.contains('mob-header__nav--open')) {
            closeMenu();
        }
    });
});

// live typing
const text = 'El Sacerdot';
const text2 = 'Student and Developer';
const typingTextElement = document.getElementById('typed-text');
const typingTextElement2 = document.getElementById('typed-text2');


let index = 0;

const initialDelay = 700;

function typeText() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 130);
    } else {
        index = 0;
        setTimeout(typeText2, 300);
    }
}

function typeText2() {
    if (index < text2.length) {
        typingTextElement2.textContent += text2.charAt(index);
        index++;
        setTimeout(typeText2, 110);
    }
}

setTimeout(typeText, initialDelay);