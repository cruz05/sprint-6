import styled from "styled-components";

export const StyledModal = styled.div`
    height: 100%;
    width: 100%;
    background-color: #0000009f;
    position:absolute;

    & div {
        position: absolute;
        top: 50%; 
        left: 50%;
        transform: translate(-50%, -50%);
        width: 23rem;
        min-height: 15rem;
        background-color: white;
        padding: 0.8rem 1.3rem; 
        border-radius: 1rem;
        z-index: 3;
    }
`