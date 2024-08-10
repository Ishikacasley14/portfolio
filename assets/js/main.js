/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Websites building", "Exploring in Machine Learning", "UI"],
  loop: true,
  typeSpeed: 50, // Faster typing speed
  backSpeed: 50, // Faster backspacing speed
  backDelay: 1200,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*-- Include this inside your <body> tag or before the closing </body> tag --*/
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const currentTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);

  updateToggleButtonIcon(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    if (!document.startViewTransition) {
      switchTheme();
    } else {
      document.startViewTransition(switchTheme);
    }
  });

  function switchTheme() {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    updateToggleButtonIcon(theme);
  }

  function updateToggleButtonIcon(theme) {
    if (theme === "dark") {
      themeToggleBtn.innerHTML = '<i class="uil uil-sun"></i>';
    } else {
      themeToggleBtn.innerHTML = '<i class="uil uil-moon"></i>';
    }
  }
});

/*------NAVMENU------*/
function myMenuFunction() {
  const menu = document.getElementById("myNavMenu");
  menu.classList.toggle("active");
}
/*-------DOWNLOAD CV-----*/

function downloadCV() {
  window.location.href = "assets/ishikaa.pdf"; // Redirect to the PDF file
}

/*-------SCROLL DOWN BUTTON-----*/
let scrolledToBottom = false;

function toggleScroll() {
  if (scrolledToBottom) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("scrollText").textContent = "Scroll Down";
  } else {
    // Scroll to bottom
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    document.getElementById("scrollText").textContent = "Scroll Up";
  }
  scrolledToBottom = !scrolledToBottom;
}
