// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// const galleryImgs = document.querySelectorAll('.gallery-img');

// let currentlySelected = 0;

// prevButton.addEventListener('click', () => {
//       galleryImgs[currentlySelected].classList.remove('active');
//       currentlySelected--;
//       galleryImgs[currentlySelected].classList.add('active');
//       nextButton.disabled = false;

//       if (currentlySelected === 0) {
//             prevButton.disabled = true;
//       }
// })

// nextButton.addEventListener('click', () => {
//       galleryImgs[currentlySelected].classList.remove('active');
//       currentlySelected++;
//       galleryImgs[currentlySelected].classList.add('active');
//       prevButton.disabled = false;

//       if (currentlySelected + 1 === galleryImgs.length) {
//             nextButton.disabled = true;
//       }
// })

new Swiper(".swiper-container", {
      speed: 700,
      spaceBetween: 100,
      navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
      }
});