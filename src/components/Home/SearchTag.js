import styled from "styled-components";

const Box = styled.div`
    padding: .5rem;
    background-color: ${props => props.status != 'set' ? "#22646E" : "#a6a6a6"};
    border-radius: 7px;
    font-family: 'Poppins';
    font-size: .85rem;
    font-weight: 400;
    color: #fff;
    margin-right: .75rem;
    /* min-width: 4rem; */
    text-align: center;
    white-space: nowrap;
`

export default function SearchTag({label, status, ...props}) {
    return(
        <Box {...props}>
            {label}
        </Box>
    )
}