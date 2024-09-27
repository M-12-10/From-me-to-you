// Image data and captions
const images = [
  { src: "image1.jpg", caption: "10. Janaab e Aala" },
  { src: "image2.jpg", caption: "9. Azeeza" },
  { src: "image3.jpg", caption: "8. Cutu" },
  { src: "image4.jpg", caption: "7. Pyaru" },
  { src: "image5.jpg", caption: "6. Fvrt Chngri" },
  { src: "image6.jpg", caption: "5. Rapunzel" },
  { src: "image7.jpg", caption: "4. Love of my Life" },
  { src: "image8.jpg", caption: "3. Future Wife" },
  { src: "image9.jpg", caption: "2. Meri Jaan" },
  { src: "image10.jpg", caption: "1. Maryam Rajput" }
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
