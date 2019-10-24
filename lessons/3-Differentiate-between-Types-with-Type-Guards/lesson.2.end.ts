import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size,
  Position,
  Constraint,
  Layer
} from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

class TextLayerClass implements TextLayer {
  constructor(obj: TextLayer) {
    this.text = obj.text;
    this.color = obj.color;
    this.fontSize = obj.fontSize;
    this.maxWidth = obj.maxWidth;
    this.id = obj.id;
    this.rotation = obj.rotation;
    this.position = obj.position;
  }

  type: LayerType.Text = LayerType.Text;
  text: string;
  color: string;
  fontSize: string;
  maxWidth: number;
  id: string;
  rotation: number;
  position: Position;
}

class ImageLayerClass implements ImageLayer {
  constructor(obj: ImageLayer) {
    this.id = obj.id;
    this.rotation = obj.rotation;
    this.position = obj.position;
    this.src = obj.src;
    this.maxBounds = obj.maxBounds;
  }

  type: LayerType.Image = LayerType.Image;
  src: string;
  maxBounds: Constraint;
  id: string;
  rotation: number;
  position: Position;
}

const textLayer1 = new TextLayerClass({
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 208 },
  color: "#e8166d",
  id: "10",
  rotation: 0,
  text: "Advanced TypeScript",
  fontSize: "20px"
});

const textLayer2 = new TextLayerClass({
  type: LayerType.Text,
  maxWidth: 1000,
  position: { x: 128, y: 240 },
  color: "blue",
  id: "30",
  rotation: 0,
  text: "Is powerful",
  fontSize: "10px"
});

const imageLayer = new ImageLayerClass({
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width }
});

function setFontSize(layer: TextLayer, value: string | number) {
  if (typeof value === "number") {
    layer.fontSize = `${value}px`;
  } else {
    layer.fontSize = value;
  }
}

function setFontSizeOnSelection(layers: Layer[], value: string | number) {
  layers.forEach(layer => {
    if (layer instanceof TextLayerClass) {
      setFontSize(layer, value);
    }
  });
}

const project: Project = {
  layers: [imageLayer, textLayer1, textLayer2],
  size: projectSize
};

setFontSizeOnSelection(project.layers, "20px");

render(project);
