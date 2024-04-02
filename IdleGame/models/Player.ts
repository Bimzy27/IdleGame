import {Skill} from "./Skill";

export interface Player
{
    name: string,
    skills: { [skillName: string]: Skill }
}