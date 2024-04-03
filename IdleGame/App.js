import React from 'react';
import {CoreView} from "./styles/Styles";
import GameView from "./components/GameView";

export default function App() {
  return (
      <CoreView>
          <GameView/>
      </CoreView>
  );
}