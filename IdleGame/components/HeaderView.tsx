import React from "react";
import {StyledHeaderView} from "../styles/Styles";
import {Image} from "react-native";

const HeaderView = () => {
    return (
        <StyledHeaderView>
            <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}} />
        </StyledHeaderView>
    );
};

export default HeaderView;