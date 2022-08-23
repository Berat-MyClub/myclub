import { useState } from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";

const Box = styled.div`
  background-color: #1b3031;
  padding: 1rem;
  width: 100%;
  margin: 2rem 0;
  border-radius: 7px;
`;

export default function SearchDrawerInputBox({ events, setEvents }) {
  

//   console.log("events in InputBox", events);

  const searchEvents = (text) => {
    let matches = events.filter((event) => {
      const regex = new RegExp(`${text}`);
      return event.title.match(regex);
    });
    setEventMatch(matches);
  };

//   console.log("match", eventMatch);

  return (
    <Box eventMatch={eventMatch}>
      <h1 style={{ marginTop: "0" }}>Find your Event!</h1>
      <SearchInput onChange={(e) => searchEvents(e.target.value)} />
      {/* {eventMatch && eventMatch.map((match) => {
        return <h1>{match.title}</h1>
      })} */}
    </Box>
  );
}
