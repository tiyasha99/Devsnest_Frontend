import React from 'react';
import './App.css';
import Chessboard from 'chessboardjsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chessboard
        width={400}
        position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
        />
      </header>
    </div>
  );
}

export default App;
