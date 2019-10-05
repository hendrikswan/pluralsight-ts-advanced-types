import { Project, TextLayer, ImageLayer, LayerType } from "../common/types";
import { render } from "../common/render";

const textLayer: TextLayer = {
  type: LayerType.Text,
  size: { width: 100, height: 100 },
  center: { x: 10, y: 10 },
  color: "#000",
  id: "10",
  rotation: 0,
  text: "Hello world, I am a text layer"
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,
  size: { width: 100, height: 100 },
  center: { x: 10, y: 10 },
  id: "10",
  rotation: 0,
  src: "/ps-dark.png"
};

const project: Project = {
  layers: [imageLayer, textLayer],
  size: { width: 100, height: 100 }
};

render(project);
