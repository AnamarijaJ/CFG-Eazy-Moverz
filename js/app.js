// scroll to the top button

const scrollToTheTopBtn = document.getElementById("back-to-the-top-btn");

scrollToTheTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    bottom: 0,
    behavior: "smooth"
  });
});
