import {View} from "react-native";
import React from "react";
import {CoreText} from "../styles/Styles";
import InventoryContainerView from "./items/InventoryContainerView";

const InventoryView = () => {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <CoreText>Currency</CoreText>
            <CoreText>Inventory</CoreText>
            <InventoryContainerView/>
        </View>
    );
};

export default InventoryView;