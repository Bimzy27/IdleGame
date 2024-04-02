import {Text, View} from "react-native";
import ProfileView from "./ProfileView";
import InventoryView from "./InventoryView";
import WoodcuttingView from "./skills/WoodcuttingView";
import RangeView from "./skills/RangeView";
import {CoreView} from "../styles/Styles";

const ContentView = ({ activeView, setActiveView }) => {
    return (
        <CoreView>
            <Text>State: {activeView}</Text>
            {activeView === 'Profile' && <ProfileView />}
            {activeView === 'Inventory' && <InventoryView />}
            {activeView === 'Woodcutting' && <WoodcuttingView />}
            {activeView === 'Range' && <RangeView />}
        </CoreView>
    );
};

export default ContentView;