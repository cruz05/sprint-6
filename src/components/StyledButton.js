import styled from 'styled-components'

export const Button = styled.button`
    padding: 0.8rem 2rem;
    cursor: pointer;
    min-width: 15rem;
    background-color: ${props => props.bgColor || '#fff'};
    color: black;
    border-radius: 0.5rem;
    margin: 0.5rem;
    font-weight: bold;
` 