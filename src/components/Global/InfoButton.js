import styled from "styled-components";
import { MdInfoOutline as MdInfoOutlineUnstyled } from "react-icons/md";
import { createRef, useState } from "react";

const Box = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const MdInfoOutline = styled(MdInfoOutlineUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #a6a6a6;
`;

const InfoText = styled.p`
  display: none;
  line-height: 30px;
  color: #a6a6a6;
  white-space: nowrap;

  ${(props) =>
    props.infoText &&
    `
        display: block;
        margin-right: .5rem;
    `}
`;

export default function InfoButton() {
  function handleInfoText() {
    const text = document.querySelector("infotext");

    setInfoText(true);
    setTimeout(() => {
      document.getElementById("infotext").style.display = "none";
    }, 4000);
  }

  const [infoText, setInfoText] = useState(false);

  return (
    <Box onClick={() => handleInfoText()}>
      {/* <InfoText infoText={infoText}>Most liked Songs</InfoText> */}
      <InfoText id="infotext" className="infotext" infoText={infoText}>
        Most Likes Songs
      </InfoText>
      <MdInfoOutline />
    </Box>
  );
}
