"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerService = exports.PlayerService = void 0;
// Simulate data access (replace with actual data fetching logic)
var playerData = {
    name: 'Player Name',
    skills: {
        woodcutting: { name: 'Woodcutting', exp: 99 },
    },
};
var PlayerService = /** @class */ (function () {
    function PlayerService() {
    }
    PlayerService.prototype.getPlayer = function () {
        return playerData; // Return a copy to avoid mutation
    };
    PlayerService.prototype.updateSkillLevel = function (skillName, newExp) {
        // Implement logic to update skill level (consider immutability)
        console.log("Updating skill ".concat(skillName, " to exp ").concat(newExp));
    };
    return PlayerService;
}());
exports.PlayerService = PlayerService;
exports.playerService = new PlayerService();
