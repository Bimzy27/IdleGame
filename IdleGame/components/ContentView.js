import {Text, View} from "react-native";
import React from "react";
import ProfileView from "./ProfileView";
import InventoryView from "./InventoryView";
import styles from '../styles/Styles.js';
import WoodcuttingView from "./skills/WoodcuttingView";
import RangeView from "./skills/RangeView";

const ContentView = ({ activeView, setActiveView }) => {
    return (
        <View>
            <Text style={styles.text}>State: {activeView}</Text>
            {activeView === 'Profile' && <ProfileView />}
            {activeView === 'Inventory' && <InventoryView />}
            {activeView === 'Woodcutting' && <WoodcuttingView />}
            {activeView === 'Range' && <RangeView />}
        </View>
    );
};

export default ContentView;