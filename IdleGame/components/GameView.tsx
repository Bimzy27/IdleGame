import ContentView from "./ContentView";
import TabView from "./TabView";
import React, {useState} from "react";
import HeaderView from "./HeaderView";
import {View} from "react-native";
import {ScreenClassProvider} from "react-grid-system";

const GameView = () => {
    const [activeView, setActiveView] = useState('Profile');
    return (
        <ScreenClassProvider>
            <View>
                <HeaderView/>
                <TabView activeView={activeView} setActiveView={setActiveView}/>
                <ContentView activeView={activeView} setActiveView={setActiveView}/>
            </View>
        </ScreenClassProvider>
    );
};

export default GameView;