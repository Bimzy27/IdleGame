import {Button, Text} from "react-native";
import {playerService} from "../services/PlayerService";
import React from "react";
import {StyledTabView} from "../styles/TabStyles";

const TabView = ({ activeView, setActiveView }) => {
    const handleButtonClick = (viewName) => {
        setActiveView(viewName); // Update state on button click
    };

    return (
        <StyledTabView>
            <Text>Idle Scape - {activeView}</Text>
            <Button title={"Profile"}  onPress={() => handleButtonClick('Profile')}></Button>
            <Button title={"Inventory"} onPress={() => handleButtonClick('Inventory')}></Button>
            <Button title={"Delete"} onPress={() => playerService.deletePlayerData()}></Button>
            <Text>Skills</Text>
            <Button title={"Woodcutting"}  onPress={() => handleButtonClick('Woodcutting')}></Button>
            <Button title={"Range"} onPress={() => handleButtonClick('Range')}></Button>
        </StyledTabView>
    );
};

export default TabView;