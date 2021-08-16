import React from 'react';
import './App.css';
import {main} from './main';

function App() {

  main();

  return (
      <div className="App">
        <canvas id="myCanvas" width="300" height="150" style={{border: '1px solid #d3d3d3'}}>
          Your browser does not support the HTML5 canvas tag.
        </canvas>
      </div>
  );
}

export default App;
