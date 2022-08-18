import { useState } from "react";
import styled from "styled-components";
import P from "../Fonts/P";
import Row from "../Global/Row";
import { MdOutlineCalendarToday as CalendarUnstyled } from "react-icons/md";
import { MdOutlineChevronRight as ArrowRightUnstyled } from "react-icons/md";


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

const Box = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-bottom: .8rem;
  padding-top: .8375rem;
`;

const Genre = styled.div`
  min-width: 4rem;
  max-width: 4rem;
  height: 3rem;
  background-color: #1b3031;
  margin-right: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  color: #fff;
  background-image: url(${(props) => props.url && props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0px -30px 50px #1b3031;

  ${(props) =>
    props.active &&
    `
    min-width: 5rem;
    max-width: 5rem;
    height: 4rem;
    transform: translateY(-8px);
    font-size: 1rem;
    font-weight: 500;
  `}
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

export default function SearchByGenre() {
  const [activeCategory, setActiveCategory] = useState("HipHop");

  return (
    <>
      <Box>
        <Genre
          url="/clubbing1.jpeg"
          onClick={() => setActiveCategory("HipHop")}
          active={activeCategory === "HipHop"}
        >
          HipHop
        </Genre>
        <Genre
          url="/clubbing2.jpeg"
          onClick={() => setActiveCategory("RnB")}
          active={activeCategory === "RnB"}
        >
          RnB
        </Genre>
        <Genre
          url="/clubbing1.jpeg"
          onClick={() => setActiveCategory("House")}
          active={activeCategory === "House"}
        >
          House
        </Genre>
        <Genre
          url="/clubbing2.jpeg"
          onClick={() => setActiveCategory("Techno")}
          active={activeCategory === "Techno"}
        >
          Techno
        </Genre>
        <Genre
          url="/clubbing1.jpeg"
          onClick={() => setActiveCategory("Reggeton")}
          active={activeCategory === "Reggeton"}
        >
          Reggeton
        </Genre>
        <Genre
          url="/clubbing2.jpeg"
          onClick={() => setActiveCategory("Dancehall")}
          active={activeCategory === "Dancehall"}
        >
          Dancehall
        </Genre>
      </Box>
      <Row flexDirection="column">
        <ResultContainer>
          <ResultEvent url={"/urbanfire.jpeg"} />
          <EventInfoBox>
            <EventTitle>Urban Fire</EventTitle>
            <Row justifyContent="unset">
              <P margin='0' color="#2d97ac">
                E-Lounge Club
              </P>
              <ArrowRight />
            </Row>
            <Row>
              <Calendar />
              <P>SA 23.07, 23:00 Uhr</P>
            </Row>
          </EventInfoBox>
        </ResultContainer>
        <ResultContainer>
          <ResultEvent url={"/labomba.jpeg"} />
          <EventInfoBox>
            <EventTitle>La Bomba</EventTitle>
            <Row justifyContent="unset">
              <P margin='0' color="#2d97ac">
                GUM Eventhalle
              </P>
              <ArrowRight />
            </Row>
            <Row>
              <Calendar />
              <P>SA 23.07, 23:00 Uhr</P>
            </Row>
          </EventInfoBox>
        </ResultContainer>
      </Row>
    </>
  );
}
