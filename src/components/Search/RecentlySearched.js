import { MdClose } from "react-icons/md";
import styled from "styled-components";
import Row from "../Global/Row";

const Box = styled.div`
  margin-top: 2rem;
`;

const Recent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function RecentlySearched() {
  return (
    <Box>
      <Row>
        <h1>Zuletzt gesucht</h1>
        <a>Löschen</a>
      </Row>
      <Recent>
        <h2 style={{color:'#a6a6a6'}}>Club Finest</h2>
        <MdClose
          style={{
            width: "1.25rem",
            height: "1.25rem",
            fill: "#2d97ac",
            marginBottom: ".5rem",
          }}
        />
      </Recent>
      <Recent>
        <h2 style={{color:'#a6a6a6'}}>Club Finest</h2>
        <MdClose
          style={{
            width: "1.25rem",
            height: "1.25rem",
            fill: "#2d97ac",
            marginBottom: ".5rem",
          }}
        />
      </Recent>
      <Recent>
        <h2 style={{color:'#a6a6a6'}}>Club Finest</h2>
        <MdClose
          style={{
            width: "1.25rem",
            height: "1.25rem",
            fill: "#2d97ac",
            marginBottom: ".5rem",
          }}
        />
      </Recent>
    </Box>
  );
}
