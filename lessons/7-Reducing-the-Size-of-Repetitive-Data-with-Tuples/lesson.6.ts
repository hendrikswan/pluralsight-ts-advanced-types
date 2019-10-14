import { Position, Size } from "./types";

// Element -> [x,y,w,h]

type Element = [number, number, number, number];

function hitTest([x1, y1, w1, h1]: Element, [x2, y2, w2, h2]: Element) {
  return x1 < x2 + w2 && x1 + w1 > x2 && y1 < y2 + h2 && y1 + h1 > y2;
}

// should not be able to do this
const didHit1 = hitTest([301, 200, 200, 200], [500, 200, 200, 200]);

console.log(didHit1);
