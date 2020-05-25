import React from 'react';
import './App.css';
import Box from './components/Box';
import List from './components/List';
import ChoiceCard from './components/ChoiceCard';

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
  return (
    <div>
      Hello World!
      <ChoiceCard color="red" />
      <ChoiceCard color="white" />
      <ChoiceCard color="blue" />
    </div>
  );
}

export default App;
