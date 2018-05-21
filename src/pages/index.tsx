import * as React from "react";
import styled from "styled-components";

import MedallionImg from "../components/MedallionImg";
import { Event, Timeline } from "../components/Timeline";
import * as styles from "../styles";

import * as avatar from "../assets/avatar.jpg";
import * as location from "../assets/location.svg";
import * as avatarPlaceholder from "../assets/placeholder.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  padding: ${styles.sizeBigger}em;

  @media (min-width: ${styles.sizeMassive}em) {
    padding: ${styles.sizeEvenBigger}em;
  }

  @media print {
    min-height: 0;
  }
`;

const SectionIntro = Section.extend`
  flex: 1;
  padding: ${styles.sizeEvenBigger}em;
  position: relative;
`;

const SectionTimeline = Section.extend`
  justify-content: flex-end;
  padding-bottom: 0 !important;

  @media print {
    padding-top: 0 !important;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  font-size: ${styles.sizeEvenBigger}em;
  height: 1em;
  position: relative;
  width: calc(2em - 0.25em);

  @media print {
    width: 1em;
  }

  @media screen and (min-width: ${styles.sizeHuge * 3}em) {
    font-size: ${styles.sizeHuge}em;
  }

  > * {
    position: absolute;
  }

  > *:first-child {
    z-index: 2;
  }

  > *:last-child {
    left: 0.75em;
    z-index: 1;

    @media print {
      display: none;
    }
  }
`;

const Header = styled.header`
  color: ${styles.colorText};
  margin-top: ${styles.sizeBigger}em;
  text-align: center;

  > h1,
  > p {
    margin: 0;
  }

  > h1 {
    font-size: ${styles.sizeBig}em;

    @media (min-width: 23em) {
      font-size: ${styles.sizeBigger}em;
    }
  }

  > p {
    font-size: ${styles.sizeBig}em;
  }
`;

const Mail = styled.div`
  margin-top: ${styles.sizeBase}em;
`;

interface Props {
  data: {
    allEventsJson: {
      edges: Edge[];
    };
  };
}

interface Edge {
  node: EventData;
}

interface EventData {
  id: string;
  title: string;
  from: string;
  to?: string;
  at: string;
  tags: string[];
}

const IndexPage: React.StatelessComponent<Props> = ({ data: { allEventsJson: { edges: events } } }) => (
  <Container>
    <SectionIntro>
      <AvatarWrapper>
        <MedallionImg src={avatar} placeholder={avatarPlaceholder} />
        <MedallionImg src={location} blink />
      </AvatarWrapper>
      <Header>
        <h1>Rubén Illodo Brea</h1>
        <p>Software Engineer in&nbsp;Barcelona</p>
      </Header>
      <Mail>
        <a href="mailto:me@rubenillodo.com">me@rubenillodo.com</a>
      </Mail>
    </SectionIntro>
    <SectionTimeline>
      <Timeline>{events.map((event) => <Event {...event.node} key={event.node.id} />)}</Timeline>
    </SectionTimeline>
  </Container>
);

export const query = graphql`
  query AllEvents {
    allEventsJson(sort: { fields: [from], order: DESC }) {
      edges {
        node {
          id
          title
          from
          to
          at
          tags
        }
      }
    }
  }
`;

export default IndexPage;
