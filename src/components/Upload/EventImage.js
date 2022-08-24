import styled from "styled-components";
import { MdOutlineAddAPhoto as CameraUnstyled } from "react-icons/md";
import ImageUnstyled from "../../../icons/images-solid.svg";

const Image = styled(ImageUnstyled)`
  width: 2.5rem;
  height: 2.5rem;
  fill: #a6a6a6;
`;

const Box = styled.div`
  width: 100%;
  min-height: 17vh;
  max-height: 17vh;
  background-color: #1b3031;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const IconBox = styled.div`
    padding-right: 1.25rem;
    border-right: 3px solid #a6a6a6;
    margin-right: 1.25rem;
`



export default function EventImage() {
  return (
    <Box>
      <IconBox>
        <Image />
      </IconBox>
      <h2>Upload Photos and Videos</h2>
    </Box>
  );
}
