"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Styles_1 = require("../styles/Styles");
var PlayerService_1 = require("../services/PlayerService");
var ProfileView = function () {
    var player = PlayerService_1.playerService.getPlayer();
    return (<react_native_1.View>
            <react_native_1.Text style={Styles_1.default.text}>Name: {player.name}</react_native_1.Text>
            <react_native_1.Text style={Styles_1.default.text}>Skills: {player.skills[0].name}-{player.skills[0].exp}</react_native_1.Text>
        </react_native_1.View>);
};
exports.default = ProfileView;
