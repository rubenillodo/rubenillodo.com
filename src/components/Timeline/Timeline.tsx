import * as React from "react";
import styled from "styled-components";

import * as styles from "./styles";

const Container = styled.div`
  max-width: ${styles.timeline.maxWidth}em;
  padding-bottom: ${styles.timeline.paddingBottom};
  position: relative;
  width: 100%;

  @media print {
    padding-bottom: 0;
  }
`;

const BaseLine = styled.div`
  background-color: ${styles.timeline.colorBase};
  bottom: 0;
  height: calc(100% - ${styles.timeline.sizeHalfDot});
  left: calc(${styles.timeline.sizeHalfDot} - calc(${styles.timeline.width} / 2));
  position: absolute;
  width: ${styles.timeline.width};
`;

const Element = styled.div`
  display: flex;
  margin-bottom: ${styles.timeline.sizeDot};

  ::before {
    background-clip: content-box;
    background-color: ${styles.timeline.colorBase};
    border-radius: 50%;
    box-shadow: inset 0 0 0 ${styles.timeline.width} ${styles.timeline.colorBase};
    content: "";
    display: block;
    flex-basis: ${styles.timeline.sizeDot};
    flex-grow: 0;
    flex-shrink: 0;
    height: ${styles.timeline.sizeDot};
    margin-right: ${styles.timeline.marginRight};
    padding: calc(${styles.timeline.sizeDot} * ${styles.global.sizeTiny});
    width: ${styles.timeline.sizeDot};
  }

  @media print {
    :nth-of-type(n + 7) {
      display: none;
    }
  }
`;

export default class Timeline extends React.PureComponent {
  public render() {
    return (
      <Container>
        <BaseLine />
        {React.Children.map(this.props.children, (child) => <Element>{child}</Element>)}
      </Container>
    );
  }
}
