import styled from "styled-components";
import { MdCheck } from "react-icons/md";
import { FaRegHeart as HeartUnstyled } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import ButtonText from "../Fonts/ButtonText";

const Heart = styled(HeartUnstyled)`
  width: 1rem;
  height: 1rem;
  fill: #fff;
`;

const Box = styled.div`
  padding: 0.5rem;
  background-color: #1b3031;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  color: #fff;
  line-height: 2.1rem;
  display: flex;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  max-height: 2.25rem;
  min-height: 2.25rem;
  flex: ${props => props.type === 'More' ? '.5' : '3'};
`;

export default function AcceptButton({type, ...props}) {
  return (
    <Box type={type}>
      {type === "Accept" && (
        <>
          <ButtonText>{type}</ButtonText>
          <MdCheck />
        </>
      )}
      {type === "Interested" && (
        <>
          <ButtonText>{type}</ButtonText>
          <Heart />
        </>
      )}
       {type === "More" && (
        <>
        <MdMoreHoriz/>
        </>
      )}
    </Box>
  );
}
