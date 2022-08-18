import styled from "styled-components";
import EventButtons from "../src/components/DetailedEvent/EventButtons";
import HeaderImage from "../src/components/DetailedEvent/HeaderImage";
import P from "../src/components/Fonts/P";
import EventGenreTag from "../src/components/Global/EventGenreTag";
import Row from "../src/components/Global/Row";
import Wrapper from "../src/components/Global/Wrapper";
import { MdOutlineChevronRight as ArrowRightUnstyled } from "react-icons/md";
import EventInfoBlock from "../src/components/DetailedEvent/EventInfoBlock";
import H2 from "../src/components/Fonts/H2";
import EventAttendees from "../src/components/DetailedEvent/EventAttendees";

const ArrowRight = styled(ArrowRightUnstyled)`
  margin-left: 0.25rem;
  fill: #2d97ac;
  margin-bottom: 0.75rem;
`;

const OutterDiv = styled.div``;

export default function eventdetailed({ data }) {

  return (
    <OutterDiv>
      <HeaderImage />
      <Wrapper>
        <h1 style={{ margin: "0" }}>Club Finest Excess</h1>
        <Row justifyContent="unset">
          <P marginTop="0" color="#2d97ac">
            GUM Eventhalle
          </P>
          <ArrowRight />
        </Row>
        <Row margin="0 0 1rem 0" style={{ gap: "5%" }}>
          <EventButtons type="Accept" />
          <EventButtons type="Interested" />
          <EventButtons type="More" />
        </Row>
        <Row justifyContent="unset">
          <EventGenreTag style="outlined" tag="Techno" />
          <EventGenreTag style="outlined" tag="Dancehall" />
          <EventGenreTag style="outlined" tag="Afro" />
        </Row>
        <EventInfoBlock />
        <H2 fontWeight="600">Das solltest du wissen...</H2>
        <span>
          Am 21.05 (Samstag) ist es endlich mal wieder soweit… LADIES FIRST
          steht vor der Tür. An so einer besonderen Party lassen wir nur einen
          wahren Meister an die Plattenteller. Als echte Liebhaber der Musik,
          weiß er genau, was Frauen… mehr
        </span>
        <EventAttendees />
      </Wrapper>
    </OutterDiv>
  );
}
