import {Image, View} from "react-native";
import React from "react";
import {StyledItemView} from "../../styles/ItemStyles";
import {CoreText} from "../../styles/Styles";

const ItemView = ({itemName, itemAmount}) => {
    if (itemName === '' || itemName.toLowerCase() === 'none')
    {
        return (
            <StyledItemView/>
        );
    }

    const imageName = `${itemName}.png`;
    const iconImagePath = require(`../../assets/items/${imageName}`);

    return (
        <StyledItemView>
            <Image source={iconImagePath} style={{ width: '80%', height: '80%' }} />
            <CoreText style={{marginTop: 'auto'}}>{itemAmount}</CoreText>
        </StyledItemView>
    );
};

export default ItemView;