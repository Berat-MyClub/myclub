import { MdSearch } from "react-icons/md";
import styled from "styled-components";

const Box = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: center;
  border-radius: 7px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
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

export default function SearchInput() {
  return (
    <Box>
      <MdSearch
        style={{
          width: "1.5rem",
          height: "1.5rem",
          fill: "#000",
          marginRight: ".5rem",
        }}
      />
      <Input placeholder="Search" />
    </Box>
  );
}
