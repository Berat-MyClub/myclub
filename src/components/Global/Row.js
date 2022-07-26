import styled from 'styled-components'

export default styled.div`
    width: 100%;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "space-between"};
    display: flex;
    align-items: center;
`
