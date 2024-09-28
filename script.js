// Image data and captions
const images = [
  { src: "1b9883da-2dd2-4b14-96c2-6f25af0d0f7b.jfif", caption: "10. Janaab e Aala" },
  { src: "ffdd1779-bbb4-40da-ac4e-348e23234e87.jfif", caption: "9. Azeeza" },
  { src: "ee65ee46-3105-4254-8065-8d9ced90b88d.jfif", caption: "8. Cutu" },
  { src: "a2b87e74-fbc2-42fb-9d62-057bc68f1868.jfif", caption: "7. Pyaru" },
  { src: "8af4e213-9bba-4f5a-b2f8-eb516473b216.jfif", caption: "6. Fvrt Chngri" },
  { src: "5ff97876-e0c1-45f9-8b62-f4c15be49fb4.jfif", caption: "5. Rapunzel" },
  { src: "957e0621-c828-47a6-b9a3-375918ab7c57.jfif", caption: "4. Love of my Life" },
  { src: "aaad761a-2c70-4a9a-b6bf-570a38869aef.jfif", caption: "3. Future Wife" },
  { src: "5c222260-3a36-4dc4-ab01-effbde368f6d.jfif", caption: "2. Meri Jaan" },
  { src: "35012907-2f83-46ca-9e36-9d0a25e830a4.jfif", caption: "1. Maryam Rajput" }
];

let currentIndex = 0;

// Elements
const carousel = document.getElementById('carousel');
const carouselImage = document.getElementById('carouselImage');
const caption = document.getElementById('caption');
const startBtn = document.getElementById('startBtn');
const outro = document.getElementById('outro');

// Initialize carousel by loading the first image
function startCarousel() {
  startBtn.style.display = 'none';
  carousel.style.display = 'block';
  loadImage(currentIndex);
}

// Load image and caption based on current index
function loadImage(index) {
  carouselImage.src = images[index].src;
  caption.innerText = images[index].caption;
}

// Show next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    endCarousel();
  } else {
    loadImage(currentIndex);
  }
}

// Show previous image
function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    loadImage(currentIndex);
  }
}

// End the carousel and show outro
function endCarousel() {
  carousel.style.display = 'none';
  outro.style.display = 'block';
}

function restart() {
  outro.style.display = 'none';
  restartBtn.style.display = 'none;
  currentIndex = 0
  startCarousel()
}
