import React from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
            <ChoiceCard title="You" winner={false} imgURL={choices.rock} />
        </div>
        <div className="col-6">
            <ChoiceCard title="Computer" winner={true} imgURL={choices.paper} />
        </div>
      </div>
      
      <div className="row mr-5">
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  );
}

export default App;
