import {playerService} from "../../services/PlayerService";
import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {CoreButton} from "../../styles/Styles";

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
    const { skillExp, handleAddExp } = useSkillExp(skillName);

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{skillName}</Text>
                <Text>Exp - {skillExp}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <CoreButton title={'Add 1 Exp'} onPress={() => handleAddExp(1)} />
                <CoreButton title={'Add 5 Exp'} onPress={() => handleAddExp(5)} />
                <CoreButton title={'Add 25 Exp'} onPress={() => handleAddExp(25)} />
                <CoreButton title={'Add 100 Exp'} onPress={() => handleAddExp(100)} />
                <CoreButton title={'Add 1000 Exp'} onPress={() => handleAddExp(1000)} />
            </View>
        </View>
    );
};
