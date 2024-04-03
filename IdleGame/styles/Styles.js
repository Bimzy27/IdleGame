import styled from "styled-components";

export const CoreView = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0e1833;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PaddedView = styled.div`
    padding: 5px;
    border: 3px solid #232a35;
`;

export const CoreButton = styled.button`
    background-color: #343c49;
    border-radius: 3px;
    border: 2px solid #5b6b86;
    color: #ffffff;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`;

export const CoreText = styled.text`
    color: #ffffff;
`;