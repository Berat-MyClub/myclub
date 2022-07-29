import styled from "styled-components";
import Row from "../src/components/Global/Row";
import Wrapper from "../src/components/Global/Wrapper";
import EventSearchBar from "../src/components/Home/EventSearchBar";
import NextEventBox from "../src/components/Home/NextEventBox";
import MyClubLogoUnstyled from "../icons/logo-myclub.svg";
import { MdInfoOutline } from "react-icons/md";
import HotListSlider from "../src/components/Home/HotListSlider";
import { useState } from "react";
import InfoButton from "../src/components/Global/InfoButton";
import SearchByGenre from "../src/components/Home/SerchByGenre";
// import InfoIconUnstyled from "../icons/info-icon.svg";


const MyClubLogo = styled(MyClubLogoUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: .5rem;
`;

// const InfoIcon = styled(InfoIconUnstyled)`
//   fill: #ffffff;
//   width: 1.5rem;
//   height: 1.5rem;
// `;

export default function Homescreen() {

    const [infoText, setInfoText] = useState(false);

  return (
    <Wrapper>
      <EventSearchBar />
      <h1>Your Next Event</h1>
      <NextEventBox />
      <Row style={{position:"relative"}}>
        <Row justifyContent="none">
          <h1>MyClub Hot List</h1>
        </Row>
        <InfoButton/>
      </Row>
      <HotListSlider/>
      <h1>Explore by Categorys</h1>
      <SearchByGenre/>
    </Wrapper>
  );
}
