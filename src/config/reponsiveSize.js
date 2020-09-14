import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size) =>
  (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.25) =>
  size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;

export default {
  msHalf: moderateScale(0.5),
  msPointEight: moderateScale(0.8),
  ms1: moderateScale(1),
  ms2: moderateScale(2),
  ms3: moderateScale(3),
  ms4: moderateScale(4),
  ms5: moderateScale(5),
  ms6: moderateScale(6),
  ms7: moderateScale(7),
  ms8: moderateScale(8),
  ms9: moderateScale(9),
  ms10: moderateScale(10),
  ms11: moderateScale(11),
  ms12: moderateScale(12),
  ms13: moderateScale(13),
  ms14: moderateScale(14),
  ms14_5: moderateScale(14.5),
  ms15: moderateScale(15),
  ms16: moderateScale(16),
  ms17: moderateScale(17),
  ms18: moderateScale(18),
  ms19: moderateScale(19),
  ms20: moderateScale(20),
  ms21: moderateScale(21),
  ms22: moderateScale(22),
  ms23: moderateScale(23),
  ms24: moderateScale(24),
  ms25: moderateScale(25),
  ms30: moderateScale(30),
  ms32: moderateScale(32),
  ms35: moderateScale(35),
  ms40: moderateScale(40),
  ms44: moderateScale(44),
  ms45: moderateScale(45),
  ms48: moderateScale(48),
  ms50: moderateScale(50),
  ms55: moderateScale(55),
  ms60: moderateScale(60),
  ms65: moderateScale(66),
  ms70: moderateScale(70),
  ms75: moderateScale(75),
  ms78: moderateScale(78),
  msMinus75: moderateScale(-75),
  ms80: moderateScale(80),
  ms90: moderateScale(90),
  ms95: moderateScale(95),
  ms100: moderateScale(100),
  ms120: moderateScale(120),
  ms150: moderateScale(150),
  ms200: moderateScale(200),
  ms230: moderateScale(230),
  ms250: moderateScale(250),
  vs35: verticalScale(35),
  vs400: verticalScale(400),
  ms400: moderateScale(400),
  vs200: verticalScale(200),
  ms270: moderateScale(270),
  vs42: verticalScale(42),
  vs180: verticalScale(180),
  msMinus20: moderateScale(-20),
  msPointThree: moderateScale(0.3),
  vs18: verticalScale(18),
  msMinusFive: moderateScale(-5),
  msMinusTwo: moderateScale(-2),
  msMinusFifteen: moderateScale(-15),
  msPointSevenFive: moderateScale(17.5),
  msMinus30: moderateScale(-30),
  ms83: moderateScale(83),
  ms85: moderateScale(85),
  ms128: moderateScale(128),
};
