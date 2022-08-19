import { MdSearch } from "react-icons/md";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #1b3031;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchButton = styled.button`
  padding: 0.5rem;
  background-color: #2d97ac;
  border: none;
  border-radius: 7px;
  width: 6rem;
  font-family: "Poppins";
  font-size: 1rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SearchDrawerSubmit({showSearchDrawer, setShowSearchDrawer}) {
  return (
    <Box>
      <a onClick={() => setShowSearchDrawer(false)}>Abbrechen</a>
      <SearchButton>
        <MdSearch
          style={{
            width: "1.5rem",
            height: "1.5rem",
            fill: "#fff",
            marginRight: ".5rem",
          }}
        />
        Search
      </SearchButton>
    </Box>
  );
}
