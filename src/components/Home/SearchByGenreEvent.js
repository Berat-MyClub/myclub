import styled from "styled-components";
import { MdOutlineCalendarToday as CalendarUnstyled } from "react-icons/md";
import {
  MdOutlineChevronRight as ArrowRightUnstyled,
  MdOutlineMoreHoriz as DotsUnstyled,
} from "react-icons/md";
import P from "../Fonts/P";
import Row from "../Global/Row";

const ArrowRight = styled(ArrowRightUnstyled)`
  margin-left: 0.25rem;
  fill: #2d97ac;
`;

const Calendar = styled(CalendarUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #a6a6a6;
  margin-right: 0.5rem;
`;

const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  position: relative;
`;

const EventTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
`;

const ResultEvent = styled.div`
  float: left;
  width: 15%;
  height: 0;
  padding: 12%;
  border: 1px solid black;
  background-image: url(${(props) => props.url && props.url});
  background-size: cover;
  background-position: center;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const EventInfoBox = styled.div`
  padding-left: 1rem;
`;

const Dots = styled(DotsUnstyled)`
  width: 1.25rem;
  height: 1.25rem;
  fill: #fff;
  position: absolute;
  right: 0;
  top: 0;
`;

export default function SearchByGenreEvent({url}) {
  return (
    <ResultContainer>
      <ResultEvent url={url} />
      <EventInfoBox>
        <EventTitle>La Bomba</EventTitle>
        <Row justifyContent="unset">
          <P margin="0" color="#2d97ac">
            GUM Eventhalle
          </P>
          <ArrowRight />
        </Row>
        <Row>
          <Calendar />
          <P>SA 23.07, 23:00 Uhr</P>
        </Row>
      </EventInfoBox>
      <Dots onClick={() => handleLike()} />
    </ResultContainer>
  );
}
