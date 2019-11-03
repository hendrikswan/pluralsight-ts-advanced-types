import { TextLayer, LayerType, Position } from "./types";

function doLog(message: string, obj: any) {
  const objStr = obj.log ? obj.log(obj) : obj.toString();
  console.log(`${message} ${objStr}`);
}

const layer = {
  src: "dark.png",
  log: true
};

doLog("The first layer: ", layer);
