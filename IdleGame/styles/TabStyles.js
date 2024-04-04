import styled from "styled-components";
import {backgroundAltColor, primaryTrimColor, transparentColor} from "./Colors";

export const StyledTabView = styled.div`
    position: absolute;
    left: 0;
    top: 8vh;
    width: 10vw;
    height: 92vh;
    background-color: ${backgroundAltColor};
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledTabButtonView = styled.div`
    background-color: ${transparentColor};
    border-radius: 5px;
    border: 3px solid ${primaryTrimColor};
    margin: 0.5em 1em;
    width: 100%;
    height: 60px;
`;