//stores the image paths in an array
const images = [
  "images/black-dog.jpg", //index 0
  "images/gold-dog.jpg", //index 1
  "images/snow-dog.jpg", //index 2
  "images/white-dogs.jpg", //index 3
];

//function to load the images based on button clicked
function loadImages(index) {
  const imgTag = document.getElementById(`img${index + 1}`);
  imgTag.src = images[index];
  imgTag.alt = `Dog Image ${index + 1}`;
  imgTag.style.display = "block"; // to make sure the image is visible
}

//event listeners for the buttons
window.onload = function () {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn, index) => {
    btn.onclick = function () {
      loadImages(index);
    };
  });
};
