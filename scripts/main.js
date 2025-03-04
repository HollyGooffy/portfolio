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

    // Обработчики для ссылок меню
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (nav.classList.contains('mob-header__nav--open')) {
                // Добавляем задержку для завершения анимации
                e.preventDefault();
                closeMenu();

                // Переход по ссылке после анимации
                setTimeout(() => {
                    window.location.href = e.target.href;
                }, 300);
            }
        });
    });

    // Закрытие при клике вне меню (опционально)
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mob-header') && nav.classList.contains('mob-header__nav--open')) {
            closeMenu();
        }
    });
});

