import { MdKeyboardArrowDown, MdOutlineClose} from "react-icons/md";
import styled from "styled-components";
import P from "../Fonts/P";

const Tag = styled.div`
  width: auto;
  padding: 0.25rem 0.5rem;
  background-color: #1b3031;
  border-radius: 7px;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;

  ${(props) =>
    props.style === "outlined" &&
    `
    background-color: transparent;
    border: 1px solid #a6a6a6
  `}

`;

export default function EventGenreTag({ tag, icon, style, ...props }) {
  
  return (
    <Tag style={style} icon={icon}>
      <P margin='0'>
        {tag}
      </P>
      {icon === "arrow" && (
        <MdKeyboardArrowDown
          style={{ marginLeft: ".5rem" }}
          width={1.5}
          height={1.5}
          fill={"#fff"}
        />
      )}
      {icon === "delete" && (
        <MdOutlineClose
          style={{ marginLeft: ".5rem" }}
          width={1}
          height={1}
          fill={"#fff"}
        />
      )}
    </Tag>
  );
}
