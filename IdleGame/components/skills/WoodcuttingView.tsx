import React from "react";
import {SkillView} from "./SkillView";
import {CoreButton} from "../../styles/Styles";
import {taskService} from "../../services/TaskService";

const WoodcuttingView = () => {
    const addNormalLog = () => taskService.startTask('chopNormalTree');

    return (
        <SkillView skillName="Woodcutting">
            <CoreButton onClick={addNormalLog}>Chop 1 Normal Log</CoreButton>
        </SkillView>
    );
};

export default WoodcuttingView;