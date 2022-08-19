import { useState } from "react";
import styled from "styled-components";
import P from "../Fonts/P";
import Row from "../Global/Row";
import SearchByGenreEvent from "./SearchByGenreEvent";

const Box = styled.div`
  display: flex;
  overflow-x: scroll;
  margin-bottom: 0.8rem;
  padding-top: 0.8375rem;
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
        <SearchByGenreEvent url={"/labomba.jpeg"} />
        <SearchByGenreEvent url={"/urbanfire.jpeg"} />
      </Row>
    </>
  );
}
