import React, {useState} from "react";
import {View} from "react-native";
import styles from "../styles/Styles";
import ContentView from "./ContentView";
import TabView from "./TabView";

const GameView = () => {
    const [activeView, setActiveView] = useState('Profile');
    return (
        <View style={styles.background}>
            <ContentView activeView={activeView} setActiveView={setActiveView}/>
            <TabView activeView={activeView} setActiveView={setActiveView}/>
        </View>
    );
};

export default GameView;