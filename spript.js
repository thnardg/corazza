var video = document.querySelector("video");

video.addEventListener("mouseenter", function () {
  video.play();
});

video.addEventListener("mouseleave", function () {
  video.currentTime = 0;
  video.pause();
});

var videos = [
  "assets/videos/AI/UncannyLandscapesTrim.mp4",
  "assets/videos/AI/ThrivingPondTrim.mp4",
  "assets/videos/AI/FungalTexturesTrim.mp4",
  "assets/videos/AI/SilentPortrayalsTrim.mp4",
  "assets/videos/3D/CONTACT.mp4",
  "assets/videos/3D/NEWDAY.mp4",
  "assets/videos/3D/WANDERER.mp4",
  "assets/videos/AUTORAIS/SobaLenteTrim.mp4",
];

// Function to create a new video element
function createVideo(src) {
  var video = document.createElement("video");
  video.src = src;
  video.controls = true;

  var div = document.createElement("div");
  div.className = "video";
  div.appendChild(video);

  return div;
}

// Get the container element
var container = document.getElementById("videoGallery");

// Add each video to the container
for (var i = 0; i < videos.length; i++) {
  var videoElement = createVideo(videos[i]);
  container.appendChild(videoElement);
}
