import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size
} from "../common/types";
import { render } from "../common/render";

const projectSize: Size = {
  width: 1024,
  height: 768
};

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 100, y: 100 },
  color: "#000",
  id: "10",
  rotation: 0,
  text: "Hello world, I am a text layer",
  fontSize: 30
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 10, y: 10 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width * 0.7 }
};

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize
};

render(project);
