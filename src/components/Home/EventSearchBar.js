import styled from "styled-components";
import { MdSearch } from "react-icons/md";
// import SearchIconUnstyled from '../../../icons/magnifying-glass-solid.svg'

// const SearchIcon = styled(SearchIconUnstyled)`
//     width: 1rem;
//     height: 1rem;
//     fill: #fff;
// `

const Bar = styled.div`
    padding: .75rem 1rem;
    border-radius: 7px;
    background-color: #1B3031;
    display: flex;
    align-items: center;
`

const SearchInput = styled.input`
    width: 100%;
    margin-left: .75rem;
    background: transparent;
    border: none;
    outline: none;
    font-family: 'Poppins';
    font-size: 1rem;

    ::placeholder {
        color: #A6A6A6;
        font-size: .875rem;
        font-family: 'Poppins';
    }
`

export default function EventSearchBar() {
    return(
        <Bar>
            <MdSearch style={{width:"1.5rem", height:"1.5rem", fill:"#fff"}}/>
            <SearchInput placeholder="Search for Events, Clubs, Friends"/>
        </Bar>
    )
}