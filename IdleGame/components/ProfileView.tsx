import {View} from "react-native";
import {Player} from "../models/Player";
import {playerService} from "../services/PlayerService";
import React from 'react';
import {CoreText, PaddedView} from "../styles/Styles";
import {SkillInfoView} from "./skills/SkillView";

const ProfileView: React.FC = () => {
    const player: Player = playerService.getPlayer();
    return (
        <View>
            <CoreText>Name: {player.name}</CoreText>
            <CoreText>Skills:</CoreText>
            {Object.entries(player.skills).map(([skillName, skillData]) => (
                <View style={{padding: 6}}>
                    <PaddedView>
                        <SkillInfoView key={skillName} skill={skillData} />
                    </PaddedView>
                </View>
            ))}
        </View>
    );
};

export default ProfileView;