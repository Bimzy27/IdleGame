
import { View } from 'react-native';
import React from 'react';
import GameView from "./components/GameView";
import {CoreView} from "./styles/Styles";
export default function App() {
  return (
      <CoreView>
          <GameView/>
      </CoreView>
  );
}
