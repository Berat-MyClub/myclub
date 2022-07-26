import styled from "styled-components";
import Row from "../src/components/Global/Row";
import Wrapper from "../src/components/Global/Wrapper";
import NextEventBox from "../src/components/Home/NextEventBox";
import MyClubLogoUnstyled from "../icons/logo-myclub.svg";
import { MdInfoOutline } from "react-icons/md";
import HotListSlider from "../src/components/Home/HotListSlider";
import { useEffect, useState } from "react";
import InfoButton from "../src/components/Global/InfoButton";
import SearchByGenre from "../src/components/Home/SerchByGenre";
import P from "../src/components/Fonts/P";
import ReccomendedEvents from "../src/components/Home/ReccomendedEvents";
import VoteOnNewestSongs from "../src/components/Home/VoteOnNewestSongs";
// import AppBar from "../src/components/Global/AppBar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Loader from "../src/components/Global/Loader";
import spotifyApi from "../lib/spotify";
import Header from "../src/components/Home/Header";

const MyClubLogo = styled(MyClubLogoUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export default function Homescreen() {

  return (
    <Wrapper padding='1.5rem 1rem 6rem'>
      <Header/>
      {/* <button onClick={() => signOut()}>Log Out</button> */}
      <h1>Your Next Event</h1>
      <NextEventBox />
      <Row style={{ position: "relative" }}>
        <Row justifyContent="none">
          <h1>MyClub Hot List</h1>
        </Row>
        <InfoButton />
      </Row>
      <HotListSlider />
      <Row>
        <h1 style={{ marginBottom: "0" }}>Explore by Categorys</h1>
        <P style={{marginBottom:'0'}} color="#a6a6a6">
          See All
        </P>
      </Row>
      <SearchByGenre />
      <h1>Reccomended for You</h1>
      <ReccomendedEvents />
      <h1>Vote on newest Songs</h1>
      <VoteOnNewestSongs />
      {/* <AppBar/> */}
    </Wrapper>
  );
}
