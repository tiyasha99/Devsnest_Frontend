import './App.css';
import React from 'react';
import './Components/Header'
import Header from './Components/Header';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <Header
        title="Calories Consumed"
        />
        <Card
        food="Bread Toast"
        calories= "30"
        />
        <Card
        food="Swiss Roll"
        calories= "100"
        />
        <Card
        food="Naan"
        calories= "50"
        />
        <Card
        food="Samosa"
        calories= "36"
        />
        <Card
        food="Bread Pakoda"
        calories= "30"
        />
        
   
        
       
       
      </header>
    </div>
  );
}

export default App;
