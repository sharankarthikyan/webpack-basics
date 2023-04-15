import Heading from "./components/heading/heading";
import NatureImage from "./components/nature-image/nature-image";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("nature"));

const natureImg = new NatureImage();
natureImg.render();
