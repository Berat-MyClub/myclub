import styled from 'styled-components'

export default styled.div`
    width: 100%;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    flex-direction: ${props => props.flexDirection && props.flexDirection};
    display: ${props => props.display ? props.display : "flex"};
    align-items: center;
    margin: ${props => props.margin && props.margin};
    overflow-y: ${props => props.overflowy && props.overflowy};
`
