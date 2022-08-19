import styled from "styled-components";
import SearchInput from "./SearchInput";

const Box = styled.div`
    background-color: #1b3031;
    padding: 1rem;
    width: 100%;
    margin: 2rem 0;
    border-radius: 7px;
`

export default function SearchDrawerInputBox() {
    return(
        <Box>
            <h1 style={{ marginTop: "0" }}>Find your Event!</h1>
            <SearchInput/>
        </Box>
    )
}