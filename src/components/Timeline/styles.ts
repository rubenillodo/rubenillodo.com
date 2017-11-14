import * as styles from "../../styles";

const sizeDot = `${styles.sizeBig}em`;
export const timeline = {
  bgBase: styles.bgBase,
  colorBase: styles.colorText,
  marginRight: `${styles.sizeBase}em`,
  maxWidth: styles.sizeMassive,
  paddingBottom: `${styles.sizeEvenBigger}em`,
  sizeDot,
  sizeHalfDot: `${Number.parseFloat(sizeDot) / 2}em`,
  width: "1px",
};

export const event = {
  bg: timeline.bgBase,
  colorBorder: styles.colorText,
  colorText: styles.colorText,
};

export const global = styles;
