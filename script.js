// Image data and captions
const images = [
  { src: "image1.jpg", caption: "1. Person 1 - Wahaj loves you!" },
  { src: "image2.jpg", caption: "2. Person 2 - Trusted and loved!" },
  { src: "image3.jpg", caption: "3. Person 3 - You're awesome!" },
  { src: "image4.jpg", caption: "4. Person 4 - A special one!" },
  { src: "image5.jpg", caption: "5. Person 5 - Forever in trust!" },
  { src: "image6.jpg", caption: "6. Person 6 - You're in Wahaj's heart!" },
  { src: "image7.jpg", caption: "7. Person 7 - Loved deeply!" },
  { src: "image8.jpg", caption: "8. Person 8 - Wahaj appreciates you!" },
  { src: "image9.jpg", caption: "9. Person 9 - You're a rockstar!" },
  { src: "image10.jpg", caption: "10. Person 10 - Always trusted!" }
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
