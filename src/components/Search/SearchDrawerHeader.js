import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
    padding: 0 1.5rem;
    display: flex;
    width: 95%;
    margin: 0 auto;
    position: relative;
`

const Tab = styled.div`
    padding: .5rem;
    flex: 1;
    text-align: center;
    color: #fff;
    position: relative;

    ${props => props.tab && `
        border-bottom: 2px solid #2d97ac;

    `}
`

export default function SearchDrawerHeader() {
    const [tab, setTab] = useState('Events');
    return(
        <Box>
            <Tab tab={tab === 'Events'} onClick={() => setTab('Events')}>Events</Tab>
            <Tab tab={tab === 'Clubs'} onClick={() => setTab('Clubs')}>Clubs</Tab>
            <Tab tab={tab === 'Friends'} onClick={() => setTab('Friends')}>Friends</Tab>
        </Box>
    )
}