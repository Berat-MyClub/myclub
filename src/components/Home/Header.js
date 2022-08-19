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

const Drawer = styled(DrawerUnstyled)`
  .MuiDrawer-paperAnchorBottom {
    height: 100vh;
    background: linear-gradient(#002727, #031a1a, #070808);
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

export default function Header({ data }) {
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);

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
          <SearchDrawerHeader />
          <SearchDrawerInputBox />
          <SearchDrawerSubmit
            showSearchDrawer={showSearchDrawer}
            setShowSearchDrawer={setShowSearchDrawer}
          />
        </Wrapper>
      </Drawer>
    </Box>
  );
}
