const videosList = [
  document.getElementById("projectVideo1"),
  document.getElementById("projectVideo2"),
  document.getElementById("projectVideo3"),
];

const hoverSign = document.querySelector(".hover-sign");

videosList.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", () => {
    video.pause();
    hoverSign.classList.remove("active");
  });
});
