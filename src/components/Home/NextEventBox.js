import styled from "styled-components";
import { MdOutlineEast as RightArrowUnstyled } from "react-icons/md";


const RightArrow = styled(RightArrowUnstyled)`
    fill: #fff;
    position: absolute;
    right: 10px;
    bottom: 5px;
    width: 2rem;
    height: 2rem;
`

const Box = styled.div`
    width: 100%;
    max-height: 23vh;
    min-height: 23vh;
    height: 100%;
    background-image: url('/FinestEventImage.jpeg');
    background-size: contain;
    background-position: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0px -100px 50px #000000AF;
    position: relative;
    margin-bottom: .75rem;
`

export default function NextEventBox() {
    return(
        <Box>
            <RightArrow/>
        </Box>
    )
}