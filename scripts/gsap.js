gsap.to(".hero__inner > *", {
    duration: 1,
    opacity: 1,
    y: 0,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.2
});

// Обработчик клика для кнопки
document.querySelector('.hero__inner-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const link = this.href;

    // Анимация перехода
    const tl = gsap.timeline({
        onComplete: () => window.location.href = link
    });

    // Анимация элементов
    tl.to(".hero__inner > *", {
        duration: 0.4,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: "power1"
    })
        .to(".page-transition", {
            duration: 0.5,
            scaleX: 1,
            transformOrigin: "right",
            ease: "power1"
        }, 0.2);
});