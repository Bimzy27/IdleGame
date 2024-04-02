import {Text, View} from "react-native";
import styles from '../styles/Styles.js';
import React from "react";

const InventoryView = () => {
    return (
        <View>
            <Text style={styles.text}>Currency</Text>
            <Text style={styles.text}>Inventory</Text>
        </View>
    );
};

export default InventoryView;