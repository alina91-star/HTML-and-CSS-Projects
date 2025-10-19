/* =============================================================
   One Page Website Lightbox Script
   Shows large version of image when thumbnail is clicked.
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  // Open Lightbox when a thumbnail is clicked
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      const largeSrc = thumb.src.replace("-small", "-large");
      lightboxImg.src = largeSrc;
      captionText.textContent = thumb.alt;
      lightbox.style.display = "block";
    });
  });

  // Close when clicking the X
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close when clicking outside the image
  window.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
