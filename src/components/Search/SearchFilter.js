import { FaMapPin, FaPlus } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  overflow-x: scroll;
`;

const Filter = styled.div`
  min-width: 5rem;
  max-width: 5rem;
  min-height: 5rem;
  max-height: 5rem;
  background-color: #1b3031;
  border-radius: 7px;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.8rem;
  /* box-shadow: 20px 0px 20px red; */
`;

export default function SearchFilter() {
  return (
    <Box>
      <Filter>
        <MdOutlineCalendarToday
          style={{
            width: "1.25rem",
            height: "1.25rem",
            fill: "#2d97ac",
            marginBottom: ".5rem",
          }}
        />
        When
      </Filter>
      <Filter>
        <FaMapPin
          style={{
            width: "1.25rem",
            height: "1.25rem",
            fill: "#2d97ac",
            marginBottom: ".5rem",
          }}
        />
        Where
      </Filter>
      <Filter>
        <FaPlus
          style={{
            width: "1.25rem",
            height: "1.25rem",
            fill: "#2d97ac",
            marginBottom: ".5rem",
          }}
        />
        Add Filter
      </Filter>
    </Box>
  );
}
