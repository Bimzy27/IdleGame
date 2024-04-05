import React from "react";
import {StyledHeaderView} from "../styles/Styles";
import {Image} from "react-native";

const HeaderView = () => {
    return (
        <StyledHeaderView>
            <Image source={require('../assets/icon.png')} style={{width: 150, height: "100%", resizeMode: 'contain'}} />
        </StyledHeaderView>
    );
};

export default HeaderView;