// NAVIGATION BAR
let nav = document.getElementById("nav");
let ul = document.createElement("ul");
let listItems = ["Home", "About", "Contact"];

for (let i = 0; i < listItems.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  a.setAttribute("href", "/");
  a.textContent = listItems[i];
  li.appendChild(a);
  ul.appendChild(li);
}
nav.appendChild(ul);

// VIDEO GALLERY
var allAIVideos = [
  "assets/videos/AI/UncannyLandscapesTrim.mp4",
  "assets/videos/AI/ThrivingPondTrim.mp4",
  "assets/videos/AI/FungalTexturesTrim.mp4",
  "assets/videos/AI/SilentPortrayalsTrim.mp4",
];
var all3DVideos = [
  "assets/videos/3D/3DCONTACT.mp4",
  "assets/videos/3D/3DNEWDAY.mp4",
  "assets/videos/3D/3DWANDERER.mp4",
];
var allAutoraisVideos = ["assets/videos/AUTORAIS/SobaLenteTrim.mp4"];
var allComercialVideos = [
  "assets/videos/COMERCIAL/AmazoniaemEXAMEIGTVTrim.mp4",
  "assets/videos/COMERCIAL/EnodiaAtelierTrim.mp4",
  "assets/videos/COMERCIAL/JulioOkuboCampanhaMãesTrim.mp4",
  "assets/videos/COMERCIAL/NaturaxÁrvoreShowReelTrim.mp4",
];

var allVideos = [
  allAIVideos,
  all3DVideos,
  allAutoraisVideos,
  allComercialVideos,
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

var container = document.getElementById("videoGallery");
for (var i = 0; i < allVideos.length; i++) {
  for (var j = 0; j < allVideos[i].length; j++) {
    var videoElement = createVideo(allVideos[i][j]);
    container.appendChild(videoElement);
  }
}
