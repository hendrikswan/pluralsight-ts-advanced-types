import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

type FactoryLayer<T> = T extends LayerType.Text ? TextLayer : ImageLayer;

function createLayer<T extends LayerType>(type: T): FactoryLayer<T> {
  if (type === LayerType.Text) {
    return {
      color: "#fff",
      fontSize: "10px",
      id: new Date().toISOString(),
      maxWidth: 10000,
      position: { x: 10, y: 10 },
      rotation: 0,
      text: "This is the default text",
      type: LayerType.Text
    } as FactoryLayer<T>;
  }

  return {
    id: new Date().toISOString(),
    maxBounds: { width: 400 },
    position: { x: 0, y: 0 },
    rotation: 0,
    src: "ps-dark.png",
    type: LayerType.Image
  } as FactoryLayer<T>;
}

const textLayer = createLayer(LayerType.Text);
textLayer.text = "can set this";
textLayer.fontSize = "20px";
textLayer.position.y += 20;

const project: Project = {
  layers: [createLayer(LayerType.Image), textLayer],
  size: projectSize
};

render(project);
