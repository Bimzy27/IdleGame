import {Text, View} from "react-native";
import {Player} from "../models/Player";
import {playerService} from "../services/PlayerService";
import {Skill} from "../models/Skill";
import React from 'react';

const ProfileView: React.FC = () => {
    const player: Player = playerService.getPlayer();
    return (
        <View>
            <Text>Name: {player.name}</Text>
            <Text>Skills:</Text>
            {Object.entries(player.skills).map(([skillName, skillData]) => (
                <SkillView key={skillName} skill={skillData} /> // Pass skill data to a SkillView component
            ))}
        </View>
    );
};

interface SkillViewProps {
    skill: Skill;
}

const SkillView: React.FC<SkillViewProps> = ({ skill }) => {
    return (
        <Text>
            {skill.name} - Exp: {skill.exp}
        </Text>
    );
};

export default ProfileView;