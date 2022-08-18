import styled from "styled-components";

export default styled.div`
    display: flex;
    align-items: ${props => props.alignItems ? props.alignItems : 'center'};
    justify-content: center;
    flex-direction: ${props => props.flexDirection && props.flexDirection};
`