
function swapImage(filename) {
  const img = document.getElementById("galleryImage");
  img.src = `imgs/${filename}`;
 
  img.alt = `Gallery image: ${filename}`;
}


function changeImageWidth(px) {
  const img = document.getElementById("galleryImage");
  img.style.width = px + "px";
}


function showImage() {
  const img = document.getElementById("galleryImage");
  img.style.opacity = "1";
  img.style.transform = "scale(1)";
  img.style.display = "block";
}

function hideImage() {
  const img = document.getElementById("galleryImage");

  img.style.opacity = "0";
  img.style.transform = "scale(0.98)";
  setTimeout(() => { img.style.display = "none"; }, 180);
}


function changeTextExternal() {
  const p = document.getElementById("message");
  p.textContent = "Text updated from the EXTERNAL  file!";
}


function setParagraphColor(color) {
  const p = document.getElementById("message");
  if (!color) {
  
    p.style.color = "";
  } else {
    p.style.color = color;
  }
}
