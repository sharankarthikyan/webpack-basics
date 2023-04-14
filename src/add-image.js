import Nature from "./nature.jpeg";

function addImage() {
  const img = document.createElement("img");
  img.alt = "nature";
  img.width = "300px";
  img.src = Nature;

  const body = document.querySelector("body");
  body.appendChild(img);
}

export default addImage;
