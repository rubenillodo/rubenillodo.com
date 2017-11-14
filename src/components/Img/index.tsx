import * as React from "react";
import styled from "styled-components";

interface InnerImgProps {
  src: string;
  isPlaceholder: boolean;
}

const InnerImg = styled.div`
  background-image: url(${({ src }: InnerImgProps) => src});
  background-size: 100% 100%;
  height: 1em;
  overflow: hidden;
  transition: background-image 300ms ease-in-out;
  width: 1em;
`;

class Img extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { src: props.placeholder || props.src };
  }

  public componentDidMount() {
    if (!this.props.placeholder) {
      return;
    }

    const img = new Image();
    img.onload = () => this.setState({ src: this.props.src });
    img.src = this.props.src;
  }

  public render() {
    return (
      <InnerImg className={this.props.className} src={this.state.src} isPlaceholder={this.isShowingPlaceholder()} />
    );
  }

  private isShowingPlaceholder() {
    return this.state.src === this.props.placeholder;
  }
}

export default Img;

interface Props {
  className?: string;
  src: string;
  placeholder?: string;
}

interface State {
  src: string;
}
