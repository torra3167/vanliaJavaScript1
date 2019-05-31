const body = document.querySelector("body");
const IMG_NUMBER = 6;

function handleImgLoad() {
    console.log("finish load")

}

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `image/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
    // image.addEventListener("loadend", handleImgLoad);
}

function generateRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
        return number;
}

function init() {
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}
init();