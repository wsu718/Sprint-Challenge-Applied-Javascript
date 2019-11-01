/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function createCarousel() {

  const counter = 0;
  const images = [
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turnable.jpeg"
  ]

  const newCarousel = document.createElement('div');
    const newLeft = document.createElement('div');
    const newImg = document.createElement('img');
    const newRight = document.createAttribute('div');

  newLeft.textContent = '<';
  newImg.src = images[counter];
  newRight.textContent = '>';

  // newCarousel.classList.add('carousel');
  // newLeft.classList.add('left_button');
  // newRight.classList.add('right_button');


  newCarousel.appendChild(newLeft);
  newCarousel.appendChild(newImg);
  newCarousel.appendChild(newRight);

  console.log(newCarousel);
  return newCarousel;
}

console.log(createCarousel())

const carouselAnchor = document.querySelector(".carousel-container");
carouselAnchor.appendChild(createCarousel())