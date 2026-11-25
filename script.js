const body = document.body;
const ACCESS_PASSWORD = "26november";
const accessGate = document.querySelector(".access-gate");
const accessForm = document.querySelector(".access-form");
const accessInput = document.querySelector("#access-password");
const accessError = document.querySelector(".access-error");
accessInput.focus();
accessForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (accessInput.value.trim().toLowerCase() === ACCESS_PASSWORD) {
    accessError.classList.remove("visible");
    accessGate.classList.add("is-unlocking");
    window.setTimeout(() => {
      body.classList.remove("is-locked");
      accessGate.remove();
    }, 650);
  } else {
    accessError.classList.add("visible");
    accessInput.classList.add("invalid");
    accessInput.value = "";
    accessInput.focus();
    window.setTimeout(() => accessInput.classList.remove("invalid"), 450);
  }
});

const countdownTarget = document.querySelector(".countdown-year");
const countdownUnits = {
  days: document.querySelector('[data-countdown="days"]'),
  hours: document.querySelector('[data-countdown="hours"]'),
  minutes: document.querySelector('[data-countdown="minutes"]'),
  seconds: document.querySelector('[data-countdown="seconds"]')
};
function getNextAnniversary() {
  const now = new Date();
  const target = new Date(now.getFullYear(), 10, 26, 0, 0, 0);
  if (target <= now) target.setFullYear(target.getFullYear() + 1);
  return target;
}
let anniversaryTarget = getNextAnniversary();
function updateCountdown() {
  const remaining = Math.max(0, anniversaryTarget.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  countdownUnits.days.textContent = String(days).padStart(2, "0");
  countdownUnits.hours.textContent = String(hours).padStart(2, "0");
  countdownUnits.minutes.textContent = String(minutes).padStart(2, "0");
  countdownUnits.seconds.textContent = String(seconds).padStart(2, "0");
  countdownTarget.textContent = `26 november ${anniversaryTarget.getFullYear()}`;
  if (remaining === 0) anniversaryTarget = getNextAnniversary();
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll("[data-photo]").forEach((photo) => {
  const image = new Image();
  image.onload = () => photo.classList.add("has-image");
  image.src = photo.dataset.photo;
});

const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => mainNav.classList.toggle("open"));
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("anniversary-theme");
if (savedTheme === "dark") body.classList.add("dark");
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("anniversary-theme", body.classList.contains("dark") ? "dark" : "light");
  themeToggle.setAttribute("aria-label", body.classList.contains("dark") ? "Switch to light mode" : "Switch to dark mode");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const reasons = [
  "You make even the most ordinary moments feel like something worth remembering.",
  "You know how to make me laugh, especially when I pretend I do not need it.",
  "With you, I never have to be a different version of myself.",
  "You turn every place into home just by being there.",
  "You believe in my dreams — sometimes before I do.",
  "You make growing older feel like the best adventure.",
  "After seven years, you are still my favorite person in every room."
];
let reasonIndex = 0;
const reasonNumber = document.querySelector(".reason-number");
const reasonQuote = document.querySelector(".reason-quote");
const reasonCount = document.querySelector(".reason-footer b");
function showReason(index) {
  reasonIndex = (index + reasons.length) % reasons.length;
  reasonNumber.textContent = String(reasonIndex + 1).padStart(2, "0");
  reasonCount.textContent = String(reasonIndex + 1).padStart(2, "0");
  reasonQuote.animate([{ opacity: 0, transform: "translateY(10px)" }, { opacity: 1, transform: "translateY(0)" }], { duration: 350, easing: "ease-out" });
  reasonQuote.textContent = `“${reasons[reasonIndex]}”`;
}
document.querySelector(".reason-next").addEventListener("click", () => showReason(reasonIndex + 1));
document.querySelector(".reason-prev").addEventListener("click", () => showReason(reasonIndex - 1));
document.querySelector(".reason-button").addEventListener("click", () => showReason(reasonIndex + 1));

const toast = document.querySelector(".toast");
let toastTimer;
document.querySelectorAll(".surprise-button").forEach((button) => button.addEventListener("click", () => {
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 3500);
}));

const modal = document.querySelector(".memory-modal");
const modalMessage = document.querySelector(".modal-message");
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); }
document.querySelectorAll(".memory-card").forEach((card) => card.addEventListener("click", () => {
  modalMessage.textContent = card.dataset.memory;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}));
document.querySelector(".modal-close").addEventListener("click", closeModal);
document.querySelector(".modal-backdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", (event) => { if (event.key === "Escape") closeModal(); });

document.querySelectorAll(".main-nav a, .brand").forEach((link) => link.addEventListener("click", () => {
  document.querySelector(".main-nav").classList.remove("open");
}));
