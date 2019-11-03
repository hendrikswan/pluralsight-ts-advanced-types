import { TextLayer, LayerType, Position } from "./types";

class TextLayerClass implements TextLayer {
  public type: LayerType.Text = LayerType.Text;

  constructor(
    public maxWidth: number,
    public position: Position,
    public color: string,
    public id: string,
    public rotation: number,
    public text: string,
    public fontSize: string
  ) {}

  get [Symbol.toStringTag]() {
    return `TextLayer ${this.id}`;
  }
}

const textLayer1: TextLayer = new TextLayerClass(
  1000,
  { x: 128, y: 208 },
  "#e8166d",
  "this is the id",
  0,
  "Advanced TypeScript",
  "20px"
);

console.log("here is the text layer ", textLayer1.toString());
