import {View} from "react-native";
import React from "react";
import {CoreText} from "../styles/Styles";
import InventoryContainerView from "./items/InventoryContainerView";

const InventoryView = () => {
    return (
        <View>
            <CoreText>Currency</CoreText>
            <CoreText>Inventory</CoreText>
            <InventoryContainerView/>
        </View>
    );
};

export default InventoryView;