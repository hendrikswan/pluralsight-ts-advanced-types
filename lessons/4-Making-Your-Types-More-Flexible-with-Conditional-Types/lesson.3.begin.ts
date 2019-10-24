import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";
import { render } from "./render";

const projectSize: Size = {
  width: 512,
  height: 250
};

function createLayer(type: LayerType): TextLayer | ImageLayer {
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
    } as TextLayer;
  }

  return {
    id: new Date().toISOString(),
    maxBounds: { width: 400 },
    position: { x: 0, y: 0 },
    rotation: 0,
    src: "ps-dark.png",
    type: LayerType.Image
  } as ImageLayer;
}

const textLayer = createLayer(LayerType.Text);
textLayer.text = "can't set this";

const project: Project = {
  layers: [createLayer(LayerType.Image), createLayer(LayerType.Text)],
  size: projectSize
};

render(project);
