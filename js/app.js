// smooth scroll to the top button

const scrollToTheTopBtn = document.getElementById("back-to-the-top-btn");

scrollToTheTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    bottom: 0,
    behavior: "smooth"
  });
});



// typing effect

const texts = ["ready to move", " need cleaning", "need landscaping" ];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if (count === texts.length){
    count = 0;
  }

  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing").textContent=letter;
  if(letter.length === currentText.length){
    count++;
    index=0;
  }
  setTimeout(type, 150);
} ());
