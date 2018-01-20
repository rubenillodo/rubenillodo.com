import * as moment from "moment";
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

const IndexPage = () => (
  <Container>
    <SectionIntro>
      <AvatarWrapper>
        <MedallionImg src={avatar} placeholder={avatarPlaceholder} />
        <MedallionImg src={location} blink />
      </AvatarWrapper>
      <Header>
        <h1>Rubén Illodo Brea</h1>
        <p>Software Engineer in&nbsp;Shanghai</p>
      </Header>
      <Mail>
        <a href="mailto:me@rubenillodo.com">me@rubenillodo.com</a>
      </Mail>
    </SectionIntro>
    <SectionTimeline>
      <Timeline>
        <Event
          title="Tech Lead"
          from={moment.utc("2017-12-01")}
          to={null}
          at="EF – English First"
          tags={["ES2015", "TypeScript", "ReactJS", "NodeJS", "Android", "CI/CD", "Docker", "AWS ECS", "AWS Lambda"]}
        />
        <Event
          title="Senior Software Engineer"
          from={moment.utc("2016-10-01")}
          to={moment.utc("2017-11-30")}
          at="EF – English First"
          tags={[
            "ES2015",
            "TypeScript",
            "ReactJS",
            "Redux",
            "NodeJS",
            "Webpack",
            "CI/CD",
            "Jest",
            "Enzyme",
            "Docker",
            "AWS ECS",
          ]}
        />
        <Event
          title="Software Engineer"
          from={moment.utc("2015-09-01")}
          to={moment.utc("2016-09-30")}
          at="EF – English First"
          tags={["ES2015", "ReactJS", "Redux", "NodeJS", "Webpack", "CI/CD", "Jest", "Enzyme", "Android"]}
        />
        <Event
          title="Mobile Web Developer"
          from={moment.utc("2015-01-01")}
          to={moment.utc("2015-09-01")}
          at="Mobile Now Group"
          tags={["WeChat", "AngularJS", "NodeJS", "Gulp", "Firebase", "MongoDB", "Loopback", "Docker", "PhoneGap"]}
        />
        <Event
          title="Software Developer"
          from={moment.utc("2013-02-01")}
          to={moment.utc("2014-09-01")}
          at="Zadia Software"
          tags={["AngularJS", "Ruby on Rails", "Android", "iOS", "Dagger", "Retrofit", "RxAndroid", "Gulp"]}
        />
      </Timeline>
    </SectionTimeline>
  </Container>
);

export default IndexPage;
