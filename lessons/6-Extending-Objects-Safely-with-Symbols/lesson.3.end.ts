import { TextLayer, LayerType, Position } from "./types";

// in the logging library
const logHandler = Symbol();

function doLog(message: string, obj: any) {
  const objStr = obj[logHandler] ? obj[logHandler](obj) : obj.toString();
  console.log(`${message} ${objStr}`);
}

function addLog<T>(obj: T, func: (obj: T) => string) {
  (obj as any)[logHandler] = func;
}

// in the package consumer
const layer = {
  src: "dark.png",
  log: true
};

addLog(layer, (obj: { src: string }) => `An image layer with src: ${obj.src}`);

doLog("The first layer: ", layer);

for (const key in layer) {
  if (layer.hasOwnProperty(key)) {
    const element = (layer as any)[key];
    console.log(`${key}:${element}`);
  }
}
