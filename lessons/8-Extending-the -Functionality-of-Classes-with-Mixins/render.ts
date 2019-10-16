import { Project, ImageLayer, Layer, TextLayer, LayerType } from "./types";
import { createCanvas, loadImage, Canvas } from "canvas";
import process from "process";
import fs from "fs";
import open from "open";
const probe = require("probe-image-size");

const BASE_IMAGE_PATH = `${process.env.ROOT}/lessons/common/images`;

function isTextLayer(layer: Layer): layer is TextLayer {
  return layer.type === LayerType.Text;
}

function isImageLayer(layer: Layer): layer is ImageLayer {
  return layer.type === LayerType.Image;
}

async function renderImage(canvas: Canvas, layer: ImageLayer) {
  const ctx = canvas.getContext("2d");
  const imagePath = `${BASE_IMAGE_PATH}/${layer.src}`;

  const fileBuffer = fs.readFileSync(imagePath);

  const image = await loadImage(fileBuffer);

  const imageSize = probe.sync(fileBuffer);

  const maxScaleSize = {
    width: layer.maxBounds.width || imageSize.height,
    height: layer.maxBounds.height || imageSize.height
  };

  const scale = Math.min(
    maxScaleSize.height / imageSize.height,
    maxScaleSize.width / imageSize.width
  );

  ctx.drawImage(
    image,
    layer.position.x,
    layer.position.y,
    scale * imageSize.width,
    scale * imageSize.height
  );
}

async function renderText(canvas: Canvas, layer: TextLayer) {
  const ctx = canvas.getContext("2d");
  ctx.font = `${layer.fontSize}px Helvetica Arial`;
  ctx.fillStyle = layer.color;
  ctx.fillText(layer.text, layer.position.x, layer.position.y, layer.maxWidth);
}

async function exportPng(canvas: Canvas) {
  return new Promise(resolve => {
    const fileName = __dirname + "/../../out.png";

    const out = fs.createWriteStream(fileName);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on("finish", () => open(fileName).then(resolve));
  });
}

async function renderAsync(project: Project) {
  const canvas = createCanvas(project.size.width, project.size.height);

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
