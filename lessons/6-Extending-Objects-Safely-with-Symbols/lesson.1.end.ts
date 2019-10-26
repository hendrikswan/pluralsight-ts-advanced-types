import { TextLayer, LayerType, Position } from "./types";

function doLog(message: string, obj: any) {
  const objStr = obj.log ? obj.log(obj) : obj.toString();
  console.log(`${message} ${objStr}`);
}

const layer = {
  src: "dark.png",
  log: (obj: { src: string }) => `An image layer with src: ${obj.src}`
};

doLog("The first layer: ", layer);
