import tinycolor from "tinycolor2";
import md5 from "blueimp-md5";
const getCorrectIndex = (number) => {
  return number > 255 ? 255 : number < 0 ? 0 : number;
};

const generateAvatarFromHash = (id) => {
  const [r, g, b] = md5(id)
    .substr(0, 3)
    .split("")
    .map((char) => getCorrectIndex(char.charCodeAt(0)));
  return {
    color: tinycolor({ r, g, b }).toHexString(),
    colorLighten: tinycolor({ r, g, b }).lighten(40).toHexString(),
  };
};
export default generateAvatarFromHash;
