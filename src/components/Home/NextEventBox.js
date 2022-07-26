import styled from "styled-components";
import RightArrowUnstyled from '../../../icons/right-arrow-icon.svg'

const RightArrow = styled(RightArrowUnstyled)`
    fill: #fff;
    position: absolute;
    right: 5px;
    bottom: 0;
`

const Box = styled.div`
    width: 100%;
    max-height: 23vh;
    height: 100%;
    background-image: url('/FinestEventImage.jpeg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: inset 0px -100px 50px #000000AF;
    position: relative;
`

export default function NextEventBox() {
    return(
        <Box>
            <RightArrow/>
        </Box>
    )
}