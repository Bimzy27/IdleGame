import React from 'react';
import {Provider} from "react-redux";
import GameView from "./components/GameView";
import {store} from './Store'

export default function App() {
    return (
        <Provider store={store}>
            <GameView/>
        </Provider>
    );
}