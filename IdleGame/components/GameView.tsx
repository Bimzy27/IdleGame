import ContentView from "./ContentView";
import TabView from "./TabView";
import {useState} from "react";
import HeaderView from "./HeaderView";
import {View} from "react-native";

const GameView = () => {
    const [activeView, setActiveView] = useState('Profile');
    return (
        <View>
            <HeaderView/>
            <TabView activeView={activeView} setActiveView={setActiveView}/>
            <ContentView activeView={activeView} setActiveView={setActiveView}/>
        </View>
    );
};

export default GameView;