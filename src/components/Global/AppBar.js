import styled from "styled-components";
import { BsFillHouseDoorFill as HouseUnstyled } from "react-icons/bs";
import { useState } from "react";
import PUnstyled from "../Fonts/P";

const P = styled(PUnstyled)`
  opacity: 0;
  transform: translateY(10px);
  transition: 0.5s;

  ${(props) =>
    props.active &&
    `
        opacity: 1;
        transform: translateY(5px);
    `}
`;

const House = styled(HouseUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;

  ${(props) =>
    props.active &&
    `
        fill: #2d97ac;
    `}
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  padding: 1.5rem 2rem;
  position: fixed;
  bottom: 0;
  background-color: #1b3031;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  justify-content: space-between;
`;

export default function AppBar() {
  const [tab, setTab] = useState("Home");

  return (
    <Box>
      <IconBox active={tab === "Home"} onClick={() => setTab("Home")}>
        <House active={tab === "Home"} />
        <P color="#fff" active={tab === "Home"} marginBottom="0">
          Home
        </P>
      </IconBox>
      <IconBox active={tab === "Search"} onClick={() => setTab("Search")}>
        <House active={tab === "Search"} />
        <P color="#fff" active={tab === "Search"} marginBottom="0">
          Search
        </P>
      </IconBox>
      <IconBox active={tab === "Calendar"} onClick={() => setTab("Calendar")}>
        <House active={tab === "Calendar"} />
        <P color="#fff" active={tab === "Calendar"} marginBottom="0">
          Calendar
        </P>
      </IconBox>
      <IconBox active={tab === "Profile"} onClick={() => setTab("Profile")}>
        <House active={tab === "Profile"} />
        <P color="#fff" active={tab === "Profile"} marginBottom="0">
          Profile
        </P>
      </IconBox>
    </Box>
  );
}
