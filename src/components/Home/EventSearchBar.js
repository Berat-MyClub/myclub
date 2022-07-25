import styled from "styled-components";
import SearchIconUnstyled from '../../../icons/such-icon.svg'

const SearchIcon = styled(SearchIconUnstyled)`
    width: 1.25rem;
    height: 1.25rem;
    fill: #fff;
`

const Bar = styled.div`
    padding: 1rem;
    border-radius: 7px;
    background-color: #1B3031;
    display: flex;

`

const SearchInput = styled.input`
    width: 100%;
    /* padding: 0 .75rem; */
    margin-left: .75rem;
    background: transparent;
    border: none;
    outline: none;
    font-family: 'Poppins';
    font-size: 1rem;

    ::placeholder {
        color: #A6A6A6;
        font-size: 1rem;
        font-family: 'Poppins';
    }
`

export default function EventSearchBar() {
    return(
        <Bar>
            <SearchIcon/>
            <SearchInput placeholder="Search for Events, Clubs, Friends"/>
        </Bar>
    )
}