import styled from "styled-components";
import {
  BsCalendarCheck as CalendarUnstyled,
  BsFillCalendarCheckFill as CalendarFilledUnstyled,
  BsHouseDoor as HouseUnstyled,
  BsHouseDoorFill as HouseFilledUnstyled,
} from "react-icons/bs";
import { useState } from "react";
import PUnstyled from "../Fonts/P";
import {
  FaRegUserCircle as UserUnstyled,
  FaUserCircle as UserFilledUnstyled,
} from "react-icons/fa";

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

const User = styled(UserUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;
`;

const UserFilled = styled(UserFilledUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;
`;

const CalendarFilled = styled(CalendarFilledUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;
`;

const Calendar = styled(CalendarUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;
`;

const House = styled(HouseUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;
`;

const HouseFilled = styled(HouseFilledUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(10px);
  fill: #fff;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  padding: 0.5rem 2.5rem;
  position: fixed;
  bottom: 0;
  background: linear-gradient(#1b3031e3, #000);
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 10px 10px 0 0; */
  justify-content: space-between;
`;

export default function AppBar() {
  const [tab, setTab] = useState("Home");

  return (
    <Box>
      <IconBox active={tab === "Home"} onClick={() => setTab("Home")}>
        {tab === "Home" ? (
          <HouseFilled active={tab === "Home"} />
        ) : (
          <House active={tab === "Home"} />
        )}
        <P color="#fff" active={tab === "Home"} marginBottom="0">
          Home
        </P>
      </IconBox>
      <IconBox active={tab === "Calendar"} onClick={() => setTab("Calendar")}>
        {tab === "Calendar" ? (
          <CalendarFilled active={tab === "Calendar"} />
        ) : (
          <Calendar active={tab === "Calendar"} />
        )}
        <P color="#fff" active={tab === "Calendar"} marginBottom="0">
          Calendar
        </P>
      </IconBox>
      <IconBox active={tab === "Profile"} onClick={() => setTab("Profile")}>
        {tab === "Profile" ? (
          <UserFilled active={tab === "Profile"} />
        ) : (
          <User active={tab === "Profile"} />
        )}
        <P color="#fff" active={tab === "Profile"} marginBottom="0">
          Profile
        </P>
      </IconBox>
    </Box>
  );
}
