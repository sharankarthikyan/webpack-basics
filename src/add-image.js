import Nature from "./nature.jpeg";
import altText from "./alt-text.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = "300";
  img.src = Nature;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
