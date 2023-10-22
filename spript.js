// NAVIGATION BAR
let nav = document.getElementById("nav");
let ul = document.createElement("ul");
let listItems = ["Home", "About", "Works", "Contact"];

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
var allAIVideos = {
  "assets/videos/AI/UncannyLandscapesTrim.mp4":
    "https://player.vimeo.com/video/859910013?h=61d063f865",
  "assets/videos/AI/ThrivingPondTrim.mp4": "/",
  "assets/videos/AI/FungalTexturesTrim.mp4": "/",
  "assets/videos/AI/SilentPortrayalsTrim.mp4": "/",
};

var all3DVideos = {
  "assets/videos/3D/3DCONTACT.mp4":
    "https://player.vimeo.com/video/770011545?h=7249150444",
  "assets/videos/3D/3DNEWDAY.mp4":
    "https://player.vimeo.com/video/770011738?h=ef80a1b7d0",
  "assets/videos/3D/3DWANDERER.mp4":
    "https://player.vimeo.com/video/770011127?h=3278f5c2f8",
};

var allAutoraisVideos = {
  "assets/videos/AUTORAIS/SobaLenteTrim.mp4":
    "https://player.vimeo.com/video/731179431?h=9b87222ada",
};

var allComercialVideos = {
  "assets/videos/COMERCIAL/AmazoniaemEXAMEIGTVTrim.mp4":
    "https://player.vimeo.com/video/656586224?h=3af300f78c",
  "assets/videos/COMERCIAL/EnodiaAtelierTrim.mp4":
    "https://player.vimeo.com/video/727426164?h=7f2c341a7c",
  "assets/videos/COMERCIAL/JulioOkuboCampanhaMãesTrim.mp4":
    "https://player.vimeo.com/video/790509577?h=5ff4cd06ea",
  "assets/videos/COMERCIAL/NaturaxÁrvoreShowReelTrim.mp4": "/",
};

var allVideos = [
  allAIVideos,
  all3DVideos,
  allAutoraisVideos,
  allComercialVideos,
];

function createVideo(src, vimeoUrl) {
  var video = document.createElement("video");
  video.src = src;
  video.controls = false;
  video.muted = true;
  video.style.opacity = 1;
  video.addEventListener("loadedmetadata", function () {
    if (this.videoWidth > this.videoHeight) {
      this.parentElement.className = "video landscape";
    } else {
      this.parentElement.className = "video portrait";
    }
  });

  video.addEventListener("mouseover", function () {
    video.play();
  });

  video.addEventListener("mouseout", function () {
    video.style.transition = "opacity 1s";
    video.style.opacity = 0;
    setTimeout(function () {
      video.pause();
      video.currentTime = 0;
      video.style.opacity = 1;
    }, 1000);
  });

  // Open a modal with the Vimeo embed
  video.addEventListener("click", function () {
    var modal = document.createElement("div");
    modal.className = "modal";

    var embedContainer = document.createElement("div");
    embedContainer.className = "embed-container";

    if (vimeoUrl === "/") {
      var message = document.createElement("p");
      message.textContent = "Video currently not available"; // Display a message
      embedContainer.appendChild(message);
    } else {
      var embed = document.createElement("iframe");
      embed.src = vimeoUrl;
      embed.frameborder = "0";
      embed.allowfullscreen = "";
      embedContainer.appendChild(embed);
    }

    modal.appendChild(embedContainer);

    document.body.appendChild(modal);

    embedContainer.onclick = function (event) {
      if (event.target == embedContainer) {
        document.body.removeChild(modal);
      }
    };
  });

  var div = document.createElement("div");
  div.appendChild(video);

  return div;
}

var container = document.getElementById("videoGallery");
for (var category in allVideos) {
  for (var src in allVideos[category]) {
    var videoElement = createVideo(src, allVideos[category][src]);
    container.appendChild(videoElement);
  }
}
