console.log("hloo");

counter = 0;
let slider = document.querySelectorAll("img");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

slider.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

arrowLeft.addEventListener("click", function () {
  if(counter === 0){
    counter = slider.length -1;
    slideImage();
  }else{
    counter--;
    slideImage();
  }
});

arrowRight.addEventListener("click", function () {
  if(counter === slider.length - 1){
    counter = 0;
    slideImage();
  }else{
    counter++;
    slideImage();
  }
});

const slideImage = () => {
  slider.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
slideImage();




