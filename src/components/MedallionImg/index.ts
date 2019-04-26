import styled from "styled-components";
import * as styles from "../../styles";
import Img from "../Img";

const MedallionImg = styled(Img)`
  background-color: ${styles.colorText};
  border-color: ${styles.colorText};
  border-radius: 50%;
  border-style: solid;
  border-width: 1px;
  box-sizing: content-box;
`;

export default MedallionImg;
