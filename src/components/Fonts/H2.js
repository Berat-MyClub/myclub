import styled from "styled-components";

export default styled.h2`
    font-weight: ${props => props.fontWeight && props.fontWeight};
    color: ${props => props.color && props.color};
    margin: ${props => props.margin && props.margin};
`