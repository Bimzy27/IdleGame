import styled from "styled-components";
import {primaryTrimColor, secondaryColor, transparentColor} from "./Colors";

export const StyledItemView = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${transparentColor};
    border-radius: 5px;
    border: 3px solid ${primaryTrimColor};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;

export const StyledInventoryContainerView = styled.div`
    width: fit-content;
    height: fit-content;
    background-color: ${transparentColor};
    border-radius: 5px;
    border: 3px solid ${primaryTrimColor};
    box-sizing: border-box;
    display: grid;
    grid-gap: 10px;
    padding: 10px;
`;