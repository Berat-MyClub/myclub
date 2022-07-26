import styled from "styled-components";
import Row from "../src/components/Global/Row";
import Wrapper from "../src/components/Global/Wrapper";
import EventSearchBar from "../src/components/Home/EventSearchBar";
import NextEventBox from "../src/components/Home/NextEventBox";

export default function Homescreen() {
  return (
    <Wrapper>
      <EventSearchBar />
      <h1>Your Next Event</h1>
      <NextEventBox />
      <Row>
        <h1>MyClub Hot List</h1>
      </Row>
    </Wrapper>
  );
}
