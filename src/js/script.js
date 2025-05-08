export default function setupUI() {
  const header = document.querySelector("header");
  const menu = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  if (menu && navbar) {
    menu.onclick = () => {
      menu.classList.toggle("bx-x");
      navbar.classList.toggle("open");
    };

    window.onscroll = () => {
      menu.classList.remove("bx-x");
      navbar.classList.remove("open");
    };
  }
  const form = document.getElementById("reviewForm");
  const container = document.getElementById("reviewsContainer");
  const toast = document.getElementById("toast");

  // Load existing reviews from localStorage on page load
  container.innerHTML = "";
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach(addReviewToDOM);

  // Form submission handler
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value.trim();

    if (!name || !rating || !review) return;

    const initials = name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("")
      .substring(0, 2);
    const stars = "⭐".repeat(parseInt(rating));

    const reviewData = { initials, name, review, stars };

    // Add to DOM
    addReviewToDOM(reviewData, true);

    // Save to localStorage
    let storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    storedReviews.unshift(reviewData); // Add new review to beginning
    localStorage.setItem("reviews", JSON.stringify(storedReviews));

    form.reset();

    // Show toast
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  });

  // Helper to add review to DOM
  function addReviewToDOM({ initials, name, review, stars }, prepend = false) {
    const newReview = document.createElement("div");
    newReview.classList.add("review-box");
    newReview.innerHTML = `
      <div class="initial-circle">${initials}</div>
      <h3>${name}</h3>
      <p>"${review}"</p>
      <div class="stars">${stars}</div>
    `;
    if (prepend) {
      container.prepend(newReview);
    } else {
      container.appendChild(newReview);
    }
  }
}

// export function sendQuery() {
//   let queryBox = document.getElementById("queryBox");
//   let outputDiv = document.getElementById("outputDiv");
//   let userInput = queryBox.value.trim();

//   if (!userInput) {
//     alert("Please enter symptoms and breed details.");
//     return;
//   }

//   outputDiv.innerHTML = "<span class='loading'>Fetching prediction...</span>";
//   let queryData = { query: userInput };
//   let jsonData = JSON.stringify(queryData);

//   console.log(jsonData);

//   fetch("http://localhost:5000/predict", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: jsonData,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.prediction) {
//         outputDiv.innerText = "Prediction: " + data.prediction;
//       } else {
//         outputDiv.innerText = "No valid prediction received.";
//       }
//       queryBox.value = "";
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       outputDiv.innerText = "Error fetching prediction.";
//     });
// }

export const sendQuery = async (navigate) => {
  const queryText = document.getElementById("queryBox").value;

  if (!queryText.trim()) {
    alert("Please enter a description.");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: queryText }),
    });

    const data = await response.json();
    const prediction = data.prediction || "Something went wrong.";

    navigate("/output", { state: { prediction } });
  } catch (error) {
    console.error("Error:", error);
    navigate("/output", {
      state: { prediction: "Server error or invalid response." },
    });
  }
};

// setupUI();
