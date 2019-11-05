import { Position, Size } from "./types";

// Element -> [x,y,w,h]

function hitTest(elem1: number[], elem2: number[]) {
  const [x1, y1, w1, h1] = elem1;
  const [x2, y2, w2, h2] = elem2;

  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}

const didHit = hitTest([301, 200, 200, 200], [500, 200, 200, 200]);

console.log(didHit);
