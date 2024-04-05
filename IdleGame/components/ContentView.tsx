import ProfileView from "./ProfileView";
import InventoryView from "./InventoryView";
import WoodcuttingView from "./skills/WoodcuttingView";
import RangedView from "./skills/RangedView";
import { StyledContentView } from "../styles/Styles";
import ActiveTaskView from "./tasks/ActiveTaskView";

const ContentView = ({ activeView, setActiveView }) => {
    return (
        <StyledContentView>
            {activeView === 'Profile' && <ProfileView />}
            {activeView === 'Inventory' && <InventoryView />}
            {activeView === 'Ranged' && <RangedView />}
            {activeView === 'Woodcutting' && <WoodcuttingView />}

            <ActiveTaskView/>
        </StyledContentView>
    );
};

export default ContentView;