export interface Size {
  width: number;
  height: number;
}

export enum LayerType {
  Text,
  Image
}

export interface Position {
  x: number;
  y: number;
}

export interface Layer {
  id: string;
  type: LayerType;
  rotation: number;
  center: Position;
  size: Size;
}

export interface TextLayer extends Layer {
  type: LayerType.Text;

  text: string;
  color: string;
}

export interface ImageLayer extends Layer {
  type: LayerType.Image;
  src: string;
}

export interface Project {
  layers: Layer[];
  size: Size;
}
