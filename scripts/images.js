const fs = require("fs");
const imageFileNames = () => {
  const array = fs
    .readdirSync("src/assets/images")
    .filter((file) => {
      return file.endsWith(".png");
    })
    .map((file) => {
      return file.replace("@2x.png", "").replace("@3x.png", "");
    });
  return Array.from(new Set(array));
};
const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      let filename = name.replace(".png", "");
      return `${filename}: require("@assets/images/${filename}.png")`;
    })
    .join(",\n  ");
  const string = `export const Images = {
  ${properties}
}
`;
  fs.writeFileSync("src/config/images.js", string, "utf8");
};
generate();
