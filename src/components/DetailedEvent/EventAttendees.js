import styled from "styled-components";
import ProfilePictureCircle from "../Global/ProfilePictureCircle";

const Box = styled.div`
  display: flex;
  margin: 1rem 0;
`;

export default function EventAttendees() {
  return (
    <Box>
      <ProfilePictureCircle />
      <ProfilePictureCircle />
      <ProfilePictureCircle />
    </Box>
  );
}
