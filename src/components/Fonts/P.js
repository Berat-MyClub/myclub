import styled from "styled-components";

export default styled.p`
    color: ${props => props.color ? props.color : '#a6a6a6'};
    /* margin-top: ${props => props.marginTop && props.marginTop };
    margin-bottom: ${props => props.marginBottom && props.marginBottom }; */
    margin: ${props => props.margin && props.margin };
`