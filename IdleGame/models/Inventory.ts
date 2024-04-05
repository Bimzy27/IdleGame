export default class Inventory
{
    items: { name:string, amount:number }[]

    constructor() {
        this.items = [];
        for (let i = 0; i < 30; i++) {
            this.items.push({name: "", amount: 0});
        }

        this.items[0] = {name: "bronzeArrow", amount: 100}
    }
}

export function addItem(inventory:Inventory, itemName: string, amount:number):void
{
    if (itemExists(inventory, itemName)) {
        for (let i = 0; i < inventory.items.length; i++) {
            if (inventory.items[i].name === itemName) {
                inventory.items[i].amount += amount;
                return;
            }
        }
    }

    if (isFull(inventory) == false)
    {
        for (let i = 0; i < inventory.items.length; i++)
        {
            if (inventory.items[i].name === '' || inventory.items[i].name.toLowerCase() === 'none')
            {
                inventory.items[i] = {name: itemName, amount: amount};
                return;
            }
        }
    }
}

function itemExists(inventory:Inventory, itemName: string):boolean
{
    for (let i = 0; i < inventory.items.length; i++)
    {
        if (inventory.items[i].name === itemName)
        {
            return true;
        }
    }
    return false;
}

function isFull(inventory:Inventory):boolean
{
    for (let i = 0; i < inventory.items.length; i++)
    {
        if (inventory.items[i].name === '' || inventory.items[i].name.toLowerCase() === 'none')
        {
            return false;
        }
    }
    return true;
}