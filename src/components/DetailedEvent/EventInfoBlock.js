import styled from "styled-components";
import { MdOutlineCalendarToday as CalendarUnstyled } from "react-icons/md";
import Row from "../Global/Row";
import { FaMapMarkerAlt as MarkerUnstyled } from "react-icons/fa";
import { RiDiscFill as DiskUnstyled } from "react-icons/ri";

const Disk = styled(DiskUnstyled)`
  width: 1.25rem;
  height: 1.25rem;
  fill: #2d97ac;
  margin-right: 0.75rem;
`;

const Marker = styled(MarkerUnstyled)`
  width: 1.25rem;
  height: 1.25rem;
  fill: #2d97ac;
  margin-right: 0.75rem;
`;

const Box = styled.div`
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #A6A6A6;
`;

const Calendar = styled(CalendarUnstyled)`
  width: 1.25rem;
  height: 1.25rem;
  fill: #2d97ac;
  margin-right: 0.75rem;
`;

export default function EventInfoBlock() {
  return (
    <Box>
      <Row margin="0 0 1rem 0" justifyContent="unset">
        <Calendar />
        <span>21.05.2022 um 23:00 Uhr</span>
      </Row>
      <Row margin="0 0 1rem 0" justifyContent="unset">
        <Marker />
        <span>GUM Eventhalle</span>
      </Row>
      <Row justifyContent="unset">
        <Disk />
        <span>DJ Mahren Luv</span>
      </Row>
    </Box>
  );
}
