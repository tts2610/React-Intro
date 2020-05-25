import React from 'react';
import './App.css';
import Box from './components/Box';
import List from './components/List';

function App() {
  return (
    <div>
      <Box name="first"/>
      <Box name="second"/>
      <Box name="third"/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>

      <ul>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
        <List/>
      </ul>
    </div>
  );
}

export default App;
