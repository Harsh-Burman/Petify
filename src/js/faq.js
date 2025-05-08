// blog.js

const toggleFAQ = (item) => {
  const content = item.querySelector("p");
  const icon = item.querySelector("h3 span");
  const isVisible = content.style.display === "block";
  content.style.display = isVisible ? "none" : "block";
  icon.textContent = isVisible ? "+" : "-";
};

const handleScroll = () => {
  const header =
    document.getElementById("main-header") || document.querySelector("header");
  if (header) {
    // header.classList.toggle("shrink", window.scrollY > 50);
    header.classList.toggle("sticky", window.scrollY > 0);
  }
};

const initNavbar = () => {
  const menu = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  // Optional: toggle menu on click (hamburger menu)
  if (menu && navbar) {
    menu.addEventListener("click", () => {
      navbar.classList.toggle("active");
      menu.classList.toggle("bx-x");
    });
  }
};

export { toggleFAQ, handleScroll, initNavbar };
