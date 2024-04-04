import styled from "styled-components";
import {
    backgroundAltColor,
    backgroundColor,
    primaryColor,
    primaryTrimColor, secondaryColor,
    textPrimaryColor
} from "./Colors";

export const PaddedView = styled.div`
    padding: 5px;
    border: 3px solid ${backgroundAltColor};
`;

export const CoreButton = styled.button`
    background-color: ${primaryColor};
    border-radius: 3px;
    border: 2px solid ${primaryTrimColor};
    color: ${textPrimaryColor};
    margin: 0.5em 1em;
    padding: 0.25em 1em;
`;

export const CoreText = styled.text`
    color: #ffffff;
`;

export const StyledHeaderView = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 8vh;
    background-color: ${secondaryColor};
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
`;

export const StyledContentView = styled.div`
    position: absolute;
    top: 8vh;
    bottom: 0;
    left: 10vw;
    right: 0;
    width: 90vw;
    height: 92vh;
    background-color: ${backgroundColor};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;