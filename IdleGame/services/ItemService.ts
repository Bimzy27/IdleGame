import {Item} from "../models/Item";
import Inventory, { addItem } from "../models/Inventory";

export class ItemService {
    private items: Item[];
    private inventory:Inventory;

    constructor() {
        this.items = buildItems(); // Access buildItems using this
    }

    getInventory():Inventory
    {
        if (this.inventory == null)
        {
            this.loadInventory()
        }
        return this.inventory;
    }

    loadInventory():Inventory
    {
        const savedData = localStorage.getItem('inventoryData');
        if (savedData) {
            try {
                this.inventory = JSON.parse(savedData);
            } catch (error) {
                console.error('Error loading inventory data:', error);
                // Handle potential errors during parsing
            }
        } else {
            // Initialize default player data if no saved data exists
            this.inventory = new Inventory();
        }
        return this.inventory;
    }

    saveInventory()
    {
        localStorage.setItem('inventoryData', JSON.stringify(this.inventory));
    }

    deleteInventory()
    {
        localStorage.removeItem('inventoryData');
    }

    addItem(itemName: string, amount: number)
    {
        addItem(this.inventory, itemName, amount);
        this.saveInventory();
    }

    getItem(itemName: string): Item {
        const foundItem = this.items.find((item) => item.name === itemName);

        if (foundItem) {
            return foundItem;
        }

        throw new Error(`Item with name "${itemName}" not found in items`);
    }
}

function buildItems(): Item[] {
    return [
        { name: 'normalLog', value: 10 },
        { name: 'oakLog', value: 25 },
        { name: 'bronzeArrow', value: 5 },
        { name: 'ironArrow', value: 15 },
    ];
}
export const itemService = new ItemService()