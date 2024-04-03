import ProfileView from "./ProfileView";
import InventoryView from "./InventoryView";
import WoodcuttingView from "./skills/WoodcuttingView";
import RangeView from "./skills/RangeView";
import {CoreText, CoreView} from "../styles/Styles";

const ContentView = ({ activeView, setActiveView }) => {
    return (
        <CoreView>
            <CoreText>State: {activeView}</CoreText>
            {activeView === 'Profile' && <ProfileView />}
            {activeView === 'Inventory' && <InventoryView />}
            {activeView === 'Woodcutting' && <WoodcuttingView />}
            {activeView === 'Range' && <RangeView />}
        </CoreView>
    );
};

export default ContentView;