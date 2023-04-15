import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("hello world"));

const hwb = new HelloWorldButton();
hwb.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
