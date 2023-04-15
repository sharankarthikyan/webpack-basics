import Nature from "./nature.jpeg";
import "./nature-image.scss";

class NatureImage {
  render() {
    const img = document.createElement("img");
    img.alt = "Nature";
    img.src = Nature;
    img.classList.add("nature-image");

    const body = document.querySelector("body");
    body.appendChild(img);
  }
}

export default NatureImage;
