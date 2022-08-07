import styled from "styled-components";
import H2 from '../Fonts/H2'
import P from '../Fonts/P'

const Box = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

const TrackImage = styled.img`
  width: 5rem;
  height: 3´5rem;
  background-image: ${(props) => props.url && props.url};
`;

const TrackInfo = styled.div`
  padding: 0 0.5rem;
`;

export default function Track({ track }) {
  return (
    <Box>
      <TrackImage src={track.albumUrl}></TrackImage>
      <TrackInfo>
        <H2 style={{ margin: 0}}>{track.title}</H2>
        <P marginTop="0" color="#a6a6a6">{track.artist}</P>
      </TrackInfo>
    </Box>
  );
}
