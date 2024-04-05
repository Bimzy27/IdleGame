import {playerService} from "./PlayerService";
import {itemService} from "./ItemService";

export class SaveService {

    constructor() {
        this.Load();
    }

    Load()
    {
        playerService.loadPlayer()
        itemService.loadInventory()
    }

    Save()
    {
        playerService.savePlayer();
        itemService.saveInventory();
    }

    Delete()
    {
        playerService.deletePlayer()
        itemService.deleteInventory()
    }
}

export const saveService = new SaveService();