import ProfileView from "./ProfileView";
import InventoryView from "./InventoryView";
import WoodcuttingView from "./skills/WoodcuttingView";
import RangeView from "./skills/RangeView";
import {CoreText, StyledContentView} from "../styles/Styles";

const ContentView = ({ activeView, setActiveView }) => {
    return (
        <StyledContentView>
            <CoreText>State: {activeView}</CoreText>
            {activeView === 'Profile' && <ProfileView />}
            {activeView === 'Inventory' && <InventoryView />}
            {activeView === 'Woodcutting' && <WoodcuttingView />}
            {activeView === 'Range' && <RangeView />}
        </StyledContentView>
    );
};

export default ContentView;