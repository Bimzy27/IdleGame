import {playerService} from "../../services/PlayerService";
import React, {useEffect, useState} from "react";
import {View} from "react-native";
import {CoreButton, CoreText} from "../../styles/Styles";
import {getCurLevelXp, getLevel, getMaxLevel, getReqLevelXp, Skill} from "../../models/Skill";
import * as Progress from 'react-native-progress';

export const useSkillExp = (skillName) => {
    const [skillExp, setSkillExp] = useState(
        playerService.getPlayer().skills[skillName].exp
    );

    useEffect(() => {
        return playerService.subscribe(skillName, (exp) => {
            setSkillExp(exp);
        });
    }, [skillName]);

    const handleAddExp = (expAmount: number) => {
        playerService.addSkillExp(skillName, expAmount);
    };

    return { skillExp, handleAddExp };
};

export const SkillView = ({ skillName }) => {
    const { handleAddExp } = useSkillExp(skillName);
    let skill = playerService.getPlayer().skills[skillName];

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <SkillInfoView key={skillName} skill={skill} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <CoreButton onClick={() => handleAddExp(1)}>Add 1 Exp</CoreButton>
                <CoreButton onClick={() => handleAddExp(5)}>Add 5 Exp</CoreButton>
                <CoreButton onClick={() => handleAddExp(25)}>Add 25 Exp</CoreButton>
                <CoreButton onClick={() => handleAddExp(100)}>Add 100 Exp</CoreButton>
                <CoreButton onClick={() => handleAddExp(1000)}>Add 1000 Exp</CoreButton>
            </View>
        </View>
    );
};

export interface SkillInfoViewProps {
    skill: Skill;
}

export const SkillInfoView: React.FC<SkillInfoViewProps> = ({ skill }) => {
    const lvlProgress = (getLevel(skill) / getMaxLevel(skill));
    const expProgress = (getCurLevelXp(skill) / getReqLevelXp(skill));
    return (
        <View style={{width: 150}}>
            <CoreText>{skill.name}</CoreText>
            <CoreText>Lvl: {getLevel(skill)}/{getMaxLevel(skill)}</CoreText>
            <Progress.Bar
                style={{ width: '100%', marginTop: 5 }}
                progress={lvlProgress}
                color={'#5d84cb'}
                unfilledColor={'#c7c7c7'}
                borderColor={'#ffffff'}
            />
            <CoreText>Exp: {getCurLevelXp(skill)}/{getReqLevelXp(skill)}</CoreText>
            <Progress.Bar
                style={{ width: '100%', marginTop: 5 }}
                progress={expProgress}
                color={'#5d84cb'}
                unfilledColor={'#c7c7c7'}
                borderColor={'#ffffff'}
            />
            <CoreText>TotExp: {skill.exp}</CoreText>
        </View>
    );
};
