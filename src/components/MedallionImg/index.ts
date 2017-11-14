import styled from "styled-components";
import * as styles from "../../styles";
import Img from "../Img";

interface Props {
  blink?: boolean;
}

const MedallionImg = styled(Img)`
  background-color: ${styles.colorText};
  border-color: ${styles.colorText};
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-sizing: content-box;

  ${({ blink }: Props) => {
    if (blink !== true) return "";
    return `
      filter: grayscale(1);
      transition: filter 300ms ease-in-out;

      :hover {
        filter: none;
      }
    `;
  }};
`;

export default MedallionImg;
