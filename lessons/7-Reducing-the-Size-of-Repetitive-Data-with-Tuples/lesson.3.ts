import { Position, Size } from "./types";

// Element -> [x,y,w,h]

function hitTest(elem1: number[], elem2: number[]) {
  return (
    elem1[0] < elem2[0] + elem2[2] &&
    elem1[0] + elem1[2] > elem2[0] &&
    elem1[1] < elem2[1] + elem2[3] &&
    elem1[1] + elem1[3] > elem2[1]
  );
}

const didHit1 = hitTest([301, 200, 200, 200], [500, 200, 200, 200]);

console.log(didHit1);
