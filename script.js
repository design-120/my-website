document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navItems = document.querySelectorAll(".global-nav > li > a");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      const parentLi = item.parentElement;
      if (parentLi.querySelector(".dropdown")) {
        e.preventDefault();
        parentLi.classList.toggle("active");
      }
    });
  });
});

  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });