import {playerService} from "../services/PlayerService";
import React from "react";
import {StyledTabView} from "../styles/TabStyles";
import {CoreButton, CoreText} from "../styles/Styles";

const TabView = ({ activeView, setActiveView }) => {
    const handleButtonClick = (viewName) => {
        setActiveView(viewName); // Update state on button click
    };

    return (
        <StyledTabView>
            <CoreText>Idle Scape - {activeView}</CoreText>
            <CoreButton onClick={() => handleButtonClick('Profile')}>Profile</CoreButton>
            <CoreButton onClick={() => handleButtonClick('Inventory')}>Inventory</CoreButton>
            <CoreButton onClick={() => playerService.deletePlayerData()}>Delete</CoreButton>
            <CoreText>Skills</CoreText>
            <CoreButton onClick={() => handleButtonClick('Woodcutting')}>Woodcutting</CoreButton>
            <CoreButton onClick={() => handleButtonClick('Range')}>Range</CoreButton>
        </StyledTabView>
    );
};

export default TabView;