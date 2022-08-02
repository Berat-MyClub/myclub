import styled from "styled-components";
import ButtonText from "../Fonts/ButtonText";
import BackButton from "../Global/BackButton";
import { MdKeyboardArrowRight as ArrowRighttUnstyled } from "react-icons/md";

const ArrowRight = styled(ArrowRighttUnstyled)`
  width: 1.5rem;
  height: 1.5rem;
  fill: #fff;
`;

const Box = styled.div`
  width: 100%;
  max-height: 17.25rem;
  min-height: 17.25rem;
  height: 100%;
  background-image: url("/FinestEventImage.jpeg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: inset 0px -100px 50px #000000af, 5px 5px 10px #0000007e;
  position: relative;
`;

const VoteTagOutter = styled.div`
  padding: 0.5rem;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: #1b3031;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;

const VoteTagInner = styled.div`
  width: 100%;
  display: flex;
  transform: translateX(7%);
`;

export default function HeaderImage() {
  return (
    <Box>
      <BackButton />
      <VoteTagOutter>
        <VoteTagInner>
          <ButtonText style={{margin:"0"}}>Vote</ButtonText>
          <ArrowRight />
        </VoteTagInner>
      </VoteTagOutter>
    </Box>
  );
}
