document.getElementById("currentYear").textContent = new Date().getFullYear();

// SOCIAL MEDIA ICONS
function generateSocialLinks(elementId) {
  let container = document.getElementById(elementId);
  let div = document.createElement("div");
  div.className = "home__social";

  let socialLinks = [
    {
      href: "https://www.linkedin.com/in/victorcorazza/",
      icon: "ri-linkedin-fill",
    },
    { href: "https://vimeo.com/victorcorazza", icon: "ri-vimeo-fill" },
    {
      href: "https://www.instagram.com/victorcorazza/",
      icon: "ri-instagram-fill",
    },
    { href: "mailto:ve.corazza@gmail.com", icon: "ri-mail-fill" },
  ];

  for (let i = 0; i < socialLinks.length; i++) {
    let a = document.createElement("a");
    a.href = socialLinks[i].href;
    a.target = "_blank";
    a.className = "home__social-link";

    let iElement = document.createElement("i");
    iElement.className = socialLinks[i].icon;

    a.appendChild(iElement);
    div.appendChild(a);
  }

  container.appendChild(div);
}

// NAVIGATION BAR
function generateNavBar(elementId) {
  let nav = document.getElementById(elementId);
  let ul = document.createElement("ul");
  let listItems = ["Home", "About", "Works", "Contact"];

  for (let i = 0; i < listItems.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = listItems[i];

    a.addEventListener("click", function (e) {
      e.preventDefault();
      let section = document.getElementById(listItems[i].toLowerCase());
      section.scrollIntoView({ behavior: "smooth" });
    });

    li.appendChild(a);
    ul.appendChild(li);
  }
  nav.appendChild(ul);
}

generateNavBar("nav-footer");
generateSocialLinks("social");
generateSocialLinks("social-nav");
generateSocialLinks("social-footer");

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
});

sr.reveal(`#home, #nav-bar, #about, #works, #contact`, {
  origin: "top",
  interval: 100,
});

// VIDEO GALLERY
// *** Endereço dos vídeos e link pro embed ***
var allVideos = {
  "assets/videos/AI/UncannyLandscapesTrim.mp4":
    "https://player.vimeo.com/video/859910013?h=61d063f865",
  "assets/videos/AI/GreenLab.mp4":
    "https://player.vimeo.com/video/876914728?h=465b55533c",
  "assets/videos/AI/ThrivingPondTrim.mp4":
    "https://player.vimeo.com/video/876914555?h=cbef4bb827",
  "assets/videos/AI/FungalTexturesTrim.mp4":
    "https://www.youtube.com/embed/u6oMLGfMSoY",
  "assets/videos/AI/SilentPortrayalsTrim.mp4":
    "https://www.youtube.com/embed/YQnj-8tnS_E?si=oX0UGwtu1ni3qneG",
  "assets/videos/3D/3DCONTACT.mp4":
    "https://player.vimeo.com/video/770011545?h=7249150444",
  "assets/videos/3D/3DNEWDAY.mp4":
    "https://player.vimeo.com/video/770011738?h=ef80a1b7d0",
  "assets/videos/3D/3DWANDERER.mp4":
    "https://player.vimeo.com/video/770011127?h=3278f5c2f8",
  "assets/videos/AUTORAIS/SobaLenteTrim.mp4#t=3.5":
    "https://player.vimeo.com/video/731179431?h=9b87222ada",
  "assets/videos/COMERCIAL/AmazoniaemEXAMEIGTVTrim.mp4#t=2":
    "https://player.vimeo.com/video/656586224?h=3af300f78c",
  "assets/videos/COMERCIAL/EnodiaAtelierTrim.mp4#t=4":
    "https://player.vimeo.com/video/727426164?h=7f2c341a7c",
  //*** #t=0 ao final pra determinar o frame do vídeo que vai ser a thumb ***
  "assets/videos/COMERCIAL/JulioOkuboCampanhaMãesTrim.mp4#t=2":
    "https://player.vimeo.com/video/790509577?h=5ff4cd06ea",
  "assets/videos/COMERCIAL/NaturaxÁrvoreShowReelTrim.mp4#t=4":
    "https://www.youtube.com/embed/Iv33denEOys?si=cBROiExkcF5Bzd7x",
};

function createVideo(src, vimeoUrl) {
  var video = document.createElement("video");
  video.src = src;
  video.controls = false;
  video.muted = true;
  video.loop = true;
  video.style.opacity = 1;

  var initialTime = src.includes("#t=") ? parseFloat(src.split("#t=")[1]) : 0;

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
      video.currentTime = initialTime;
      video.style.opacity = 1;
    }, 700);
  });

  // Open a modal with the Vimeo embed
  video.addEventListener("click", function () {
    var modal = document.createElement("div");
    modal.className = "modal";

    var embedContainer = document.createElement("div");
    embedContainer.className = "embed-container";

    // Create a close button
    var closeButton = document.createElement("button");
    closeButton.className = "close-button";
    closeButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

    closeButton.addEventListener("click", function () {
      document.body.removeChild(modal);
    });

    if (vimeoUrl === "/") {
      var message = document.createElement("p");
      message.textContent = "Video currently not available"; // Display a message for broken link
      embedContainer.appendChild(message);
    } else {
      var embed = document.createElement("iframe");
      embed.src = vimeoUrl;
      embed.frameborder = "0";
      embed.allowfullscreen = "";
      embedContainer.appendChild(embed);
    }

    // Append the close button to the modal
    modal.appendChild(closeButton);

    modal.appendChild(embedContainer);
    document.body.appendChild(modal);

    // Close the modal when clicking outside the iframe
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
for (var src in allVideos) {
  var videoElement = createVideo(src, allVideos[src]);
  container.appendChild(videoElement);
}

// PHOTO GALLERY
// *** Endereço das fotos e link pro embed ***
var allPhotos = {
  "assets/images/mobile/8.png":
    "https://player.vimeo.com/video/859910013?h=61d063f865",
  "assets/images/mobile/5.png":
    "https://player.vimeo.com/video/876914728?h=465b55533c",
  "assets/images/mobile/6.png":
    "https://player.vimeo.com/video/876914555?h=cbef4bb827",
  "assets/images/mobile/4.png": "https://www.youtube.com/embed/u6oMLGfMSoY",
  "assets/images/mobile/7.png":
    "https://www.youtube.com/embed/YQnj-8tnS_E?si=oX0UGwtu1ni3qneG",
  "assets/images/mobile/1.png":
    "https://player.vimeo.com/video/770011545?h=7249150444",
  "assets/images/mobile/2.png":
    "https://player.vimeo.com/video/770011738?h=ef80a1b7d0",
  "assets/images/mobile/3.png":
    "https://player.vimeo.com/video/770011127?h=3278f5c2f8",
  "assets/images/mobile/9.png":
    "https://player.vimeo.com/video/731179431?h=9b87222ada",
  "assets/images/mobile/10.png":
    "https://player.vimeo.com/video/656586224?h=3af300f78c",
  "assets/images/mobile/11.png":
    "https://player.vimeo.com/video/727426164?h=7f2c341a7c",
  "assets/images/mobile/12.png":
    "https://player.vimeo.com/video/790509577?h=5ff4cd06ea",
  "assets/images/mobile/13.png":
    "https://www.youtube.com/embed/Iv33denEOys?si=cBROiExkcF5Bzd7x",
};

function createImage(src, vimeoUrl) {
  var img = document.createElement("img");
  img.src = src;
  img.style.opacity = 1;

  // Open a modal with the Vimeo embed
  img.addEventListener("click", function () {
    var modal = document.createElement("div");
    modal.className = "modal";

    var embedContainer = document.createElement("div");
    embedContainer.className = "embed-container";

    var closeButton = document.createElement("button");
    closeButton.className = "close-button";

    closeButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';

    closeButton.addEventListener("click", function () {
      document.body.removeChild(modal);
    });

    if (vimeoUrl === "/") {
      var message = document.createElement("p");
      message.textContent = "Video currently not available"; // Display a message for broken link
      embedContainer.appendChild(message);
    } else {
      var embed = document.createElement("iframe");
      embed.src = vimeoUrl;
      embed.frameborder = "0";
      embed.allowfullscreen = "";
      embedContainer.appendChild(embed);
    }

    modal.appendChild(closeButton);
    modal.appendChild(embedContainer);
    document.body.appendChild(modal);

    // Close the modal when clicking outside the iframe
    embedContainer.onclick = function (event) {
      if (event.target == embedContainer) {
        document.body.removeChild(modal);
      }
    };
  });

  var div = document.createElement("div");
  div.appendChild(img);

  return div;
}

var container = document.getElementById("imageGallery");
for (var src in allPhotos) {
  var imageElement = createImage(src, allPhotos[src]);
  container.appendChild(imageElement);
}
