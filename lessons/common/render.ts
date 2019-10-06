import { Project, ImageLayer, Layer, TextLayer, LayerType } from "./types";
import { createCanvas, loadImage, Canvas } from "canvas";
import process from "process";
import fs from "fs";
import open from "open";
var { promisify } = require("util");
var sizeOf = promisify(require("image-size"));

const BASE_IMAGE_PATH = `${process.env.ROOT}/lessons/common/images`;

function isTextLayer(layer: Layer): layer is TextLayer {
  return layer.type === LayerType.Text;
}

function isImageLayer(layer: Layer): layer is ImageLayer {
  return layer.type === LayerType.Image;
}

async function renderImage(canvas: Canvas, layer: ImageLayer) {
  // const imageSize = sizeOf();
  const ctx = canvas.getContext("2d");
  const imagePath = `${BASE_IMAGE_PATH}/${layer.src}`;
  console.log("Loading image with path ", imagePath);
  const image = await loadImage(imagePath);

  console.log("got the image ", image);
  ctx.drawImage(image, 50, 0, 70, 70);
}

async function renderText(canvas: Canvas, layer: TextLayer) {
  const ctx = canvas.getContext("2d");
  ctx.font = `${layer.fontSize}px Helvetica Arial`;
  ctx.fillText(layer.text, layer.position.x, layer.position.y, layer.maxWidth);
}

async function exportPng(canvas: Canvas) {
  return new Promise(resolve => {
    const fileName = __dirname + "/test2.png";

    const out = fs.createWriteStream(fileName);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on("finish", () => open(fileName).then(resolve));
  });
}

async function renderAsync(project: Project) {
  const canvas = createCanvas(project.size.width, project.size.height);
  const ctx = canvas.getContext("2d");

  for (const layer of project.layers) {
    try {
      if (isTextLayer(layer)) {
        await renderText(canvas, layer);
      }

      if (isImageLayer(layer)) {
        await renderImage(canvas, layer);
      }
    } catch (err) {
      console.error(`Could not render layer with id ${layer.id}:`);
      console.error(err.stack);
      process.exit(1);
    }
  }

  await exportPng(canvas);
}

export function render(project: Project) {
  renderAsync(project)
    .then(() => console.log("finished rendering"))
    .catch(err => console.error(err));
}
