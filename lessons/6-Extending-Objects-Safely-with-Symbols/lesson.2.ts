function log(message: string, obj: any) {
  const objStr = obj.log ? obj.log(obj) : obj.toString();
  console.log(`${message} ${objStr}`);
}

const layer = {
  src: "dark.png",
  log: (obj: { src: string }) => `An image layer with src: ${obj.src}`
};

log("The first layer: ", layer);
