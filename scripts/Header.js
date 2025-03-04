document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector('.mob-header__toggler');
    const nav = document.querySelector('.mob-header__nav');

    toggler.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('mob-header__nav--open');
        toggler.classList.toggle('mob-header__toggler--active');
        nav.setAttribute('aria-hidden', !isOpen);
        toggler.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
});