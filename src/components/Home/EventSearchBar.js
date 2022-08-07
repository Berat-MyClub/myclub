import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { FaBell as GlockeUnstyled } from "react-icons/fa";
import { useState } from "react";

const Glocke = styled(GlockeUnstyled)`
  width: 1rem;
  height: 1rem;
  fill: #fff;
`;

const Bar = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 7px;
  background-color: #1b3031;
  display: flex;
  align-items: center;
  width: calc(100% - 2rem);
`;

const OutterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-left: 0.75rem;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Poppins";
  font-size: 1rem;

  ::placeholder {
    color: #a6a6a6;
    font-size: 0.875rem;
    font-family: "Poppins";
  }
`;

const Result = styled.div`
  display: flex;
  overflow-y: scroll;
`;

export default function EventSearchBar({ search, setSearch }) {
  return (
    <OutterBox>
      <Bar>
        <MdSearch style={{ width: "1.5rem", height: "1.5rem", fill: "#fff" }} />
        <SearchInput type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for Events, Clubs, Friends" />
      </Bar>
      <Glocke />
      <Result></Result>
    </OutterBox>
  );
}
