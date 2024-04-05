import {Player} from "../models/Player";

export class PlayerService {
    private player: Player;
    private skillChangedObservers: { [key: string]: Function[] } = {};

    loadPlayer(): Player{
        const savedData = localStorage.getItem('playerData');
        if (savedData) {
            try {
                this.player = JSON.parse(savedData);
            } catch (error) {
                console.error('Error loading player data:', error);
                // Handle potential errors during parsing
            }
        } else {
            // Initialize default player data if no saved data exists
            this.player = {
                name: 'Player Name',
                skills: {
                    Ranged: { name: 'Ranged', exp: 0 },
                    Woodcutting: { name: 'Woodcutting', exp: 0 },
                }
            };
        }
        return this.player;
    }

    getPlayer(): Player {
        return { ...this.player };
    }

    addSkillExp(skillName: string, exp: number): void {
        if (!this.player.skills[skillName]) {
            throw new Error(`Skill '${skillName}' not found`);
        }

        this.player.skills[skillName].exp += exp;
        this.savePlayer();

        console.log(`Adding ${exp} to skill ${skillName} to total exp ${this.player.skills[skillName].exp}`);

        // Notify skillChangedObservers about the change
        this.notifyObservers(skillName, this.player.skills[skillName].exp);
    }

    savePlayer(): void {
        // Choose your persistence method (e.g., localStorage)
        localStorage.setItem('playerData', JSON.stringify(this.player));
    }

    deletePlayer(): void{
        localStorage.removeItem('playerData');
        this.loadPlayer();
        this.notifyAllObservers();
    }

    subscribeOnSkillChanged(skillName: string, observer: Function): void {
        if (!this.skillChangedObservers[skillName]) {
            this.skillChangedObservers[skillName] = [];
        }
        this.skillChangedObservers[skillName].push(observer);
    }

    unsubscribeOnSkillChanged(skillName: string, observer: Function): void {
        if (this.skillChangedObservers[skillName]) {
            const observerIndex = this.skillChangedObservers[skillName].indexOf(observer);
            if (observerIndex > -1) {
                this.skillChangedObservers[skillName].splice(observerIndex, 1);
            }
        }
    }

    private notifyObservers(skillName: string, exp: number): void {
        if (this.skillChangedObservers[skillName]) {
            this.skillChangedObservers[skillName].forEach((observer) => observer(exp));
        }
    }

    private notifyAllObservers(): void {
        // Loop through all skill names in the skillChangedObservers collection
        for (const skillName of Object.keys(this.skillChangedObservers)) {
            if (this.skillChangedObservers[skillName]) {
                // Call each observer function with relevant data (optional in this case)
                this.skillChangedObservers[skillName].forEach((observer) => observer(this.getPlayer().skills[skillName].exp)); // No arguments passed here
            }
        }
    }
}

export const playerService = new PlayerService();