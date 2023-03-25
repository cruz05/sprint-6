import styled from "styled-components";

export const Paragraph = styled.p`
    width: 90%;
    padding: 1rem;
    border-radius: 1.5rem;
    margin-inline: auto;
    border: 2px solid black;
    background-color: ${props => props.active ? '#cf91c9' : '#fff'};
    opacity: ${props => props.active ? 1 : 0.4}
` 