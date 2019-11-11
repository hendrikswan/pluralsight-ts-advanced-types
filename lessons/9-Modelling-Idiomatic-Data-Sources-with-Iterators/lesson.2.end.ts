import {
  Project,
  TextLayer,
  ImageLayer,
  LayerType,
  Size,
  Layer
} from "./types";
import { render } from "./render";

export interface IterableProject extends Iterable<Layer> {
  size: Size;
  lastUpdated?: number;
  lastAction?: string;
}

export function renderIterable(iterableProject: IterableProject) {
  let layers: Layer[] = [];

  for (const layer of iterableProject) {
    layers.push(layer);
  }

  layers = layers.sort((a, b) => <number>a.index - <number>b.index);

  const project: Project = {
    ...iterableProject,
    layers
  };

  render(project);
}

class ProjectClass implements IterableProject {
  constructor(public size: Size, public layers: { [layerId: string]: Layer }) {}

  [Symbol.iterator](): Iterator<Layer> {
    let pointer = 0;
    let layers = Object.values(this.layers);

    return {
      next(): IteratorResult<Layer> {
        if (pointer < layers.length) {
          return {
            done: false,
            value: layers[pointer++]
          };
        } else {
          return {
            done: true,
            value: null
          };
        }
      }
    };
  }
}

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
  fontSize: "20px",
  index: 1
};

const imageLayer: ImageLayer = {
  type: LayerType.Image,

  position: { x: 0, y: 0 },
  id: "20",
  rotation: 0,
  src: "ps-dark.png",
  maxBounds: { width: projectSize.width },
  index: 0
};

const project = new ProjectClass(projectSize, {
  [textLayer.id]: textLayer,
  [imageLayer.id]: imageLayer
});

renderIterable(project);
