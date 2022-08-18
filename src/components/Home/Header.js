import styled from "styled-components";
import { MdOutlineClose, MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import H2 from "../Fonts/H2";
import Devider from "../Global/Devider";
import DrawerUnstyled from "@mui/material/Drawer";
import { useState } from "react";
import Wrapper from "../Global/Wrapper";
import Row from "../Global/Row";
import SearchTag from "./SearchTag";
import ReccomendedEvents from "./ReccomendedEvents";
import { useEffect } from "react";

const Drawer = styled(DrawerUnstyled)`
  /* transition-duration: 50ms; */

  .css-9emuhu-MuiPaper-root-MuiDrawer-paper {
    height: 100%;
    background: linear-gradient(#002727, #031a1a, #070808);
  }
`;

const Input = styled.div`
  background-color: #1b3031;
  width: 100%;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin-right: 1rem;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const DrawerHeader = styled.div`
  box-shadow: 0px 3px 100px #000;
  background-color: #1b3031;
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  /* border: 1px solid #a6a6a6; */
  outline: none;
  font-family: "Poppins";
  font-size: 1rem;
  color: #000;
  border: none;

  ::placeholder {
    color: #000;
    font-size: 1rem;
    font-family: "Poppins";
  }
`;

export default function Header({ data }) {
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function getEvents() {
      const res = await fetch(`/api/events`);
      const data = await res.json();

      setEvents(data);
    }
    getEvents();
  });

//   console.log(events);

  return (
    <Box>
      <Input onClick={() => setShowSearchDrawer(true)}>
        <Devider>
          <MdSearch
            style={{
              width: "1.5rem",
              height: "1.5rem",
              fill: "#fff",
              marginRight: ".5rem",
            }}
          />
        </Devider>
        <Devider>
          <H2 margin="0" color="#fff">
            Search Events - Clubs - Friends
          </H2>
        </Devider>
      </Input>
      <FaRegBell style={{ width: "1.5rem", height: "1.5rem", fill: "#fff" }} />
      <Drawer anchor="bottom" open={showSearchDrawer}>
        <DrawerHeader>
          <Wrapper>
            <H2 style={{ marginTop: "0" }} fontWeight="500">
              Where to Party Next?
            </H2>
            <Devider>
              <Input style={{ backgroundColor: "#fff" }}>
                <MdSearch
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    fill: "#000",
                    marginRight: ".5rem",
                  }}
                />
                <SearchInput placeholder="Search" />
              </Input>
              <MdOutlineClose
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  fill: "#fff",
                }}
                onClick={() => setShowSearchDrawer(false)}
              />
            </Devider>
            <Row margin="1rem 0 0 0" justifyContent="unset" overflowy="scroll">
              <SearchTag status="set" label="Events" />
              <SearchTag label="Wann" />
              <SearchTag status="set" label="84478" />
              <SearchTag status="set" label="Hip-Hop" />
              <SearchTag status="set" label="Extras" />
            </Row>
          </Wrapper>
        </DrawerHeader>
        <Wrapper>
          {events.map((event) => {
            return <ReccomendedEvents key={event.id} events={events} setEvents={setEvents}/>;
          })}
        </Wrapper>
      </Drawer>
    </Box>
  );
}
