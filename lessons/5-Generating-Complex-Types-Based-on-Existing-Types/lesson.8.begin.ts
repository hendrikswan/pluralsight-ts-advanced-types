import { TextLayer, LayerType } from "./types";

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

function setText(layer: TextLayer, text: string) {
  layer.text = text;
}

function setColor(layer: TextLayer, color: string) {
  layer.color = color;
}

setText(textLayer, "Updated text");
setColor(textLayer, "#fff");
