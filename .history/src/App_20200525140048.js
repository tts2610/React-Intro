import React from 'react';
import './App.css';
import Box from './components/Box';
import List from './components/List';
import ChoiceCard from './components/ChoiceCard';

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
