import * as moment from "moment";
import * as React from "react";
import styled from "styled-components";

import * as styles from "./styles";

const borderWidth = styles.timeline.width;
const linkWidth = `calc(${styles.timeline.sizeHalfDot} + ${styles.timeline.marginRight})`;

const Card = styled.article`
  border: ${borderWidth} solid ${styles.event.colorBorder};
  padding: calc(${styles.timeline.sizeDot} * 0.75) ${styles.timeline.sizeDot};
  position: relative;
  width: 100%;

  &::before {
    content: "";
    background-color: ${styles.event.colorBorder};
    display: block;
    left: 0;
    margin-top: calc(${styles.timeline.sizeHalfDot} - calc(${borderWidth} / 2));
    position: absolute;
    height: ${borderWidth};
    top: 0;
    margin-left: calc(${linkWidth} * -1);
    width: ${linkWidth};
  }
`;

const Title = styled.h1`
  font-size: ${styles.global.sizeBig}em;
  margin: 0;
`;

const Company = styled.h2`
  font-size: ${styles.global.sizeBig}em;
  margin: 0;
`;

const Period = styled.div`
  font-size: ${styles.global.sizeSmall}em;
`;

const Tags = Period.extend`
  margin-top: ${styles.global.sizeSmall}rem;
`;

const Tag = styled.span`
  background: ${styles.event.colorText};
  color: ${styles.event.bg};
  line-height: ${styles.global.sizeBigger};
  padding: ${styles.global.sizeTiny / 2}em ${styles.global.sizeTiny}em;
  text-transform: lowercase;
`;

interface Props {
  at: string;
  from: moment.Moment;
  tags?: string[];
  title: string;
  to: moment.Moment | null;
}

export default class Event extends React.PureComponent<Props> {
  public render() {
    return (
      <Card>
        <header>
          <Title>{this.props.title}</Title>
          <Company>@&nbsp;{this.props.at}</Company>
        </header>
        <Period>
          <time dateTime={this.props.from.toISOString()}>{this.showDate(this.props.from)}</time>
          <span> – </span>
          <time dateTime={(this.props.to || moment(Date.now())).toISOString()}>{this.showDate(this.props.to)}</time>
        </Period>
        {this.props.tags && <Tags>{this.buildTags(this.props.tags)}</Tags>}
      </Card>
    );
  }

  private showDate(date: moment.Moment | null) {
    if (date === null) {
      return "now";
    }

    return date.format("MMM YYYY").toLocaleLowerCase();
  }

  private buildTags(tags: string[]): React.ReactNode[] {
    const lastIndex = tags.length - 1;
    return tags.map((tag, index) => {
      const tagComponent = <Tag>{tag}</Tag>;
      if (index === lastIndex) return tagComponent;
      return [tagComponent, ", "];
    });
  }
}
