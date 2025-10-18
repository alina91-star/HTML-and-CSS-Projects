/* =========================================================
   One Page Website - Lightbox JavaScript
   ========================================================= */

/**
 * This JavaScript adds a lightbox effect to the gallery images.
 * When a thumbnail is clicked, the image opens in a larger view
 * with a dark background overlay.
 */

document.addEventListener("DOMContentLoaded", function () {
  // Get all lightbox elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("caption");
  const closeBtn = document.getElementsByClassName("close")[0];

  // Get all gallery images
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Add event listener to each image
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      lightbox.style.display = "block"; // Show the lightbox
      lightboxImg.src = thumb.src; // Set image source
      caption.innerHTML = thumb.alt; // Set caption text
    });
  });

  // Close lightbox when the "X" button is clicked
  closeBtn.addEventListener("click", function () {
    lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside of the image
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

  // Optional: Close with ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      lightbox.style.display = "none";
    }
  });
});
