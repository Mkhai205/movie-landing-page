let isPlayed = false;
const toggleVideo = () => {
    const trailer = document.querySelector(".trailer");
    const video = document.querySelector("video");

    if (isPlayed) {
        video.pause();
        isPlayed = false;
        video.currentTime = 0;
    } else {
        video.play();
        isPlayed = true;
    }
    trailer.classList.toggle("active");
};

const changeBg = (bg, title) => {
    const banner = document.querySelector(".banner");
    const contents = document.querySelectorAll(".content");
    banner.style.background = `url(./assets/movies/${bg})`;
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";

    contents.forEach((content) => {
        content.classList.remove("active");
        if (content.classList.contains(title)) {
            content.classList.add("active");
        }
    });
};
