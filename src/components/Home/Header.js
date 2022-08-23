import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import H2 from "../Fonts/H2";
import Devider from "../Global/Devider";
import DrawerUnstyled from "@mui/material/Drawer";
import { useState } from "react";
import Wrapper from "../Global/Wrapper";
import SearchDrawerHeader from "../Search/SearchDrawerHeader";
import SearchDrawerInputBox from "../Search/SearchDrawerInputBox";
import SearchDrawerSubmit from "../Search/SearchDrawerSubmit";
import { motion } from "framer-motion";
import SearchFilter from "../Search/SearchFilter";
import RecentlySearched from "../Search/RecentlySearched";
import { useEffect } from "react";
import { db } from "../../../firebase/initFirebase";
import { collection, doc, getDocs } from "firebase/firestore";
import SearchInput from "../Search/SearchInput";
import ReccomendedEvents from '../Home/ReccomendedEvents'

const Drawer = styled(DrawerUnstyled)`
  .MuiDrawer-paperAnchorBottom {
    height: 100vh;
    background: linear-gradient(#002727, #031a1a, #070808);
    transition-delay: 1s;
  }
`;

const Input = styled.div`
  background-color: #1b3031;
  width: 100%;
  padding: ${(props) => (props.padding ? props.padding : ".25rem .5rem")};
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

const SearchBox = styled.div`
  background-color: #1b3031;
  padding: 1rem;
  width: 100%;
  margin: 2rem 0;
  border-radius: 7px;
`;

export default function Header() {
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventMatch, setEventMatch] = useState([]);

  const searchEvents = (text) => {
    let matches = events.filter((event) => {
      const regex = new RegExp(`${text}`);
      return event.title.match(regex);
    });
    setEventMatch(matches);
  };

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(collection(db, "events"));
      setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEvents();
  }, []);

  return (
    <Box>
      <Input padding=".75rem" onClick={() => setShowSearchDrawer(true)}>
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
        <Wrapper>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                translateY: "80px",
                opacity: 0,
              },
              visible: {
                translateY: "0px",
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.1,
                },
              },
            }}
          >
            <SearchDrawerHeader />
            <SearchBox>
              <h1 style={{ marginTop: "0" }}>Find your Event!</h1>
              <SearchInput onChange={(e) => searchEvents(e.target.value)} />
            </SearchBox>
            <div>
              {eventMatch ? (
                eventMatch.map((match) => {
                  return <ReccomendedEvents key={match.id} eventMatch={eventMatch}/>;
                })
              ) : (
                <SearchFilter />
              )}
            </div>
            {/* <RecentlySearched/> */}
          </motion.div>
          <SearchDrawerSubmit
            showSearchDrawer={showSearchDrawer}
            setShowSearchDrawer={setShowSearchDrawer}
          />
        </Wrapper>
      </Drawer>
    </Box>
  );
}
