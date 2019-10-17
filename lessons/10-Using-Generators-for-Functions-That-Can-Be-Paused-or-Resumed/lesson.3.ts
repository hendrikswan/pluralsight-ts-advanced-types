import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";
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

function* projectGenerator() {
  const startProject: Project = {
    layers: [imageLayer],
    size: projectSize
  };

  while (true) {
    yield {
      ...startProject,
      layers: [
        imageLayer,
        {
          ...textLayer,
          text: "The time is " + new Date().toLocaleTimeString()
        }
      ]
    };
  }
}

function renderOverTime(projects: () => Iterable<Project>) {
  for (const proj of projects()) {
    render(proj);
  }
}

renderOverTime(projectGenerator);
