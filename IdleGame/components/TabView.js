import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import styles from '../styles/Styles.js';

const TabView = ({ activeView, setActiveView }) => {
    const handleButtonClick = (viewName) => {
        setActiveView(viewName); // Update state on button click
    };

    return (
        <View className="tabs" style={tabStyles.sidePanel}>
            <Text style={styles.text}>Idle Scape - {activeView}</Text>
            <Button style={tabStyles.sidePanelButton} title={"Profile"} onPress={() => handleButtonClick('Profile')}></Button>
            <Button style={tabStyles.sidePanelButton} title={"Inventory"} onPress={() => handleButtonClick('Inventory')}></Button>
            <Text style={styles.text}>Skills</Text>
            <Button style={tabStyles.sidePanelButton} title={"Woodcutting"}  onPress={() => handleButtonClick('Woodcutting')}></Button>
            <Button style={tabStyles.sidePanelButton} title={"Range"}  onPress={() => handleButtonClick('Range')}></Button>
        </View>
    );
};

export default TabView;