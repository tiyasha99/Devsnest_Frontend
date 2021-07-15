import './App.css';
import React from 'react';
import Card from './Components/Card'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card 
        title="DSA MODE"
        imageUrl="https://www.seekpng.com/png/full/218-2188461_thinking-meme-png-thinking-meme-with-cup.png"
        body='Try for 3 hours-give up-Repeat'
        />
         
      </header>
    </div>
  );
}

export default App;
