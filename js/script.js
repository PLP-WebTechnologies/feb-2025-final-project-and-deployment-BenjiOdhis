document.addEventListener('DOMContentLoaded', () => {
  // Form validation
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }

      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      alert('Thanks for your message, ' + name + '!');
      form.reset();
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Image slider
const images = [
  "https://images.pexels.com/photos/574285/pexels-photo-574285.jpeg",
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
  "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
];
  let index = 0;
  const sliderImg = document.getElementById("slider-image");

  if (sliderImg) {
    setInterval(() => {
      index = (index + 1) % images.length;
      sliderImg.src = images[index];
    }, 3000);
  }
});
