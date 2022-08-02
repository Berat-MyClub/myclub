import styled from "styled-components";
import { MdKeyboardArrowLeft as ArrowLeftUnstyled } from "react-icons/md";
import { useRouter } from "next/router";

const ArrowLeft = styled(ArrowLeftUnstyled)`
    width: 1.5rem;
    height: 1.5rem;
    fill: #fff;
`

const Box = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-color: #1B3031;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 1rem;
    top: 1rem;
    border-radius: 7px;
`

export default function BackButton() {

    const router = useRouter();

    return(
        <Box onClick={() => router.back()}>
            <ArrowLeft/>
        </Box>
    )
}