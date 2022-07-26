import styled from "styled-components";

export default styled.div`
  width: 100vw;
  padding: ${props => props.padding ? props.padding : '1.5rem 1rem'};
  justify-content: ${props => props.justifyContent && props.justifyContent};
  min-height: 100vh;
`;
