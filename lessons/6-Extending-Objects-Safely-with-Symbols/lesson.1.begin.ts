import { TextLayer, LayerType, Position } from "./types";

function doLog(message: string, obj: any) {
  const objStr = obj.toString();
  console.log(`${message} ${objStr}`);
}

doLog("this is the first message", {
  src: "dark.png"
});
