document.querySelector("video1").addEventListener("mouseover", function () {
  this.play();
});

document.querySelector("video1").addEventListener("mouseout", function () {
  this.pause();
});
