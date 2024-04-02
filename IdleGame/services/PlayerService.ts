import {Player} from "../models/Player";

export class PlayerService {
    private playerData: Player;
    private observers: { [key: string]: Function[] } = {};

    constructor() {
        this.constructPlayer();
    }

    constructPlayer(): Player{
        const savedData = localStorage.getItem('playerData');
        if (savedData) {
            try {
                this.playerData = JSON.parse(savedData);
            } catch (error) {
                console.error('Error loading player data:', error);
                // Handle potential errors during parsing
            }
        } else {
            // Initialize default player data if no saved data exists
            this.playerData = {
                name: 'Player Name',
                skills: {
                    Woodcutting: { name: 'Woodcutting', exp: 0 },
                    Range: { name: 'Range', exp: 0 }
                },
            };
        }
        return this.playerData;
    }

    getPlayer(): Player {
        return { ...this.playerData };
    }

    addSkillExp(skillName: string, exp: number): void {
        if (!this.playerData.skills[skillName]) {
            throw new Error(`Skill '${skillName}' not found`);
        }

        this.playerData.skills[skillName].exp += exp;
        this.savePlayerData();

        console.log(`Adding ${exp} to skill ${skillName} to total exp ${this.playerData.skills[skillName].exp}`);

        // Notify observers about the change
        this.notifyObservers(skillName, this.playerData.skills[skillName].exp);
    }

    savePlayerData(): void {
        // Choose your persistence method (e.g., localStorage)
        localStorage.setItem('playerData', JSON.stringify(this.playerData));
    }

    deletePlayerData(): void{
        localStorage.removeItem('playerData');
        this.constructPlayer();
        this.notifyAllObservers();
    }

    subscribe(skillName: string, observer: Function): void {
        if (!this.observers[skillName]) {
            this.observers[skillName] = [];
        }
        this.observers[skillName].push(observer);
    }

    unsubscribe(skillName: string, observer: Function): void {
        if (this.observers[skillName]) {
            const observerIndex = this.observers[skillName].indexOf(observer);
            if (observerIndex > -1) {
                this.observers[skillName].splice(observerIndex, 1);
            }
        }
    }

    private notifyObservers(skillName: string, exp: number): void {
        if (this.observers[skillName]) {
            this.observers[skillName].forEach((observer) => observer(exp));
        }
    }

    private notifyAllObservers(): void {
        // Loop through all skill names in the observers collection
        for (const skillName of Object.keys(this.observers)) {
            if (this.observers[skillName]) {
                // Call each observer function with relevant data (optional in this case)
                this.observers[skillName].forEach((observer) => observer(this.getPlayer().skills[skillName].exp)); // No arguments passed here
            }
        }
    }
}

export const playerService = new PlayerService();