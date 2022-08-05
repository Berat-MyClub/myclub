import styled from "styled-components";

export default styled.div`
    width: ${props => props.width ? props.width : "2.5rem"};
    height: ${props => props.height ? props.height : "2.5rem"};
    background-image: url('/ProfilePicture.jpeg');
    border-radius: 50%;
    background-size: cover;
    margin-right: .75rem;
    border: 1px solid #a6a6a6;
`
