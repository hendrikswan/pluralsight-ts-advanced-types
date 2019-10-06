import { Project } from "./types";
import { createCanvas, loadImage } from "canvas";
import process from "process";
import fs from "fs";
import open from "open";

export function render(project: Project) {
  const root = process.env.ROOT;
  const imagePath = `${root}/lessons/common/images`;

  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext("2d");

  ctx.font = "10px Impact";
  ctx.fillText("Awesome!", 50, 100);

  loadImage(`${imagePath}/ps-dark.png`).then(image => {
    ctx.drawImage(image, 50, 0, 70, 70);

    const fileName = __dirname + "/test.png";

    const out = fs.createWriteStream(fileName);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
    out.on("finish", () => open(fileName));
  });
}
