import "./hello-world-button.scss";

class HelloWorldButton {
  buttonCssClass = "hello-world-button"; // some browser didn't support this type of css adding
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);

    const body = document.querySelector("body");
    body.appendChild(button);

    button.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Hello World";
      p.classList.add("hello-world-text");

      body.appendChild(p);
    };
  }
}

export default HelloWorldButton;
