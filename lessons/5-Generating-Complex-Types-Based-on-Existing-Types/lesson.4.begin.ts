import { Project, TextLayer, ImageLayer, LayerType, Size } from "./types";

const fieldDescriptions = {
  text: "This is the default text"
};

Object.entries(fieldDescriptions).forEach(([field, description]) => {
  console.log(`${field}: ${description}`);
});
