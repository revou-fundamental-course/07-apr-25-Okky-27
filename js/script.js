// Personalized Welcome
const userName = prompt("What's your name?");
if (userName) {
  document.getElementById("userName").textContent = userName;
}

// Slide Show
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container img");

function showSlides() {
  slides.forEach(slide => slide.classList.remove("active"));
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 3000);
}

showSlides();

// Form Validation + Output
const form = document.getElementById("messageForm");
const output = document.getElementById("formOutput");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      output.innerHTML = `
        <h3>Thank you for your message!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `;
      form.reset();
    } else {
      output.innerHTML = "<p>Please fill all fields correctly.</p>";
    }
  });
}
