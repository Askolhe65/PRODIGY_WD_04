// Typed.js effect
var typed = new Typed(".typed-text", {
  strings: ["Web Developer", "App Developer", "Programmer", "Tech Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Dark mode toggle with localStorage
const darkToggle = document.getElementById("darkToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkToggle.textContent = "☀️";
}

darkToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  darkToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Contact form validation and feedback
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = contactForm.querySelector("input[type='text']").value.trim();
  const email = contactForm.querySelector("input[type='email']").value.trim();
  const message = contactForm.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields.");
    return;
  }
  alert("Thank you for your message, " + name + "!");
  contactForm.reset();
});

// Scroll to top button functionality
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Interactive project card
document.querySelectorAll(".project-card").forEach(card => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    card.classList.toggle("expanded");
  });
});
