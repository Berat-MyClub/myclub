import styled from "styled-components";
import { MdFavorite } from "react-icons/md";
import MyClubLogo from "../../../icons/logo-myclub.svg";

const LogoWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: .5rem;
  bottom: .25rem;
  fill: #2D97AC;
`;

const Box = styled.div`
  display: flex;
  overflow-x: scroll;
`;

const SongBox = styled.div`
  min-width: 8rem;
  min-height: 8rem;
  max-width: 8rem;
  max-height: 8rem;
  margin-right: 1.5rem;
  background-image: url(${props => props.url && props.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 7px 0 7px 0;
  box-shadow: inset 0px -60px 50px #000000af;
  position: relative;
`;

export default function HotListSlider() {
    
  return (
    <Box>
      <SongBox url="/songcover.jpg">
        <LogoWrapper>
          <MyClubLogo />
        </LogoWrapper>
      </SongBox>
      <SongBox url="/songcover1.jpg">
        <LogoWrapper>
          <MyClubLogo />
        </LogoWrapper>
      </SongBox>
      <SongBox url="/songcover.jpg">
        <LogoWrapper>
          <MyClubLogo />
        </LogoWrapper>
      </SongBox>
      <SongBox url="/songcover1.jpg">
        <LogoWrapper>
          <MyClubLogo />
        </LogoWrapper>
      </SongBox>
      <SongBox url="/songcover.jpg">
        <LogoWrapper>
          <MyClubLogo />
        </LogoWrapper>
      </SongBox>
    </Box>
  );
}
