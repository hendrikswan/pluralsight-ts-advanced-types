import { TextLayer, LayerType, Project } from "./types";

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

// type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;

function setText(layer: TextLayer, text: string) {
  layer.text = text;
  return layer;
}

function setColor(layer: TextLayer, color: string) {
  layer.color = color;
  return layer;
}

function projectAction<U extends any[]>(
  name: string,
  func: (...args: U) => any
) {
  return function wrapper(project: Project, ...args: U) {
    func(...args);
    project.lastUpdated = Date.now();
    project.lastAction = name;
  };
}

const wrappedSetText = projectAction("setText", setText);
const wrappedSetColor = projectAction("setColor", setColor);

wrappedSetText(textLayer, "Updated text");
setColor(textLayer, "#fff");
