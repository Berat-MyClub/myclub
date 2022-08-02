import styled from "styled-components";
import P from "../Fonts/P";

const Tag = styled.div`
  width: auto;
  padding: 0.25rem .5rem;
  background-color: #1b3031;
  border-radius: 7px;
  margin-right: 0.5rem;

  ${props => props.style === 'outlined' && `
    background-color: transparent;
    border: 1px solid #a6a6a6
  `
  }
`;

export default function EventGenreTag({ tag, style, ...props }) {
  return (
    <Tag style={style}>
      <P marginBottom="0" marginTop="0">
        {tag}
      </P>
    </Tag>
  );
}
