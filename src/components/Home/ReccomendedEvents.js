import styled from "styled-components";
import P from "../Fonts/P";
import Row from "../Global/Row";
import { MdOutlineChevronRight as ArrowRightUnstyled, MdOutlineMoreHoriz as DotsUnstyled } from "react-icons/md";
import { FaRegHeart as HeartUnstyled } from "react-icons/fa";
import EventGenreTag from "../Global/EventGenreTag";

const Dots = styled(DotsUnstyled)`
  width: 1.25rem;
  height: 1.25rem;
  fill: #fff;
  position: absolute;
  right: 0;
  top: 0;
`;

const ArrowRight = styled(ArrowRightUnstyled)`
  margin-left: 0.25rem;
  fill: #2d97ac;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const ResultContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
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

export default function ReccomendedEvents({
  title,
  events,
  setEvents,
  ...props
}) {
  return (
    <Box>
      <ResultContainer>
        <ResultEvent url={"/urbanfire.jpeg"} />
        <EventInfoBox>
          <EventTitle>Club Finest</EventTitle>
          <Row justifyContent="unset">
            <P style={{ margin: "0" }} color="#2d97ac">
              E-Lounge Club
            </P>
            <ArrowRight />
          </Row>
          {/* <Row></Row> */}
          <Row margin='.75rem 0 0 0' >
            <EventGenreTag tag="HipHop" />
            <EventGenreTag tag="RnB" />
            <EventGenreTag tag="Deutsch" />
          </Row>
          {/* <Row justifyContent="unset">
            <Pin />
            <P style={{ marginBottom: "0" }}>84478 Waldkraiburg</P>
          </Row> */}
        </EventInfoBox>
      </ResultContainer>
      {/* <Heart onClick={() => handleLike()} /> */}
      <Dots onClick={() => handleLike()} />
    </Box>
  );
}
