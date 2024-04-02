import {Button, View} from "react-native";
import styled from "styled-components";

export const CoreView = styled(View)`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0e1833;
    color: #0e1833;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CoreButton = styled(Button)`
    background-color: #af4c4c;
    padding: 10px;
    border-radius: 5px;
    margin: 30px;
    width: 300px;
`;