import Quill from "quill";
import imageCompressor from "./quill.imageCompressor.js";

Quill.register("modules/imageCompressor", imageCompressor);

const fullToolbarOptions = [
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic"],
  ["clean"],
  ["image"]
];

console.log('Demo loaded...')

var quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    toolbar: {
      container: fullToolbarOptions
    },
    imageCompressor: {
      quality: 0.9,
      maxWidth: 300,
      maxHeight: 300,
      imageType: 'image/jpeg',
      keepImageTypes: ['image/webp'],
      ignoreImageTypes: ['image/png'],
      debug: true
    },
  }
});
