import {playerService} from "../services/PlayerService";
import React from "react";
import {CoreButton, CoreText} from "../styles/Styles";
import {StyledTabButtonView, StyledTabView} from "../styles/TabStyles";
import {Image, View, TouchableOpacity} from "react-native";

const TabView = ({ activeView, setActiveView }) => {
    const handleButtonClick = (viewName) => {
        setActiveView(viewName); // Update state on button click
    };

    return (
        <StyledTabView>
            <CoreText>Idle Scape - {activeView}</CoreText>
            <TabButton viewName={'Profile'} iconPath={'profile'} setActiveView={setActiveView}/>
            <TabButton viewName={'Inventory'} iconPath={'inventory'} setActiveView={setActiveView}/>
            <CoreButton onClick={() => playerService.deletePlayerData()}>Delete</CoreButton>
            <CoreText>Skills</CoreText>
            <TabButton viewName={'Range'} iconPath={'skills/range'} setActiveView={setActiveView}/>
            <TabButton viewName={'Woodcutting'} iconPath={'skills/woodcutting'} setActiveView={setActiveView}/>
        </StyledTabView>
    );
};

const TabButton = ({ viewName, iconPath, setActiveView }) => {
    const handleButtonClick = () => {
        setActiveView(viewName); // Update state on button click
    };
    const imageName = `${iconPath}.png`; // Construct image name dynamically
    const iconImagePath = require(`../assets/${imageName}`);
    return (
        <StyledTabButtonView>
            <TouchableOpacity onPress={() => handleButtonClick()} style={{width: '100%', height: '100%'}}>
                <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', height: '100%', padding: 10}}>
                    <Image source={iconImagePath}  style={{width: 35, height: 35}} />
                    <CoreText style={{paddingLeft: 20}}>{viewName}</CoreText>
                </View>
            </TouchableOpacity>
        </StyledTabButtonView>
    );
};

export default TabView;