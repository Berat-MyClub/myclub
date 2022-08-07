import styled from "styled-components";
import Wrapper from "../src/components/Global/Wrapper";
import EventSearchBar from "../src/components/Home/EventSearchBar";
import SearchInput from "../src/components/Voting/SearchInput";
import spotifyApi from "../lib/spotify";
import { useSession } from "next-auth/react";

export default function searchSong() {
  return (
    <Wrapper style={{ height: "100vh" }}>
      <SearchInput
        spotifyApi={spotifyApi}
      />
    </Wrapper>
  );
}
