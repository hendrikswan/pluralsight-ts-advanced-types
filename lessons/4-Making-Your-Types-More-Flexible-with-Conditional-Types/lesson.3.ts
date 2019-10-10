import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size,
  TextMeta,
  ImageMeta
} from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

const textLayer: TextLayer = {
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px"
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width }
};

function setMeta<T extends TextLayer | ImageLayer>(
  layer: T,
  meta: T extends TextLayer ? TextMeta : ImageMeta
) {
  layer.meta = meta;
}

setMeta(imageLayer, {
  format: "png",
  origin: "Download"
});

setMeta(textLayer, {
  fontFoundry: "OS stock",
  licenseExpiration: new Date(2020, 1, 1)
});

const project: Project = {
  layers: [imageLayer, textLayer],
  size: projectSize
};

render(project);
