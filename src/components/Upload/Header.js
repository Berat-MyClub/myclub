import styled from "styled-components";
import P from "../Fonts/P";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default function Header() {
  return (
    <Box>
      <h1 style={{ marginTop: "0" }}>New Event</h1>
      <P style={{ marginTop: "0", position: 'absolute', right:'0' }} color="#2d97ac">
        Preview
      </P>
    </Box>
  );
}
