import {View} from "react-native";
import ContentView from "./ContentView";
import TabView from "./TabView";
import {useState} from "react";
import {CoreView} from "../styles/Styles";

const GameView = () => {
    const [activeView, setActiveView] = useState('Profile');
    return (
        <CoreView>
            <ContentView activeView={activeView} setActiveView={setActiveView}/>
            <TabView activeView={activeView} setActiveView={setActiveView}/>
        </CoreView>
    );
};

export default GameView;